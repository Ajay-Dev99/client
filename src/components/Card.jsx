import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ item }) {
    return (
        <Card >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item?.title}</Card.Title>
                <Card.Text>
                    {item?.description}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;