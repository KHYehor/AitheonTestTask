'use strict';

interface IName {
  title: string,
  first: string,
  last: string,
}
interface ILocation {
  street: {
    number: Number,
    name: string
  },
  city: string,
  state: string,
  country: string,
  postcode: Number,
  coordinates: {
    latitude: string,
    longitude: string
  },
  timezone: {
    offset: string,
    description: string
  }
}
interface ILogin {
  uuid: string,
  username: string,
  password: string,
  salt: string,
  md5: string,
  sha1: string,
  sha256: string,
}
interface IDob {
  date: string,
  age: Number,
}
interface IRegistered {
  date: string,
  age: Number,
}
interface IId {
  name: string,
  value: string,
}
interface IPicture {
  large: string,
  medium: string,
  thumbnail: string,
}
interface IUserData {
  gender: string,
  name: IName,
  location: ILocation,
  email: string,
  login: ILogin,
  dob: IDob,
  registered: IRegistered,
  phone: string,
  cell: string,
  id: IId,
  picture: IPicture,
  nat: string,
}
interface IInfo {
  seed: string,
  results: string,
  page: Number,
  version: string,
}

interface IRandomUserJSON {
  results: Array<IUserData>,
  info: IInfo,
}

export default IRandomUserJSON;
