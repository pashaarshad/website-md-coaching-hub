'use client';

import Link from 'next/link';
import { useApp } from '../context/AppContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart, getCartTotal, user } = useApp();

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="section-title">Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Explore our courses and add some to your cart!</p>
            <Link href="/courses" className="enroll-btn">
              Browse Courses
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((course) => (
                <div className="cart-item" key={course.id}>
                  <div className="cart-item-image">
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div className="cart-item-info">
                    <h3>{course.title}</h3>
                    <p className="cart-item-meta">
                      <span>{course.duration}</span> • <span>{course.level}</span> • <span>By {course.instructor}</span>
                    </p>
                    <p className="cart-item-desc">{course.description}</p>
                  </div>
                  <div className="cart-item-price">
                    <span>₹{course.price.toLocaleString()}</span>
                    <button
                      className="cart-remove-btn" 
                      onClick={() => removeFromCart(course.id)}
                      id={`remove-${course.id}`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>Subtotal ({cart.length} courses)</span>
                <span>₹{getCartTotal().toLocaleString()}</span>
              </div>
              <div className="cart-summary-row">
                <span>Platform Fee</span>
                <span className="free-text">FREE</span>
              </div>
              <div className="cart-summary-row">
                <span>GST (18%)</span>
                <span>₹{Math.round(getCartTotal() * 0.18).toLocaleString()}</span>
              </div>
              <div className="cart-summary-divider"></div>
              <div className="cart-summary-row total">
                <span>Total</span>
                <span>₹{Math.round(getCartTotal() * 1.18).toLocaleString()}</span>
              </div>

              <div className="cart-actions">
                {user ? (
                  <button className="checkout-btn" id="checkout-btn" onClick={() => alert('🎉 Payment gateway integration coming soon! Thank you for your interest.')}>
                    Proceed to Checkout
                  </button>
                ) : (
                  <Link href="/login" className="checkout-btn" id="checkout-login-btn">
                    Login to Checkout
                  </Link>
                )}
                <button className="clear-cart-btn" onClick={clearCart} id="clear-cart-btn">
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
