import { useParams } from 'react-router-dom';
import { tags, events_imgs, events_tags } from '../../data';
import './event_page.css';
import Tag from '../../components/tag/tag';
import { getEvent } from '../../hooks/getEvents';
import { getCategories } from '../../hooks/getCategories';
//шаблон страницы
export function EventPage() {
  function handleClick() {
    alert(`Добавление события "${event?.name}" в расписание`);
  }
  const categories = getCategories(); 
  const params = useParams();
  const id = params.id;
  if (!id) return null
  const event = getEvent(id);
  const tagList = categories?.map(category => {if (category.id == event?.category_id) return <Tag tag_name={category.name} key={category.id} />});
  return (
    <div className='mx-auto position-relative w-fit'>
      <h1 className='text-4xl font-[630] text-gray-700 dark:text-white mb-5'>{event?.name}</h1>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
        <div className='col'><img className='ePagePic' alt={'event ' + id} src={events_imgs[`${id}`]} /></div>
        <div className='col'>
          <p className='text-xl mb-5'>{event?.description}</p>
          <div className='grid sm:grid-cols-5 grid-cols-3 mb-5 grid-flow-col-dense'>{tagList}</div>
          <button type="button" className="bg-blue-700 rounded-2xl text-white p-1.5" onClick={handleClick}>Добавить в расписание</button>
        </div>
      </div>
    </div>
  );
}