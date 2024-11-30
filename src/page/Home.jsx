import SimpleSlider from "../components/arrivals"
import Footer from "../components/footer"
import Header from "../components/Navbar"
import AllProducts from "../components/products"
import Shoping from "../components/shop"
import Hero from "../components/Hero"

const Home = ()=>{
    return (
        <div>
              <Header />
              <Hero/>
            <Shoping />
            <SimpleSlider />
            <AllProducts />
            <Footer />
            
        </div>
    )
}

export default Home