
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
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
      <div className="main">
<h1 style={{}}>ICT</h1>
<h2>Information and Communication Technology</h2>
<img src="al.jpg" alt="pro"  className='picc'/>
      </div>
      <div className="body">
        <h1>Letest News</h1>
        <div className="news1"><img src="aa.jpg" alt="" /> <h2>Cybersecurity Awareness Increasing</h2><p>Organizations are strengthening cybersecurity measures as online threats grow. Training programs are helping students and staff protect data and prevent cyber attacks.</p></div>
        <div className="news2"><img src="aaa.jpg" alt="" /> <h2>Cloud Computing Skills in Demand</h2><p>ICT graduates with cloud computing skills like AWS, Azure, and Google Cloud are seeing more job opportunities as companies move their systems online.</p></div>
        <div className="news3"><img src="ab.jpeg" alt="problem" /><h2>AI Tools Transform Education</h2><p>New AI-powered tools are being introduced in universities to help students learn faster, improve research skills, and support teachers in creating smart digital classrooms.</p></div>

      </div>
      <div className="footer"><p>@copy right ICT</p></div>

</div>
  )
}

export default Home
