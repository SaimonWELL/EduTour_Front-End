import React from "react";
import { category, event } from "../../types";
import { Card } from "../cardEvent";
import { events_imgs } from "../../data";

interface EventsBlockProps {
  filteredEvents: event[] | undefined;
  categories: category[] | undefined;
  is_tour: boolean;
}

export const CardsBlock = ({
  filteredEvents,
  categories,
  is_tour,
}: EventsBlockProps) => {
  const listEvents = filteredEvents?.map((event: event) => (
    <div className="col" key={event.id}>
      <Card
        is_tour={is_tour}
        id={event.id}
        name={event.name}
        tags={categories?.map((category: category) => {
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
