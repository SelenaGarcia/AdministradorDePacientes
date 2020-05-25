import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({ crearCita }) => {

    //state inicial
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        Fecha: '',
        hora: '',
        sintomas: '',

    });

    const [error, actualizarError] = useState(false)


    // extracción de los input
    const handleChange = event => {
        actualizarCita({
            ...cita,
            [event.target.name]: event.target.value
        })
    }

    //simplificación del state
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //boton submit
    const submitCite = event => {
        event.preventDefault();
        // Validar
        if (mascota.trim() === ''
            || propietario.trim() === ''
            || fecha.trim() === ''
            || hora.trim() === ''
            || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje previo 
        actualizarError(false);

        //asignar id
        cita.id = uuidv4();

        //crear cita
        crearCita(cita);

        //reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    }
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form
                onSubmit={submitCite}
            >
                <label>Nombre de la Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño"
                    onChange={handleChange}
                    value={propietario}

                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}

                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}

                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}

                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
            {error ?
                <p className="alerta-error"> Todos los campos son obligatorios</p>
                : null}

        </Fragment>
    );
}

Formulario.protoTypes ={
    crearCita: PropTypes.func.isRequired
}

export default Formulario;