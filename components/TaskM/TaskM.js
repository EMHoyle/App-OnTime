import React, { Component } from 'react';
import axios from 'axios';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';

//constante JSON
const url = "https://jsonplaceholder.typicode.com/todos";
const initState = { 
    todo: [],
    modalInsertar: false,
    modalEliminar: false,
    tipoModal: "",
    form: {
        id: "",
        title: "",
      }
};

export class TaskM extends Component {
    
    constructor(props) {
        super(props)

        this.state = initState
    }

//acciones
    modalInsertar = () => this.setState(oldState => ({...initState, todo: oldState.todo, modalInsertar: !oldState.modalInsertar, }))

    handleChange= async e=>{
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    seleccionarTask=(todo)=>{
        this.setState({
            tipoModal: "actualizar",
            form: {
                id: todo.id,
                title: todo.title
            }
        })
    }

//peticiones
    peticionGet=()=> {
        axios.get(url).then(response=>{
            this.setState({todo: response.data});
        }).catch(error=>{
            console.log(error.message);
          })
    }

     peticionPost= async ()=>{
         await axios.post(url, this.state.form).then(response=>{
           this.modalInsertar();
           this.peticionGet();
           console.log(response);
         }).catch(error=>{
           console.log(error.message);
         })
     }

     peticionPut=()=>{
         axios.put(url + this.state.form.id, this.state.form).then(response=>{
             this.modalInsertar();
             this.peticionGet();
             console.log(response);
         })
     }

     peticionDelete=()=>{
        axios.delete(url + this.state.form.id).then(response=>{
            this.setState({modalEliminar: false});
            this.peticionGet();
            console.log(response);
        })
     }
    
    componentDidMount() {
        this.peticionGet();
    }

//Task Manager
    render() {
        const {form} = this.state;
        return (
            <div>
                <div className="App">
                    <br />
                    <Button
                        className="btn btn-success" 
                        onClick={
                            () => {
                                this.setState(oldState => ({
                                    ...oldState,
                                    tipoModal: "insertar"
                                }));
                                this.modalInsertar()
                            }}
                    >
                                Agregar Task
                    </Button>
                    <br /><br />
                    <table className="table">
                        <thead>
                            <tr >
                                <th>ID</th>
                                <th>TASK</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todo.map((userID,)=>{
                                return(
                                    <tr key={userID.id}>
                                        <td>{userID.id}</td>
                                        <td>{userID.title}</td>
                                        <td>
                                            <button className="btn btn-secondary" 
                                            onClick={()=>{this.seleccionarTask(userID); this.modalInsertar()}}>Editar</button>
                                            {"   "}
                                            <button className="btn btn-danger"
                                            onClick={()=>{this.seleccionarTask(userID); this.setState({modalEliminar: true})}}
                                            >Eliminar</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Modal Agregar/Editar */}
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                    Nueva Task
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup>
                        <Label htmlFor="id">ID</Label>
                        <Input 
                        className="form-control" 
                        type="text" 
                        name="id"  
                        id= "id"
                        readOnly 
                        onChange={this.handleChange}
                        value={this.state.todo.length+1}/>
                        <br />
                        <Label htmlFor="title">Task</Label>
                        <Input 
                        className="form-control" 
                        type="text" 
                        name="title" 
                        id="title"
                        onChange={this.handleChange}
                        value={form.title}/> 
                    </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        {this.state.tipoModal == "insertar"?
                        <Button className="btn btn-success" onClick={()=>this.peticionPost()}>Agregar</Button>
                        :
                        <Button className="btn btn-success" onClick={()=>this.peticionPut()}>Actualizar</Button>
                        }
                        <Button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                {/* Modal Eliminar */}
                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        Estás seguro que deseas eliminar esta Task? {form && form.title}
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-success" onClick={()=>this.peticionDelete()}>Si</button>
                        <button className="btn btn-danger" onClick={()=>this.setState({modalEliminar: false})}>NO</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default TaskM;