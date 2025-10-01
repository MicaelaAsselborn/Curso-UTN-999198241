import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  IUser,
  IUserUpdate,
  IUserWithId,
} from '../interfaces/user.interface';

const user: IUserWithId = {
  id: crypto.randomUUID(),
  name: 'Pepe',
  lastname: 'Argento',
};

const initialState: IUserWithId[] = [
  user,
  {
    id: crypto.randomUUID(),
    name: 'Pepe2',
    lastname: 'Argento2',
  },
];

export const usersSlice = createSlice({
  name: 'users',
  initialState, // como tiene el mismo nombre, no es necesario poner initialState: initialState
  reducers: {
    // funciones posibles que yo necesito
    addUser: (state, action: PayloadAction<IUser>) => {
      console.log(action.payload);
      state.push({ ...action.payload, id: crypto.randomUUID() });
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      return state.filter((user) => user.id !== action.payload);
    },
    editUser: (state, action: PayloadAction<IUserUpdate>) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload }; // el array en esa POS se vueleve el mismo elemento pero con los nuevos valores
      }
    },
  },
});

export default usersSlice.reducer;
export const { addUser, deleteUser, editUser } = usersSlice.actions;
