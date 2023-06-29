import { EventsImgs, EventsTags } from '../../data';

import { Event } from '../../components/event';
import { getEvents } from '../../hooks/getEvent';
// import { event }  from '../../hooks/getEvent'
interface EventListProps {
    events_imgs: EventsImgs,
    events_tags: EventsTags

}

//список событий

export function EventList({events_imgs, events_tags} : EventListProps) {  //{ events, events_tags, events_imgs }: EventListProps
    const Events=getEvents();
    console.log(Events);
    if (Events == undefined) return null
     
    else {
        const listEvents = Events.map(event =>
            <div className="col" key={event.id}>
                <Event event_id={String(event.id)} event_name={event.name} eventTags={events_tags[String(event.category)]} img={events_imgs[event.id]} />
                </div>);
        return (
            <div className="grid mx-auto w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 self-center gap-10">
                {listEvents}
            </div>
    );
}
}
