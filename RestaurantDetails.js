import React, { useState, useEffect } from 'react';
import { Col, Row, Image, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'

function RestaurantDetails() {
  const [data, setData] = useState([])
  const params = useParams()
  const {id} = params

  useEffect(() => {
    const fetchData = async () => {
      await fetch('/restaurants.json')
        .then((res) => res.json())
        .then((res) => setData(res.restaurants))
    }
    fetchData()
  }, [])

  const details = data.find((i) => i.id == id)
console.log("our", data)
  return (
    <>
     
         <Link className='btn btn-outline-dark my-2 rounded bt-sm' to="/">Back</Link>
           {details ? (
             <Row className="my-3">
               <Col md={3}>
                 <Image className='img' src={details.photograph} alt={details.name} fluid/>
               </Col>
               <Col md={4}>
                 <ListGroup.Item>
                  <h2>{details.name}</h2> 
                  <p>{details.neighborhood}</p> 
                 </ListGroup.Item>
                 <ListGroup.Item>
                  <p>Cuisine: {details.cuisine_type}</p> 
                 </ListGroup.Item>
                 <ListGroup.Item>
                  <p>Address: {details.address}</p> 
                 </ListGroup.Item>
               </Col>
               <Col md={4}>
               <ListGroup.Item>
                 <h4>Operating Hours:</h4>
                 <p>Monday: {details.operating_hours.monday}</p>
                 <p>Tuesday: {details.operating_hours.tuesday}</p>
                 <p>Wensday: {details.operating_hours.wensday}</p>
                 <p>Thusday: {details.operating_hours.thusday}</p>
                 <p>Friday: {details.operating_hours.friday}</p>
                 <p>Satarday: {details.operating_hours.satarday}</p>
                 </ListGroup.Item>
               </Col>
             </Row>
           ):null}
    </>
  )

}

export default RestaurantDetails;
