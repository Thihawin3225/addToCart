import React from 'react'
import CardItem from './CardItem'

const data = [
    {
        id :1,
        name : "Banana",
        price : 3000,

    },
    {
        id :2,
        name : "Orange",
        price : 2000,

    },
    {
        id :3,
        name : "Strawberry",
        price : 1000,

    },
    {
        id :4,
        name : "Coconut",
        price : 9000,

    },
    {
        id :5,
        name : "Watermelon",
        price : 2000,

    },
    {
        id :6,
        name : "Pineapple",
        price : 4000,

    },
]

const Card = () => {
  return (
    <div className="card-container">
      {
        data.map((fruit)=> {
            return (
                <CardItem fruit = {fruit}/>
            )
        })
      }

    </div>
  )
}

export default Card
