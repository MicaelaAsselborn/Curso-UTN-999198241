import './App.css';

import { useSelector } from 'react-redux';
import type { IUserWithId } from './interfaces/user.interface';
import type { RootState } from './store/index.ts';

function App() {
  const users = useSelector((state: RootState) => state.users);

  return (
    <>
      <h1>CRUD de Usuarios</h1>
      <ul>
        <li>C: Create</li>
        <li>R: Read</li>
        <li>U: Update</li>
        <li>D: Delete</li>
      </ul>

      {users.map((user: IUserWithId) => (
        <div key={user.id}>
          {user.name} {user.lastname}
        </div>
      ))}
    </>
  );
}

export default App;
