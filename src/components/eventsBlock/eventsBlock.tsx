import React from "react";
import { category, event } from "../../types";
import { Card } from "../cardEvent";
import { events_imgs } from "../../data";
import { getUserEvents } from '../../hooks/getUserEvents';
import { getUserTours } from "../../hooks/getUserTours";

interface EventsBlockProps {
  filteredEvents: event[] | undefined;
  categories: category[] | undefined;
  isTours?:boolean
}

export const EventsBlock = ({
  filteredEvents,
  categories,
  isTours
}: EventsBlockProps) => {
  const userData = isTours ? getUserTours() : getUserEvents()
  if (!(categories && filteredEvents)) return null
  const cardList = filteredEvents?.map((event: event) => (
    <div className="col" key={event.id}>
      <Card
        id={String(event.id)}
        name={event.name}
        tags={categories.map((category: category) => {
          if (category.id == event.category_id) return category.name;
        })}
        img={events_imgs[event.id]}
        description={event.description}
        start_date={event.date_start}
        end_date={event.date_end}
        signed={userData?.includes( event.id )}
        isTour={isTours}
      />
    </div>
  ));
  return <>{cardList}</>;
};
