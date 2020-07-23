import React, { useState, useEffect, Fragment } from 'react';
import BlogPost from './BlogPost';
import axios from 'axios';
import * as Styles from '../../sass/main.module.scss';

const Blogs = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
		setIsError(false);
		setIsLoading(true);
		try {
			const result = await axios(
				'/wp-json/wp/v2/blogs',
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
				<div>
					{data.map(blog => (
						<BlogPost key={blog.id} blog={blog} />
					))}
				</div>
			)}
		</Fragment>
	);
}

export default Blogs
