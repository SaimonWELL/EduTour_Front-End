import { Dispatch, ReactElement, SetStateAction } from "react";
import React from 'react';
import './login_popup.css';

interface loginProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export function Login({ open, setOpen }: loginProps): ReactElement {

    // Функция входа в аккаунт(сейчас выводит почту и пароль на экран)
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = Object.fromEntries(new FormData(form)) as Record<string, string>;
        alert(`Почта: ${formData.mail}\nПароль: ${formData.pass}`);
    }

    // Форма входа
    return (
        <div onClick={() => setOpen(false)} className={open ? 'popupBg active' : 'popupBg'}>
            <div onClick={(e) => e.stopPropagation()} className={open ? 'loginPopup w-96 flex justify-center shadow-md rounded-2xl dark:text-white dark:bg-gray-600 bg-white pb-4 active' : ''}>
                <button type="button" className="btn-close cross" aria-label="Close"></button>
                <form method='GET' onSubmit={handleSubmit}>
                    <h1 className="block font-medium mb-4 text-center text-2xl leading-6">Вход</h1>
                    <label htmlFor="email" className="block font-medium leading-6 dark:text-white text-gray-900">
                        Почта
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm w-52 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block flex-1 border-0 bg-transparent dark:text-white py-1.5 pl-1 text-gray-900 focus:outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="ivanov@email"
                            />
                        </div>
                    </div>
                    <label htmlFor="password" className="block font-medium leading-6 dark:text-white text-gray-900">
                        Пароль
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
                            <input
                                required
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="password"
                                className="block flex-1 dark:text-white border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="password"
                            />
                        </div>
                    </div>
                    <button type='submit' className='mr-5 mt-2 bg-blue-700 rounded-2xl text-white p-1.5'>Войти</button> <span className="text-gray-400">Забыли пароль?</span>
                    <div><a className="text-blue-600 dark:text-blue-200" href='/registration'>Зарегистрироваться</a></div>
                </form>
            </div>
        </div>
    );
}