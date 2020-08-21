import React from 'react'
import { Jumbotron, Form, Button } from 'react-bootstrap'
import Axios from 'axios'

class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            mail: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handlerChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        this.setState({
            disabled: true
        })
        Axios.post('http://nicolasdehes.ddns.net:3030/api/mail', this.state)
            .then(res => {
                if(res.data.success){
                    this.setState({
                        disable: false,
                        emailSent: true
                    })
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    })
                }
            })
    }

    render(){
        return (
            <div className="">
                <h2 className="text-center text-white font-weight-bold py-3">Pour me contacter</h2>
                <Jumbotron className="bg-secondary m-5 p-3 ">
                    <Form onSubmit={this.handlerSubmit}>
                        <Form.Group className="text-white">
                            <Form.Label htmlFor="full-name">Nom complet</Form.Label>
                            <Form.Control onChange={this.handlerChange} id="full-name" name="name" type="text" value={this.state.name} placeholder="ex: Jean Martin" />
                        </Form.Group>
                        <Form.Group className="text-white">
                            <Form.Label htmlFor="mail">Adresse mail</Form.Label>
                            <Form.Control onChange={this.handlerChange} id="mail" name="mail" type="email" value={this.state.mail} placeholder="ex: example@mail.com" />
                            <Form.Text className="">
                                Cette adresse ne sera en aucun cas communiquée.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="text-white">
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control onChange={this.handlerChange} id="message" name="message" as="textarea" rows="3" type="text" value={this.state.message}/>
                            <Form.Text className="">
                                Idem pour le contenu de ce message.
                            </Form.Text>
                        </Form.Group>
                        <Button className="d-inline-block" variant="dark" type="submit">
                            Envoyer
                        </Button>
                        {this.state.emailSent === true && <p className="d-inline text-success p-2">Email Envoyé!</p>}
                        {this.state.emailSent === false && <p className="d-inline text-danger p-2">Une erreur est survenu</p>}
                    </Form>
                </Jumbotron>
            </div>
        )
    }
}

export default Contact
