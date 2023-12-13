import React from "react";
import { Link } from "react-router-dom";
import { signUpForEvent } from "../../hooks/signUpForEvent";
import { signUpForTour } from "../../hooks/signUpForTour";


interface EventProps {
    id: string,
    name: string;
    tags: (string | undefined)[];
    img: string;
    description: string;
    start_date: string;
    end_date: string;
    signed?: boolean;
    isTour?: boolean
}

export function Card({ id, name, tags, img, description, start_date, end_date, signed, isTour }: EventProps) {
    const date_start = new Date(start_date).toLocaleDateString();
    const date_end = new Date(end_date).toLocaleDateString();
    const tagList = tags?.map(category => {
        if (category) return <div className='w-fit h-8 p-2 border-2 border-[#F6F6F6] rounded-full flex flex-row items-center justify-center gap-2' key={ category }>
            <img src='/img/bambuk.png' className='w-[20px] h-[20px]' alt="" />
            <p className='font-rubick text-sm font-normal'>{category}</p>
        </div>
    });
    return (
        <div className="w-[408px] h-[405px] flex flex-col bg-gray-500 rounded-lg overflow-hidden border border-gray-200 ">
            <img src={img} alt="" className=" h-[256px]" />
            <div className='info bg-white  rounded-t-lg  relative  w-full h-56 bottom-14  '>

                <div className="info-block  h-52 px-4 relative bottom-5">
                    <div className='avatar w-12 h-12 mb-2 rounded-full items-center flex justify-center '>
                        <img src='/img/logoBonch.png' alt="" />
                    </div>
                    <Link to={isTour ? `/tour/${id}` :`/event/${id}`}>
                        <h6 className='font-rubick text-base font-medium'>{name}</h6>
                    </Link>
                    <p className='text-sm font-rubick font-normal'>{description}</p>
                    <p className='text-sm font-rubick font-medium mt-4'>{date_start} - {date_end}</p>
                    <div className='footer flex flex-row pt-4 gap-9'>
                        <div className='tags flex flex-row gap-2'>
                            {tagList}
                        </div>
                        {signed
                            ?
                            <div
                                className='btn w-32 h-10 bg-[#606f77] cursor-not-allowed rounded-lg flex items-center justify-center absolute right-5'
                            >
                                <p className='text-white text-xs font-rubick font-medium items-center'>Уже в расписании</p>
                            </div>
                            : <div
                                className='btn w-32 h-10 bg-[#0CA8FF] cursor-pointer rounded-lg flex items-center justify-center absolute right-5'
                                onClick={() => {
                                    if ( isTour ) signUpForTour(Number(id))
                                    else signUpForEvent(Number(id))
                                }}
                            >
                                <p className='text-white text-sm font-rubick font-medium items-center'>В расписание</p>
                            </div>}
                    </div>
                </div>
            </div>

        </div>
    )
}