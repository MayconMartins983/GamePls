import React, { useState } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

const Header = () => {
    const header = document.querySelector('.header')
    
    const [ativado, setAtivado] = useState(false)

    return (
        <>
            <div className='conteinerHeader'>
                <header className={`header ${ativado ? "active" : ""}`} >
                    <div className='logo'>
                        <Link to = '/'>
                            <div><p className='firstLogo'>G</p></div>
                            <p className='secondLogo'>amePls</p>
                        </Link>
                    </div>

                    <nav>
                        <ul className='menu'>
                            <li><a href='#'>Categorias</a></li>
                            <li><a href='#'>Novidades</a></li>
                            <li><a href='#'>Jogos-Free</a></li>          
                        </ul>
                    </nav>

                    <div className='buttonNav' onClick={()=> setAtivado(!ativado)} >
                        <div className='line'> </div>
                        <div className='line'> </div>
                        <div className='line'> </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header
 