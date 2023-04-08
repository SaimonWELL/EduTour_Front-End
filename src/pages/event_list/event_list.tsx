import { EventsImgs, EventsTags, Events } from '../../data';

import Event from '../../components/event/event'

interface EventListProps {
    events: Events;
    events_tags: EventsTags;
    events_imgs: EventsImgs;
}

//список событий

export default function EventList({ events, events_tags, events_imgs }: EventListProps) {
    const listEvents = Object.keys(events).map(event =>
        <div className="col"><Event event_id={event} event_name={events[event]} key={event} eventTags={events_tags[event]} img={events_imgs[event]} /></div>);
    return (
        <div id="listEvent" className='container'>
            <div className="row row-cols-auto mt-2 row-cols-md-auto g-4">
                {listEvents}
            </div>
        </div>
    );
}
