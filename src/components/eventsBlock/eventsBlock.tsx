import React from "react";
import { category, event } from "../../types";
import { Card } from "../cardEvent";
import { events_imgs } from "../../data";

interface EventsBlockProps {
  filteredEvents: event[] | undefined;
  categories: category[] | undefined;
}

export const EventsBlock = ({
  filteredEvents,
  categories,
}: EventsBlockProps) => {
  const listEvents = filteredEvents?.map((event: event) => (
    <div className="col" key={event.id}>
      <Card
        event_id={String(event.id)}
        event_name={event.name}
        eventTags={categories?.map((category: category) => {
          if (category.id == event.category_id) return category.name;
        })}
        img={events_imgs[event.id]}
        description={event.description}
        start_date={event.date_start}
        end_date={event.date_end}
      />
    </div>
  ));
  return <>{listEvents}</>;
};
