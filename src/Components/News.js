import React, { Component } from 'react'
import NewsItems from './NewsItems'
import unavailable_image from './Images/unavailable_image.jpg'
import Spinner from './Spinner';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        this.updateNews(this.state.page);
    }

    async updateNews(pageNo) {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${pageNo}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}`
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            page: pageNo,
            totalResults: parseData.totalResults,
            articles: parseData.articles,
            loading: false
        })
    }
    //Button handling Code
    handlePrevious = async () => {
        this.updateNews(this.state.page - 1)
    }
    handleNext = async () => {
        this.updateNews(this.state.page + 1)
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center my-3' style={{ color: 'Green' }}><u>SB News - Top Headlines</u></h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems imgUrl={element.urlToImage ? element.urlToImage : unavailable_image} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} content={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevious} type="button" id="previous" className="btn btn-dark">&larr; Previous</button>
                    <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} onClick={this.handleNext} type="button" id="next" className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
