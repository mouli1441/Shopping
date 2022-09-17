import React from 'react'
import './Cart.css';
import picture1 from '../../images/picture1.jpg';
import picture2 from '../../images/picture2.jpg';
import picture3 from '../../images/picture3.jpg';


const Cart = () => {
  return (
    <>
    <header>
      <div className='cart-shopping'>
        <img className='image' src='https://www.pngitem.com/pimgs/m/207-2071176_customer-vector-online-shopping-online-order-icon-png.png' alt="icon" />
      </div>
    </header>
 
   <section className='cart-section'>
  <h1>Shopping Cart</h1>
  <p className='total-items'>You have <span className='total-items-count'>3</span> items in Shopping Cart</p>
   
   <div className='cart-items'>
    <div className='items-info'>
      <div className='product-img'>
        <img src={picture1} alt='image'/>
        </div>

        <div className='title'>
          <h2>Apple Watch</h2>
          <p>Olive Green color</p>
        </div>

        <div className='add-quantity'>
        <i class="fa-solid fa-minus"></i>
       <input type="text" placeholder="2"/>
       <i class="fa-solid fa-plus"></i>
        </div>

        <div className='price'>
          <h3>Rs 2500</h3>
        </div>

        <div className='remove-item'>
          <i class="fas fa-trash-alt remove"></i>
        </div>
    </div>
   </div>

   <div className='cart-items'>
    <div className='items-info'>
      <div className='product-img'>
        <img src={picture2} alt='image'/>
        </div>

        <div className='title'>
          <h2>Flower vase</h2>
          <p>White color</p>
        </div>

        <div className='add-quantity'>
        <i class="fa-solid fa-minus"></i>
       <input type="text" placeholder="1"/>
       <i class="fa-solid fa-plus"></i>
        </div>

        <div className='price'>
          <h3>Rs 550</h3>
        </div>

        <div className='remove-item'>
          <i class="fas fa-trash-alt remove"></i>
        </div>
    </div>
   </div>

   <div className='cart-items'>
    <div className='items-info'>
      <div className='product-img'>
        <img src={picture3} alt='image'/>
        </div>

        <div className='title'>
          <h2>Bracelet</h2>
          <p>Gold Charm</p>
        </div>

        <div className='add-quantity'>
        <i class="fa-solid fa-minus"></i>
       <input type="text" placeholder="2"/>
       <i class="fa-solid fa-plus"></i>
        </div>

        <div className='price'>
          <h3>Rs 990</h3>
        </div>

        <div className='remove-item'>
          <i class="fas fa-trash-alt remove"></i>
        </div>
    </div>
   </div>

   <div className='card-total'>
   <h3>Cart Total:<span>Rs 7530</span></h3>
   <button>Checkout</button>
   </div>
   </section>
    </>
  )
}

export default Cart