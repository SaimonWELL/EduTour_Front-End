import { useParams } from 'react-router-dom';

import { EventsImgs, Tags } from '../../data';

import { Event } from '../../components/event';
import { getEvents } from '../../hooks/getEvents';
// import { event }  from '../types'
import { Card } from "../../components/cardEvent";

import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { getCategories } from '../../hooks/getCategories';
import { Categories } from '../../components/categoriesBlock';

interface EventListProps {
    events_imgs: EventsImgs
}

//список событий

export function Category({ events_imgs }: EventListProps) {  //{ events, events_tags, events_imgs }: EventListProps

    const props = useParams();
    const categoryId = props.id;
    const Events = getEvents();
    const categories = getCategories();
    if (!Events || !categories) return null
    else {
        console.log(Events)
        const listEvents = Events.map((event) => {
            if (event.category_id.toString() == categoryId)
                return (<div className="col" key={event.id}>
                    <Card event_id={String(event.id)} event_name={event.name} eventTags={categories.map(category => { if (category.id == event.category_id) return category.name })} img={events_imgs[event.id]} description={event.description} start_date={event.date_start} end_date={event.date_end} />
                </div>)
        })
        return (
            <>
                <div className='w-[1300px] mx-auto'>
                    <h1 className='font-black font-manrope text-4xl my-5'>{`Категория «${categories.map((category) => { if (category.id.toString() == categoryId) return category.name })}»`}</h1>
                    <p className='font-rubick text-gray-600 font-light w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Categories />
                </div>
                <div className="grid mx-auto w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 self-center gap-10">
                    {listEvents}
                </div>
            </>
        );
    }
}
