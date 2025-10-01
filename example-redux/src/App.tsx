import { Button, Dialog, DialogContent, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import type { IUser, IUserWithId } from './interfaces/user.interface';
import TableOfUsers, { type IColumn } from './components/TableOfUsers';
import { useAppSelector } from './hooks/store.ts';
import UserForm from './components/UserForm.tsx';
import { useState } from 'react';
import { createColumns } from './utils.ts';
import { useUserActions } from './hooks/useUserActions.ts';

function App() {
  const users = useAppSelector((state) => state.users);
  const { remove, edit, add } = useUserActions();

  // 📌 Estado para controlar el formulario
  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<IUserWithId | null>(null);

  // 🛠️ Editar: abre formulario con datos del usuario
  const handleEdit = (user: IUserWithId) => {
    setEditingUser(user);
    setOpen(true); // Hola modal
  };

  // 🛠️ Crear: abre formulario vacío
  const handleCreate = () => {
    setEditingUser(null);
    setOpen(true); // Hola modal
  };

  // 🧪 Al enviar formulario
  const handleSubmit = (user: Partial<IUserWithId>) => {
    // const aux = null;
    // if (aux) {
    //   //....
    // } else {
    //   console.log('entra aqui');
    // }

    if (editingUser) {
      edit({ ...editingUser, ...user }); // editar existente
    } else {
      add(user as IUser); // crear nuevo
    }
    setOpen(false); // chau modal
  };

  const baseColumns = createColumns(users[0]);

  const actionsColumn: IColumn<IUserWithId> = {
    id: 'actions',
    label: 'Acciones',
    align: 'center',
    render: (row: IUserWithId) => (
      <>
        <Button onClick={() => handleEdit(row)}>
          <EditDocumentIcon />
        </Button>
        <Button color='error' onClick={() => remove(row.id)}>
          <DeleteIcon />
        </Button>
      </>
    ),
  };

  const userColumns: IColumn<IUserWithId>[] = [...baseColumns, actionsColumn];

  return (
    <>
      <Stack direction='row' justifyContent='flex-end' mb={2} px={2}>
        <Button variant='contained' onClick={handleCreate}>
          + Crear Usuario
        </Button>
      </Stack>

      <TableOfUsers<IUserWithId> rows={users} columns={userColumns} />

      {/* 📦 Formulario en un Dialog/Modal/Popup */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth='sm'
      >
        <DialogContent>
          <UserForm
            initialValues={editingUser || undefined}
            onSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
