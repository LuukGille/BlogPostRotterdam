import React, { Fragment } from 'react';
import * as Styles from  '../../sass/main.module.scss';
import SignIn from '../../components/sign-in/index.js';

const Sign = (props) => {

	return (
		<Fragment>
			<div className={Styles.sigIn}>
				<SignIn />
			</div>
		</Fragment>
	)
}

export default Sign;