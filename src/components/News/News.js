import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    // Create state inside component
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&from=2020-05-29&sortBy=publishedAt&apiKey=a6bb5c47a14648a69c386ccdddefbd45`;
   
        fetch(url).then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({ 
                news: data.articles
            })
        })
        .catch((error) => console.log(error));
    }
    renderItems() {
        return this.state.news.map((item) => (
            // key must be unique
        // <NewSingle key={item.id} item={item} />
        <NewSingle key={item.url} item={item} />
        ));
    };

    render() {
    return (
        <div className="row">
           {this.renderItems()} 
        </div>
    );
    }
}

export default News;
