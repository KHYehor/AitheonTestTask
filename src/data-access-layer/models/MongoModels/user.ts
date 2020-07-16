'use strict';

import type IUserModel from "../../../interfaces/models/MongoModels/user";
// @ts-ignore
import mongoose, {Schema, Types} from 'mongoose';
import {IUserLogin} from "../../../interfaces/common";
import bcrypt from 'bcrypt';

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // Because you never know, never know...
  gender: {
    type: String,
    enum: [
      'Agender',
      'Androgynous',
      'Androgyne',
      'Bigender',
      'Cis',
      'Cisgender',
      'female',
      'male',
      'Cis Man',
      'Cis Woman',
      'Cisgender Female',
      'Cisgender Male',
      'Cisgender Man',
      'Cisgender Woman',
      'Female to Male',
      'FTM',
      'Gender Fluid',
      'Gender Nonconforming',
      'Gender Questioning',
      'Gender Variant',
      'Genderqueer',
      'Intersex',
      'Male to Female',
      'MTF',
      'Neither',
      'Neutrois',
      'Non-binary',
      'Other',
      'Pangender',
      'Trans',
      'Trans*',
      'Trans Female',
      'Trans* Female',
      'Trans Male',
      'Trans* Male',
      'Trans Man',
      'Trans* Man',
      'Trans Person',
      'Trans* Person',
      'Trans Woman',
      'Trans* Woman',
      'Transfeminine',
      'Transgender',
      'Transgender Female',
      'Transgender Male',
      'Transgender Man',
      'Transgender Person',
      'Transgender Woman',
      'Transmasculine',
      'Transsexual',
      'Transsexual Female',
      'Transsexual Male',
      'Transsexual Man',
      'Transsexual Person',
      'Transsexual Woman',
      'Two-Spirit'
    ],
  },
  picture: { type: String, required: true },
  password: { type: String, required: true },
  removed: { type: Boolean, required: true },
});

UserSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  // @ts-ignore
  bcrypt.genSalt(Number(process.env.SALT), function(err, salt) {
    if (err) return next(err);
    // @ts-ignore
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      // @ts-ignore
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.getAllUsers = async function() {
  return this.model('Users').find(
    {
    removed: false
    },
    {
      email: true,
      password: true,
      name: true,
      gender: true,
      picture: true,
    }).exec();
};

UserSchema.methods.deleteById = async function(id: string) {
  return this.model('Users').findByIdAndUpdate(id, { removed: true }).exec();
};

UserSchema.methods.findUserByLogin = async function(userData: IUserLogin) {
  return this.model('Users').findOne({ ...userData, removed: false }).exec();
};

UserSchema.methods.updateUserById = async function(id: string, body: object) {
  return this.model('Users').findById(id, body, { new: true }).exec();
};

UserSchema.methods.createUser = async function(name: string, gender: string, email: string, picture: string, password: string) {
  return this.model('Users').create({
    name,
    gender,
    email,
    picture,
    password,
    removed: false,
  });
};

const UserModel = mongoose.model<IUserModel>('Users', UserSchema);

export default UserModel;
