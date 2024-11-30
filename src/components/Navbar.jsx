import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <div className=" ">


        {/* <div className="w-full max-md:w-full flex justify-between items-center  fixed top-0 left-0  z-50 px-9 bg-white ">
              <div className="container">
              <img
                  src="https://xdn.blinkstore.in/uploads/store/lqb8jfsddhg.png"
                  className="w-[80px]"
                  alt="klasdjlfk"
              />
              </div>
  
              <div className="flex items-center text-2xl gap-2 ">
              <Link href="#" className="">
                Login
              </Link>
              <span>
                  <Link href="#">
                  <HiOutlineShoppingBag className="	" />
                  </Link>
              </span>
              </div>
        </div> */}

              <div className="container">

              <div className="w-full   flex justify-between items-center  fixed top-0 px-12 max-xl:px-8 max-lg:px-5 max-md:px-3 max-sm:px-2  z-50 bg-white  ">
              {/* <div className=""> */}
              <img
                  src="https://xdn.blinkstore.in/uploads/store/lqb8jfsddhg.png"
                  className="w-[90px] "
                  alt="klasdjlfk"
              />
              {/* </div> */}
  
              <div className="flex items-center text-2xl gap-2 ">
              <Link href="#" className="">
                Login
              </Link>
              <span>
                  <Link href="#">
                  <HiOutlineShoppingBag className="	" />
                  </Link>
              </span>
              </div>
              </div>
            
              </div>
        
       
      </div>
    );
  }
  