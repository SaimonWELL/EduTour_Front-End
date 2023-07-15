import React from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../hooks/getCategories";

export function Categories() {

    const Categories = getCategories();
    
    if (!Categories) return null; 

    const tags = Categories.map(category => {return(<Link to={`/category/${category.id}`} key={category.id} className='w-fit p-4 h-12 border-2 border-[#F6F6F6] rounded-full flex flex-row items-center justify-center gap-2'>
    <img src='/img/bambuk.png' className='w-[20px] h-[20px]' alt="" />
    <p className='font-rubick text-md font-normal'>{category.name}</p>
</Link>)})

    return (
        <div className='tags flex flex-row gap-2 my-5'>
            {tags}
        </div>
    )
}