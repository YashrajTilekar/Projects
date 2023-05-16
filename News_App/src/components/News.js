import React ,{Component} from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component
{
    static defaultProps = {
        country : "in",
        pageSize : 8,
        category : "general"
    }

    PropTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }

    constructor(props)
    {
        //console.log("constructor")
        super(props);
        this.state = {
        articles : [],
        loading : false,
        page : 1, 
        totalArticles : 0
        };

        document.title = `NewsMonkey | ${this.props.category}`;
    }

    async updateNews()
    {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=01d35d403f704646a0c03f35e1533484&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles : parsedData.articles,
            totalArticles : parsedData.totalResults,
            loading : false
        });
    }

    async componentDidMount()
    {
        //console.log("cdm")  pageSize = totalresults / pages
        this.updateNews();
    }

    handlePrevClick = async ()=>
    {
        this.setState({page : this.state.page - 1});
        this.updateNews();
    }

    handleNextClick = async ()=>
    {
        this.setState({page : this.state.page + 1 });
        this.updateNews();
    }

    render()
    {
        //console.log("render");
        return (
            <div className="container my-3" >
                <h1 className="text-center">NewsMonkey - Top <strong>{this.props.category}</strong> Headlines</h1>
                {this.state.loading? <Spinner />:null}
                
                <div className="row">
                    {this.state.loading === false &&  this.state.articles.map((element)=>{
                        //console.log(element)
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title = {element.title? element.title : ""} description = {element.description? element.description : ""}  
                                imgUrl = {element.urlToImage? element.urlToImage : ""} newsUrl = {element.url? element.url : ""} 
                                author = {element.author} date = {element.publishedAt} source = {element.source} />
                            </div>
                        );
                    })}

                    <div className="container d-flex justify-content-between">
                    <button type="button" disabled = {this.state.page <= 1} className="btn btn-secondary" onClick={this.handlePrevClick}>
                        &larr; Previous
                    </button>
                    <button type="button" disabled = {(this.state.page > Math.ceil(this.state.totalArticles/this.props.pageSize))} 
                    className="btn btn-secondary" onClick={this.handleNextClick}>
                        Next &rarr;
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;