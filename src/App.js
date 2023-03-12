import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

function App() {
  const data = [
    {
      productImage: "https://cdn.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1.jpg",
      productName: "iPhone 14 pro Max",
      productPrice: "1,49,900",
      ProductRating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage: "https://cdn.dxomark.com/wp-content/uploads/medias/post-106688/Samsung-Galaxy-S22-Ultra-featured-image-packshot-review-Recovered-1024x691.jpg",
      productName: "samsung S22 Ultra",
      productPrice: "95,799",
      ProductRating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage: "https://www.smartprix.com/bytes/wp-content/uploads/2022/10/Google-Pixel-7-Pro.webp",
      productName: "Google Pixel 7pro",
      productPrice: "84,999",
      ProductRating: "⭐⭐⭐⭐",
    },
    {
      productImage: "https://www.91-cdn.com/hub/wp-content/uploads/2021/11/OnePlus-10-Pro.jpg",
      productName: "Oneplus 10pro",
      productPrice: "61,999",
      ProductRating: "⭐⭐⭐",
    },
    {
      productImage: "https://www.mansworldindia.com/wp-content/uploads/2022/06/aec8b54195865235ae9b1b9a83bb01bb.jpg",
      productName: "Vivo X80 pro",
      productPrice: "79,999",
      ProductRating: "⭐⭐⭐⭐",
    },
    {
      productImage: "https://cdn.bolnews.com/wp-content/uploads/2022/08/FotoJet-2022-08-05T120415.565.jpg",
      productName: "Oppo F22",
      productPrice: "29,999",
      ProductRating: "⭐⭐⭐",
    },
    {
      productImage: "https://www.dealbates.com/timthumb.php?src=https://www.dealbates.com/uploads/1622213955873.jpeg&w=600&h=430&zc=2",
      productName: "huawei p50 pro",
      productPrice: "68,890",
      ProductRating: "⭐⭐⭐⭐",
    },
    {
      productImage: "https://i01.appmifile.com/webfile/globalimg/products/m/redmi-note-11-pro/section14.jpg ",
      productName: "redmi note 11 pro",
      productPrice: "25,999",
      ProductRating: "⭐⭐⭐",
    }
  ];
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className='cart-value'>
      <Button className='cart-button' variant="primary">
      CART <Badge className='cart-badge'bg="secondary">{count}</Badge>
    </Button>
      </div>
      <div className="card-container">
        {data.map((prod, idx) => <Cards
          idx={idx}
          prod={prod}
          count = {count}
          setCount = {setCount}
        />)}
      </div>
    </div>
  );
}

export default App;

function Cards({ prod, idx, count, setCount}) {
  const [show, setShow] = useState(true);

  function addToCart (){
    setShow(!show)
    setCount(count + 1)
  }

  function removeFromCart () {
    setShow(!show)
    setCount(count - 1)

  }
  return (
    <Card key={idx} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.productImage} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>{prod.productPrice} RS </Card.Text>
        <Card.Text>{prod.ProductRating} </Card.Text>

        {show ? <Button
          variant="primary"
          onClick={addToCart}
        >Add to Cart</Button> : ""}

        {!show ? <Button
          variant="danger"
          onClick={removeFromCart}
        >Remove to Cart</Button> : ""}
      </Card.Body>
    </Card>
  )
}