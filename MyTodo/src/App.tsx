import { useState, useEffect } from 'react';

import type { Tarea } from './types';

function App() {
  // useState con tipos explícitos para claridad didáctica
  const [tareas, setTareas] = useState<Tarea[]>([]); // lista de tareas, de tipo Tarea[] inicialmente vacío []
  const [nuevaTarea, setNuevaTarea] = useState<string>(''); // el valor del input, de tipo string inicialmente vacío ''

  useEffect(() => {
    const raw = localStorage.getItem('tareas'); // string | null

    if (raw) {
      try {
        const parsed: Tarea[] = JSON.parse(raw); // Validar que es un array de tareas

        setTareas(parsed);
      } catch (error) {
        console.error('Error al parsear tareas de localStorage', error);
      }
    }
  }, []); // Cuando se monte el componente

  useEffect(() => {
    console.log('tareas cambió', tareas);

    const toJson = JSON.stringify(tareas);
    console.log(toJson);

    // Guardar en localStorage
    localStorage.setItem('tareas', toJson);
  }, [tareas]); // Cuando cambie tareas

  // Handler controlado: mantiene sincronizado el input con el estado
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange', e.target.value);
    setNuevaTarea(e.target.value);
  };

  // Accesibilidad: permitir Enter para agregar
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('handleKeyDown', e.key);
    if (e.key === 'Enter') agregarTarea();
  };

  // Crear una tarea nueva y actualizar el estado
  const agregarTarea = () => {
    const titulo = nuevaTarea.trim();
    if (!titulo) return; // validación simple

    const nueva: Tarea = {
      id: crypto.randomUUID(),
      titulo, // equivalente a titulo: titulo
      completada: false,
      creadaEn: new Date().toISOString(),
    };

    // Nunca mutamos el estado; creamos un nuevo array
    setTareas((prev) => {
      // setTareas((prev) => [nueva, ...prev]); // Forma corta con spread operator
      const aux: Tarea[] = [];

      aux.push(nueva);
      prev.forEach((t) => {
        aux.push(t);
      });
      return aux;
    });

    setNuevaTarea(''); // limpiamos el input
  };

  // Alternar completada
  const toggleCompletada = (id: string) => {
    // prev.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    setTareas((prev) => {
      let aux: Tarea[] = [];
      aux = prev.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
      });
      return aux;
    });
  };

  // Eliminar
  const eliminarTarea = (id: string) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEmpty = () => {
    if (tareas.length === 0) {
      return (
        <li className='list-group-item text-muted'>
          No hay tareas. ¡Agrega la primera!
        </li>
      );
    }
  };

  return (
    <div className='container py-4 list-tareas'>
      <h1 className='mb-4'>📝 Lista de Tareas</h1>

      {/* Formulario */}
      <div className='card mb-4'>
        <div className='card-body'>
          <div className='row g-2 align-items-end'>
            <div className='col-12 col-md-8'>
              <label htmlFor='nuevaTarea' className='form-label'>
                Nueva tarea
              </label>
              <input
                id='nuevaTarea'
                className='form-control'
                type='text'
                placeholder='Ej: Estudiar useEffect'
                value={nuevaTarea}
                onChange={handleChange} // esto seria el adddEventListener('input', ...)
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className='col-12 col-md-4 d-grid d-md-block'>
              <button
                className='btn btn-primary mt-3 mt-md-0'
                onClick={agregarTarea}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lista */}
      <ul className='list-group'>
        {handleEmpty()}

        {tareas.map((t) => (
          <li
            key={t.id}
            id={`task-${t.id}`}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            <div className='form-check d-flex align-items-center'>
              <input
                id={`t-${t.id}`}
                className='form-check-input'
                type='checkbox'
                checked={t.completada}
                onChange={() => toggleCompletada(t.id)}
                aria-labelledby={`lbl-${t.id}`}
              />
              <label
                id={`lbl-${t.id}`}
                htmlFor={`t-${t.id}`}
                className={
                  'form-check-label ms-2 ' +
                  (t.completada
                    ? 'text-decoration-line-through text-muted'
                    : '')
                }
              >
                {t.titulo}
                <small className='d-block text-muted'>
                  {new Date(t.creadaEn).toLocaleString()}
                </small>
              </label>
            </div>

            <button
              className='btn btn-outline-danger btn-sm'
              onClick={() => eliminarTarea(t.id)}
              aria-label={`Eliminar ${t.titulo}`}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
