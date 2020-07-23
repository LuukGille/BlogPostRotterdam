import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import * as Styles from '../../sass/main.module.scss';

import Home from '../../pages/homePage';
import Rotterdam from '../../pages/rotterdamPage';
import Login from '../../pages/signPage';

const Navigation = (props) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
		setIsError(false);
		setIsLoading(true);
		try {
			const result = await axios(
				'/wp-json/wp/v2/users/2',
			);
			setData(result.data);
		} catch (error) {
			setIsError(true);
		}
		setIsLoading(false);
	};
	fetchData();
	}, []);
	return (
		<Fragment>
			{isError && <div className={Styles.notification + " " + Styles.notificationError}>Something went wrong ...</div>}
			{isLoading ? (
			<div className={Styles.notification + " " + Styles.notificationMessage}>Loading ...</div>
			) : (
				<Router>
					<div className={Styles.menu}>
					<div className={Styles.menuHeader}>
						<div className={Styles.menuProfile}>
						<div className={Styles.menuProfilePicture}>
							<img className={Styles.menuProfilePictureImg} src={ data.acf && data.acf.profile_image.url }  alt="profile"></img>
						</div>
						<div className={Styles.menuProfileText}>
							<h4 className={Styles.menuProfileTitle}>{ data.name }</h4>
							<p className={Styles.menuProfileSub}>{ data.description }</p>
						</div>
						<div className={Styles.menuProfileSocials}>
							<a href="http://www.instagram.com" rel="noopener noreferrer" target="_blank"><div className={Styles.menuProfileIcons + " " + Styles.menuProfileIconsInstagram} ></div></a>
							<a href="http://www.twitter.com" rel="noopener noreferrer" target="_blank"><div className={Styles.menuProfileIcons + " " + Styles.menuProfileIconsTwitter} ></div></a>
							<a href="http://www.facebook.com" rel="noopener noreferrer" target="_blank"><div className={Styles.menuProfileIcons + " " + Styles.menuProfileIconsFacebook} ></div></a>
							<a href="http://www.linkedin.com" rel="noopener noreferrer" target="_blank"><div className={Styles.menuProfileIcons + " " + Styles.menuProfileIconsLinkedin} ></div></a>
						</div>
						</div>
						<nav className={Styles.menuNav}>
						<ul className={Styles.menuNavSection}>
							<li className={Styles.menuNavLinkText}><NavLink exact activeClassName={Styles.menuNavLinkActive} className={Styles.menuNavLink} to={'/'}>Welcome</NavLink></li>
							<li className={Styles.menuNavLinkText}><NavLink activeClassName={Styles.menuNavLinkActive} className={Styles.menuNavLink} to={'/rotterdam'}>Rotterdam Blog</NavLink></li>
							<li className={Styles.menuNavLinkText}><NavLink activeClassName={Styles.menuNavLinkActive} className={Styles.menuNavLink} to={'/sign-in'}>Sign in</NavLink></li>
						</ul>
						</nav>
					</div>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/rotterdam' component={Rotterdam} />
						<Route path='/sign-in' component={Login} />
					</Switch>
					</div>
				</Router>
			)}
		</Fragment>
	);
}

// data.acf.map(data => <div>{data.acf.profile_image.filename}</div>)

// class Navigation extends Component {
//    state = {
//     users: '',
//     isLoaded: false
//  }

// componentDidMount() {
//   axios.get('/wp-json/wp/v2/users/2')
//   .then(res => this.setState({
//       users: res.data,
//       isLoaded: true
//   }))
//   .catch(err => console.log(err));
// }

//   render() {
//     const { users, isLoaded } = this.state;
//     if(isLoaded) {
//       return (
//         <Router>
//             <div className={Styles.menu}>
//               <div className={Styles.menuHeader}>
//                 <div className={Styles.menuProfile}>
//                   <div className={Styles.menuProfilePicture}>
//                     <img className={Styles.menuProfilePictureImg} src={ users.avatar_urls[96] } alt="profile"></img>
//                   </div>
//                   <div className={Styles.menuProfileText}>
//                     <h4 className={Styles.menuProfileTitle}>{ users.name }</h4>
//                     <p className={Styles.menuProfileSub}>{ users.description }</p>
//                   </div>
//                   <div className={Styles.menuProfileSocials}>
//                     <a href="http://www.instagram.com" rel="noopener noreferrer" target="_blank"><div className={Styles.menuProfileIcons + " " + Styles.menuProfileIconsInstagram} ></div></a>
//                     <a href="http://www.twitter.com" rel="noopener noreferrer" target="_blank"><div className={Styles.menuProfileIcons + " " + Styles.menuProfileIconsTwitter} ></div></a>
//                     <a href="http://www.facebook.com" rel="noopener noreferrer" target="_blank"><div className={Styles.menuProfileIcons + " " + Styles.menuProfileIconsFacebook} ></div></a>
//                     <a href="http://www.linkedin.com" rel="noopener noreferrer" target="_blank"><div className={Styles.menuProfileIcons + " " + Styles.menuProfileIconsLinkedin} ></div></a>
//                   </div>
//                 </div>
//                 <nav className={Styles.menuNav}>
//                   <ul className={Styles.menuNavSection}>
//                     <li className={Styles.menuNavLinkText}><NavLink exact activeClassName={Styles.menuNavLinkActive} className={Styles.menuNavLink} to={'/'}>Welcome</NavLink></li>
//                     <li className={Styles.menuNavLinkText}><NavLink activeClassName={Styles.menuNavLinkActive} className={Styles.menuNavLink} to={'/rotterdam'}>Rotterdam Blog</NavLink></li>
//                     <li className={Styles.menuNavLinkText}><NavLink activeClassName={Styles.menuNavLinkActive} className={Styles.menuNavLink} to={'/sign-in'}>Sign in</NavLink></li>
//                   </ul>
//                 </nav>
//               </div>
//               <Switch>
//                   <Route exact path='/' component={Home} />
//                   <Route path='/rotterdam' component={Rotterdam} />
//                   <Route path='/sign-in' component={Login} />
//               </Switch>
//             </div>
//           </Router>
//       );
//     }
//     return null;
//   }
// }

export default Navigation;
