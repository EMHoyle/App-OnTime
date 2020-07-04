import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import './Modal.module.css'
import axios from 'axios';

const url= "https://jsonplaceholder.typicode.com/todos"

class Ventana extends React.Component{
  state={
    abierto: false,
    form: {
      id: '',
      title: '',
    },
    task: [],
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  peticionGet=()=> {
    axios.get(url).then(response=>{
        this.setState({task: response.data});
    }).catch(error=>{
        console.log(error.message);
      })
}

componentDidMount() {
    this.peticionGet();
}

  peticionPost= async ()=>{
    delete this.state.form.id;
    await axios.post(url, this.state.form).then(response=>{
      this.abrirModal();
      this.peticionGet();
    }).catch(error=>{
      console.log(error.message);
    })
  }

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

  render(){
    const {form} = this.state;
    return(
      <>
      <Button className="btn btn-success" onClick={this.abrirModal}>Agregar Task</Button>

      <Modal isOpen={this.state.abierto} className="modalStyles">
        <ModalHeader>
          Nueva Task
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label htmlFor="id">ID</Label>
            <Input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} 
            value={this.state.data && this.state.data.length+1}/>
            <br />
            <Label htmlFor="title">Task</Label>
            <Input className="form-control" type="text" name="title" id="id" onChange={this.handleChange} value={form.title}/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button className="btn btn-success" onClick={this.peticionPost}>Agregar</Button>
            <Button className="btn btn-danger" onClick={this.abrirModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>
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
                        {this.state.task.map((userID)=>{
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
      </>
    )
  }
}

export default Ventana;