import React from 'react'
import { FaStar } from 'react-icons/fa6';
const ProductsData = [
    {
      id: 1,
      img: "./assets/women/women.png",
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: "./assets/women/women2.jpg",
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: "./assets/women/women3.jpg",
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: "./assets/women/women4.jpg",
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: "./assets/women/women2.jpg",
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];
  
const Products = () => {
  return (
    <div className=' mt-14 mb-12'>
        <div className=' container'>
            {/* Header section */}
            <div className=' text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className=' text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos="fade-up" className=' text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className=' text-xs text-gray-400'>
                Join our discord channel
                 to discuss react-slick bugs and 
                 ask for help
                </p>
            </div>
        {/* Body section */}
        <div>
            <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center'>
             {/* Card section */}
                  {ProductsData.map((data)=>(
                    <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    

                     key={data.id} className=' space-y-3'>
                      <img src={data.img}
                        alt=''
                        className=' h-[220px] w-[150px] 
                        object-cover rounded-md '
                      />
                      <div>
                        <h3 className=' font-semibold '>{data.title}</h3>
                        <p className=' text-sm text-gray-600'>
                            {data.color}
                        </p>
                        <div className=' flex items-center gap-1'>
                            <FaStar className=' text-yellow-400'/>
                            <span>{data.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))

                  }
                 
            </div>
            {/* view all products */}
            <div className=' flex justify-center '>
              <button className=' text-center mt-10 curser-pointer bg-primary text-white py-1 px-4 rounded-md'>
                View All Products
              </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Products