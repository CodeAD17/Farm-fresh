import React, { Component } from 'react'
import {  Outlet } from 'react-router-dom';
import "./farmers.css";
import Pic from './pic.png';

export class Farmer extends Component {
  render() {
    return (
      <div>
        <body>
    <div class="farmer-container">
        <header class="header">
            <div class="logo">
                <img src={Pic} alt="FarmFresh Direct Logo" width="150" height="40"/>
            </div>
            <div class="user-info">
                <img src="https://source.unsplash.com/100x100/?farmer" alt="Farmer Avatar" class="user-avatar"/>
                <span>Welcome, Ramu Prasad</span>
            </div>
        </header>

        <div class="parallax-container">
            <div class="parallax-bg"></div>
            <div class="parallax-content">
                <h1 class="parallax-title">Farmer Dashboard</h1>
                <p>Grow your business, feed the community</p>
            </div>
        </div>

        <div class="dashboard">
            <div class="dashboard-card">
                <i class="fas fa-dollar-sign"></i>
                <h3>Today's Sales</h3>
                <p>₹345</p>
            </div>
            <div class="dashboard-card">
                <i class="fas fa-list"></i>
                <h3>Active Listings</h3>
                <p>12</p>
            </div>
            <div class="dashboard-card">
                <i class="fas fa-shopping-basket"></i>
                <h3>Pending Orders</h3>
                <p>5</p>
            </div>
            <div class="dashboard-card">
                <i class="fas fa-star"></i>
                <h3>Customer Rating</h3>
                <p>4.8★</p>
            </div>
        </div>

        <div class="farmer-sections">
            <div class="farmer-section">
                <h2>Recent Orders</h2>
                <ul>
                    <li>
                        <span>Order #1234 - ₹56.78</span>
                        <button>Fulfill</button>
                    </li>
                    <li>
                        <span>Order #1235 - ₹43.21</span>
                        <button>Fulfill</button>
                    </li>
                    <li>
                        <span>Order #1236 - ₹78.90</span>
                        <button>Fulfill</button>
                    </li>
                </ul>
            </div>
            <div class="farmer-section">
                <h2>Your Products</h2>
                <ul id="productList">
                    <li>
                        <img src="https://page-images.websim.ai/Fresh%20Tomatoes_1024x1024xuUgFhAQZ2w5kyjAX3xd665d8e0bdef.jpg" alt="Organic Tomatoes"/>
                        <span>Organic Tomatoes - ₹3.99/lb</span>
                        <button>Edit</button>
                    </li>
                    <li>
                        <img src="https://images.unsplash.com/photo-1607690424395-6660d838d818?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fresh Eggs"/>
                        <span>Fresh Eggs - ₹5.99/dozen</span>
                        <button>Edit</button>
                    </li>
                    <li>
                        <img src="https://page-images.websim.ai/Leafy%20Spinach_1024x1024xuUgFhAQZ2w5kyjAX3xd2b73d9c5a45f.jpg" alt="Leafy Greens Mix"/>
                        <span>Leafy Greens Mix - ₹4.50/bunch</span>
                        <button>Edit</button>
                    </li>
                </ul>
                <button class="add-product">+ Add New Product</button>
            </div>
            <div class="farmer-section">
                <h2>Upcoming Harvests</h2>
                <ul>
                    <li>
                        <span>Carrots - Est. 07/15</span>
                        <button>Update</button>
                    </li>
                    <li>
                        <span>Apples - Est. 09/01</span>
                        <button>Update</button>
                    </li>
                    <li>
                        <span>Pumpkins - Est. 10/10</span>
                        <button>Update</button>
                    </li>
                </ul>
            </div>
            <div class="farmer-section">
                <h2>Customer Feedback</h2>
                <ul>
                    <li>
                        <span>"Great produce! Will order again." - Sarah</span>
                    </li>
                    <li>
                        <span>"The tomatoes were so fresh!" - Mike</span>
                    </li>
                    <li>
                        <span>"Loving the variety of veggies." - Emma</span>
                    </li>
                </ul>
            </div>
            <div class="farmer-section">
                <h2>List New Products</h2>
                <form id="addVegetableForm">
                    <input type="text" id="vegetableName" placeholder="Product Name" required/>
                    <input type="number" id="vegetablePrice" placeholder="Price per unit" step="0.01" required/>
                    <input type="file" id="vegetableImage" accept="image/*" required/>
                    <button type="submit">Add Vegetable</button>
                </form>
                <div id="previewImage"></div>
            </div>
        </div>
        <Outlet/>
    </div>
        </body>
      </div>
    )
  }
}

export default Farmer
