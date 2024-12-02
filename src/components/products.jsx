import { IoMdSearch } from "react-icons/io";
import { IoIosFunnel } from "react-icons/io";
import { Link } from "react-router-dom";

const arrivalData = [
  {
    image: "https://static-master.blinkstore.in/img/dtg-ml-rnhs.90e9f1a6.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },

  {
    image: "1.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },
  {
    image: "https://static-master.blinkstore.in/img/vnl-hm-dcst.a6d82cff.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },

  {
    image: "1.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },
  {
    image: "https://static-master.blinkstore.in/img/dtg-ml-rnhs.90e9f1a6.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },

  {
    image: "1.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },
  {
    image: "https://static-master.blinkstore.in/img/dtg-ml-rnhs.90e9f1a6.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },

  {
    image: "https://static-master.blinkstore.in/img/vnl-hm-dcst.a6d82cff.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },
  {
    image: "https://static-master.blinkstore.in/img/dtg-ml-rnhs.90e9f1a6.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },

  {
    image: "1.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },
  {
    image: "https://static-master.blinkstore.in/img/vnl-hm-dcst.a6d82cff.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },

  {
    image: "1.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },
  {
    image: "https://static-master.blinkstore.in/img/dtg-ml-rnhs.90e9f1a6.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },

  {
    image: "1.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },
  {
    image: "https://static-master.blinkstore.in/img/dtg-ml-rnhs.90e9f1a6.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },

  {
    image: "1.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },
  {
    image: "https://static-master.blinkstore.in/img/vnl-hm-dcst.a6d82cff.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },

  {
    image: "1.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },
  {
    image: "https://static-master.blinkstore.in/img/dtg-ml-rnhs.90e9f1a6.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },

  {
    image: "1.png",
    name: "Unisex DEMONSLAYER Round Neck Half...",
    price: "₹499",
  },
];

export default function AllProducts() {
  return (
    <div className="  w-full mt-4 flex justify-center items-center flex-wrap max-sm:justify-self-center  max-lg:justify-center max-lg:items-center max-lg:justify-self-center max-md:justify-self-center max-sm:justify-self-center max-sm:w-full    ">
      <div className=" max-w-[1399px]  mx-autor">
        <div className="flex justify-between py-4">
          <h1 className=" text-3xl font-normal ">All Products</h1>
          <div className="flex pr-6k">
            <div className="flex  max-md:hidden ">
              <input
                type="text"
                placeholder="Search"
                className="w-60	h-12 rounded	 drop-shadow-xl   "
              ></input>
              <Link to="#">
                <IoMdSearch className="text-3xl text-normal mt-1	drop-shadow-xl" />
              </Link>
            </div>

            <div className="ml-2">
              <Link to="#">
                <IoIosFunnel className="text-3xl text-center justify-self-center text-normal mt-1	" />
              </Link>
            </div>
          </div>
        </div>

        <div className=" w-full gap-6  justify-between flex flex-wrap max-lg:justify-center max-lg:items-center max-lg:justify-self-center max-md:justify-self-center max-sm:justify-self-center max-sm:w-full ">
          {arrivalData.map((data, index) => (
            <div
              className="flex justify-between max-sm:w-auto items-center "
              key={index}
            >
              <div>
                <Link to="#" className="">
                  <img
                    src={data.image}
                    className="w-[280px]   h-80  items-center justify-between"
                    alt=""
                  />

                  <div className=" w-64 ">
                    <Link to="#" className="justify-self-center">
                      {data.name}
                    </Link>
                    <p className="justify-self-center">{data.price}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
