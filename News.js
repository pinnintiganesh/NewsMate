import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export default class  extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general',
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  capitalizeFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
    constructor(props)
    {
        super(props);
        this.state={
            articles:[],
            Loading:false,
            page:1,
            totalResults:0
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewMate`;
    }
    async updateNews()
    {
      const url =`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=49edba5e30fd4601a410817e5ac622e3&page=${this.state.page}&pageSize=${this.props.pageSize}`
      {this.setState({Loading:true})};
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults,Loading:false})
    }

    async componentDidMount(){
      this.updateNews();
       
    }

     nexthandler = async() =>
    {
      if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))
      {

      }
      else{
        this.setState({page:this.state.page+1})
        this.updateNews();
      
      }
    } 
    previoushandler = async () =>
    {
     this.setState({page:this.state.page-1});
     this.updateNews();
    }
    fetchMoreData =async ()=>
    {
      this.setState({page:this.state.page+1})
      const url =`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=49edba5e30fd4601a410817e5ac622e3&page=${this.state.page}&pageSize=${this.props.pageSize}`
      let data=await fetch(url);
      let parsedData =await data.json()
      this.setState({

        articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults
      })
    }

  render() {
    return (
        <>
      <div className='container  my-3'>
        <h1 className='text-center' style={{margin:'55px 0px'}}>NewsMate - Top Headlines</h1>
        <div className='text-center'>
        {this.state.Loading && <Spinner />}
        </div>
        <InfiniteScroll 
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !==this.state.totalResults}
        loader={<Spinner />}
        >
          <div className='container'>
        <div className='row '>
        {!this.state.Loading &&this.state.articles.map((element)=>{
            return  <div className='container col-md-4 ' key={element.url}>
            <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author?element.author:"Unknown"}/>
            </div>
        

        })}
       
        </div>
      
        </div>
        </InfiniteScroll>
      </div>
      
    </>
    
    )
  }
}
