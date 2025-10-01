import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import type { IUserWithId } from '../interfaces/user.interface';
import { useState, type FormEvent } from 'react';

interface UserFormProps {
  initialValues?: Partial<IUserWithId>;
  onSubmit: (user: Partial<IUserWithId>) => void;
}

export function UserForm({ initialValues, onSubmit }: UserFormProps) {
  const [formData, setFormData] = useState<Partial<IUserWithId>>(
    initialValues || { name: '', lastname: '' }
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log('e.target', e.target);
    console.log('name', name);
    console.log('value', value);

    setFormData((prev) => ({ ...prev, [name]: value })); // { ..prev, name | lastname : value}
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name?.trim() || !formData.lastname?.trim()) return;
    onSubmit(formData);
  };

  return (
    <Box component='form' onSubmit={handleSubmit}>
      <Typography variant='h6' mb={2}>
        {initialValues ? 'Editar Usuario' : 'Crear Usuario'}
      </Typography>

      <Stack spacing={2}>
        <TextField
          label='Nombre'
          name='name'
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label='Apellido'
          name='lastname'
          value={formData.lastname}
          onChange={handleChange}
          fullWidth
          required
        />

        <Button type='submit' variant='contained' color='primary'>
          {initialValues ? 'Guardar Cambios' : 'Crear Usuario'}
        </Button>
      </Stack>
    </Box>
  );
}

export default UserForm;
