
import { Link } from 'react-router-dom'
import { 
  Users, 
  Target, 
  Award, 
  
  Globe,
  Code,
  Shield,
  TrendingUp,
  ChevronRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import './home.css'

const About = () => {
  const teamMembers = [
    { name: 'Ali Khan', role: 'Project Lead', expertise: 'AI & ML', img: 'team1.jpg' },
    { name: 'Sara Ahmed', role: 'Frontend Developer', expertise: 'React & UI/UX', img: 'team2.jpg' },
    { name: 'Rahim Shah', role: 'Backend Engineer', expertise: 'Node.js & Databases', img: 'team3.jpg' },
    { name: 'Fatima Noor', role: 'Security Specialist', expertise: 'Cybersecurity', img: 'team4.jpg' },
  ]

  const milestones = [
    { year: '2020', title: 'Project Founded', desc: 'Started with 3 members' },
    { year: '2021', title: 'First Prototype', desc: 'Launched MVP version' },
    { year: '2022', title: 'Client Partnerships', desc: '50+ successful projects' },
    { year: '2023', title: 'Award Winning', desc: 'Best ICT Solution Award' },
    { year: '2024', title: 'Global Expansion', desc: 'International clients' },
  ]

  const values = [
    { icon: <Code size={28} />, title: 'Innovation', desc: 'Pushing technological boundaries' },
    { icon: <Shield size={28} />, title: 'Security', desc: 'Top priority in all solutions' },
    { icon: <Users size={28} />, title: 'Collaboration', desc: 'Teamwork drives success' },
    { icon: <TrendingUp size={28} />, title: 'Growth', desc: 'Continuous improvement' },
  ]

  return (
    <div className="about-container">
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
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Users size={20} />
            <span>About ICT Project</span>
          </div>
          <h1 className="hero-title">
            Empowering <span className="highlight">Digital Transformation</span> Through Innovation
          </h1>
          <p className="hero-description">
            We are a passionate team dedicated to creating cutting-edge ICT solutions 
            that bridge the gap between technology and human needs. Our mission is to 
            transform ideas into impactful digital experiences.
          </p>
          <button className="hero-cta">
            Explore Our Work <ChevronRight size={20} />
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="section-header">
          <h2>Our <span className="highlight">Story</span></h2>
          <p className="section-subtitle">From vision to reality</p>
        </div>
        
        <div className="story-content">
          <div className="story-text">
            <h3>Building the Future of Technology</h3>
            <p>
              Founded in 2020, ICT (InnovateCreateTransform) began as a small startup 
              with a big vision: to revolutionize how businesses interact with technology. 
              What started as a team of three passionate developers has grown into a 
              full-scale digital solutions agency.
            </p>
            <p>
              Our journey has been driven by a commitment to excellence, innovation, 
              and client satisfaction. We believe that technology should be accessible, 
              secure, and transformative.
            </p>
            <div className="story-features">
              <div className="feature">
                <Target size={24} />
                <span>Clear Vision & Mission</span>
              </div>
              <div className="feature">
                <Award size={24} />
                <span>Award-Winning Solutions</span>
              </div>
              <div className="feature">
                <Globe size={24} />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
          <div className="story-visual">
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{milestone.title}</h4>
                    <p>{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2>Meet Our <span className="highlight">Team</span></h2>
          <p className="section-subtitle">The brilliant minds behind ICT</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-img">
                <div className="img-placeholder">{member.name.charAt(0)}</div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-expertise">{member.expertise}</p>
                <div className="team-social">
                  <span className="social-link">LinkedIn</span>
                  <span className="social-link">GitHub</span>
                  <span className="social-link">Twitter</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2>Our Core <span className="highlight">Values</span></h2>
          <p className="section-subtitle">What drives us forward</p>
        </div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="contact-banner">
        <div className="banner-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help transform your ideas into reality</p>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={20} />
              <span>contact@ictproject.com</span>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <span>Tech Street, Silicon Valley</span>
            </div>
          </div>
          <button className="contact-btn">
            Get In Touch <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">ICT</div>
            <span>InnovateCreateTransform</span>
          </div>
          <p className="footer-text">
            Transforming businesses through innovative ICT solutions since 2020.
            All rights reserved.
          </p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/careers">Careers</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About