import React, { Component } from 'react';
import axios from 'axios';
import Ventana from '../Modal/Modal';

const url= "https://jsonplaceholder.typicode.com/todos"

export class Task extends Component {
    state = { 
        task: [],
    };

    peticionGet=()=> {
        axios.get(url).then(response=>{
            this.setState({task: response.data});
        })
    }

    componentDidMount() {
        this.peticionGet();
    }
    render() {
        return (
            <div className="App">
                <br />
                <Ventana></Ventana>
                <br /><br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TASK</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.task.map((userID,)=>{
                            return(
                                <tr>
                                    <td>{userID.id}</td>
                                    <td>{userID.title}</td>
                                    <td>
                                        <button className="btn btn-secondary">Editar</button>
                                        {"   "}
                                        <button className="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Task

