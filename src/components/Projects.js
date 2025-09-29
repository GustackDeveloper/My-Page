import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Cars Web Application',
    des: 'A modern web platform for exploring and ordering automobiles. The application offers an attractive and responsive user interface, providing users with an interactive experience for browsing different car models and making purchase orders. It features smooth animations, a loading screen with dynamic elements, and a well-structured design for a seamless user journey.',
    mission: 'To develop a visually appealing and user-friendly interface for a car catalog platform, enabling users to browse and order vehicles online with an engaging and responsive design.',
    Technologies: 'HTML5, CSS3, JavaScript,Angular',
    images: 'project1.PNG',
    url: 'https://gustackdeveloper.github.io/cars/'
  },
  {
    name: 'Pet Shop E-commerce',
    des: 'A modern web application designed for an online pet shop, offering a responsive and intuitive user experience. The platform allows users to browse products by categories, add items to a shopping cart, apply discounts, and complete orders seamlessly. It features advanced UI components, dark/light mode, and efficient state management with Redux',
    mission: 'To develop a scalable, user-friendly e-commerce platform for pet products, providing an engaging shopping experience with modern UI design, fast performance, and clear navigation.',
    Technologies: 'React, Vite, React Router DOM, Redux Toolkit, Material-UI (MUI), Axios, React Hook Form, CSS Modules, ESLint',
    images: 'project2.PNG',
    url: 'https://gustackdeveloper.github.io/pet-shop/'
  },
  {
    name: 'ICHGram - Instagram Clone',
    des: 'ICHGram is a comprehensive social media application that replicates the core functionalities of Instagram, allowing users to share posts, explore content, send real-time messages, and manage their profiles. The application is built with a modern React frontend and a robust Node.js backend, utilizing MongoDB for database management and featuring Docker-based deployment for seamless development and production environments.',
    mission: 'To design and implement a scalable, full-stack application leveraging modern web technologies to replicate Instagram core features, ensuring high performance, real-time communication, and mobile-first design.',
    TechnologiesFrontend: 'React, Vite, Tailwind CSS, Redux Toolkit, React Router, Socket.IO Client, Driver.js, React Hook Form, Emoji Picker React',
    TechnologiesBackend: 'Node.js, TypeScript, MongoDB, Mongoose, JWT, Cloudinary, multer, Socket.IO, Bcrypt, Multer, Sharp, Nodemailer',
    images: 'project3.PNG',
    url: 'https://github.com/GustackDeveloper/Ichgram'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();

CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Here are three of my most relevant projects, where I have applied my knowledge in full stack web development. Each one demonstrates my ability to build modern, scalable applications focused on user experience.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images" onClick={() => window.open(value.url, '_blank')}>
                <img src={value.images} alt={value.name} />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                {value.Technologies && (
                  <div className="mission">
                      <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                      <div>
                          <h4>Technologies</h4>
                          <div className="des">{value.Technologies}</div>
                      </div>
                  </div>
                )}
                {value.TechnologiesFrontend && (
                  <div className="mission">
                      <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                      <div>
                          <h4>Frontend Technologies</h4>
                          <div className="des">{value.TechnologiesFrontend}</div>
                      </div>
                  </div>
                )}
                {value.TechnologiesBackend && (
                  <div className="mission">
                      <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                      <div>
                          <h4>Backend Technologies</h4>
                          <div className="des">{value.TechnologiesBackend}</div>
                      </div>
                  </div>
                )}
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
