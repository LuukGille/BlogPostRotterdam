import React, { Fragment } from 'react';
import Button from '../../components/button';
import * as Styles from  '../../sass/main.module.scss';

const Home = (props) => {

	return (
		<Fragment>
			<div className={Styles.homePage}>
				<div className={Styles.homePageHeader}>
					<div className={Styles.homePageHeaderTitle}>Welcome to my</div>
					<div className={Styles.homePageHeaderTitle}>Blog post</div>
					<div className={Styles.homePageHeaderSub}>Created by Luuk Gille</div>
				</div>
				<div>
					<Button buttonClass={Styles.btnHomepage}>Rotterdam</Button>
				</div>
			</div>
		</Fragment>
	)
}

export default Home;