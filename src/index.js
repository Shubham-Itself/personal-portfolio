import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

import About from './component/About';
import Experience from './component/Experience';
import Skill from './component/Skill';
import Testimonial from './component/Textimonial';
import Project from './component/Project';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

const route = createBrowserRouter([
  {
    path:'/', element:<App/>,
    children:[
      {path: '/', element:<About/>},
      {path: '/experience', element:<Experience/>},
      {path: '/skill' , element : <Skill/>},
      {path:'/testimonial' , element: <Testimonial/>},
      {path:'project' , element:<Project/>}
    ]
  }
  
])

root.render(<RouterProvider router={route}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
