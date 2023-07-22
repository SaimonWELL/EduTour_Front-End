import React, { useEffect, useState } from "react";
import { Card } from "../../components/cardEvent";
import { tour } from "../../types";
import { useQuery } from "../../services/helpers";
import { getCategories } from "../../hooks/getCategories";
import { Categories } from "../../components/categoriesBlock";
import { CardsBlock } from "../../components/eventsBlock";
import { EventsImgs } from "../../data";
import { getTours } from "../../hooks/getTours";
import { getToursByCategory } from "../../hooks/getToursByCategory";

interface ListProps {
    events_imgs: EventsImgs;
}

const filterEvents = async (Tours: tour[], filter: Set<number>) => {
    const newTours = new Set<tour>();
    const res = await getToursByCategory(Array.from(filter.values()));
    res.forEach((tour) => newTours.add(tour));
    return Array.from(newTours.values());
    // return Events.filter((event) => {
    //   console.log(event.category_id);
    //   if (filter.has(event.category_id)) return event;
    // });
  };

export function TourList({ events_imgs }: ListProps) {
    //{ events, events_tags, events_imgs }: EventListProps
    const query = useQuery();
    const [filter, setFilter] = useState<Set<number>>(
      new Set<number>(
        new Set<number>(query.getAll("category").map((id) => Number(id)))
      )
    );
    const Tours: tour[] = [{
        id: 1,
        name:'tour',
        description:'Тур',
        max_users:0,
        date_start:'2023-07-22T12:02:49.115Z',
        date_end:'2023-07-22T12:02:49.115Z',
        reg_deadline:'2023-07-22T12:02:49.115Z',
        address:{},
        category_id: 1,
        events:null,

    } as tour]; //getTours();
    const categories = getCategories();
    const [filteredTours, setTours] = useState<tour[]>(Tours);
    // useEffect(() => {
    //   (async () => {
    //     if (filter.size != 0) {
    //       setTours(await filterEvents(Tours, filter));
    //     } else setTours(Tours);
    //   })();
    // }, [filter, setFilter, Tours]);
  
    return (
      <div>
        <div className="w-[1300px] mx-auto">
          <h1 className="font-black font-manrope text-4xl my-5">
            Список туров
          </h1>
          <p className="font-rubick text-gray-600 font-light w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Categories filter={filter} setFilter={setFilter} />
        </div>
        <div className="grid mx-auto w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 self-center gap-10">
          <CardsBlock filteredEvents={filteredTours} categories={categories} is_tour={true}/>
        </div>
      </div>
    );
  }