import './header.css';
import { Link } from 'react-router-dom';
import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';


interface headerProps {
    setOpen: Dispatch<SetStateAction<boolean>>
}

// Создание верхней панели
export function Header({ setOpen }: headerProps): ReactElement {

    const [theme, setTheme] = useState<{ themeNow: string }>({ themeNow: 'Темная' });
    const [menu, setMenu] = useState<{ openNow: boolean }>({ openNow: false });
    function switchTheme(): void {
        if (theme.themeNow === 'Темная') {
            document.documentElement.classList.add('dark');
            setTheme({ themeNow: 'Светлая' });
        }
        else {
            document.documentElement.classList.remove('dark');
            setTheme({ themeNow: 'Темная' });
        }
    }

    function openMenu(): void {
        setMenu({ openNow: !menu.openNow });
    }

    return (
        <header className='w-full h-24'>
            <nav className='flex flex-row justify-between  px-28 py-6 items-center '>
                <div className='LOGO '>
                    <Link className="" to="/"><img src="/img/Logo.png" alt="Logo"/></Link>
                </div>
                <div className='MENU flex flex-row gap-[48px]'>
                    <Link className="nav-link active font-manrope font-bold" aria-current="page" to="/">Главная</Link>
                    <Link className="nav-link active font-manrope font-bold" aria-current="page" to="/events">События</Link>
                    <Link className="nav-link active font-manrope font-bold" aria-current="page" to="/">О проекте</Link>
                </div>
                <div className='LOGIN'>
                    <button type='button' className='text-white bg-[#4683F7] py-2.5 px-5 rounded-lg font-manrope font-semibold ' onClick={() => setOpen(true)}>Войти</button>
                </div>
            </nav>

        </header>
    )

    // return (
    //     <header className='sm:mb-10'>
    //         <div className='w-full sm:w-0 absolute'>
    //             <img src="/menu-icon.svg" alt="menu" onClick={openMenu} className='w-12 dark:invert relative mx-auto mt-3' />
    //         </div>
    //         <nav className="sm:w-full w-0 sm:visible invisible mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global" >
    //             <Link className="navbar-brand text-light" to="/">Home</Link>
    //             <Link className="nav-link active" aria-current="page" to="/events">События</Link>
    //             <div>
    //                 <button id='themeSwitch' className={`bg-gray-700 text-white dark:bg-white dark:text-black -m-1.5 p-1.5 w-20 rounded mx-5`} onClick={switchTheme}>{theme.themeNow}</button>
    //                 <button type='button' className='-m-1.5 p-1.5 rounded mx-5 ' onClick={() => setOpen(true)}>Войти</button>
    //             </div>
    //         </nav>
    //         <div onClick={openMenu} className={menu.openNow ? "bg-blue-700 absolute w-full top-0 p-5 min-h-[150px]" : "w-0 h-0 invisible pointer-events-none"}>
    //             <button type="button" className="text-white text-7xl min-w-full text-center leading-3 font-mono"> x </button>
    //             <Link className="mb-2 block text-white" to="/">Home</Link>
    //             <Link className="mb-2 block text-white" aria-current="page" to="/events">События</Link>
    //             <button id='themeSwitch' className={`bg-gray-700 mb-2 text-white dark:bg-white dark:text-black p-1.5 w-20 rounded`} onClick={switchTheme}>{theme.themeNow}</button>
    //             <button type='button' className='p-1.5 text-white font-semibold mb-2 block rounded' onClick={() => setOpen(true)}>Войти</button>
    //         </div>
    //     </header>
    // );
}
