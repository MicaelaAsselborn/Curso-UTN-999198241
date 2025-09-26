import type { IColumn } from './components/TableOfUsers';

export const createColumns = <T extends object>(data: T): IColumn<T>[] => {
  try {
    if (!data || typeof data !== 'object') {
      throw new Error('Datos inválidos para generar columnas');
    }

    return Object.keys(data).map((key) => ({
      id: String(key),
      label: key.toUpperCase(),
      minWidth: 100,
      align: 'left',
    }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Error desconocido al crear columnas');
  }
};
