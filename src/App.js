import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales= [];
  }

  //Array de Citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //useEffect para cuando cambia el state
  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }
    else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales]);


  //función q toma las citas y agrega nuevas
  const crearCita = cita => {
    guardarCitas([...citas, cita]);
  }

  //Eliminar cita
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //mensaje Condicional
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra citas'

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">

            <h2> {titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;


