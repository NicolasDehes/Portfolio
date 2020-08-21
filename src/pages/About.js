import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

function About(props) {
    return (
    <Jumbotron className="bg-transparent">
        <Container>
            <h2 className="text-white font-weight-bold">Un petit peu de moi...</h2>
            <p className="text-white font-weight-light">
                Jeune développeur web autodidacte de 20ans, je m'épanouis dans la programation et tout le 
                processus de création d'aplication.
            </p>
            <p className="text-white font-weight-light">
                Mes années d'étude dans le domaine m'ont appris les bases que j'ai consolidé par un 
                apprentissage autonome.
            </p>
        </Container>
    </Jumbotron>
    )
}

export default About
