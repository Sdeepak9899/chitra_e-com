import { Link } from "react-router-dom";

const shopData = [
  {
    image:"https://static-master.blinkstore.in/img/vnl-hm-dcst.a6d82cff.png",
    name:"sticker"
  },

  {
    image:"https://static-master.blinkstore.in/img/sbl-ac-pg.b9f59ee7.png",
    name:"Pop Grips"
  },
  {
    image:"https://static-master.blinkstore.in/img/dtg-ml-rnhs-back.f2e39ba2.png",
    name:"Unisex t-shirt"
  },

  {
    image:"https://static-master.blinkstore.in/img/sbl-ac-mp.33c6950f.png",
    name:"Mouse Pads"
  },

  {
    image:"https://idn.blinkstore.in/ARbFKyL_qAgftzWLhhzMaOmoFkw=/320x0/filters:format(png)/xdn.blinkstore.in/uploads/designs/pod-LPKniho4hwDEbsX.svg",
    name: "Onesies"
  },

  {
    image:"https://static-master.blinkstore.in/img/sbl-hm-cosq.8119b3a9.png",
    name:"coasters"
  },

  {
    image:"https://static-master.blinkstore.in/img/sbl-hm-cc.7e06735d.png",
    name:"Cushion Covers"
  },
]

export default function Shoping(){
    return(
        
            <div className=" w-full mt-4 flex justify-center items-center flex-wrap max-lg:justify-center max-lg:items-center max-lg:justify-self-center max-md:justify-self-center max-sm:justify-self-center max-sm:w-full  ">
           <div className="container">
             <h2 className="text-3xl font-normal	">Shop</h2>
             
             

              <div className="  flex justify-start gap-2 flex items-center flex-wrap  ">
              {
                shopData.map((data,index)=>(
                  <div className="w-44 mt-4 max-sm:w-28 max-sm:px-2 " key={index}>
                <Link>
                  <img
                    src={data.image}
                    className="w-full  justify-center items-center"
                    alt=""
                  />

                  <p className="	text-xl font-normal bg-gray-50 border-gray-50	justify-center items-center">
                    {data.name}
                  </p>
                </Link>
              </div>
                ))
              }
              </div>


            </div>
          </div>
        
       
    )
}