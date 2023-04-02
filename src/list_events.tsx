import './App.css';

import {tags, events, events_imgs, events_tags, EventsImgs, EventsTags, Events}  from './data';

// type Tags = {
//   [key: string]: string;
// }

// const tags: Tags = {
//   '1': 'Очное',
//   '2': 'Школьнику',
//   '3': 'Студенту'
// }

// type Events = {
//   [key: string]: string;
// }

// const events: Events = {
//   '1': 'Школа магистранта',
//   '2': 'Олимпиада для школьников',
//   '3': 'День открытых дверей',
//   '4': 'Открытые лекции'
// };

// type EventsImgs = {
//   [key: string]: string;
// }

// const events_imgs: EventsImgs = {
//   '1': 'https://www.sut.ru/new_site/images/index_block/1598434086.png',
//   '2': 'https://www.tadviser.ru/images/thumb/1/16/06-spbgut.jpg/840px-06-spbgut.jpg',
//   '3': 'https://www.sut.ru/new_site/images/stud_banner/1610367366.jpg',
//   '4': 'https://tadviser.ru/images/0/07/%D0%A1%D0%9F%D0%B1%D0%93%D0%A3%D0%A2.jpg'
// };

// type EventsTags = {
//   [key: string]: string[];
// }

// const events_tags: EventsTags = {
//   '1': ['1', '3'],
//   '2': ['1', '2'],
//   '3': ['1', '2', '3'],
//   '4': ['3', '2'],
// };

interface TagProps {
  tag_name: string;
}

function Tag({ tag_name }: TagProps) {
  function handleTag() {
    alert(`Переход к событиям с тегом "${tag_name}"`);
  }
  return (
    <span onClick={handleTag} className="tag badge bg-info">{tag_name}</span>
  );
}

interface EventProps {
  event_id:string,
  event_name: string;
  eventTags: string[];
  img: string;
}

function Event({event_id, event_name, eventTags, img }: EventProps) {
  function handleClick() {
    alert(`Добавление события ${event_name} в расписание`);
  }

  const tagList = eventTags.map(tag => <Tag tag_name={tags[tag]} key={tag} />);
  return (
    <div className="card event lightTheme">
      <img src={img} className="card-img-top ePic" alt={`Изображение события ${event_name}`}/>
      <div className="card-body">
      <a className='eTitle' href={`/event/${event_id}`}><h5 className="card-title">{event_name}</h5></a>
      <p className="card-text">{event_name}</p>
      <small className="text-body-secondary date">Начало – Конец</small>
      </div>
      <div className='card-body d-inline-flex'>
        <div className="tagWrapper me-4">{tagList}</div>
        <button type="button" className="addButton btn btn-primary btn-sm" onClick={handleClick}>Добавить в расписание</button>
      </div>
    </div>
    
  );
}

interface EventListProps {
  events: Events;
  events_tags: EventsTags;
  events_imgs: EventsImgs;
}

function EventList({ events, events_tags, events_imgs }: EventListProps) {
  const listEvents = Object.keys(events).map(event =>
    <div className="col"><Event event_id={event} event_name={events[event]} key={event} eventTags={events_tags[event]} img={events_imgs[event]}/></div>);
    return(
      <div id="listEvent" className='container'>
      <div className="row row-cols-auto mt-2 row-cols-md-auto g-4">
        {listEvents}
      </div>
      </div>
    );
}

//Основной элемент страницы
function App() {
    return(
      <EventList events={events} events_tags={events_tags} events_imgs={events_imgs}/>
    );
}

export default App;