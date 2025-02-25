import { useState } from 'react';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        matricula: '',
        nombre: '',
        apellidos: '',
        edad: '',
        universidad: '',
        carrera: ''
    });
    
    const [submitted, setSubmitted] = useState(false);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <h1>Formulario de Estudiante</h1>
            <hr />
            <form onSubmit={onSubmit}>
                <input type="text" className="form-control" placeholder="Matrícula" name="matricula" value={formState.matricula} onChange={onInputChange} autoComplete="off" />
                <input type="text" className="form-control mt-2" placeholder="Nombre" name="nombre" value={formState.nombre} onChange={onInputChange} autoComplete="off" />
                <input type="text" className="form-control mt-2" placeholder="Apellidos" name="apellidos" value={formState.apellidos} onChange={onInputChange} autoComplete="off" />
                <input type="number" className="form-control mt-2" placeholder="Edad" name="edad" value={formState.edad} onChange={onInputChange} autoComplete="off" />
                <input type="text" className="form-control mt-2" placeholder="Universidad" name="universidad" value={formState.universidad} onChange={onInputChange} autoComplete="off" />
                <input type="text" className="form-control mt-2" placeholder="Carrera" name="carrera" value={formState.carrera} onChange={onInputChange} autoComplete="off" />
                <button type="submit" className="btn btn-primary mt-2">Enviar</button>
            </form>
            {submitted && (
                <div className="mt-3">
                    <h3>Información Ingresada:</h3>
                    <p><strong>Matrícula:</strong> {formState.matricula}</p>
                    <p><strong>Nombre:</strong> {formState.nombre}</p>
                    <p><strong>Apellidos:</strong> {formState.apellidos}</p>
                    <p><strong>Edad:</strong> {formState.edad}</p>
                    <p><strong>Universidad:</strong> {formState.universidad}</p>
                    <p><strong>Carrera:</strong> {formState.carrera}</p>
                </div>
            )}
        </>
    );
};
