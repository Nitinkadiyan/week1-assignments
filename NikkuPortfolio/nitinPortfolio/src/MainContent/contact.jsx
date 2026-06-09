import './contact.css';
export default function Contact(){
    return (
        <>
        <div className="contact-container">
            <div className="resume-word">CONTACT</div>
            <div className="contact-line"><b className='feel-free'>Feel Free</b> <span className='contact-line2'>To Contact Me!</span></div>
            <div className="contact-para mt-3"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, exercitationem numquam tenetur ut esse rerum quisquam reprehenderit molestias vitae dolorem sed debitis quam. Repellendus dolores, iusto accusantium placeat recusandae harum.</p></div>
            <div className="contact-options mt-5">
                <div className="options">
                    <div className="contact-icon-circle">
                        <div className="contact-icon"><i class="fa-brands fa-whatsapp"></i></div>
                    </div>
                    <div className="contact-method mt-3">WhatsApp</div>
                    <div className="contact-button"><button className='btn btn-dark'>Redirect</button></div>
                </div>
                <div className="options">  
                    <div className="contact-icon"><i class="fa-regular fa-envelope"></i></div>
                    <div className="contact-method mt-3">Email</div>
                    <div className="contact-button"><button className='btn btn-dark'>Redirect</button></div></div>
                <div className="options"> 
                     <div className="contact-icon"><i class="fa-solid fa-phone"></i></div>
                    <div className="contact-method mt-3">Phone Number</div>
                    <div className="contact-button"><button className='btn btn-dark'>Redirect</button></div></div>
            </div>
        </div>
        </>
    )
}
