import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full font-manrope text-white bg-[#3950E6] mx-auto my-0 pt-10 px-5 pb-14">
      <div className="grid grid-cols-3 justify-items-center">
        <div className="col">
          <p className="text-2xl font-[450] mb-10">EduTourism</p>
          <div className="text-sm">© 2023 СПб. Все права защищены</div>
        </div>
        <div className="col font-bold space-y-4">
          <Link className="block text-xl" aria-current="page" to="/">
            Главная
          </Link>
          <Link className="block text-xl" aria-current="page" to="/events">
            События
          </Link>
          <Link className="block text-xl" aria-current="page" to="/">
            О проекте
          </Link>
        </div>
        <div className="col space-y-5">
          <h1 className="font-bold text-xl">Контакты</h1>
          <a href="tel:+79999999999" className="block text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 inline h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <p className="inline ps-1">+79999999999</p>
          </a>
          <a href="email:info@email.ru" className="block text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6 inline"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <p className="inline ps-2">info@email.ru</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
