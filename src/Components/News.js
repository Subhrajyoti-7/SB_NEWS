import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import unavailable_image from './Images/unavailable_image.jpg'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (String) => {
        if (props.category === null || props.category === '') {
            return String.charAt(0).toUpperCase() + String.slice(1) + 'Home -';
        }
        return String.charAt(0).toUpperCase() + String.slice(1) + ' -';
    }

    const updateNews = async () => {
        props.setProgress(10);
        //const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&page=${page}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30);
        let parseData = await data.json()
        props.setProgress(70);
        setLoading(false);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        // setPage(page + 1);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} SB NEWS`;
        updateNews();
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        //const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page + 1}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&page=${page + 1}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`
        setPage(page + 1);
        let data = await fetch(url)
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
    };

    return (
        <div className='container my-3'>
            {/* <h2 className='text-center my-3' style={{ color: 'Green' }}><u>SB News - {capitalizeFirstLetter(props.category)} Headlines</u></h2> */}
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}>
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems imgUrl={element.urlToImage ? element.urlToImage : unavailable_image} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} content={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </InfiniteScroll>
        </div >
    )
}

export default News
