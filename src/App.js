import React, { Fragment } from 'react';
import Formulario from './components/Formulario';

function App() {

  
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
                //crearCita={crearCita}
              />
          </div>
          {/* <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}

export default App;


