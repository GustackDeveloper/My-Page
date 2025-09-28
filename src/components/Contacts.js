import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';

function Contacts() {
const [listContacts] = useState([
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/gustavo-dev',
    link: 'https://www.linkedin.com/in/gustavo-chalco-87913b380/',
    type: 'external'
  },{
    title: 'Email',
    value: 'gustavo.dev.fs@gmail.com',
    link: 'mailto:gustavo.dev.fs@gmail.com',
    type: 'mailto'
  },{
    title: 'GitHub',
    value: '@gustavo-dev',
    link: 'https://github.com/GustackDeveloper',
    type: 'external'
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Have a project or just want to connect? Feel free to drop a message!
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div 
                className="contact-value" 
                onClick={() => {
                  if (value.type === 'external') {
                    window.open(value.link, '_blank');
                  } else if (value.type === 'mailto') {
                    window.location.href = value.link;
                  }
                }}
              >
                {value.value}
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts
