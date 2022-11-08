import { BodyLayout, Button, PageFooter, PageHeader, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react'

const Layout3 = () => {
  return (
	<>
	  <BodyLayout>
				<PageHeader title="PageHeader" sticky action={<Button onClick={()=> window.history.back()}>Go Back</Button>}></PageHeader>
				<TextStyles>dashboard 3</TextStyles>
				<PageFooter>
					<TextStyles>Cedcommerce @ 2020</TextStyles>
				</PageFooter>
			</BodyLayout>
	</>
  )
}

export default Layout3;