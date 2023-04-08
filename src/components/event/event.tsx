import Tag from "../tag/tag";
import { Link } from 'react-router-dom';
import { tags } from "../../data";
import './event.css';

interface EventProps {
    event_id: string,
    event_name: string;
    eventTags: string[];
    img: string;
}

//шаблон карточки события
export default function Event({ event_id, event_name, eventTags, img }: EventProps) {
    function handleClick() {
        alert(`Добавление события ${event_name} в расписание`);
    }

    const tagList = eventTags.map(tag => <Tag tag_name={tags[tag]} key={tag} />);
    return (
        <div className="card event lightTheme">
            <img src={img} className="card-img-top ePic" alt={`Изображение события ${event_name}`} />
            <div className="card-body">
                <Link className='eTitle' to={`/event/${event_id}`}><h5 className="card-title">{event_name}</h5></Link>
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
