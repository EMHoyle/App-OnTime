import React from 'react';
import Layout from '../components/Head/Layout';
import TaskM from '../components/TaskM/TaskM';
//import StudentPortal from '../components/crud/main/index';


const Manager = () => {
    return (
        <Layout>
            <TaskM></TaskM>
            {/* <StudentPortal></StudentPortal> */}
        </Layout>
    )
}

export default Manager