import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <div className="">


       
              <div className="  mx-auto  ">

              <div className="w-full   flex justify-between   fixed top-0 px-8 max-xl:px-8 max-lg:px-5 max-md:px-3 max-sm:px-4  z-50 bg-white   ">
              {/* <div className=""> */}
              <img
                  src="https://xdn.blinkstore.in/uploads/store/lqb8jfsddhg.png"
                  className="w-[90px] "
                  alt="klasdjlfk"
              />
              {/* </div> */}
  
              <div className="flex items-center text-2xl gap-2   ">
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
  