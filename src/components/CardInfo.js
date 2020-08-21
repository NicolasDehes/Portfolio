import React from 'react'
import { useSpring, animated } from 'react-spring'
function CardInfo(props) {

    const style = useSpring({opacity: 1,  from: {opacity: 0}})
    
    return (
        <animated.div className="my-card-info text-white" style={style}>
            <p className="my-card-title">{props.title}</p>
            <p className="my-card-subtitle">{props.subTitle}</p>
            <a className="my-card-link" href={props.link}>On Click</a>
        </animated.div>
    )
}

export default CardInfo
