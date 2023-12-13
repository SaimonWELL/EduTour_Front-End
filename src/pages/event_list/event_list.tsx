import { EventsImgs, Tags } from '../../data';

import { getEvents } from '../../hooks/getEvents';
// import { event }  from '../types'
import { Card } from "../../components/cardEvent";

import { getCategories } from '../../hooks/getCategories';
import { Categories } from '../../components/categoriesBlock';
import { getUserEvents } from '../../hooks/getUserEvents';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';

interface EventListProps {
    events_imgs: EventsImgs,
    tags: Tags

}

//список событий

export function EventList({ events_imgs, tags }: EventListProps) {  //{ events, events_tags, events_imgs }: EventListProps


    const Events = getEvents();
    const eventsInfo = getUserEvents();
    const categories = getCategories();
    if (!Events || !categories) return null
    else {
        const listEvents = Events.map((event) => {

            return < div className="col" key={event.id} >
                <Card signed={eventsInfo?.includes(event.id)} id={String(event.id)} name={event.name} tags={categories.map(category => { if (category.id == event.category_id) return category.name })} img={events_imgs[event.id]} description={event.description} start_date={event.date_start} end_date={event.date_end} />
            </div >
        });
        return (
            <>
                <div className='w-[1300px] mx-auto'>
                    <h1 className='font-black font-manrope text-4xl my-5'>Список событий</h1>
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
