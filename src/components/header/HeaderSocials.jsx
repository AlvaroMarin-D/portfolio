import React from 'react';
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {TbCertificate} from 'react-icons/tb'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/alvaro-marin77/" target="_blank" rel='noreferrer'> <BsLinkedin/> </a>
        <a href="https://github.com/AlvaroMarin-D" target="_blank" rel='noreferrer'> <BsGithub/> </a>
        <a href="https://www.credly.com/users/alvaromarin" target="_blank" rel='noreferrer'> <TbCertificate/> </a>
    </div>
  )
}

export default HeaderSocials