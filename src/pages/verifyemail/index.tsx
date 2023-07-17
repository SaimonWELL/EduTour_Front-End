import React from 'react';
import { useParams } from 'react-router-dom';
import { confirmEmail } from '../../hooks/confirmEmail';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function VerifyEmail() {
    const params = useParams();
    const navigate = useNavigate();
    const confirmToken = params.confirm_email;
    let confirm_token = '';
    if (confirmToken) {
        confirm_token = confirmToken
    }
    else {
        toast.error('Ошибка получения токена подтверждения')
        navigate('/')
    }
    const confirmHandle = async (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        // console.log(confirm_token);
        const confirm_result = await confirmEmail(confirm_token);
        if (confirm_result?.confirmed) {
            toast.info(confirm_result.message);
            // navigate('/login');
        }
        else{
            toast.error(confirm_result?.message);
        }
    }
    return (
        <div className='shadow w-[800px] mx-auto h-auto rounded-md'>
            <p className='p-10'>Нажмите на кнопку для подтверждения адреса электронной почты</p>
            <button className='mx-10 mb-5 p-2 bg-blue-500 text-white rounded-md font-semibold' onClick={confirmHandle}>Подтвердить адрес электронной почты </button>
        </div>
    )
}