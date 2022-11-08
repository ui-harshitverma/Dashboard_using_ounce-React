import { Avatar, Button, Card, FlexChild, FlexLayout, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";

export const AddUser = () => {
	const sellerArr = [
		{
		    img: "https://emilus.themenate.net/img/avatars/thumb-2.jpg",
			name: "Catherine Zeta",
			year: "02 Dec 2020",
			sale: "137 Sales",
		},
		{
			img: "https://emilus.themenate.net/img/avatars/thumb-4.jpg",
			name: "Bruce Willis",
			year: "20 May 2020",
			sale: "137 Sales",
		},
		{
			img: "https://emilus.themenate.net/img/avatars/thumb-2.jpg",
			name: "Christian Bale",
			year: "02 March 2021",
			sale: "137 Sales",
		},
		{
			img: "https://emilus.themenate.net/img/avatars/thumb-4.jpg",
			name: "Vin Diesel",
			year: "01 Februar 2021",
			sale: "137 Sales",
		},
		{
			img: "https://emilus.themenate.net/img/avatars/thumb-2.jpg",
			name: "Christian Bale",
			year: "02 March 2021",
			sale: "137 Sales",
		},
		{
			img: "https://emilus.themenate.net/img/avatars/thumb-2.jpg",
			name: "Catherine Zeta",
			year: "02 Dec 2020",
			sale: "137 Sales",
		},
		{
			img: "https://emilus.themenate.net/img/avatars/thumb-2.jpg",
			name: "Catherine Zeta",
			year: "02 Dec 2020",
			sale: "137 Sales",
		}

	];
	return (
		<>
			<Card
				cardType="Plain"
			>
				<FlexLayout desktopWidth="100" tabWidth='100' mobileWidth='100' spacing="loose">
					{sellerArr.map((items) => {
						return (
							<FlexLayout valign="center" halign="fill" spacing="loose">
								<FlexLayout valign="center" spacing="loose">
									<Avatar
										image={items.img}
										size="large"
									/>
									<FlexChild>
										<TextStyles
											fontweight="extraBold"
											content={items.name}
										/>
										<TextStyles
											fontweight="normal"
											textcolor="light"
											type="simpleText"
											content={items.year}
										/>
									</FlexChild>
								</FlexLayout>
								<Button onClick={()=>alert('add user button clicked')} content="Add" length="fullBtn" type="Outlined" icon={<AiOutlineUserAdd/>}/>
							</FlexLayout>
						);
					})}
				</FlexLayout>
			</Card>

		</>
	)
}

export default AddUser
