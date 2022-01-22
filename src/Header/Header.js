import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='conteinerHeader'>
                <header className='header'>
                    <div className='logo'>
                        <a href='#'>
                            <div><p className='firstLogo'>G</p></div>
                            <p className='secondLogo'>amePls</p>
                        </a>
                    </div>

                    <nav>
                        <ul className='menu'>
                            <li><a href='#'>Categorias</a></li>
                            <li><a href='#'>Novidades</a></li>
                            <li><a href='#'>Jogos-Free</a></li>          
                        </ul>
                    </nav>
                </header>








            </div>
        </>
    )
}

export default Header
