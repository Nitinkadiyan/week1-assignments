import './contact.css';
export default function Contact(){
    const redirectToWP = () => {
  window.open(
    "https://wa.me/8295048494",
    "_blank"
  );
};
const redirectToEmail = () => {
  window.location.href =
    "mailto:kadiyanjatin99@gmail.com";
};
const redirectToPhone = () => {
  window.location.href = "tel:+919876543210";
};
    return (
        <>
        <div className="contact-container">
            <section id='contact'><div className="resume-word">CONTACT</div></section>
            <div className="contact-line"><b className='feel-free'>Feel Free</b> <span className='contact-line2'>To Contact Me!</span></div>
            <div className="contact-para mt-3"><p>I'm currently open to internships, freelance opportunities, collaborative projects, and meaningful conversations with fellow developers, recruiters, and technology enthusiasts. Feel free to reach out if you'd like to discuss opportunities, share ideas, or build something impactful together.</p></div>
            <div className="contact-options mt-3">
                <div className="options">
                    <div className="contact-icon-circle">
                        <div className="contact-icon wp"><i class="fa-brands fa-whatsapp"></i></div>
                    </div>
                    <div className="contact-method mt-3 ">WhatsApp</div>
                    <div className="contact-button"><button onClick={redirectToWP}className='btn btn-dark'>Redirect</button></div>
                </div>
                <div className="options">  
                    <div className="contact-icon email"><i class="fa-regular fa-envelope"></i></div>
                    <div className="contact-method mt-3 ">Email</div>
                    <div className="contact-button"><button onClick={redirectToEmail}className='btn btn-dark'>Redirect</button></div></div>
                <div className="options"> 
                     <div className="contact-icon mobile"><i class="fa-solid fa-phone"></i></div>
                    <div className="contact-method mt-3 ">Phone Number</div>
                    <div className="contact-button"><button onClick={redirectToPhone}className='btn btn-dark'>Redirect</button></div></div>


                    
            </div>
            <div className="contact-page-icons mt-5">
                        <span><a href='https://www.linkedin.com/in/nitinkadiyan/'><i class="fa-brands fa-linkedin"></i></a></span><span><a href='https://github.com/Nitinkadiyan'><i class="fa-brands fa-github"></i></a></span><span><a href=''><i class="fa-brands fa-square-instagram"></i></a></span>
                    </div>
        </div>
        </>
    )
}
