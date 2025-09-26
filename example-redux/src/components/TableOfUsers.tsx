import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createColumns } from '../utils';

export interface IColumn<T extends object> {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  render?: (row: T) => React.ReactNode;
}

export interface ITable<T extends object> {
  rows: T[];
  columns?: IColumn<T>[];
}

export default function TableOfUsers<T extends object>({
  rows,
  columns,
}: ITable<T>) {
  const resolvedColumns =
    columns ?? (rows.length > 0 ? createColumns(rows[0]) : []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {resolvedColumns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow hover role='checkbox' tabIndex={-1} key={i}>
                {resolvedColumns.map((column) => {
                  const cellContent: React.ReactNode = column.render
                    ? column.render(row)
                    : String((row as Record<string, unknown>)[column.id] ?? '');

                  return (
                    <TableCell key={column.id} align={column.align}>
                      {cellContent}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
