import Banner from "./Banner/Banner";
import CollegeData from "./College-Card/CollegeData";
import Gallery from "./Gallery/Gallery";
import Newsletter from "./Newsletter/Newsletter";
import Research from "./Research/Research";
import Search from "./Search/Search";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Search></Search>
            
            <CollegeData></CollegeData>
            <Gallery></Gallery>
            <Research></Research>
            <Testimonial></Testimonial>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;