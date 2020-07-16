'use strict';

import type { Request, Response, NextFunction } from 'express';

interface IUserController {
  generateUser(req: Request, res: Response, next: NextFunction): Promise<void>;
  getListOfUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
  removeUserById(req: Request, res: Response, next: NextFunction): Promise<void>;
  userLogin(req: Request, res: Response, next: NextFunction): Promise<void>;
  updateUserById(req: Request, res: Response, next: NextFunction): Promise<void>;
}

export default IUserController;
