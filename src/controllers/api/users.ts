'use strict';

import type { Request, Response, NextFunction } from "express";
import type IUserService from "../../interfaces/services/ApiServices/api/IUserService";
import IUserController from "../../interfaces/controllers/api/IUserController";

class UsersController implements IUserController {
  private UserService: IUserService;
  constructor(UserService: IUserService) {
    this.UserService = UserService;
  }
  static getInstanse = (
    UserService: IUserService
  ) => new UsersController(
    UserService

  );

  public generateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { status } = await this.UserService.generateUser();
      if (status) res.status(200).end();
      else res.status(418).end();
    } catch (err) {
      next(err);
    }
  };

  public getListOfUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { status, data } = await this.UserService.getListOfUsers()
      if (status) res.status(200).json(data);
      else res.status(418).end();
    } catch (err) {
      next(err);
    }
  };

  public removeUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { userId } = req.params;
      const { status, data } = await this.UserService.removeUserById(userId);
      if (status) res.status(200).json(data);
      else res.status(404).end();
    } catch (err) {
      next(err);
    }
  };

  public userLogin = async (req: Request, res: Response, next: NextFunction): Promise<void>  => {
    try {
      const { email, password } = req.body;
      const { status } = await this.UserService.userLogin({ email, password });
      if (status) res.status(200);
      else res.status(404).end();
    } catch (err) {
      next(err);
    }
  };

  public updateUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { userId } = req.params;
      const { name, gender, email, picture, password } = req.body;
      const { status, data } = await this.UserService.updateUser(
        userId,
        { name, gender, email, picture, password }
      );
      if (status) res.status(200).json(data);
      // @ts-ignore
      else if (data?.reason) res.status(401).send(data.reason);
      else res.status(404).end();
    } catch (err) {
      next(err);
    }
  };
}

export default UsersController;
