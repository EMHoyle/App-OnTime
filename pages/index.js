import React from 'react';
import Layout from '../components/Head/Layout';
import {Form} from 'reactstrap';

const Home = () => {
    return (
        <Layout>
            <Form className="container">
                <h1>OnTime</h1>
                <p>
                OnTime es una app creada pensando en ti. Cómo persona activa y emprendedora te ofrecemos la posibilidad de acceder a una herramienta que te permitirá mejorar tu rendimiento.
                </p>
                
                <p>
                Podrás contar con la posibilidad de Crear, Editar, Eliminar y Actualizar tus Task diarios; de esa manera lograrás manejar de una manera más óptima tu tiempo.
                </p>

                <p>
                Disfruta de las ventajas de tener siempre a la mano tus Task pendientes y empieza a usar nuestra app desde ya!
                </p>
            </Form>
        </Layout>
    )
}

export default Home
