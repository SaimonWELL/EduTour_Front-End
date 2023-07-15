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
export function Event({ event_id, event_name, eventTags, img }: EventProps) {
    function handleClick() {
        alert(`Добавление события ${event_name} в расписание`);
    }

    const tagList = eventTags.map(tag => <Tag tag_name={tags[tag]} key={tag} />);
    return (
        <div className="w-96  shadow-md rounded-2xl pb-4 dark:bg-gray-600">
            <img src={img} className="ePic h-10 rounded-t-2xl " alt={`Изображение события ${event_name}`} />
            <div className="px-3">
                <Link className='block  mt-1 mb-2' to={`/event/${event_id}`}><h5 className="text-2xl font-semibold">{event_name}</h5></Link>
                <p className="overflow-hidden max-h-[76px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue justo, ornare id aliquet sed, accumsan eu libero. Sed tincidunt leo</p>
                <small className="mt-3 block">Начало – Конец</small>
                <div className="mt-5 grid grid-cols-3 gap-x-5 gap-y-1 grid-flow-row text-white">{tagList}</div>
                <button type="button" className="bg-blue-700 mt-5 addButton rounded-2xl text-white" onClick={handleClick}>Добавить в расписание</button>
            </div>
        </div>
    );
}
