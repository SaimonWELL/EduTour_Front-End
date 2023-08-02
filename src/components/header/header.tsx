import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import React, {
  BaseSyntheticEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import {AuthState, event, profile} from "../../types";
import AuthContext from "../../context/AuthContext";
// import { logout } from '../../slices/authSlice';

interface headerProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

// Создание верхней панели
export function Header({ setOpen }: headerProps): ReactElement {
  const { auth } = useContext(AuthContext);
  const [theme, setTheme] = useState<{ themeNow: string }>({
    themeNow: "Темная",
  });
  const [menu, setMenu] = useState<boolean>(false);
  const userInfo = useSelector((state: AuthState) => state.auth);
  const [loginMenu,setLoginMenu] = useState(false)
  // const [username, setUsername] = useState('');
  // console.log(userInfo)
  const navigate = useNavigate();

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


  const handleClick = (e:Event) =>{
    e.preventDefault();
    const element = document.getElementById("dropdownMenu") as HTMLElement;
    const target = e.target;
    const button = document.getElementById("dropdownMenu");

    setLoginMenu(false);
  }





  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);


  const element = document.getElementById("dropdownMenu") ;
  element?.addEventListener('mouseout',function(event) {
    const element = document.getElementById("dropdownMenu") as HTMLElement;
    const target = event.target;
    const button = document.getElementById("dropdownMenu");

    if (element !== target && !element.contains(element) && button !== target) {
      element.style.display = "none";
    }

  });


  return (
    <header className="w-full z-50 h-20 fixed top-0 left-0 bg-white" onMouseLeave={()=>{setMenu(false)}}>
      <nav className="flex flex-row justify-between px-28 py-6 items-baseline ">
        <div className="LOGO ">
          <Link className="" to="/">
            <img src="/img/Logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="MENU flex flex-row gap-[48px]">
          <Link
            className="nav-link active font-manrope font-bold"
            aria-current="page"
            to="/"
          >
            Главная
          </Link>
          <Link
            className="nav-link active font-manrope font-bold"
            aria-current="page"
            to="/events"
          >
            События
          </Link>
          <Link
            className="nav-link active font-manrope font-bold"
            aria-current="page"
            to="/tours"
          >
            Туры
          </Link>
          <Link
            className="nav-link active font-manrope font-bold"
            aria-current="page"
            to="/"
          >
            О проекте
          </Link>
        </div>
        <div className="LOGIN w-40">
          {localStorage.getItem("userInfo") ? (
              // <div className="hs-dropdown relative inline-flex">
              //   <button  type="button"
              //           className="hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              //           onClick={toggleMenu}>
              //     <img className="w-8 h-auto rounded-full"
              //          src={auth?.avatar}
              //          alt={auth?.username}/>
              //       <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">{auth?.username}</span>
              //       <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16"
              //            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              //         <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              //               stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              //       </svg>
              //   </button>
              //   <div
              //       className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
              //       id="hs-dropdown-custom-trigger"
              //   >
              //     <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              //        href="#">
              //       Newsletter
              //     </a>
              //     <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              //        href="#">
              //       Purchases
              //     </a>
              //     <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              //        href="#">
              //       Downloads
              //     </a>
              //     <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              //        href="#">
              //       Team Account
              //     </a>
              //   </div>
              // </div>
              <div className="relative">
                <button  type="button"
                          className="hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                          onClick={(e)=>{
                            e.stopPropagation();
                            setLoginMenu(!loginMenu)}}>
                    <img className="w-8 h-auto rounded-full"
                         src={auth?.avatar}
                         alt={auth?.username}/>
                      <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">{auth?.username}</span>
                      <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16"
                           viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                  </button>
                <ul id="dropdownMenu" className={`transition-[opacity,margin] duration  ${loginMenu ? '': 'hidden'} min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700`}>
                  <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Выйти</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white hover:rounded-lg">Изменить профиль</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Пункт
                    3</a></li>
                </ul>
              </div>


              // <div className="flex gap-2.5">
              //   <button onClick={()=>{setMenu(true)}}>
              //     {auth?.username}
              //   </button>
              //   <ul className={menu ? "absolute top-[75px] min-w-[160px]" : "absolute top-[-100%] min-w-[160px]"}>
              //   <Link to={`/changeuser/${auth?.username}`}>Изменить профиль</Link>
              //     <li>
              //       <button onClick={logout}>Выйти</button>
              //     </li>
              //   </ul>
              //   <p>{}</p>
              //   <img
              //     src={auth?.avatar}
              //     alt=""
              //     className="w-10 h-10 bg-cover rounded-full bg-red-700"
              //   />
              // </div>
          ) : (
            <>
              <Link
                className="text-white bg-[#4683F7] py-2.5 px-5 rounded-lg font-manrope font-semibold "
                aria-current="page"
                to="/login"
              >
                Войти
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );

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
