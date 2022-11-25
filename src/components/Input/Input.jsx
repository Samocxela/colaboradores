import { useState } from "react"
import './input.css'

export default function Input ({colaboradores,setColaboradores,setTablaColaboradores}){

    const [nuevoColaboradorNombre, setNuevoColaboradorNombre] = useState('')
    const [nuevoColaboradorCorreo, setNuevoColaboradorCorreo] = useState('')
    const agregarColaborador=(e)=>{
        e.preventDefault();
        const nuevoColaborador = {id:colaboradores.length+1,nombre:nuevoColaboradorNombre,correo:nuevoColaboradorCorreo}
        setColaboradores([...colaboradores,nuevoColaborador])
        setTablaColaboradores([...colaboradores,nuevoColaborador])
        setNuevoColaboradorNombre('')
        setNuevoColaboradorCorreo('')
    
    }
    return(
        <div className="bg-fixed">
            <form onSubmit={agregarColaborador} className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="colaborador" className="text-sm font-bold">Colaborador :</label>
                    <input 
                        name="Colaborador" id="Colaborador" type='text' placeholder='Ingresar Colaborador' 
                        className="input input-bordered rounded-full w-96 input-sm w-full max-w-xs"
                        onChange={(e) => setNuevoColaboradorNombre(e.target.value)} value={nuevoColaboradorNombre}>
                    </input>
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-bold"> E-mail :</label>
                    
                    <input 
                        name="email" id="email" type='mail' placeholder='Ingresar Correo' 
                        className="input input-bordered  rounded-full w-96 input-sm w-full max-w-xs" 
                        onChange={(e) => setNuevoColaboradorCorreo(e.target.value)} value={nuevoColaboradorCorreo}>
                    </input>
                </div>
                <div>
                    <button type="submit" className='btn btn-dark btn-xs rounded-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' onClick={agregarColaborador} 
                    disabled={ nuevoColaboradorNombre === '' ||  nuevoColaboradorCorreo === '' ? true : false}> Ingresar Colaborador </button>
                </div>
            </form>
        </div>
    )
}