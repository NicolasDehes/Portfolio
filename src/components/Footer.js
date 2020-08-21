import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="mt-5 text-white ">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 d-flex justify-content-end text-right ">
                        Ce site a été conçu par Nicolas Dehes
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
