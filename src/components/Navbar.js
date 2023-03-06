import React from 'react'
import logo from '../assets/logoNomade.png'
import CartWidget from './CartWidget'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-black text-amber-100'>
        <div className='text-xl border-amber-100 border-2 rounded-full m-2'>
            <img src={logo} alt="Logo Nomade" className='w-32 rounded-full'></img>
        </div>
        <div className='text-xl p-4 '>
            <ul className='flex gap-8'>
                <li className='border-b-2 border-transparent hover:border-amber-300 hover:text-amber-300'>Inicio</li>
                <li className='border-b-2 border-transparent hover:border-amber-300 hover:text-amber-300'>Menu
                    <ul className='hidden'>
                        <li>Menu de la semana</li>
                        <li>Entradas / conservas</li>
                        <li>Empanadas</li>
                        <li>Carnes</li>
                        <li>Guarniciones</li>
                    </ul>
                </li>
                <li className='border-b-2 border-transparent hover:border-amber-300 hover:text-amber-300'>Ofertas</li>
                <li className='border-b-2 border-transparent hover:border-amber-300 hover:text-amber-300'>Novedades</li>
                <li className='border-b-2 border-transparent hover:border-amber-300 hover:text-amber-300'>Contacto</li>
            </ul>
        </div>
        <div className='text-6xl p-4'><CartWidget /></div>
    </div>
  )
}

export default Navbar