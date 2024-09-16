import React, { Component } from 'react';
import './homes.css';
import Pic from './pic.png';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMap: false,
            searchLocation: ''
        };
    }


    componentDidMount() {

        // Sample product data
        const products = [
            { name: "Fresh Tomatoes", price: 20.99, image: "https://page-images.websim.ai/Fresh%20Tomatoes_1024x1024xuUgFhAQZ2w5kyjAX3xd665d8e0bdef.jpg" },
            { name: "Organic Apples", price: 30.49, image: "https://page-images.websim.ai/Organic%20Apples_1024x1024xuUgFhAQZ2w5kyjAX3x2763d6145d27c.jpg" },
            { name: "Farm Eggs", price: 40.99, image: "https://images.unsplash.com/photo-1607690424395-6660d838d818?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Leafy Spinach", price: 20.49, image: "https://page-images.websim.ai/Leafy%20Spinach_1024x1024xuUgFhAQZ2w5kyjAX3xd2b73d9c5a45f.jpg" },
            { name: "Juicy Oranges", price: 30.99, image: "https://page-images.websim.ai/Juicy%20Oranges_1024x1024xuUgFhAQZ2w5kyjAX3x2faf47ea8fee8.jpg" },
            { name: "Fresh Milk", price: 30.79, image: "https://page-images.websim.ai/Fresh%20Milk_1024x1024xuUgFhAQZ2w5kyjAX3x66e18fc3c99bd.jpg" },
        ];

        // Generate product cards`
        const productsContainer = document.querySelector('.products');
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.price.toFixed(2)}</div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });


        // Smooth scrolling for categories
        const categories = document.querySelector('.categories');
        categories.addEventListener('wheel', (e) => {
            e.preventDefault();
            categories.scrollLeft += e.deltaY;
        });
    }


    handleLocationSearch = (e) => {
        const searchValue = e.target.value;
        this.setState({
            searchLocation: searchValue,
            showMap: searchValue.trim() !== ''
        });
}

    render() {
        return (
            <div>
                <div className="app-container">
                    <div className="search-bar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" ></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input type="text" placeholder="Search for fresh produce..." />
                    </div>
                   
                    <header className="header">
                        <div className="image-container">
                            <img src={Pic} alt="Farm Fresh" className="glowing-image" />
                        </div>
                        <div className="logo">FarmFresh </div>
                    </header>  
                    <div className="categories">
                        <div className="category">Vegetables</div>
                        <div className="category">Fruits</div>
                        <div className="category">Dairy</div>
                        <div className="category">Herbs</div>
                        <div className="category">Organic</div>
                    </div>                    
                    {this.state.showMap && (
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe 
                                    src="https://maps.google.com/maps?q=ipec&t=k&z=13&ie=UTF8&iwloc=&output=embed" 
                                    frameBorder="0" 
                                    scrolling="no" 
                                    style={{ width: '430px', height: '290px' }}
                                    title="Google Map"
                                >
                                </iframe>
                            </div>
                        </div>
                    )}
                    <div className="search-bar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input 
                            type="text" 
                            placeholder="Search your Location.." 
                            value={this.state.searchLocation}
                            onChange={this.handleLocationSearch}
                        /> 
                    </div>
                    <div id="gap"></div>
                    <div className="products">                      
                    </div>
                </div>
            </div>
        )
    }
}

export default Home