import React, { Dispatch, SetStateAction, useState } from "react";
import { getCategories } from "../../hooks/getCategories";
import { useNavigate } from "react-router-dom";

interface CategoriesProps {
  filter: Set<number>;
  setFilter: Dispatch<SetStateAction<Set<number>>>;
  isTour?: boolean
}
// 
export function Categories({ filter, setFilter, isTour }: CategoriesProps) {
  const navigate = useNavigate();
  const Categories = getCategories();
  if (!Categories) return null;
  const categoryClasses = "w-fit p-4 h-12 border-2 border-[#F6F6F6] rounded-full flex flex-row items-center justify-center gap-2";
  const tags = Categories.map((category) => (
    <button
      id={category.id.toString()}
      key={category.id}
      onClick={() => {
        const newFilter = new Set(filter);
        if (newFilter.has(category.id)) newFilter.delete(category.id);
        else newFilter.add(category.id);
        console.log(newFilter);
        setFilter(newFilter);
        navigate(`/${isTour ? 'tours': 'events'}?${Array.from(newFilter).map(category=>`category=${category}`).join('&')}`);
      }}
      className={filter.has(category.id) ? categoryClasses + ' bg-slate-200' : categoryClasses}
    >
      <img src="/img/bambuk.png" className="w-[20px] h-[20px]" alt="" />
      <p className="font-rubick text-md font-normal">{category.name}</p>
    </button>
  ));

  return (
    <div className="tags flex flex-row gap-2 my-5">
      {tags}
      <button
        onClick={() => {
          setFilter(new Set<number>);
          navigate(`/${isTour ? 'tours': 'events'}`);
        }}
        className="w-fit p-4 h-12 border-2 border-[#F6F6F6] rounded-full flex flex-row items-center justify-center gap-2"
      >
        <p className="font-rubick text-md font-normal">Очистить</p>
      </button>
    </div>
  );
}
