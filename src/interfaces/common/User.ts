'use strict';

interface IUserLogin {
  email: string,
  password: string,
}

interface IUserData {
  email?: string,
  password?: string,
  name?: string,
  gender?: string,
  picture?: string
}

export {
  IUserLogin,
  IUserData
};
