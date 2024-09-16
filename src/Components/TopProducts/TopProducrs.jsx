import React from 'react'
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
    {
        id: 1,
        img: "./assets/shirt/shirt.png",
        title: "Casual Wear",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 2,
        img: "./assets/shirt/shirt2.png",
        title: "Printed shirt",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        img: "./assets/shirt/shirt3.png",
        title: "Women shirt",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
  ];
  


const TopProducrs = () => {
  return (
    <div>
        <div className=' container'>
        {/* Header Section */}
        <div className=' text-left mb-24 maax-w-[600px] mx-auto'>
                <p data-aos="fade-up" className=' text-sm text-primary'>Top Reated Products for you</p>
                <h1 data-aos="fade-up" className=' text-3xl font-bold'> Best Products</h1>
                <p data-aos="fade-up" className=' text-xs text-gray-400'>
                 Join our discord channel
                 to discuss react-slick bugs and 
                 ask for help
                </p>
        </div>
        {/* Body section */}
        <div 
        className=' grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {ProductsData.map((data)=>(
                <div>
                {/* image section */}
                    <div
                    data-aos="zoom-in"
                    className=' rounded-2xl bg-white dark:bg-gray-800
                 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative
                     shadow-xl duration-300 group max-w-[300px]'>
                        <img 
                            src={data.img}
                            alt=''
                        className=' max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                        />
                    </div>
                    {/* details srction */}
                    <div className=' p-4 text-center'>
                       {/*  Star rating */}
                       <div className=' w-full flex items-center justify-center gap-1'>
                        <FaStar className=' text-yellow-500'></FaStar>
                        <FaStar className=' text-yellow-500'></FaStar>
                        <FaStar className='text-yellow-500'></FaStar>
                        <FaStar className=' text-yellow-500'></FaStar>
                       </div>
                       <h1 className='text-xl font-bold'>{data.title}</h1>
                       <p className=' text-gray-500 group-hover:text-white  
                        duration-300 text-sm line-clamp-2'>
                        {data.description}
                        </p>
                        <button
                        className=' bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 
                        group-hover:bg-white
                         group-hover:text-primary'>
                          Order now
                        </button>
                    </div>
                </div>
            ))

            }
        </div>
        </div>
    </div>
  )
}

export default TopProducrs