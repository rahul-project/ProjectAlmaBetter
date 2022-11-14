import shoe1 from './images/1.png'
import shoe2 from './images/2.png'
import shoe3 from './images/3.png'
import shoe4 from './images/4.png'

const Navbar = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo"><span className="log">Al</span>mabetter</label>
        <ul>
          <li><a className="active" href="/">Resume Templates</a></li>
          <li><a href="/">My Resumes</a></li>
          <li><a href="/">About Us</a></li>
        </ul>
      </nav>
      <div className="container">
        <div className="wrapper">
          <h3 className="heading"> Templates</h3>
          <h6 className="sub-heading"> Select a Template to get Started</h6>
          <div className="img-area">
            <div className="single-img"><img src={shoe1} alt="/" /></div>
            <div className="single-img"><img src={shoe2} alt="/" /></div>
            <div className="single-img"><img src={shoe3} alt="/" /></div>
            <div className="single-img"><img src={shoe4} alt="/" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar