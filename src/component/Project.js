import brush from '../images/projects/brush-loader.png';
import coffee from '../images/projects/coffee-loader.png';
import blog from '../images/projects/blog-webpage.png';
import ring from '../images/projects/ring-loader.png';
import college from '../images/projects/college-webpage.png';
import lightHouse from '../images/projects/404-light-house.png'
import animatedButton from '../images/projects/animated-button.png';
import teaVapour from '../images/projects/tea-vapour-animation.png';
import imgHoverEffect from '../images/projects/image-hover-effect.png';
import courseApp from '../images/projects/course-app-angular.png';
import animatedButtonTwo from '../images/projects/animated-button-two.png';
import animatedMenu from '../images/projects/animated-menu.png';
import normalPort from '../images/projects/normal-portfolio.png';
import spaceProblem from '../images/projects/space-problem-menu.png';
import tourWebpage from '../images/projects/tour-webpage.png';
import bgAnimatedButton from '../images/projects/bg-animated-button.png';
import christmas from '../images/projects/christmas-page.png'

import { useSelector } from 'react-redux';

const Project = () =>{
  const projects = [
    {
      img:coffee,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:lightHouse,
      name:'Brush Loader',
      details: 'This is a brush loader'
    },
    {
      img:blog,
      name:'Blog Webpage',
      details: 'This is a blog webpage'
    },
    {
      img:teaVapour,
      name:'Tea Vapour Animation',
      details: 'This is a college webpage'
    },
    {
      img:brush,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:ring,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:college,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:animatedButton,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:imgHoverEffect,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:courseApp,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:animatedButtonTwo,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:animatedMenu,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:normalPort,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:spaceProblem,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:tourWebpage,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:bgAnimatedButton,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
    {
      img:christmas,
      name:'Coffee Loader',
      details: 'This is a coffee loader'
    },
  ]

  const colorSelector = useSelector(store => store.app.isColorInitial);
    return (
     <div className="projectContainer sectionWrapper" >
     
      <div className="d-flex fontTitle" style={{color: colorSelector}}>
      <svg className='curlyRight' xmlns="http://www.w3.org/2000/svg" width="36" height="102" viewBox="0 0 36 102" fill="none">
  <path d="M35.3467 101.957H27.68C18.5733 101.957 11.1733 94.6147 11.1733 85.6088V63.8864C11.1733 57.7856 6.16 52.8205 0 52.8205V47.5385C6.16 47.5385 11.1733 42.5733 11.1733 36.4726V16.3744C11.16 7.34205 18.5733 0 27.68 0H35.3467V5.28205H27.68C21.52 5.28205 16.5067 10.2472 16.5067 16.3479V36.4462C16.5067 42.1772 13.5067 47.2347 8.98667 50.1531C13.5067 53.0714 16.5067 58.129 16.5067 63.86V85.5824C16.5067 91.6832 21.52 96.6483 27.68 96.6483H35.3467V101.957Z" fill="url(#paint0_linear_247_10)"/>
  <defs>
    <linearGradient id="paint0_linear_247_10" x1="17.6733" y1="0" x2="17.6733" y2="101.957" gradientUnits="userSpaceOnUse">
      <stop style={{stopColor:colorSelector}}/>
      <stop offset="0.328125" style={{stopColor:colorSelector}}/>
      <stop offset="0.625" style={{stopColor:colorSelector}}/>
      <stop offset="1" style={{stopColor:colorSelector}} stop-opacity=""/>
    </linearGradient>
  </defs>
</svg>
      <svg style={{fill:colorSelector}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z"/></svg>
      Projects
      <svg className='curlyRight' xmlns="http://www.w3.org/2000/svg" width="36" height="102" viewBox="0 0 36 102" fill="none">
  <path d="M-0.0009649 101.957H7.6657C16.7724 101.957 24.1724 94.6147 24.1724 85.6088V63.8864C24.1724 57.7856 29.1857 52.8205 35.3457 52.8205V47.5385C29.1857 47.5385 24.1724 42.5733 24.1724 36.4726V16.3744C24.1857 7.34205 16.7724 0 7.6657 0H-0.0009649V5.28205H7.6657C13.8257 5.28205 18.839 10.2472 18.839 16.3479V36.4462C18.839 42.1772 21.839 47.2347 26.359 50.1531C21.839 53.0714 18.839 58.129 18.839 63.86V85.5824C18.839 91.6832 13.8257 96.6483 7.6657 96.6483H-0.0009649V101.957Z" fill="url(#paint0_linear_247_13)"/>
  <defs>
    <linearGradient id="paint0_linear_247_13" x1="17.6724" y1="0" x2="17.6724" y2="101.957" gradientUnits="userSpaceOnUse">
      <stop style={{stopColor:colorSelector}}/>
      <stop offset="0.328125" style={{stopColor:colorSelector}}/>
      <stop offset="0.625" style={{stopColor:colorSelector}}/>
      <stop offset="1" style={{stopColor:colorSelector}} stop-opacity="1"/>
    </linearGradient>
  </defs>
</svg>
      </div>
      <div className="projectArea">
        {
          projects.map((items ,index)=>(
            <div className="projectCard" key={index} >
          <div className="innerLine">
            <img src={items.img} />
            <p className='projectName'>{items.name}</p>
            <p className='projectDetails'>{items.details}</p>
            <div className='linkCta d-flex'>
              <div>github</div>
              <div>netlify</div>
            </div>
          </div>
        </div>
          ))
        }
      </div>
     </div>
    )
}
export default Project