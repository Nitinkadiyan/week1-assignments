import './about.css';
import SideBar from '../sideBar.jsx';
export default function About(){
    return (
        <>
        
        <div className="BigContainer">
            <div className="Small">
               
                <div className="about">
                    <div className="about-upper">
                        <h1 className='about-main'>ABOUT ME</h1>
                    <h3><span className='about-designation'>I'm</span> <span className='about-name'>Nitin Kumar</span>,<span className='about-designation'>Full Stack Developer / DSA Enthusiast</span></h3>
                    <p className='about-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestias pariatur natus iure ratione. Dolor nulla, qui similique, repellat suscipit saepe quia impedit voluptates aliquid fuga libero nihil recusandae ut.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nisi vitae vero earum voluptatem impedit, tempore esse aut, modi iure eum, maiores nihil! Architecto rerum necessitatibus saepe cum expedita inventore.</p>
                    </div>
                    <div className="skills-container mb-5">
                        <div className="about-skills">
                            <h3 className='about-h3'>What I Do?</h3>
                            <div className="profession">
                                <div className="talent">
                                    <div className="left-icons">
                                      <i  class="fa-solid fa-brain"></i>

                                    </div>
                                    <div className="define-icons">
                                        <h4 className='exact-skill mt-2'>Problem Solving</h4>
                                        <p className='exact-skill-para'>Strengthening logical thinking and analytical skills by solving Data Structures and Algorithms problems across various coding platforms</p>
                                    </div>
                                </div>
                             
                                <div className="talent">
                                       <div className="left-icons">
                                       <i  class="fa-solid fa-book"></i>

                                    </div>
                                    <div className="define-icons">
                                        <h4 className='exact-skill mt-2'>Full Stack Development</h4>
                                        <p className='exact-skill-para'>Building modern and responsive web applications while exploring frontend and backend technologies.</p>
                                    </div>
                                </div>

                                   <div className="talent">
                                       <div className="left-icons">
                                       <i  class="fa-solid fa-computer"></i>

                                    </div>
                                    <div className="define-icons">
                                        <h4 className='exact-skill mt-2'>Exploring New Technologies</h4>
                                        <p className='exact-skill-para'>Passionate about learning emerging technologies such as AI, Prompt Engineering, and  innovative solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fun-facts">
                            <h3 className='about-h3 mt-2'>Beyond Profession</h3>
                            <div className="passion">
                                <div className="activities">
                                    <div className="icon"><i class="fa-solid fa-baseball-bat-ball"></i></div>
                                    <div className="define-icon"><div className="div-passion">Amateur</div> Cricketer</div>
                                </div>
                                <div className="activities">
                                    <div className="icon"><i class="fa-solid fa-person-running"></i></div>
                                    <div className="define-icon"><div className="div-passion">Distance </div>Runner</div>
                                </div>
                                <div className="activities">
                                    <div className="icon"><i class="fa-solid fa-person-walking-luggage"></i></div>
                                    <div className="define-icon"><div className="div-passion">Solo </div>Traveller</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        
        
        </>
    )
}