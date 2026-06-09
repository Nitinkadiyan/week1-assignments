import './sideBar.css';
import image from './assets/photo-1593085512500-5d55148d6f0d.avif';

export default function SideBar() {
  return (
  <div className="container1">
    <div className="photo">
     
      <img src={image} className='img-mine'/>
      </div>
    <div className="navBars">
     <a href='#'> <i class="fa-solid fa-arrow-up"></i></a>
      <a href='#'>HOME</a>
      <a href='#about'>ABOUT</a>
      <a href='#resume'>RESUME</a>
      <a href='#portfolio'>PORTFOLIO</a>
      <a href='#testimonials'>TESTIMONIALS</a>
      <a href='#contact'>CONTACT</a>
      <a href='#contact'> <i class="fa-solid fa-arrow-down"></i></a>
    </div>
  </div>
  );
}