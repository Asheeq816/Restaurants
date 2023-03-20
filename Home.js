import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Restaurants from './Restaurants'
import restaurantsAction from '../actions/restaurantAction'

function Home() {

  const [hotels, setHotels] = useState([])
  const [search,setSearch] = useState("")
 
  useEffect(() => {
    const fetchData = async () => {
      await fetch('/restaurants.json')
        .then((response) => response.json())
        .then((data) => setHotels(data.restaurants))
    }
    fetchData();
  }, [])

  console.log("our data is", hotels)

  return (
    <>
      <Row>
        <input value={search}
        placeholder="search a place here"
        type="text"
        onChange={event => setSearch(event.target.value)}
        />
        {hotels ? (
          hotels.filter(item => {
            if(search === "") {
              return item
            }
            else if(item.neighborhood.toLowerCase().includes(search.toLowerCase())){
              return item
            }
            })
            .map(item => (
              <Col sm={12} md={8} lg={6} xl={3}>
                <Restaurants item={item}/>
              </Col>
            ))

        ) : ("error")}
      </Row>
    </>
  )
}

export default Home;
