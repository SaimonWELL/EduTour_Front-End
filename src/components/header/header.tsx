import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { AuthState, profile } from "../../types";
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
  const [menu, setMenu] = useState<{ openNow: boolean }>({ openNow: false });
  const userInfo = useSelector((state: AuthState) => state.auth);
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

  return (
    <header className="w-full h-20 fixed top-0 left-0 bg-white">
      <nav className="flex flex-row justify-between px-28 py-6 items-center ">
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
            to="/"
          >
            О проекте
          </Link>
        </div>
        <div className="LOGIN">
          {localStorage.getItem("userInfo") ? (
            <>
              <div className="flex gap-2.5">
                <Link to={`/changeuser/${auth?.username}`}>
                  {auth?.username}
                </Link>

                <ul className="absolute top-[100%] min-w-[160px]">
                  <li>sd</li>
                  <li>
                    <button onClick={logout}>Выйти</button>
                  </li>
                </ul>
                <p>{}</p>
                <img
                  src={auth?.avatar}
                  alt=""
                  className="w-10 h-10 bg-cover rounded-full bg-red-700"
                />
              </div>
            </>
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
