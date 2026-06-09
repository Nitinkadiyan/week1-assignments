
import './resume.css';
import SideBar from '../sideBar.jsx';

export default function Resume(){
const education = [
    {
        title:"Secondary Education",
        year:"2023-2026",
        description:"Completed secondary education with 92.6% marks while building a strong academic foundation."
    },
    {
        title:"Senior Secondary Education (PCM)",
        year:"2023-2026",
        description:"Completed higher secondary education with Physics, Chemistry, and Mathematics, achieving an overall score of 94%"
    },
    {
        title:"Bachelors in Information Technology",
        year:"2023-2026",
        description:"Pursuing a Bachelor’s degree in Information Technology with a current CGPA of 7.5 and a strong focus on software development."
    }
];

const experience = [
    {
        title:"Python and SQL Internship",
        year:"JUNE 2025",
        description:"Made a CLI project(StudySphere) for organisation of notes,deadlines and tasks to do."
    },
  
    {
        title:"DSA & Problem Solving",
        year:"2024 - Present",
        description:"Actively solving Data Structures and Algorithms problems to strengthen logical thinking and coding skills."
    }
];
    return (
        <>
        
        <div className=" main-container">
            <div className=" small-container">
                 
                  
                  
                  <div className="resume">
                  <section id="resume">  <div className="resume-word">RESUME</div></section>
                    
                    <div className="education">
                        <div className="name">EDUCATION</div>
                        <div className="container">
                            <div className="row">
                                
      {education.map((item, index) => (
        <div key={index}className='col-3 mt-5'>
            <h3 className='year'>{item.year}</h3>
          <h4 className='heading'>{item.title}</h4>
          
          <p className='description'>{item.description}</p>
        </div>
      ))}
   
                            </div>
                        </div>
                        
                    </div>
                       <div className="education">
                        <div className="name">EXPERIENCE</div>
                        <div className="container">
                            <div className="row">
                                
      {experience.map((item, index) => (
        <div key={index}className='col-3 mt-5'>
            <h3 className='year'>{item.year}</h3>
          <h4 className='heading'>{item.title}</h4>
          
          <p className='description'>{item.description}</p>
        </div>
      ))}
   
                            </div>
                        </div>
                        
                    </div>
                   
                  </div>


                  
            </div>
        </div>
        
        </>
    )
}