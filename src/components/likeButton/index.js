import React, { Component } from 'react';
import * as Styles from '../../sass/main.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

class Like extends Component {
	state = {
		likes: 0
	};

	addLike = () => {
	let newCount = this.state.likes + 1;
		this.setState({
		likes: newCount
		});
	};

	render() {
		const likes = this.state.likes;
		if (likes === 0) {
		return (
			<button className={Styles.like} onClick={this.addLike}>
				<FontAwesomeIcon className={Styles.likeIcon} icon={ faThumbsUp } color="grey" />
			</button>
		);
		}
		if (likes === 1) {
		return (
			<button className={Styles.like} onClick={this.addLike}>
				<FontAwesomeIcon className={Styles.likeIcon} icon={ faThumbsUp } color="green" />
			</button>
		);
		}
		if (likes > 1) {
		return (
			<div>
			<button className={Styles.like} onClick={this.addLike}>
				<FontAwesomeIcon className={Styles.likeIcon} icon={ faThumbsUp } color="green" />{"  "}{ likes}
			</button>
			</div>
		);
		}
	}
}

export default Like;