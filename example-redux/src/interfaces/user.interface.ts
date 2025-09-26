export interface IUser {
  name: string;
  lastname: string;
}

export interface IUserWithId extends IUser {
  id: string;
}

export interface IUserUpdate extends Partial<IUser> {
  id: string;
}
