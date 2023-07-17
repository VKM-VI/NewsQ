import React, { Component } from 'react'
import Blank from './Blank.png'
export class NewsItem extends Component {
  render() {
    let {title,des,imgUrl,newsUrl,author,publishedAt,source} = this.props;
    return (
      <div>
        <div className="card my-4" style={{width: "18rem",justifyContent: 'space-evenly' } }>
          <img src={imgUrl?imgUrl: Blank  }  className="card-img-top " alt="..."/>
          <div className="card-body"  >
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left:'90%', zIndex:'1'}}>
            {source}
            </span>
          
                <h5 className="card-title ">{title}...</h5>
                <p className="card-text ">{des}...</p>
                <p className="card-text "><small className="text-body-secondary">By {!author ? "Unknown" :author} on {new Date(publishedAt).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark  ">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
