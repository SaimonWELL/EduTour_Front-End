import './App.css';
import { useState } from 'react';
import { EventList } from './pages/event_list';
import { events, events_imgs, events_tags } from './data';
import { Header } from './components/header';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './pages/registration';
import { EventPage } from './pages/event_page';
import { Login } from './components/login_popup';

//Основной элемент страницы
function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="min-h-screen pb-3 bd-white dark:bg-gray-700 dark:text-white">
      <Header setOpen={setOpen} />
      <Routes>
        <Route path='/' element={<p>Hello, World!</p>} />
        <Route path='/events' element={<EventList events={events} events_tags={events_tags} events_imgs={events_imgs} />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/event/:id' element={<EventPage />} />
      </Routes>
      <Login open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;