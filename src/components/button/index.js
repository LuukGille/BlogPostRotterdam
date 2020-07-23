import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from '../../sass/main.module.scss';

const Button = (props) => {
	const { buttonClass } = props;

	return (
		<Fragment>
			<Link className={Styles.btn} to={`/${props.children}`}>
				<button className={buttonClass}>
					{props.children}
				</button>
			</Link>
		</Fragment>
	)
}

export default Button;