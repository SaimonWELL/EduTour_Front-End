import { useState } from 'react';
import './App.css';
import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom/client';

// Место создания всплывающего окна
const popup = ReactDOM.createRoot(document.getElementById('loginPopup')!);

let nowTheme = 'lightTheme';

// Создание верхней панели
export default function Header(): ReactElement {
    const [theme, setTheme] = useState<{themeNow: string, btnClass: string}>({themeNow:'Темная', btnClass: 'btn-dark'});
    function switchTheme(): void {
        if (theme.themeNow ==='Темная') {
            document.querySelectorAll('*').forEach(elem=>{
                elem.classList.replace('lightTheme','darkTheme');
            });
            setTheme({themeNow: 'Светлая', btnClass:'btn-light'});
            nowTheme='darkTheme';
        }
        else{
            document.querySelectorAll('*').forEach(elem=>{
                elem.classList.replace('darkTheme', 'lightTheme');
            });
            document.querySelector('body')!.classList.replace('darkTheme', 'lightTheme');
            setTheme({themeNow: 'Темная', btnClass: 'btn-dark'});
            nowTheme='lightTheme';
        }
    }
    function handleLoginClick(): void {
        popup.render(<Login />);
    }

    return(
        <nav className="navbar navbar-expand-lg  bg-primary text-light" >
        <div className="container-fluid">
            <a className="navbar-brand text-light" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <a className="nav-link active" aria-current="page" href="/events">События</a>
            </div>
            <button id='themeSwitch' className={`btn ${theme.btnClass} btn-sm ms-2`} onClick={switchTheme}>{theme.themeNow}</button>
            <button id="loginButton" className='btn btn-info btn-sm ms-2' onClick={handleLoginClick}>Войти</button>  
        </div>
        </nav>
    );
}

// Создание всплывающего окна входа
function Login(): ReactElement {

    // Закрытие всплывающего окна
    function handleClose(): void {
        popup.render(null);
    }

    // Функция входа в аккаунт(сейчас выводит почту и пароль на экран)
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = Object.fromEntries(new FormData(form)) as Record<string, string>;
        alert(`Почта: ${formData.mail}\nПароль: ${formData.pass}`);
    }

    // Форма входа
    return(
        <div id='popupBg'>
            <div className={`loginPopup card ${nowTheme}`}>
                <button type="button" className="btn-close cross" aria-label="Close" onClick={handleClose}></button>
                <form method='GET' onSubmit={handleSubmit}>
                    <h1>Вход</h1>
                    <label>
                        Почта:<br/>
                        <input className='lightTheme form-control loginField' type="email" name='mail' required></input>
                    </label><br/>
                    <label>
                        Пароль:<br/>
                        <input className='lightTheme form-control loginField' type='password' name='pass' required></input>
                    </label><br/>
                    <button type='submit' className='btn btn-primary btn-sm'>Войти</button><br/>
                    <span><a href='/registration'>Зарегистрироваться</a></span>
                </form>
            </div>
        </div>
    );
}