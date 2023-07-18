import { Link } from "react-router-dom";
import { category } from "../../types";

interface TagProps{
    category: category
}

//список тегов
export default function Tag({category}:TagProps) {
  function handleTag() {
    alert(`Переход к событиям с тегом "${category.name}"`);
  }
  return (
    <Link to={`/events?category=${category.id}`} className="w-fit p-4 h-12 border-2 border-[#F6F6F6] rounded-full flex flex-row items-center justify-center gap-2">
      <img src="/img/bambuk.png" className="w-[20px] h-[20px]" alt="" />
      <p className="font-rubick text-md font-normal">{category.name}</p>
    </Link>
  );
}
