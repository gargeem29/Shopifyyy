import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import Products from "./Components/Products/products"
import AOS from "aos"
import { useEffect } from 'react';
import "aos/dist/aos.css"
import TopProducrs from './Components/TopProducts/TopProducrs';
import Banner from './Components/Banner/Banner';
import Subscribe from './Components/Subscribe/Subscribe';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from "./Components/Footer/Footer"
function App() {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    })
    AOS.refresh();
  },[])


  return (
    <div className=" bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar></Navbar>
    <Hero></Hero>
   <Products></Products>
   <TopProducrs></TopProducrs>
   <Banner></Banner>
   <Subscribe></Subscribe>
   <Products></Products>
  <Testimonials></Testimonials>
   <Footer></Footer>
    </div>
  );
}

export default App;
