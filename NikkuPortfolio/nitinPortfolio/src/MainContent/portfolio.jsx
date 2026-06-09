import './portfolio.css';
import artisan from '../assets/the-gambia-ikDsTxHn9-g-unsplash.jpg';
import wanderlust from '../assets/luca-bravo-O453M2Liufs-unsplash.jpg';
import stocks from '../assets/nick-chong-N__BnvQ_w18-unsplash.jpg';

export default function Portfolio(){
     const projects = [
            {
                imageUrl :artisan,
                title:"ArtisanCraft",
                description:"Responsive handcrafted products e-commerce page featuring product showcases, and interactive user experience.",
                technologies:["HTML5","CSS3","JS"],
                linkUrl:""
            },
              {
                imageUrl :wanderlust,
                title:"WanderLust",
                description:"Modern travel and accommodation booking platform with destination discovery and property listing features",
                technologies:["HTML5","CSS3","JS"]
            },
              {
                imageUrl :stocks,
                title:"EquityFlow",
                description:"Stock trading dashboard inspired by Zerodha, featuring portfolio tracking, watchlists, and market analytics.",
                technologies:["HTML5","CSS3","JS"]
            }
           
        ]
    return (
       
        <>
        <div className="portfolio-container">
            <section id="portfolio"><div className="resume-word">PORTFOLIO</div></section>
            <div className="projects-line mt-5">Projects I Have Made!</div>
            <div className=" container">
                <div className=" row portfolio-container-2">
                    
                    {projects.map((item,index)=>{
                        return(
                        <div key={index} className="col-4 mt-3 card-container">
                            <img src={item.imageUrl}className='projects-image'/>
                             <h4 className="card-title">{item.title}</h4>
                             <p className="card-description mt-2">{item.description}
                                 <div className="card-footer">
                                <div className="tech-stack">
                                {item.technologies?.map((tech,i)=>{
                                    return(
                                     <span key={i}className='tech-badge'>{tech}</span>)
                                })}
                            </div>
                            
                            </div>
                             </p>
                             <a className="card-anchor "href='#'>Link Preview&gt;&gt;</a>
                           
                        </div>)
                       
                    })}
                </div>
            </div>
        </div>
        </>
    )
}