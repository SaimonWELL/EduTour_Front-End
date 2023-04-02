import { useLoaderData } from 'react-router-dom';
import {tags, events, events_imgs, events_tags, EventsImgs, EventsTags, Events}  from './data';

interface PageProps {
    id : string
}

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
function EventPage(){
    function handleClick() {
        alert(`Добавление события "${events[`${id}`]}" в расписание`);
    }   
    let id = useLoaderData();
    const tagList = events_tags[`${id}`].map(tag => <Tag tag_name={tags[tag]} key={tag} />);
    return(
        <div className='container'>
          <h1>{events[`${id}`]}</h1>
          <div className='row row-cols-2'>
          <div className='col'><img className='ePagePic' src={events_imgs[`${id}`]}/></div>
          <div className='col'>
            <p>{events[`${id}`]}</p>
            <div>{tagList}</div>
            <button type="button" className="addButton btn btn-primary btn-sm" onClick={handleClick}>Добавить в расписание</button>
          </div>
          </div>
        </div>
    );
}

export default EventPage;