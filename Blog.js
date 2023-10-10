import 'bootstrap/dist/css/bootstrap.min.css';  
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState} from "react";
export default function BlogPost(blogs){
    const [showMore,setShowMore]=useState(false);
      function handleMoreClick() {
        setShowMore(!showMore);
      }
return(
    <div className='blog'>
        <Card style={{
            width:'400px',
            height:'300px',
            display:'flex',
            flexDirection:'row',
            overflow:'auto',
            borderColor:'black'
            }}>
            <Card.Img variant="bottom" src={blogs.image}/>
            <Card.Body>
                <Card.Title>Title:{blogs.title}</Card.Title>
                <Card.Title>Author:{blogs.author}</Card.Title>
                <Button variant="primary" onClick={handleMoreClick}>
                    {showMore?'Hide':'Show'}Details</Button>
                {showMore && <p>{blogs.Content}</p>}
            </Card.Body>
        </Card>
        </div>
    );
}