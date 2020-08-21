import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';

import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state= {
      title: 'Nicolas Dehes',
      headerLinks:[
        {id: 0, title:'Accueil', path:'/', item: 'Home'},
        {id: 1, title:'A propos', path:'/about', item: 'About'},
        {id: 2, title:'Contact', path:'/contact', item: 'Contact'}
      ],
      home:{
        title: 'Développeur Web',
        subTitle: 'Coder avec passion'
      }
    };
  }

  render(){ 
    const {title,home,headerLinks}=this.state
    return(
      <Router>
        <Container className="p-10 bg-dark" fluid={true}>
        {/* HEADER */}
          <Navbar className="border-bottom " bg="transparent" expand="lg">
            <NavbarBrand className="text-white">{title}</NavbarBrand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto ">
                {headerLinks.map(link => <Link key={link.id} className="nav-link text-white" to={link.path}>{link.title}</Link>)}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        {/* Content */}
          {headerLinks.map(link =>
            link.item === 'Home' ? <Route key={link.id} path={link.path} exact render={() => 
              <Home title={home.title} subTitle={home.subTitle}/>}/>
            :link.item === 'About' ? <Route key={link.id} path={link.path} exact render={() => 
              <About />}/>
            :link.item === 'Contact' ? <Route key={link.id} path={link.path} exact render={() => 
              <Contact />}/> 
            :'')
          }
        {/* FOOTER */}
          <Footer/>
        </Container>
      </Router>
    );
  }
}

export default App;
