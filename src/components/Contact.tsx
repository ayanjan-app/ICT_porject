
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt ,FaPhone,FaEnvelope} from "react-icons/fa";

import './home.css'

const Contact = () => {
  return (
    <div>
         <div className='large'>
    <div className='small'>
      <img src="al.jpg" alt="problem"  className='al'/>
      
     <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/login">Login</Link></li>
     </ul>

      </div></div>
      <div className="con"><h1>Contact Us</h1></div>
<div className="con1"><FaMapMarkerAlt  className='icon' />
<h2>Kabul,afg</h2>
<h3>Shahrnew</h3>
</div>
<div className="con2"><FaPhone  className='icon'/>
<h2>0772189802</h2></div>
<div className="con3"><FaEnvelope className='icon'/>
<h2>ict@gmail.com</h2></div>


<div className="footer1"><p>@copy right ICT</p></div>
      
    </div>
    
  )
}

export default Contact
