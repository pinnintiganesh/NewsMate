
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { createBrowserRouter, createRoutesFromElements, Route,Link,Outlet } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
export default class App extends Component {
   router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path='/general' index element={<News key="general" pageSize={6}  category="general" />} />
        <Route path='/business' element={<News key="business" pageSize={6} category="business"/>} />
        <Route path='/entertainment'  element={<News key="entertainment" pageSize={6} category="entertainment"/>} />
        <Route path='/general'  element={<News  key="general" pageSize={6} category="general" />} />
        <Route path='/health' element={<News key="health" pageSize={6} category="health" />} />
        <Route path='/science' element={<News key="science" pageSize={6} category="science" />} />
        <Route path='/sports' element={<News key="sports" pageSize={6} category="sports" />} />
        <Route path='/technology' element={<News key="technology" pageSize={6} category="technology"/>} />
        
        


        </Route>

    )
  )

  render() {
    
    return (
      <div>
        <RouterProvider router={this.router}/>
        {/* <Router>
       
       
        <Switch>
          <Route exact   path='/'> <News key="general" pageSize={6} category="general"/></Route>
          <Route exact  path='/business'> <News key="business" pageSize={6} category="business"/></Route>
          <Route exact  path='/entertainment'> <News key="entertainment"  pageSize={6} category="entertainment"/></Route>
          <Route exact path='/general'> <News  key="general" pageSize={6} category="general"/></Route>
          <Route exact  path='/health'> <News key="health" pageSize={6} category="health"/></Route>
          <Route exact  path='/science'> <News key="science" pageSize={6} category="science"/></Route>
          <Route exact  path='/sports'> <News  key="sports" pageSize={6} category="sports"/></Route>
          <Route exact  path='/technology'> <News key="technology" pageSize={6} category="technology"/></Route>

        </Switch>
        </Router> */}
      </div>
    )
  }
}

const Root =() =>
{
  return  (
    <>  
   <Navbar />
  <div>
    <Outlet />
  </div>
  </>)
}