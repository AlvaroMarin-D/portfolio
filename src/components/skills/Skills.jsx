import React from 'react';
import './skills.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>My Skills</h2>
   
      <div className='container services_container'>
        <article className='service'>
          <div className="service_head">
            <h3>General</h3>
          </div>
          <ul className='service_list'>
            <li>
              <div>
                <BiCheck className='service_list-icon'/>
              </div>
              <p> Able to effectively read documentation, in order to solve technical problems</p>
            </li>
            <li>
              <div>
                <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to collaborate with teammates in a professional mannner, to achieve a common goal</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to communicate in a respectful manner towards All individuals</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to discuss techincal problems, when a solution is not clearly seen</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to work independently to accomplish task, and able to ask for assistance when help is desired</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to learn new techniques and technologies in a short time frame</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Development</h3>
          </div>
          <ul className='service_list'>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Can utilize frameworks, in order to incorporate them within an application</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to design responsive web applications, in order to adapt to various devices</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to design schemas and connect applications to databases</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Can create basic user authentication and authorization for application purposes</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Can incorporate templating into applications for a fluid design</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Can implement routing into applications for navigational purposes</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Can implement logic in order to perform specific tasks</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Other</h3>
          </div>
          <ul className='service_list'>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to clean and analyze data, in order to properly share results in meaningful manner</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to display data results in a significant way following dashboarding methodology</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to process mathematical data using different technologies</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to read and understand technical drawings</p>
            </li>
            <li>
            <div>
              <BiCheck className='service_list-icon'/>
              </div>
              <p>Able to output exllecent quality of work, when put to a task</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}
export default Services