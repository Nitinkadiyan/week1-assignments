import './home.css';
import character from '../assets/photo-1780570589435-059359e813cc.avif';
import NavBar from './navbar.jsx';
export default function Home(){
  return (
    <>
    <NavBar/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-1 leftBar">
              <div className="bar"></div>
            </div>
            <div className="col-4 hero-home">
                <h1>HI THERE!</h1>
                <div className="home-underline"></div>
                <br></br>
                <h1 className='Nitin'>
                  <span className='iam'>I'M </span><span className='home-name'>NITIN</span></h1>
                <h6 className='home-designation'>FULL STACK DEVELOPER / DSA ENTHUSIAST</h6>
                <h6 className='home-handle'>READY TO HANDLE YOUR NEW PROJECT</h6>
                <br></br>
                <br></br>
                <p className='home-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sed quo unde vero, veniam repellat velit cum. Accusantium qui corporis iusto commodi labore, nemo atque harum perspiciatis dicta quidem natus!</p>

                <button className='btn btn-dark mt-5 '>MORE ABOUT ME</button>
            </div>
            <div className="col-6">
              <div className="image">
                 <img src={character} className='character'/>
              </div>
            </div>
            <div className="col-1 rightBar">
              <div className="rbar"></div>
            </div>
        </div>
    </div>
    </>
  )
}