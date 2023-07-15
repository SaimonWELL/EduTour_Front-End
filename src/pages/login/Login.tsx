import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";
import { isErrorWithMessage, isFetchBaseQueryError } from "../../services/helpers";
import { AuthState } from "../../types";
import Authorize from "../../hooks/auth";
import AuthContext from "../../context/AuthContext";
import { profileData } from "../../hooks/profileData";


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setAuth } = useContext(AuthContext);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const userInfo = useSelector((state: AuthState) => state.auth); //fix any//fix any//fix any//fix any//fix any//fix any!!!!!!!!!!!!!!!!!!!!!!!!!!

    useEffect(() => {
        if (localStorage.getItem('userInfo')) {
            navigate('/');
        }
    }, [navigate, localStorage])

    const submitHandler = async (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        // try {
        //     const res = await login({email, password}).unwrap();
        //     dispatch(setCredentials({...res}))
        //     navigate('/')
        // }catch (err){ //fix any //fix any//fix any//fix any//fix any//fix any//fix any//fix any!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //     if (isFetchBaseQueryError(err)) {
        //         // console.log(err)
        //         let errMsg;
        //         if ('error' in err) errMsg = err.error
        //         else{
        //             const errM = JSON.stringify(err.data)
        //             errMsg = 'message' in JSON.parse(errM) ? JSON.parse(errM).message : errM
        //         }  
        //         toast.error(errMsg)
        //     }  else if (isErrorWithMessage(err)) {
        //         // you can access a string 'message' property here
        //         toast.error(err.message)
        //     }
        // }

        const authResult = await Authorize(email, password);
        if (typeof authResult == 'object') {
            localStorage.setItem('userInfo', JSON.stringify(authResult));
            const auth = await profileData();
            setAuth(auth);
            navigate('/')
        }
        else toast.error(authResult)
    }


    return (
        <section className="">
            <div className="flex flex-cobg-gray-50 dark:bg-gray-900l items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Вход
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler} >
                            <div>
                                <label htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Ваша почта</label>
                                <input type="text" name="email" id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
                                <input type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required />
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
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Вход
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Не зарегестрированы? <Link to='/registration'>Рeгистрация</Link>
                                {/*<a href='/registration'*/}
                                {/*                        className="font-medium text-blue-600 hover:underline dark:text-primary-500">Регистрация</a>*/}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LoginScreen