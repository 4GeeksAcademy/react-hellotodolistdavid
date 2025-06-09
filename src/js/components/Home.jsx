import React, { useState } from 'react';

function Home() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const manejarCambio = (e) => {
    setNuevaTarea(e.target.value);
  };

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return;
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea('');
  };

  const eliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  };

  return (
    <div className="container mt-3">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="text-center mb-4">📝 Lista de Tareas</h2>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe una tarea..."
              value={nuevaTarea}
              onChange={manejarCambio}
            />
            <button className="btn btn-primary" onClick={agregarTarea}>
              Agregar
            </button>
          </div>

          {tareas.length === 0 ? (
            <p className="text-muted text-center">No hay tareas todavía.</p>
          ) : (
            <ul className="list-group">
              {tareas.map((tarea, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {tarea}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => eliminarTarea(index)}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;