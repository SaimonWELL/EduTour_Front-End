import { useParams } from "react-router-dom";
import { events_imgs } from "../../data";
import Tag from "../../components/tag/tag";
import { getEvent } from "../../hooks/getEvents";
import { getCategories } from "../../hooks/getCategories";
import { category } from "../../types";
//шаблон страницы
export function EventPage() {
  function handleClick() {
    alert(`Добавление события "${event?.name}" в расписание`);
  }
  const categories = getCategories();
  const params = useParams();
  const id = params.id;
  if (!id) return null;
  const event = getEvent(id);
  const tagList = categories?.map((category: category) => {
    if (category.id == event?.category_id)
      return <Tag category={category} key={category.id} />;
  });
  return (
    <div className="mx-auto position-relative w-[85vw]">
      <h1 className="sm:text-2xl text-4xl font-[630] text-gray-700 dark:text-white mb-5">
        {event?.name}
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="col">
          <img alt={"event " + id} src={events_imgs[`${id}`]} />
        </div>
        <div className="col grid grid-rows-2">
          <div className="row">
            <p className="text-xl mb-5">{event?.description}</p>
          </div>
          <div className="row grid grid-cols-2">
            <div className="grid sm:grid-cols-5 grid-cols-3 mb-5 grid-flow-col-dense">
              {tagList}
            </div>
            <div className="btn w-52 h-10 bg-[#0CA8FF] rounded-lg flex items-center justify-center">
              <p className="text-white text-sm font-rubick font-medium items-center">
                Добавить в расписание
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
