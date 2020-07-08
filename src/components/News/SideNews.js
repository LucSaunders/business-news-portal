import React, { Component } from 'react'
import axios from 'axios'
import SingleSide from './SingleSide'
import Error from './Error'

class SideNews extends Component {
	// Create state inside component
	constructor(props) {
		super(props)
		this.state = {
			sidenews: [],
			error: false,
		}
	}

	componentDidMount() {
		// Using fetch
		// const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&from=2020-05-29&sortBy=publishedAt&apiKey=a6bb5c47a14648a69c386ccdddefbd45`;
		// fetch(url).then((response) => {
		//     return response.json();
		// })
		// .then((data) => {
		//     this.setState({
		//         news: data.articles
		//     })
		// })
		// .catch((error) => console.log(error));
		// Using axios
		const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=a6bb5c47a14648a69c386ccdddefbd45`

		// axios.post(url, {
		// 	data: {
		// 		news: {
		// 			title: 'sibisbios',
		// 			description: 'blahblah',
		// 		},
		// 	},
		// })
		axios
			.get(url)
			.then((response) => {
				this.setState({
					sidenews: response.data.articles,
				})
			})
			.catch((error) => {
				this.setState({ error: true })
			})
	}
	renderItems() {
		if (!this.state.error) {
			return this.state.sidenews.map((item) => (
				// key must be unique
				// <NewSingle key={item.id} item={item} />
				<SingleSide key={item.url} item={item} />
			))
		} else {
			return <Error />
		}
	}

	render() {
		return <div>{this.renderItems()}</div>
	}
}

export default SideNews
