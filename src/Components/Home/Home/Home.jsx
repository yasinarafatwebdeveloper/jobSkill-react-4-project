import BannerSection from "../BannerSection/BannerSection";
import CardItem from "../CardItem/CardItem";
import SearchBar from "../SearchBar/SearchBar";
import SliderSection from "../SliderSection/SliderSection";


const Home = () => {
    return (
        <div>
            {/* this is home page */}
            <BannerSection></BannerSection>
            <SearchBar></SearchBar>
            <CardItem></CardItem>
            <SliderSection></SliderSection>
        </div>
    );
};

export default Home;