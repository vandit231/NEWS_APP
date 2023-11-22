import React from 'react'
import '../styles/team.css'
import { RiLinkedinLine, RiGithubLine } from 'react-icons/ri';
import team01 from '../images/Karuna.jpg'

import team02 from '../images/mugdha.jpg'
import team03 from '../images/vandit.jpg'
import team04 from '../images/govind.jpg'
import team05 from '../images/Sanskar.jpg'
import logo from "../images/Mainlogo.png"

const teamMembers = [
    {
        imgUrl: team01,
        name: 'Karuna Nikam',
        position: 'Frontend Developer',
        social: {
            linkedin: 'https://www.linkedin.com/in/karuna-nikam-b900ba248/',
            github: 'https://github.com/karunanik',
          }

    },

    {
        imgUrl: team03,
        name: 'Vandit Sharma',
        position: 'Backend Developer',
        social: {
            linkedin: 'https://www.linkedin.com/in/vandit-sharma-118357166/',
            github: 'https://github.com/vandit231',
          }
    },

    {
        imgUrl: team02,
        name: 'Mugdha Thoke',
        position: 'Frontend Developer',
        social: {
            linkedin: 'https://www.linkedin.com/in/mugdha-thoke-a8b2a4237/',
            github: 'https://github.com/MugdhaThoke',
          }
    },

    {
        imgUrl: team04,
        name: 'Govind Tyagi',
        position: 'Beckend Developer',
        social: {
            linkedin: 'https://www.linkedin.com/in/govind-tyagi-b6a923259',
            github: 'https://github.com/govindtyagi16',
          }
    },

    {
        imgUrl: team05,
        name: 'Sanskar',
        position: 'Database Modelling',
        social: {
            linkedin: 'https://www.linkedin.com/in/sanskar-s-663970247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/Coderbreathe',
          }
    },
]

const Navbar = () => {
  return (
    <nav className="navbar " >
      <div className="container" style={{width:"90px"}}>
        {/* <h1>NEWSIY</h1> */}
        <img src={logo} alt="image1" style={{ width: "90px", height: "90px", paddingTop: "10px", paddingBottom: "10px",marginRight:"0px" ,marginLeft:"25px",}} />
        <h1 className="text-lg  font-extrabold ">
        
        <a href="/" style={{fontFamily:"manrope" ,marginLeft:"0px"}}>NEWSVERSE</a>
        </h1>
      </div>
    </nav>
  );
};

const Team = () => {
  return (
    <div>
      <Navbar />
      <section className="our__team">
        <div className="container">
          <div className="team__content">

            <h2 className='text-center my-2 ms-10 ' style={{fontFamily:"'Manrope', sans-serif"}}>
              Meet The Team<span className="highlight"></span>
            </h2>
          </div>
          <div className="team__wrapper">
            {teamMembers.map((item, index) => (
              <div className="team__item  " key={index}>
                <div className="team__img ">
                  <img src={item.imgUrl} alt="" style={{width:"100%"}} />
                </div>
                <div className="team__details text-lg ">
                  <h4><b>{item.name}</b></h4>
                  <p className="description"><b>{item.position}</b></p>

                  <div className="team__member-social">
                    <span>
                      <a
                        href={item.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-linkedin-line "><RiLinkedinLine/></i>
                      </a>
                    </span>
                    <span>
                        <a
                        href={item.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-github-line"><RiGithubLine/></i>
                    </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;