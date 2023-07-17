import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class Global extends Component {
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page :1

        }
    }
    async componentDidMount(){
        document.title = `${this.props.Heading} - NewsQ`
        let url =`https://newsapi.org/v2/everything?q=global&apiKey=85ef7428292c4fdf988546c463fa11e7&pagesize=20`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({articles:parseData.articles,
            totalResults: parseData.totalResults,
            loading: false})
    }
    HandleLeft = async ()=>{
        let url =`https://newsapi.org/v2/everything?q=global&apiKey=85ef7428292c4fdf988546c463fa11e7&page=${this.state.page - 1}&pagesize=20`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({
            page: this.state.page-1,
            articles: parseData.articles,
            loading: false
        })
    }

    HandleRight =async()=>{
        let url =`https://newsapi.org/v2/everything?q=global&apiKey=85ef7428292c4fdf988546c463fa11e7&page=${this.state.page + 1}&pagesize=20`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({
            page:this.state.page+1,
            articles: parseData.articles,
            loading: false
        })
    
    }

    
  render() {
    let {Heading,mode} = this.props;
    return (
      <div className='container my-3'>
        <h2 className='text-center'>{Heading}</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        { !this.state.loading && this.state.articles.map((element)=>{
            return <div className="col md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,60):""} des={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
            </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" onClick={this.HandleLeft} className={`btn btn-${mode==='light'?'dark':'light'}`} disabled={this.state.page<=1}> &larr; prev</button>
        <button type="button"  onClick={this.HandleRight} className={`btn btn-${mode==='light'?'dark':'light'}`} disabled={this.state.page+1> Math.ceil(this.state.totalResults/20)}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}


export default Global
