import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,imageUrl ,newsUrl,author,date}=this.props;
    return (
      <>
<div className='my-3'>
<div className="card border-1 border-black">
  <img src={imageUrl?imageUrl:"https://cdn.telanganatoday.com/wp-content/uploads/2023/06/SA-1.jpg"} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <p class="card-text"><small class="text-body-secondary">Published on {new Date(date).toGMTString()} by {author}</small></p>

    <a href={newsUrl} class="btn btn-dark">Read More</a>
  </div>
</div>
</div>
      </>
    )
  }
}
