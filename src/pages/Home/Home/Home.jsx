import Company from "../../../Company/Company";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategoryTabs from "../ShopCategoryTabs/ShopCategoryTabs";
import Wedo from "../Wedo/Wedo";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategoryTabs></ShopCategoryTabs>
            <Wedo></Wedo>
            <Company></Company>
        </div>
    );
};

export default Home;