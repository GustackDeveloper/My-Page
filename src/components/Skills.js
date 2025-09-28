import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faDocker, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'Standard markup language for creating web pages. I master semantic structure, modern HTML5 elements and best practices to create accessible and well-structured web content.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'Styling language for designing web pages. Expert in CSS3, Flexbox, Grid, animations, responsive design and preprocessors like Sass to create modern and attractive interfaces.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'Versatile programming language for web development. I master ES6+, asynchronous programming, DOM manipulation, modern APIs and design patterns to create interactive applications.',
    icon: faJs},
  {
    name: 'ReactJs',
    des: 'JavaScript library for building user interfaces. Expert in components, hooks, global state, routing and React ecosystem to develop scalable and efficient web applications.',
    icon: faReact
  },
  {
    name: 'MySQL',
    des: 'Relational database management system. Experience in schema design, complex queries, performance optimization and database administration for robust applications.',
    icon: faDatabase
  },
  {
    name: 'Docker',
    des: 'Containerization platform that allows me to package applications and their dependencies into lightweight, portable containers for consistent deployment across different environments.',
    icon: faDocker
  },
  {
    name: 'MongoDB',
    des: 'NoSQL database that provides high performance, high availability, and easy scalability. Perfect for modern applications that require flexible data models.',
    icon: faDatabase
  },
  {
    name: 'Node.js',
    des: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine. Enables server-side JavaScript development with excellent performance and scalability.',
    icon: faNodeJs
  },
  {
    name: 'TypeScript',
    des: 'Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale with static type definitions.',
    icon: faCode
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Throughout my IT career, I have developed skills in both frontend and backend, allowing me to build complete and functional web applications. I have learned to work with agile methodologies, coding best practices, and version control, always focusing on quality, scalability, and user experience.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

