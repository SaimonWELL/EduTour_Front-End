import { useParams } from 'react-router-dom';
import { tags, events_imgs, events_tags } from '../../data';
import './event_page.css';
import Tag from '../../components/tag/tag';
import { getCategories } from '../../hooks/getCategories';
import { getTour } from '../../hooks/getTours';
//шаблон страницы
export function TourPage() {
  function handleClick() {
    alert(`Добавление события "${tour?.name}" в расписание`);
  }
  const categories = getCategories(); 
  const params = useParams();
  const id = params.id;
  if (!id) return null
  const tour = getTour(id);
  const tagList = categories?.map(category => {if (category.id == tour?.category_id) return <Tag category={category} />});
  return (
    <div className='mx-auto position-relative w-fit'>
      <h1 className='text-4xl font-[630] text-gray-700 dark:text-white mb-5'>{tour?.name}</h1>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
        <div className='col'><img className='ePagePic' alt={'event ' + id} src={events_imgs[`${id}`]} /></div>
        <div className='col'>
          <p className='text-xl mb-5'>{tour?.description}</p>
          <div className='grid sm:grid-cols-5 grid-cols-3 mb-5 grid-flow-col-dense'>{tagList}</div>
          <button type="button" className="bg-blue-700 rounded-2xl text-white p-1.5" onClick={handleClick}>Добавить в расписание</button>
        </div>
      </div>
    </div>
  );
}