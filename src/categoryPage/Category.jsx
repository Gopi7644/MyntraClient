import { useParams } from "react-router-dom";

import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import Beauty from "../pages/Beauty";
import Profile from "../pages/Profile";
import Studio from "../pages/Studio";
import Wishlist from "../pages/Wishlist";
import Bag from "../pages/Bag";
import Home from "../pages/Home";
import Genz from "../pages/Genz";
import SubCategoryOne from "../SubCategoryPages/SubCategoryOne";
import Login from "../SubCategoryPages/Login";

const categoryComponents = {
    men: Men,
    women: Women,
    kids: Kids,
    beauty: Beauty,
    profile: Profile,
    studio: Studio,
    wishlist: Wishlist,
    bag: Bag,
    home: Home,
    genz: Genz,
};

const subcategoryComponents = {
    login: Login,
    "subCategoryOne": SubCategoryOne,
};

const subcategoryMapping = {
    "t-shirts": "subCategoryOne",
    "login": "login",
};

const CategoryPage = () => {
    const { category, subcategory } = useParams();

    // Category को लोअरकेस में कन्वर्ट करें ताकि कैपिटलाइज़ेशन की दिक्कत न हो
    const normalizedCategory = category ? category.toLowerCase() : null;
    const CategoryComponent = normalizedCategory ? categoryComponents[normalizedCategory] : null;

    // Subcategory Mapping से कंपोनेंट का नाम निकालें
    const subcategoryKey = subcategoryMapping[subcategory];
    const SubcategoryComponent = subcategoryKey ? subcategoryComponents[subcategoryKey] : null;

    return (
        <div>
            {CategoryComponent ? <CategoryComponent /> : <h1>Category Not Found</h1>}
            {SubcategoryComponent && <SubcategoryComponent />}
        </div>
    );
};

export default CategoryPage;
