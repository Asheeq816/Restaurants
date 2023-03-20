import React from 'react';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Restaurants({item}) {
    return (
        <>
        <Link to={`restaurants/${item.id}`}>
        <Card className="my-3 p-3 rounded">
            <Card.Img variants='top' src={item.photograph} className="p-3"/>
            <Card.Body>
               
                    {item.name}
               
                <Card.Text as='div'>
                    <p>Cuisine: {item.cuisine_type}</p>

                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
        </>
    )
}

export default Restaurants;
