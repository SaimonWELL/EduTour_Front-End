import "./App.css";
import { useState } from "react";
import { EventList } from "./pages/event_list";
import { events_imgs } from "./data";

import { Header } from "./components/header";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/registration/index";
import { EventPage } from './pages/event_page';
import UserTours from './pages/usertours/usertours';
import { Login } from './components/login_popup';
import LoginScreen from "./pages/login/Login";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import VerifyEmail from './pages/verifyemail';
import { ChangeUser } from './pages/changeuser';
import { MainPage } from './pages/mainpage';
import UserEvents from './pages/userevents/userevents';
import { TourList } from './pages/tour_list/tour_list';
import { TourPage } from './pages/tour_page/tour_page';


//Основной элемент страницы
function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="min-h-screen pb-3 bd-white dark:bg-gray-700 dark:text-white">
      <Header setOpen={setOpen} />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/events' element={<EventList events_imgs={events_imgs} />} /> {/*events={events} events_tags={events_tags} */}
        <Route path='/registration' element={<Registration />} />
        <Route path='/event/:id' element={<EventPage />} />
        <Route path='/login' element={<LoginScreen />}></Route>
        <Route path='/verifyemail/:confirm_email' element={<VerifyEmail />}></Route>
        <Route path='/:username/change' element={<ChangeUser />}></Route>
        <Route path='/:username/events' element={<UserEvents />}></Route>
        <Route path='/:username/tours' element={<UserTours />}></Route>
        <Route path='/tours' element={<TourList events_imgs={events_imgs} />} />
        <Route path='/tour/:id' element={<TourPage />} />
      </Routes>
      <Login open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
