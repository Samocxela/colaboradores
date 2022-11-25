import Input from './components/Input/Input';
import './App.css';
import { useState } from 'react';
import Lista from './components/Lista/Lista';
import { Basedatos } from './components/Bd/Basedatos';

function App() {
    const [colaboradores,setColaboradores]=useState(Basedatos)
    const [tablaColaboradores,setTablacolaboradores]=useState(Basedatos)
    const [busqueda,setBusqueda]=useState('')
    const handleFiltrar = e =>{
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }
    const filtrar =(termBusqueda)=>{
        let resultadoBusqueda = tablaColaboradores.filter((elemento)=>{
            if(elemento.nombre.toString().toLowerCase().includes(termBusqueda.toLowerCase())){
                return elemento;
            }
        });
        setColaboradores(resultadoBusqueda)
    }
    return (
        <div className="App">
            <div className=" rounded-full navbar bg-base-100">
                <div className="flex-1">
                    <a className="rounded-full btn btn-ghost normal-case text-xl btn-dark">Busqueda Colaboradores</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        
                        <input name="search" value={busqueda} type="text" placeholder="Buscar colaborador por nombre" className="w-96 rounded-full input input-bordered" onChange={handleFiltrar} />
                     
                    </div>
                </div>
            </div>
            <div >
                    <Input colaboradores={colaboradores} setColaboradores={setColaboradores} setTablaColaboradores={setTablacolaboradores}/>
                    <Lista colaboradores={colaboradores}/>
            </div>        
      </div>
        
    )      
     
}
export default App;
