<<<<<<< HEAD
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { Dispatch, ReactElement, SetStateAction, useContext, useState } from 'react';
import { useSelector } from "react-redux";
import { AuthState } from '../../types';
import AuthContext from '../../context/AuthContext';
=======
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { AuthState, profile } from "../../types";
import AuthContext from "../../context/AuthContext";
>>>>>>> f950e907cf43509c1ca5cf38595793027997fc49
// import { logout } from '../../slices/authSlice';

interface headerProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

// Создание верхней панели
export function Header({ setOpen }: headerProps): ReactElement {
    const {auth} = useContext(AuthContext);
    const [theme, setTheme] = useState<{ themeNow: string }>({ themeNow: 'Темная' });
    const [dropdownOpen, showDropdown] = useState<boolean>(false);
    const userInfo = useSelector((state: AuthState) => state.auth);
    // const [username, setUsername] = useState(''); 
    // console.log(userInfo)
    const navigate = useNavigate();
  
    // else if(typeof data == 'number') toast.error(data.toString())
    // const profile = profileData();

  // else if(typeof data == 'number') toast.error(data.toString())
  // const profile = profileData();

  function logout(): void {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("username");
    navigate(0);
  }

  function switchTheme(): void {
    if (theme.themeNow === "Темная") {
      document.documentElement.classList.add("dark");
      setTheme({ themeNow: "Светлая" });
    } else {
      document.documentElement.classList.remove("dark");
      setTheme({ themeNow: "Темная" });
    }
  }

    return (
        <>
            <header className='w-full h-24'>
                <nav className='flex flex-row justify-between px-28 py-6 items-center '>
                    <div className='LOGO '>
                        <Link className="" to="/"><img src="/img/Logo.png" alt="Logo" /></Link>
                    </div>
                    <div className='MENU flex flex-row gap-[48px]'>
                        <Link className="nav-link active font-manrope font-bold" aria-current="page" to="/">Главная</Link>
                        <Link className="nav-link active font-manrope font-bold" aria-current="page" to="/tours">Туры</Link>
                        <Link className="nav-link active font-manrope font-bold" aria-current="page" to="/events">События</Link>
                        <Link className="nav-link active font-manrope font-bold" aria-current="page" to="/">О проекте</Link>
            
                    </div>
                    <div className='LOGIN'>
                        {localStorage.getItem('userInfo') ? (
                            <>
                                <div className='flex gap-2.5'>
                                    <div onClick={()=>{showDropdown( (value)=>!value )}}>{auth?.username}</div>
                                    <p>{ }</p>
                                    <img src={auth?.avatar} alt="" className='w-10 h-10 bg-cover rounded-full bg-red-700' />
                                </div>
                               
                            </>
                        ) : (
                            <>
                                <Link className='text-white bg-[#4683F7] py-2.5 px-5 rounded-lg font-manrope font-semibold ' aria-current='page' to='/login'>Войти</Link>
                            </>
                        )}
            
                    </div>
                </nav>
                
            </header>
            <div className={ `absolute z-50 shadow top-16 h-fit right-9 w-[160px] ${ dropdownOpen ? 'block' : 'hidden' }` }>
                                <ul>
                                    <li><Link to={`/${auth?.username}/change`}>Изменить профиль</Link></li>
                                    <li><Link to={`/${auth?.username}/events`}>Мои события</Link></li>
                                    <li><Link to={`/${auth?.username}/tours`}>Мои туры</Link></li>
                                    <li><button onClick={logout}>Выйти</button></li>

                                </ul>
                            </div>
        </>
    )
}
