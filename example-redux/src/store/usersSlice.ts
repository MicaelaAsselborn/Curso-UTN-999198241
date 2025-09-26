import { createSlice } from '@reduxjs/toolkit';
import type { IUserWithId } from '../interfaces/user.interface';

const user: IUserWithId = {
  id: crypto.randomUUID(),
  name: 'Pepe',
  lastname: 'Argento',
};

const initialState: IUserWithId[] = [user];

export const usersSlice = createSlice({
  name: 'users',
  initialState, // como tiene el mismo nombre, no es necesario poner initialState: initialState
  reducers: {},
});

export default usersSlice.reducer;
