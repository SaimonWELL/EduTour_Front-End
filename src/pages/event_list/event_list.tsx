import { EventsImgs, EventsTags, Events } from '../../data';

import { Event } from '../../components/event';
import {Card} from "../../components/cardEvent";

interface EventListProps {
    events: Events;
    events_tags: EventsTags;
    events_imgs: EventsImgs;
}

//список событий

export function EventList({ events, events_tags, events_imgs }: EventListProps) {
    const listEvents = Object.keys(events).map(event =>
        <div className="col" key={event}><Event event_id={event} event_name={events[event]} eventTags={events_tags[event]} img={events_imgs[event]} /></div>);
    return (
            <div className="grid mx-auto w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 self-center gap-10">
                {listEvents}
                <Card></Card>
            </div>
    );
}
