import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function TopContent(props) {

    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={10} sm={12} >
                    {props.title && <h1 className="text-white display-1 font-weight-bolder">{props.title}</h1>}
                    {props.subTitle && <h3 className="text-white display-4 font-weight-light">{props.subTitle}</h3>}
                    {props.text && <h3 className="text-white lead font-weight-Light">{props.text}</h3>}
                </Col>
            </Row>
        </Container>
    )
}

export default TopContent