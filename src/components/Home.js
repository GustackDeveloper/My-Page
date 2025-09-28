import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>GUSTAVO</span>
            </div>
            <div className="des">
                {/* 30 */}
                Since 2024, I have been training as a Full Stack Developer at ITCareerHub, gaining skills in HTML, CSS, JavaScript, React, Node.js, TypeScript, Docker, Cloud technologies, and AI tools.
I am passionate about technology, problem-solving, and developing innovative digital solutions. My goal is to combine my experience in management and customer service with the IT world to create valuable products.
Skills: Teamwork, adaptability, fast learning, analytical thinking, and results-oriented mindset.
            </div>
            
            <a href="/CV.docx" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />

            </div>
        </div>
    </section>
    )
}

export default Home
