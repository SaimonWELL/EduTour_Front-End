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
            <div onClick={(e) => e.stopPropagation()} className={open ? 'loginPopup w-96 flex justify-center rounded-2xl dark:text-white dark: pb-4 active' : ''}>
                <button type="button" className="btn-close cross" aria-label="Close"></button>

                <section className="">
                    <div className="flex flex-cobg-gray-50 dark:bg-gray-900l items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div
                            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Вход
                                </h1>
                                <form className="space-y-4 md:space-y-6"  method='GET' onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваша почта</label>
                                        <input type="email" name="email" id="email"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="name@company.com" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="password"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               required/>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms"
                                                   className="font-light text-gray-500 dark:text-gray-300"><a
                                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                    href="#">Забыли пароль?</a></label>
                                        </div>
                                    </div>
                                    <button type="submit"
                                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        Вход
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Не зарегестрированы? <a href='/registration'
                                                                    className="font-medium text-blue-600 hover:underline dark:text-primary-500">Регистрация</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>





                {/*<form method='GET' onSubmit={handleSubmit}>*/}
                {/*    <h1 className="block font-medium mb-4 text-center text-2xl leading-6">Вход</h1>*/}
                {/*    <label htmlFor="email" className="block font-medium leading-6 dark:text-white text-gray-900">*/}
                {/*        Почта*/}
                {/*    </label>*/}
                {/*    <div className="mt-2">*/}
                {/*        <div className="flex rounded-md shadow-sm w-52 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">*/}
                {/*            <input*/}
                {/*                required*/}
                {/*                type="email"*/}
                {/*                name="email"*/}
                {/*                id="email"*/}
                {/*                autoComplete="email"*/}
                {/*                className="block flex-1 border-0 bg-transparent dark:text-white py-1.5 pl-1 text-gray-900 focus:outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"*/}
                {/*                placeholder="ivanov@email"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <label htmlFor="password" className="block font-medium leading-6 dark:text-white text-gray-900">*/}
                {/*        Пароль*/}
                {/*    </label>*/}
                {/*    <div className="mt-2">*/}
                {/*        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">*/}
                {/*            <input*/}
                {/*                required*/}
                {/*                type="password"*/}
                {/*                name="password"*/}
                {/*                id="password"*/}
                {/*                autoComplete="password"*/}
                {/*                className="block flex-1 dark:text-white border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"*/}
                {/*                placeholder="password"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <button type='submit' className='mr-5 mt-2 bg-blue-700 rounded-2xl text-white p-1.5'>Войти</button> <span className="text-gray-400">Забыли пароль?</span>*/}
                {/*    <div><a className="text-blue-600 dark:text-blue-200" href='/registration'>Зарегистрироваться</a></div>*/}
                {/*</form>*/}
            </div>
        </div>
    );
}