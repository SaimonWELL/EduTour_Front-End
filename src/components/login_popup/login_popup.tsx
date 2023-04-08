import { ReactElement } from "react";
import React from 'react';
import './login_popup.css';

interface loginProps {
    open: boolean,
    setOpen: Function
};

export default function Login({ open, setOpen }: loginProps): ReactElement {

    // Функция входа в аккаунт(сейчас выводит почту и пароль на экран)
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = Object.fromEntries(new FormData(form)) as Record<string, string>;
        alert(`Почта: ${formData.mail}\nПароль: ${formData.pass}`);
    }

    // Форма входа
    return (
        <div className={open ? 'popupBg active' : ''}>
            <div className={open ? 'loginPopup card active' : 'loginPopup card'}>
                <button type="button" className="btn-close cross" aria-label="Close" onClick={() => setOpen(false)}></button>
                <form method='GET' onSubmit={handleSubmit}>
                    <h1>Вход</h1>
                    <label>
                        Почта:<br />
                        <input className='lightTheme form-control loginField' type="email" name='mail' required></input>
                    </label><br />
                    <label>
                        Пароль:<br />
                        <input className='lightTheme form-control loginField' type='password' name='pass' required></input>
                    </label><br />

                    <button type='submit' className='btn btn-primary btn-sm'>Войти</button><br />
                    <span><a href='/registration'>Зарегистрироваться</a></span>
                </form>
            </div>
        </div>
    );
}