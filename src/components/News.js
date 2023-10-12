import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'

export default class News extends Component {
  articles=[
{
"source": {
"id": null,
"name": "Livemint"
},
"author": "Ankit Gohel, Nikita Prasad",
"title": "TCS Q2 Results Live Updates: Net profit rises 8.7% to ₹11,342 crore; board approves dividend, buyback of shares | Mint - Mint",
"description": "TCS Q2 Results Live: The leading software major reported a rise of 8.7 per cent in its consolidated net profit at  ₹11,342 crore in the September quarter, compared to  ₹10,431 crore in the corresponding period last year.",
"url": "https://www.livemint.com/companies/company-results/tcs-q2-results-live-updates-tcs-q2-earnings-today-tcs-q2-net-profit-tcs-q2-revenue-tcs-buyback-11696962405577.html",
"urlToImage": "https://www.livemint.com/lm-img/img/2023/10/10/1600x900/tcs_1696962443348_1696962443597.jpg",
"publishedAt": "2023-10-11T12:03:41Z",
"content": "TCS Q2 Results Live: Tata Consultancy Services (TCS) announced its July-September quarter results for fiscal 2023-24 (Q2FY24) today, October 11. The IT major reported a rise of 8.7 per cent in its co… [+28619 chars]"
},
{
"source": {
"id": null,
"name": "The Indian Express"
},
"author": "Science Desk",
"title": "How observing flares on this distant world can help search for alien life - The Indian Express",
"description": "Here is how observing stellar flares in distant systems can help researchers search for planets that can host life.",
"url": "https://indianexpress.com/article/technology/science/observing-flares-distant-world-alien-life-8978277/",
"urlToImage": "https://images.indianexpress.com/2023/03/Trappist-2-atmosphere-20230328.jpg",
"publishedAt": "2023-10-11T12:02:09Z",
"content": "Astrophysicists, using the James Webb Space Telescope, looked at four solar flares exploding from around the star TRAPPIST-1-a small and active celestial body located about 40 light-years from our pl… [+1945 chars]"
},
{
"source": {
"id": null,
"name": "Hindustan Times"
},
"author": "HT Sports Desk",
"title": "India vs Afghanistan Live Score, Cricket World Cup 2023: IND roar back as Pandya breaks big stand - Hindustan Times",
"description": "India vs Afghanistan Live Score, Cricket World Cup 2023: Jasprit Bumrah ended with his best figures in a World Cup match.",
"url": "https://www.hindustantimes.com/cricket/india-vs-afghanistan-live-score-world-cup-odi-today-11-october-2023-ind-vs-afg-cricket-match-arun-jaitley-stadium-delhi-101696993210853.html",
"urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/10/11/1600x900/India-Cricket-WCup-58_1697027170191_1697027217054.jpg",
"publishedAt": "2023-10-11T11:37:31Z",
"content": "India vs Afghanistan Live Score, ICC Cricket World Cup 2023: Afghanistan fought back from being 63/4 at one point to setting up a target of 273 for India to chase. Jasprit Bumrah recorded figures of … [+26089 chars]"
},
{
"source": {
"id": null,
"name": "The Indian Express"
},
"author": "The Indian Express",
"title": "Google accounts now default to passkeys for login: Everything you need to know - The Indian Express",
"description": null,
"url": "https://indianexpress.com/article/technology/tech-news-technology/google-account-passkeys-default-8978252/",
"urlToImage": null,
"publishedAt": "2023-10-11T11:30:39Z",
"content": null
},
{
"source": {
"id": null,
"name": "Hindustan Times"
},
"author": "Mallika Soni",
"title": "How Hamas commander Mohammed Deif planned Israel attack: ‘Decided to…’ - Hindustan Times",
"description": "Mohammed Deif: Mohammed Deif is a survivor of seven Israeli assassination attempts, the most recent in 2021.  | World News",
"url": "https://www.hindustantimes.com/world-news/israel-palestine-war-how-hamas-commander-mohammed-deif-planned-israel-attack-decided-to-101697022167530.html",
"urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/10/11/1600x900/deif-image_1697023288840_1697023293107.jpg",
"publishedAt": "2023-10-11T11:28:26Z",
"content": "For Mohammed Deif launching Al Aqsa Flood- Hamas' surprise deadly attack on Israel- was a plan he worked on since 2021. For Israel it was its 9/11 moment but for Hamas that fired thousands of rockets… [+3717 chars]"
},
{
"source": {
"id": null,
"name": "NDTV News"
},
"author": null,
"title": "\"They Conspire To Break You\": Puducherry's Ex Woman Minister To NDTV - NDTV",
"description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
"url": "https://www.ndtv.com",
"urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
"publishedAt": "2023-10-11T11:25:36Z",
"content": ""
},
{
"source": {
"id": null,
"name": "Hindustan Times"
},
"author": "HT News Desk",
"title": "Rajasthan assembly election now on Nov 25 as ECI revises schedule. Here's why - Hindustan Times",
"description": "The Election Commission of India changed the poll dates of Rajasthan assembly elections from November 23 to November 25. | Latest News India",
"url": "https://www.hindustantimes.com/india-news/election-commission-revises-date-for-rajasthan-poll-voting-now-on-november-25-101697022834527.html",
"urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/10/11/1600x900/The-Shiromani-Akali-Dal--SAD--on-Monday-complained_1682358543549_1697022905643.jpg",
"publishedAt": "2023-10-11T11:16:28Z",
"content": "The Election Commission of India changed the poll dates of Rajasthan assembly elections from November 23 to November 25.\r\nThe Election Commission of India changed the poll dates of Rajasthan assembly… [+2117 chars]"
},
{
"source": {
"id": null,
"name": "Hindustan Times"
},
"author": "Rezaul H Laskar",
"title": "India sets up 24-hour control room to monitor situation in Israel and Palestine - Hindustan Times",
"description": "The move follows concerns about the safety of Indian nationals in the region following the launch of a massive military operation by Israel to retaliate against attacks by Hamas militants last weekend | Latest News India",
"url": "https://www.hindustantimes.com/india-news/india-sets-up-24-hour-control-room-to-monitor-situation-in-israel-and-palestine-101697022268779.html",
"urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/10/11/1600x900/There-have-been-no-reports-of-casualties-among-the_1697022262314.jpg",
"publishedAt": "2023-10-11T11:04:28Z",
"content": "India has set up a 24-hour control room in the external affairs ministry to monitor the situation in Israel and Palestine and to provide information and assistance to its citizens. \r\nThere have been … [+2443 chars]"
}]
  constructor(){
    super();
    console.log("constructor");
    this.state={
      articles:this.articles,
      loading:false
    }
  }
  // async componentDidMount(){
  //   let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=999c3679959647febe28aa463a41e90c"
  //   let data=await axios.get(url)
  //   // this.setState({articles:parsedData.articles})
  //   this.setState(data.data.articles);
  // }
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
      </div>
    )
  }
}
