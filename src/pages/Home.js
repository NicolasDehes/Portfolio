import React from 'react'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { Caroussel } from '../components/Caroussel'
import TopContent from '../components/TopContent'
import { Container } from 'react-bootstrap'

function Home(props) {
    return (
        <Container>
            <TopContent title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Caroussel />
            <About />
            <Contact />
        </Container>
    )
}

export default Home
