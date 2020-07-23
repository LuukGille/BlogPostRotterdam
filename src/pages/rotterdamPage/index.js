import React, { Fragment } from 'react';
import * as Styles from '../../sass/main.module.scss';
import Blogs from '../../components/blog/Blogs';
import Route from '../../assets/images/route.png'

const Rotterdam = (props) => {

	return (
		<Fragment>
			<div className={Styles.blogPage}>
				<div className={Styles.blogPageHeader}>
					<div>Rotterdam</div>
					<a className={Styles.blogPageHeaderLink} href="https://www.google.com/maps/place/Rotterdam/@51.9279653,4.4207889,12z/data=!3m1!4b1!4m5!3m4!1s0x47c5b7605f54c47d:0x5229bbac955e4b85!8m2!3d51.9244201!4d4.4777326"  rel="noopener noreferrer" target="_blank"><img className={Styles.blogPageHeaderRoute} src={ Route } alt="Route" /></a>
				</div>
				<div className={Styles.blogPagePost}>
					<Blogs />
				</div>
			</div>
		</Fragment>
	)
}

export default Rotterdam;