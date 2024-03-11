import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { imgUrl, title, description, content, author, date, source } = this.props
        return (
            <div className='my-3'>
                <div className="card m-4">
                    <img style={{ width: "100%", height: "170px" }} src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description} ...</p>
                        <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"},<br />On {new Date(date).toGMTString()}</small></p>
                        <a href={content} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">more...</a>
                        <span style={{ position: "absolute", right: "0px", bottom: "20px" }} className="badge rounded-pill text-bg-danger">{source}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
