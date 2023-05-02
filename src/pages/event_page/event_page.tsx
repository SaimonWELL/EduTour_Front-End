import { useParams } from 'react-router-dom';
import { tags, events, events_imgs, events_tags } from '../../data';
import './event_page.css';
import Tag from '../../components/tag/tag';
//шаблон страницы
export function EventPage() {
  function handleClick() {
    alert(`Добавление события "${events[`${id.id}`]}" в расписание`);
  }
  const id = useParams();
  const tagList = events_tags[`${id.id}`].map(tag => <Tag tag_name={tags[tag]} key={tag} />);
  return (
    <div className='mx-auto position-relative w-fit'>
      <h1 className='text-4xl font-[630] text-gray-700 dark:text-white mb-5'>{events[`${id.id}`]}</h1>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
        <div className='col'><img className='ePagePic' alt={'event ' + id.id} src={events_imgs[`${id.id}`]} /></div>
        <div className='col'>
          <p className='text-xl mb-5'>{events[`${id.id}`]}</p>
          <div className='grid sm:grid-cols-5 grid-cols-3 mb-5 grid-flow-col-dense'>{tagList}</div>
          <button type="button" className="bg-blue-700 rounded-2xl text-white p-1.5" onClick={handleClick}>Добавить в расписание</button>
        </div>
      </div>
    </div>
  );
}