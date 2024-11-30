import SimpleSlider from "./arrivals";
import Footer from "./footer";
import Header from "./Navbar";
import AllProducts from "./products";
import Shoping from "./shop";

export default function Store(){
    return(
        <div>
            

            <Header />
            <Shoping />
            <SimpleSlider />
            <AllProducts />
            <Footer />
            
        </div>
    )
}