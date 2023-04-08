import { useParams } from 'react-router-dom';
import { tags, events, events_imgs, events_tags } from '../../data';
import './event_page.css';

interface TagProps {
  tag_name: string;
}
//группа тегов
function Tag({ tag_name }: TagProps) {
  function handleTag() {
    alert(`Переход к событиям с тегом "${tag_name}"`);
  }
  return (
    <span onClick={handleTag} className="tag badge bg-info">{tag_name}</span>
  );
}
//шаблон страницы
function EventPage() {
  function handleClick() {
    alert(`Добавление события "${events[`${id.id}`]}" в расписание`);
  }
  let id = useParams();
  const tagList = events_tags[`${id.id}`].map(tag => <Tag tag_name={tags[tag]} key={tag} />);
  return (
    <div className='container'>
      <h1>{events[`${id.id}`]}</h1>
      <div className='row row-cols-2'>
        <div className='col'><img className='ePagePic' alt={'event ' + id.id} src={events_imgs[`${id.id}`]} /></div>
        <div className='col'>
          <p>{events[`${id.id}`]}</p>
          <div>{tagList}</div>
          <button type="button" className="addButton btn btn-primary btn-sm" onClick={handleClick}>Добавить в расписание</button>
        </div>
      </div>
    </div>
  );
}

export default EventPage;