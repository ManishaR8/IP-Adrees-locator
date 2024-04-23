import React from 'react'

const Stats = ({
    ipAddress,
    location,
    timeZone,
    isp
}) => {
    return (
        <div className='w-4/5 rounded-lg absolute top-60 md:top-60 left-10 md:left-32 bg-white z-10 flex flex-col container md:flex-row gap-4 md:gap-10 p-4 md:p-8 '>

            <div className='md:border-r-2 w-full border-slate-100 flex flex-col gap-2 items-center'>
                <p className='text-sm text-slate-400 font-semibold'>
                    IP Address
                </p>
                <p className='md:text-2xl text-black font-bold'>
                    {ipAddress}
                </p>
            </div>

            <div className='md:border-r-2 w-full border-slate-100 flex flex-col gap-2 items-center'>
                <p className='text-sm text-slate-400 font-semibold'>
                    Location
                </p>
                <p className='md:text-2xl text-black font-bold'>
                    {location}
                </p>
            </div>

            <div className='md:border-r-2 w-full border-slate-100 flex flex-col gap-2 items-center'>
                <p className='text-sm text-slate-400 font-semibold'>
                    TimeZone
                </p>
                <p className='md:text-2xl text-black font-bold'>
                    {timeZone}
                </p>
            </div>

            <div className='w-full flex flex-col gap-2 items-center'>
                <p className='text-sm text-slate-400 font-semibold'>
                    ISP
                </p>
                <p className='md:text-2xl text-black font-bold'>
                    {isp}
                </p>
            </div>

        </div>
    )
}

export default Stats;