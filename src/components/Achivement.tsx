import React from "react";
 
 
   

  
// let number = document.getElementById("number");
// let counter = 0;
// setInterval(() = > {
//   if(counter == 75){
//     clearInterval();
//   }
//   else{
// counter += 0;
// number.innerHTML = counter + "%"
// }
// }, 1000)

// 日付・達成率
const Achivement = () => {
  return (
    <div className=" shrink-0 w-60 h-60 rounded-full relative flex justify-center items-center">
      <div className='flex justify-center items-center absolute inset-0'>
      <div className="text-md text-white whitespace-nowrap inline-flex items-end gap-2"><span className='drop-shadow-shine'>05/21</span> <span className='text-3xl drop-shadow-shine'>75%</span></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px" className='-rotate-90'>
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="100" cy="100" r="90" stroke-linecap="round" className="drop-shadow-shine animation progress-circle" fill='none' stroke='#fff' stroke-width={'5'} stroke-dasharray="563" stroke-dashoffset={'140.65'}    />
 </svg>
    </div>
  )
}

export default Achivement