import '@cedcommerce/ounce-ui/dist/index.css'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Layout1 from './Dashboard/Layout1';
import Layout2 from './Dashboard/Layout2';
import Layout3 from './Dashboard/Layout3';
import ProductList from './Dashboard/ProductList';
import AnnouncementBarComp from './TopAndSideBar/AnnouncementBarComp';
import SideBarComponent from './TopAndSideBar/SideBarComponent';
import TopBarComponent from './TopAndSideBar/TopBarComponent';
import './style.css'
import AddProduct from './Dashboard/AddProduct';


function App() {
    return (
        <>
            <BrowserRouter>
                <AnnouncementBarComp />
                <TopBarComponent />
                <SideBarComponent />
                <Routes>
                    <Route exact path='/' element={<Layout1 />} />
                    <Route exact path="dashboard" element={<Layout1 />} />
                    <Route exact path="/sales" element={<Layout2 />} />
                    <Route exact path="products" element={<Layout3 />} />
                    <Route exact path='productlist' element={<ProductList/>}/>
                    <Route exact path='addproduct' element={<AddProduct/>}/>


                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
