import React from "react";



 export function Card(){
    return (
        <div className = "w-[408px] h-[405px]flex flex-col bg-gray-500 rounded-lg overflow-hidden border border-gray-200 ">
            <img src="https://www.sut.ru/new_site/images/index_block/1598434086.png" alt="" className=" h-[256px]"/>
            <div className='info bg-white  rounded-t-lg z-10 relative  w-full h-[208px] '>

                <div className="info-block  h-56 px-4 relative bottom-5">
                    <div className='avatar w-12 h-12 mb-2 rounded-full bg-red-700 border-2 border-[#F5F5F5]'>
                        <img  alt=""/>
                    </div>
                    <h6 className='font-rubick text-base font-medium'>День открытых дверей в СПбГУТ</h6>
                    <p className='text-sm font-rubick font-normal'>График Дней открытых дверей СПбГУТ с января по май 2023 года</p>
                    <p className='text-sm font-rubick font-medium mt-4'>Начало - Конец</p>
                    <div className='footer flex flex-row pt-4 gap-9'>
                        <div className='tags flex flex-row  gap-2'>
                            <div className='w-24 h-8 border-2 border-[#F6F6F6] rounded-full flex flex-row items-center justify-center'>
                                <img src="" alt=""/>
                                <p className='font-rubick text-sm font-normal'>Очное</p>
                            </div>
                            <div className='w-28 h-8 border-2 border-[#F6F6F6] rounded-full flex flex-row items-center justify-center'>
                                <img src="" alt=""/>
                                <p className='font-rubick text-sm font-normal'>Школьнику</p>
                            </div>
                        </div>
                        <div className='btn w-32 h-10 bg-[#0CA8FF] rounded-lg flex items-center justify-center'>
                            <p className='text-white text-sm font-rubick font-medium items-center'>В расписание</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
