import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import Blog from './Blogs';
// import Like from '../likeButton/index.js';
import * as Styles from '../../sass/main.module.scss';

// const BlogPost = (props) => {
	// const [data, setData] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [isError, setIsError] = useState(false);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 	setIsError(false);
	// 	setIsLoading(true);
	// 	try {
	// 		const result = await axios(
	// 			`/wp-json/wp/v2/users/${author}`,
	// 		);
	// 		setData(result.data);
	// 	} catch (error) {
	// 		setIsError(true);
	// 	}
	// 	setIsLoading(false);
	// };
	// fetchData();
	// }, []);
	// const { acf, content, title } = Blog;
// 	return (
// 		<Fragment>
// 			<div className={Styles.post}>
// 				<div className={Styles.postHeader}>
// 					<div>
// 						{/* <h2 className={Styles.postHeaderTitle}>{ title.rendered}</h2> */}
// 						{/* <p className={Styles.postHeaderSub}>Posted by { author }</p> */}
// 					</div>
// 					<div className={Styles.postHeaderStatus}>
// 						{/* { acf.date } */}
// 						{/* <Like /> */}
// 					</div>
// 				</div>
// 				<div className={Styles.postText}>
// 					{/* <div dangerouslySetInnerHTML={{__html: content.rendered}}></div> */}
// 					<hr />
// 					{/* <h4>Author: { acf.author }</h4> */}
// 					<div className={Styles.postPicture}>
// 						{/* <img className={Styles.postPictureImg} src={ acf.image.url } alt={ acf.image.name }></img> */}
// 					</div>
					
// 				</div>
// 			</div>
// 		</Fragment>
// 	);
// }

export class BlogPost extends Component {
    state = {
        author: '',
        isLoaded: false
    }

    static propTypes = {
        blog: PropTypes.object.isRequired
    }

    componentDidMount() {
        const { author } = this.props.blog;
        const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

        Promise.all([getAuthor]).then(res=> {
            this.setState({
                author: res[0].data.name,
                isLoaded: true
            })
        });
    }

    render() {
        const { acf, content, title } = this.props.blog;
        const { author, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <div className={Styles.post}>
                    <div className={Styles.postHeader}>
                        <div>
                            <h2 className={Styles.postHeaderTitle}>{ title.rendered}</h2>
                            <p className={Styles.postHeaderSub}>Posted by { author }</p>
                        </div>
                        <div className={Styles.postHeaderStatus}>
                            { acf.date }
                            {/* <Like /> */}
                        </div>
                    </div>
                    <div className={Styles.postText}>
                        <div dangerouslySetInnerHTML={{__html: content.rendered}}></div>
                        <hr />
                        <h4>Author: { acf.author }</h4>
                        <div className={Styles.postPicture}>
                            <img className={Styles.postPictureImg} src={ acf.image.url } alt={ acf.image.name }></img>
                        </div>
                        
                    </div>
                </div>
            );
        }

        return null;
    }
}

export default BlogPost
