// src/hooks/useUserActions.ts
import type { IUser, IUserUpdate } from '../interfaces/user.interface.ts';
import { addUser, deleteUser, editUser } from '../store/usersSlice.ts';
import { useAppDispatch } from './store.ts';

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const remove = (id: string) => {
    dispatch(deleteUser(id));
  };

  const add = (user: IUser) => {
    dispatch(addUser(user));
  };

  const edit = (user: IUserUpdate) => {
    dispatch(editUser(user));
  };

  return { add, remove, edit };
};
