import React from 'react'
import CardInfo from './CardInfo'
import Laptop from './icons/Laptop'

function Card(props) {
    const {item}=props
    return (
        <div className="d-inline-block my-card" onClick={(e) => props.click(item,e)}>
            <h1 className="text-white text-center">{item.title}</h1>
            {item.imgSrc === 'Laptop' ? <Laptop color="#AAA"/> : ''}
            {item.selected && <CardInfo title={item.title} subTitle={item.subTitle} link={item.link}/>}
        </div>
    )
}

export default Card
