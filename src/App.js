import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import travelData from './travelData'

export default function App() {
  const cardElements = travelData.map(card => {
    return <Card
        {...card}
      />
  })

  return (
      <div>
        <Navbar/>
        <section>
          {cardElements}
        </section>
      </div>

    )

}
