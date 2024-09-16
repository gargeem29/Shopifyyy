import React, { useEffect, useState } from 'react'

const DarkMode = () => {

    const [theme,settheme]=useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme"):"light"
    )

    const element=document.documentElement;
    console.log(element);
    console.log(theme);

    useEffect(()=>{
      if(theme==="dark"){
        element.classList.add("dark");
        localStorage.setItem("theme","dark");
      }else{
        element.classList.remove("dark");
        localStorage.setItem("theme","light");
      } 
    },[theme])

  return (
    <div className=' relative'>
        <img 
        onClick={()=>settheme(theme==="light"?"dark":"light")}
        className=' w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
         transition-all duration-300 absolute right-0 z-10'
        src='./assets/website/light-mode-button.png '
        alt='pic'></img>
          <img 
           onClick={()=>settheme(theme==="light"?"dark":"light")}
        className=' w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'
        src='./assets/website/dark-mode-button.png '
        alt='pic'></img>
    </div>
  )
}

export default DarkMode