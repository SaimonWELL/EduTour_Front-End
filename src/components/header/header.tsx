import './header.css';
import { Link } from 'react-router-dom';
import React, { ReactElement, useState } from 'react';


interface headerProps {
    open: boolean,
    setOpen: Function
};

// Создание верхней панели
export default function Header({open, setOpen}: headerProps): ReactElement {

    const [theme, setTheme] = useState<{ themeNow: string, btnClass: string }>({ themeNow: 'Темная', btnClass: 'btn-dark' });
    function switchTheme(): void {
        if (theme.themeNow === 'Темная') {
            document.querySelectorAll('*').forEach(elem => {
                elem.classList.replace('lightTheme', 'darkTheme');
            });
            setTheme({ themeNow: 'Светлая', btnClass: 'btn-light' });
        }
        else {
            document.querySelectorAll('*').forEach(elem => {
                elem.classList.replace('darkTheme', 'lightTheme');
            });
            document.querySelector('body')!.classList.replace('darkTheme', 'lightTheme');
            setTheme({ themeNow: 'Темная', btnClass: 'btn-dark' });
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-primary text-light" >
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Link className="nav-link active" aria-current="page" to="/events">События</Link>
                    </div>
                    <button id='themeSwitch' className={`btn ${theme.btnClass} btn-sm ms-2`} onClick={switchTheme}>{theme.themeNow}</button>
                    <button type='button' className='btn btn-sm bg-info' onClick={() => setOpen(true)}>Войти</button>
                </div>
            </nav>
        </div>
    );
}
