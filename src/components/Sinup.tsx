
import { Link } from 'react-router-dom'
import './home.css'

const Sinup = () => {
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

<div className="si-login">

<div className="si-action">
    <h2> Account </h2>
     <label className='si-lla'>Full Name</label>
    <input type="text" />
    <label className='si-la'>Username</label>
    <input type="text" />
    <label className='si-llaa'>Password</label>
    <input type="password" />
    <label className='si-laa'>Confirm Password</label>
    <input type="password" />
    <button>Create</button>
   <Link to="/login" className='si-ink'>Login</Link>
</div>


</div>



</div>
  )
}

export default Sinup
