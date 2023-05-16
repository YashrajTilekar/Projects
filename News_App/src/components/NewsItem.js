import React , {Component} from "react";

export class NewsItem extends Component
{
    render()
    {
        let {title ,description ,imgUrl ,newsUrl ,author ,date ,source} = this.props;

        let dobj = new Date(date);

        return (
            <div>
                <div className="card my-3">
                    <img src= {imgUrl} className="card-img-top" alt="..." />

                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%" ,zIndex : "1"}}>
                        {source.name}
                    </span>

                    <div className="card-body">
                        <h5 className="card-title"> {title} ...</h5>
                        <p className="card-text"> {description} ...</p>
                        <p className="card-text"><small className="text-body-secondary">By <strong>{author}</strong> on {dobj.toTimeString()} </small></p>
                        <a href= {newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;