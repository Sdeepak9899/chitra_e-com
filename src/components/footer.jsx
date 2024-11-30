import { Link } from "react-router-dom";


export default function Footer(){
  return(
     <div className="">
       <footer className="w-full max-lg:w-full max-md:w-full max-sm:w-full max-sm:px-4 max-2xl:justify-center max-2xl:items-center max-xl:justify-center max-xl:items-center: max-lg:justify-center max-lg:items-center max-md:justify-center max-md:items-center max-sm:justify-center max-sm:items-center text-white flex justify-center h-full bg-purple-900 mt-24 ">


      <div className="w-full lg:w-4/5 py-10  max-md:w-full   max-lg:w-full ">
      <p className="font-bold text-2xl ">About Chitra Vichar</p>
      <p className=" mt-4 ">Welcome to Chitra Vichar! Your creative haven for personalised expression. Dive into a world where imagination meets reality. Curate your own story with our custom products. Embrace your uniqueness and explore the art of personalisation with us!   </p>
      <div className="mt-4">
      <a href="https://www.instagram.com/"><u>Instagram</u></a>
      <a href="chitravichar.in@gmail.com" className="ml-8"><u>chitravichar.in@gmail.com</u></a>
      </div>
      <hr className="mt-6"></hr>
      <div className="flex justify-between mt-6 max-md:flex-wrap">
        <div>
      <a href="#" className="text-pink-400">Powered by Blinkstore</a>
      </div>
      <div className="">
        <Link to="#" className="mr-4">hi@blinkstore.in </Link>
        <Link to="#" className="mr-4"> Report Abuse </Link>
        <Link to="#" className="mr-4"> Terms & Condition </Link>
        <Link to="#" className="mr-4"> Privacy Policy </Link>
        <Link to="#"> Return/Refund/Cancellation Policy</Link>
      </div>
      </div>
      </div>

    </footer>
     </div>
  )
}