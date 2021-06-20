import React,{useEffect, useState} from "react"
import {Card,Button} from 'react-bootstrap'
function Home() {
    const [data,setData] = useState('');
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:8081/api/Api_c/CarList').then((result)=>{result.json().then((resp)=>{
              console.warn('result',resp)
              setData(resp)
          })
        })
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    
    return (
    data.map((items)=>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"http://localhost:8081/api/uploads/"+items.image} />
        <Card.Body>
          <Card.Title>{items.brand}</Card.Title>
          <Card.Text>
          {items.discription}
          <b>Price -</b>{items.price}
          <b>Mileage -</b>{items.mileage}
          <b>Seat -</b>{items.seat}
          </Card.Text>
          <Button variant="primary">View Car</Button>
        </Card.Body>
      </Card>
      )
        
    );
}

export default Home;
