import { EventsImgs, Tags } from '../../data';

import { getEvents } from '../../hooks/getEvents';

import { getCategories } from '../../hooks/getCategories';
import { Categories } from '../../components/categoriesBlock';
import AuthContext from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { getEventsByCategory } from '../../hooks/getEventsByCategory';
import { useQuery } from '../../services/helpers';
import { type event } from '../../types';
import { EventsBlock } from '../../components/eventsBlock';

interface EventListProps {
    events_imgs: EventsImgs
}

const filterEvents = (Events: event[], filter: Set<number>) => {
    // const newEvents = new Set<event>();
    // const res = await getEventsByCategory(Array.from(filter.values()));
    // res.forEach((event) => newEvents.add(event));
    // return Array.from(newEvents.values());
    return Events.filter((event) => {
      console.log(event.category_id);
      if (filter.has(event.category_id)) return event;
    });
  };

//список событий

export function EventList({ events_imgs }: EventListProps) {  //{ events, events_tags, events_imgs }: EventListProps


    const query = useQuery();
  const [filter, setFilter] = useState<Set<number>>(
    new Set<number>(
      new Set<number>(query.getAll("category").map((id) => Number(id)))
    )
  );
  const Events: event[] = getEvents();
  const categories = getCategories();
  const [filteredEvents, setEvents] = useState<event[]>();
  useEffect(() => {
    (async () => {
      if (filter.size != 0) {
        setEvents(filterEvents(Events, filter));
      } else setEvents(Events);
    })();
  }, [filter, setFilter, Events]);

        return (
            <>
                <div className='w-[1300px] mx-auto'>
                    <h1 className='font-black font-manrope text-4xl my-5'>Список событий</h1>
                    <p className='font-rubick text-gray-600 font-light w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Categories filter={filter} setFilter={setFilter} />
                </div>
                <div className="grid mx-auto w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 self-center gap-10">
                    <EventsBlock filteredEvents={filteredEvents} categories={categories} />
                </div>
            </>
        );
}
