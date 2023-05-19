import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategoryTabs from "../ShopCategoryTabs/ShopCategoryTabs";
import Wedo from "../Wedo/Wedo";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Wedo></Wedo>
            <ShopCategoryTabs></ShopCategoryTabs>
        </div>
    );
};

export default Home;