import React, { Fragment } from 'react';
import * as Styles from  '../../sass/main.module.scss';
import Button from '../button';

const SignIn =(props) => {
	return (
		<Fragment>
			<div className={Styles.sign}>
				<div className={Styles.signInput}>
					Username: <input className={Styles.signUsernameText}></input>
				</div>
				<div className={Styles.signInput}>
					Password: <input type="password" className={Styles.signPasswordText}></input>
				</div>
				<div className={Styles.signSubmit}>
					<Button buttonClass={Styles.btnGreen}>Sign in</Button>
					<Button buttonClass={Styles.btnOrange}>Forgot your password?</Button>
				</div>
			</div>
		</Fragment>
	)
}

export default SignIn;