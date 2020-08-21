import React, { Component } from 'react'
import Card from '../components/Card'
import {Container, Row} from 'react-bootstrap'

export class Caroussel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            items: [
                {
                   id: 0,
                   title: 'Mes Projets',
                   subTitle: 'Répertoire Github',
                   link: 'https://github.com/NicolasDehes',
                   imgSrc: 'Laptop',
                   selected: false
                }
            ]
        }
    }
    
    handlerCardClick = (id,card) => {
        let items = [...this.state.items]
        items[id].selected = items[id].selected ? false : true
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            } 
        })

        this.setState({items})
    }
    
    makeItems = (items) => {
        return items.map(item => {
            return <Card key={item.id} item={item} click={(e => this.handlerCardClick(item.id,e))}/>
        })
    }

    render() {
        return (
            <Container fluid={true} className="py-5">
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Caroussel
