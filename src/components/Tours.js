
import React from 'react'
import Card from './Card'

const Tours = ({tours}) => {
  return (
    <div>
        <div><h2>Paln a Trip</h2></div>

        <div>
            {
                tours.map((tour)=>{
                    return <Card  {...tour} />
                })
            }
        </div>


    </div>
  )
}

export default Tours