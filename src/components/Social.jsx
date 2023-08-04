import React from 'react'
import './Ball.css'
import { SocialIcon } from 'react-social-icons'
import { github } from "../assets";

const socialMediaHandlesLinks = {
    gitHub: 'https://github.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in//',
    twitter: 'https://twitter.com/'
  }
const Social = () => {
  return (

            <div className="social-handle-list">
          {/* <li className="social-handle-item">
            <SocialIcon url={socialMediaHandlesLinks.gitHub}  />
            <span className='text'>
            Github
            </span>
          </li> */}
          <li className="social-handle-item">
            <SocialIcon url={socialMediaHandlesLinks.linkedin} />
            <span className='text'>
            Linkedin
            </span>
          </li>

          <li className="social-handle-item">
            <SocialIcon url={socialMediaHandlesLinks.instagram} />
            <span className='text'>
            Instagram
            </span>
          </li>

          <li className="social-handle-item">
            <SocialIcon url={socialMediaHandlesLinks.twitter} />
            <span className='text'>
            Twitter
            </span>
          </li>
      </div>


  )
}

export default Social
