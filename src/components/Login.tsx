
import { Link } from 'react-router-dom'

function Login() {
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

<div className="login">

<div className="action">
    <h2>Login Form</h2>
    <label className='la'>Username</label>
    <input type="text" />
    <label className='all'>Password</label>
    <input type="password" />
    <button>Login</button>
    <p>Dont have an account?</p><Link to="/si" className='ink'>Sinup</Link>
</div>


</div>



</div>
  )
}

export default Login