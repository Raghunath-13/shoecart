import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';
import Footer from './Footer';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/1339fec9-f8dc-4ef6-c349-992c10906e00/product',
      name: 'Dunks',
      category: 'Shoes',
      seller: 'superkicks',
      price: 5400
    },
    {
      url: 'https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/a9034aa8-923f-4585-6366-a7c96df87100/public',
      name: 'Dunks',
      category: 'shoes',
      seller: 'superkicks',
      price: 6599
    },
    {
      url: 'https://www.solefly.com/cdn/shop/products/FD1232-002-PHSLH001-2000_2000x2000.png?v=1679362152',
      name: 'Dunks',
      category: 'shoes',
      seller: 'superkicks ',
      price: 5000
    },
    {
      url: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F03%2Fnike-dunk-low-womens-sneakers-light-soft-pink-pastel-blue-purple-green-yellow-white-price-release-01.jpg?cbr=1&q=90',
      name: 'Security Camera',
      category: 'shoes',
      seller: 'superkicks',
      price: 4000
    },
    {
      url: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F06%2Fnew-balance-550-white-green-BB550STA-release-info-000.jpg?w=960&cbr=1&q=90&fit=max',
      name: 'Newbalance 550s',
      category: 'shoes',
      seller: 'superkicks',
      price: 6600
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/2358/2817/products/new-balance-90-60-joe-freshgoods-inside-voices-penny-cookie-pink-1.png?v=1656580687',
      name: 'Dunks',
      category: 'Cup',
      seller: 'superkicks',
      price: 8100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }

      <Footer/>


    </div>
  );
}

export default App;
