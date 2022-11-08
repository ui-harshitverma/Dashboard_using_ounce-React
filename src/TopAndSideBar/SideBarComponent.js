import { NewSidebar } from '@cedcommerce/ounce-ui';
import React from 'react'
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { MdPlaylistAdd } from "react-icons/md";
import { BsCardList } from "react-icons/bs";

const SideBarComponent = () => {
	const history = useNavigate();
	const subMenu = [
		{
			id: "Default1",
			content: "Default1",
			path: "/dashboard1",
			icon: <FaHome size={20} color="#af65ff"/>,
		}
	];
	const menu = [
		{
			id: "dashboard",
			content: "Dashboard",
			path: "/dashboard",
			icon: <FaHome size={23} color="#af65ff"/>,
			
		},
		{
			id: "sales",
			content: "Sales",
			path: "/sales",
			icon: <svg viewBox="64 64 896 896" focusable="false" data-icon="fund" width="20" height="20" fill="#af65ff" aria-hidden="true"><path d="M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-40 632H134V236h752v560zm-658.9-82.3c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 00-11.3 0L531 565 416.6 450.5a8.03 8.03 0 00-11.3 0l-214.9 215a8.03 8.03 0 000 11.3l36.7 36.9z"></path></svg>,
		},
		{
			id: "products",
			content: "Products",
			path: "/products",
			icon: <FaHome size={20} color="#af65ff"/>,
		},
		{
			id: "productList",
			content: "Product List",
			path: "/productlist",
			icon: <BsCardList size={23} color="#af65ff"/>,
		},
		{
			id: "addproduct",
			content: "Add Product",
			path: "/addproduct",
			icon: <MdPlaylistAdd size={25} color="#af65ff"/>,
		},

	];
	function onChange(e) {
		// if (e.path.includes(e.path))
			// window.open(e.path, "_self");
			history(e.path)
	}

	return (
		<NewSidebar
			menu={menu}
			subMenu={subMenu}
			mobileLogo={
				<img
					width={40}
					src="https://i.imgur.com/cqfQhek.png"
					alt="CedCommerce"
					title="CedCommerce"
				/>
			}
			// logo={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E7E6FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>}
			onChange={onChange}
		/>
	)
}

export default SideBarComponent;
