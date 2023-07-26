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
  const start_date = new Date(event?.date_start || '');
  const end_date = new Date(event?.date_end || '');
  const tagList = categories?.map((category: category) => {
    if (category.id == event?.category_id)
      return <Tag category={category} key={category.id} />;
  });
  return (
    <div className="mx-auto position-relative w-[85vw]">
      <p className="text-sm text-gray-400">{`События – ${event?.name}`}</p>
      <h1 className="text-4xl">Мероприятие</h1>
      <h1 className="text-5xl font-[630] dark:text-white mb-5">
        {event?.name}
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="col">
          <img alt={"event " + id} className="rounded" src={events_imgs[`${id}`]} />
        </div>
        <div className="col grid grid-rows-2">
          <div className="row">
            <p className="text-xl mb-5">{event?.description}</p>
          </div>
          <div className="row grid grid-cols-2">
            <div className="bg-[#4683F7] w-72 h-36 rounded-lg grid items-center justify-center rounded">
             <div className="text-white grid grid-cols-2">
               <div className="col">
                <p className="text-md">Начало</p>
                <p className="text-3xl font-bold">{`${start_date.getHours()}:${start_date.getMinutes()}`}</p>
               </div>
               <div className="col">
                <p className="text-md">Конец</p>
                <p className="text-3xl font-bold">{`${end_date.getHours()}:${end_date.getMinutes()}`}</p>
               </div>
             </div>
              <div className="bg-white w-64 h-10 items-center flex text-center justify-center rounded">
                <p className="btn text-blue text-sm font-rubick font-medium">
                  Добавить в расписание
                </p>
              </div>
            </div>
          </div>
            <div className="grid sm:grid-cols-5 grid-cols-3 mb-5 grid-flow-col-dense">
              {tagList}
            </div>
        </div>
      </div>
      <div className="font-bold text-sm">
        <p>{`${event?.address.street.replace(event?.address.street[0], event?.address.street[0].toUpperCase())}, ${event?.address.house}${event?.address.corps ? 'к'+event?.address.corps : ''}`}</p>
        <p>{`Кабинет ${event?.address.office || event?.address.flat}`}</p>
      </div>
    </div>
  );
}
