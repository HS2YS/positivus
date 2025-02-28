import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Preview from './components/Preview';
import Companies from './components/Сompanies';
import Heading from './components/Heading';
import Cards from './components/Cards';
import CTA from './components/Cta';
import Studies from './components/Studies';
import OurWorking from './components/OurWorking';
import Teams from './components/Teams';
import Button from './components/Button';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {
  render () {
    return (
      <Router basename="/positivus">
        <div className='App'>
            <Header />
            <main>
              <Preview />
              <Companies />
              <Heading 
              title="Services" 
              text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" 
              />
              <Cards />
              <CTA />
              <Heading 
              title="Case Studies"
              text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
              />
              <Studies />
              <Heading 
              title="Our Working Process"
              text="Step-by-Step Guide to Achieving Your Business Goals"
              className="third-heading"
              />
              <OurWorking />
              <Heading 
              title="Team"
              text="Meet the skilled and experienced team behind our successful digital marketing strategies"
              className="forth-heading"
              />
              <Teams />
              <section className='team-btn_block flex'>
                <Button text='See all team' className='team-btn' />
              </section>
              <Heading 
              title="Testimonials"
              text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
              className="fifth-heading"
              />
              <Testimonials />
              <Heading 
                title='Contact Us'
                text="Connect with Us: Let's Discuss Your Digital Marketing Needs"
                className='sixth-heading'
              />
              <Contact />
            </main>
            <Footer />
        </div>
      </Router>
      )
  }
}

export default App;
