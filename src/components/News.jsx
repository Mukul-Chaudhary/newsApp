import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'

export default class News extends Component {
  constructor(){
    super();
    console.log("constructor");
    this.state={
      articles:[],
      page:1,
      loading:false
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=999c3679959647febe28aa463a41e90c&page=${this.state.page}`
    let data=await axios.get(url)
    // this.setState({articles:parsedData.articles})
    this.setState({articles:data.data.articles});
  }
  handleNextClick=async()=>{
    console.log("next 0");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=999c3679959647febe28aa463a41e90c&page=${this.state.page+1}`
    let data=await axios.get(url)
    // console.log(this.state.page+1);
    this.setState({
      articles: data.data.articles,
      page: this.state.page + 1, // Update the page state
    });
  }
  handlePreviousClick=async()=>{
    console.log("prev");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=999c3679959647febe28aa463a41e90c&page=${this.state.page-1}`
    let data=await axios.get(url)
    // this.setState({articles:parsedData.articles})
    this.setState({
      page: this.state.page - 1, // Update the page state
      articles: data.data.articles,
    });
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Top-headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
              <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={!element.imageUrl?element.urlToImage:"https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"} newsUrl={element.url}/>
            </div>
        })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type='button' onClick={this.handlePreviousClick} className='btn btn-dark'>&larr; Previous</button>
          <button type='button'  className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    ) 
  }
}
