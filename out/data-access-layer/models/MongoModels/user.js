'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const mongoose_1 = __importStar(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserSchema = new mongoose_1.Schema({
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
UserSchema.pre('findOneAndUpdate', function (next) {
    const user = this;
    // @ts-ignore
    if (user.isModified('password'))
        return next();
    // @ts-ignore
    bcrypt_1.default.genSalt(Number(process.env.SALT), function (err, salt) {
        if (err)
            return next(err);
        // @ts-ignore
        bcrypt_1.default.hash(user.password, salt, function (err, hash) {
            if (err)
                return next(err);
            // @ts-ignore
            user.password = hash;
            next();
        });
    });
});
UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password'))
        return next();
    // @ts-ignore
    bcrypt_1.default.genSalt(Number(process.env.SALT), function (err, salt) {
        if (err)
            return next(err);
        // @ts-ignore
        bcrypt_1.default.hash(user.password, salt, function (err, hash) {
            if (err)
                return next(err);
            // @ts-ignore
            user.password = hash;
            next();
        });
    });
});
UserSchema.methods.getAllUsers = async function () {
    return this.model('Users').find({
        removed: false
    }, {
        email: true,
        password: true,
        name: true,
        gender: true,
        picture: true,
    }).exec();
};
UserSchema.methods.deleteById = async function (id) {
    return this.model('Users').findByIdAndUpdate(id, { removed: true }).exec();
};
UserSchema.methods.findUserByLogin = async function (userData) {
    return this.model('Users').findOne({ ...userData, removed: false }).exec();
};
UserSchema.methods.updateUserById = async function (id, body) {
    return this.model('Users').findByIdAndUpdate(id, body, { new: true }).exec();
};
UserSchema.methods.createUser = async function (name, gender, email, picture, password) {
    return this.model('Users').create({
        name,
        gender,
        email,
        picture,
        password,
        removed: false,
    });
};
const UserModel = mongoose_1.default.model('Users', UserSchema);
exports.default = UserModel;
