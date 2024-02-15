import './Sidebar.css';
import {Link} from 'react-router-dom';

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <Link to={'/addproduct'} style={{textDecoration:'none'}}>
                <div className="sidebar-item">
                    {/* <img src={add_product_icon} alt="" /> */}
                    <div><i className="fa-solid fa-cart-shopping" style={{color:'black'}}></i></div>
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{textDecoration:'none'}}>
                <div className="sidebar-item">
                    {/* <img src={list_product_icon} alt="" /> */}
                    <div><i className="fa-solid fa-list"></i></div>
                    <p>Product List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar;