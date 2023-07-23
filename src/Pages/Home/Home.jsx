import Banner from "./Banner/Banner";
import CollegeData from "./College-Card/CollegeData";
import Gallery from "./Gallery/Gallery";
import Research from "./Research/Research";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <CollegeData></CollegeData>
            <Gallery></Gallery>
            <Research></Research>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;