import React, { Component } from 'react';
import './homes.css';
import Pic from './pic.png';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export class Home extends Component {
    componentDidMount() {
        // Initialize GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Sample product data
        const products = [
            { name: "Fresh Tomatoes", price: 2.99, image: "https://page-images.websim.ai/Fresh%20Tomatoes_1024x1024xuUgFhAQZ2w5kyjAX3xd665d8e0bdef.jpg" },
            { name: "Organic Apples", price: 3.49, image: "https://page-images.websim.ai/Organic%20Apples_1024x1024xuUgFhAQZ2w5kyjAX3x2763d6145d27c.jpg" },
            { name: "Farm Eggs", price: 4.99, image: "https://replicate.delivery/yhqm/SH9QpZBx6fxXNqVGadJ45ZqGx7zs1eZHz6d5YFtOAy9cSnZTA/out-0.webp" },
            { name: "Leafy Spinach", price: 2.49, image: "https://page-images.websim.ai/Leafy%20Spinach_1024x1024xuUgFhAQZ2w5kyjAX3xd2b73d9c5a45f.jpg" },
            { name: "Juicy Oranges", price: 3.99, image: "https://page-images.websim.ai/Juicy%20Oranges_1024x1024xuUgFhAQZ2w5kyjAX3x2faf47ea8fee8.jpg" },
            { name: "Fresh Milk", price: 3.79, image: "https://page-images.websim.ai/Fresh%20Milk_1024x1024xuUgFhAQZ2w5kyjAX3x66e18fc3c99bd.jpg" },
        ];

        // Generate product cards
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

        // Parallax effect
        gsap.to('.parallax-bg', {
            yPercent: 50,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-container",
                start: "top top",
                end: "bottom top",
                scrub: true
            }, 
        });

        // Smooth scrolling for categories
        const categories = document.querySelector('.categories');
        categories.addEventListener('wheel', (e) => {
            e.preventDefault();
            categories.scrollLeft += e.deltaY;
        });

        // Add to cart animation
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                gsap.to(e.target, {
                    scale: 1.1,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power1.inOut"
                });
            });
        });

        // Animate product cards on scroll
        // gsap.utils.toArray('.product-card').forEach((card, i) => {
        //     gsap.from(card, {
        //         opacity: 0,
        //         y: 50,
        //         duration: 0.5,
        //         ease: "power2.out",
        //         scrollTrigger: {
        //             trigger: card,
        //             start: "top bottom-=100",
        //             toggleActions: "play none none reverse"
        //         }
        //     });
        // });
    }

    render() {
        return (
            <div>
                <div className="app-container">
                    <header className="header">
                        <div className="logo">FarmFresh Direct</div>
                    </header>

                        <div className="search-bar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" placeholder="Search for fresh produce..." />
                        </div>
                    <div className="parallax-container">
                        <div className="parallax-bg"></div>
                        <div className="parallax-content">
                            <h1 className="parallax-title">Farm to Table</h1>
                            <p className="parallax-subtitle">Directly from local farmers to your doorstep</p>
                        </div>
                        <div className="image-container">
                                                    <img src={Pic} alt="Farm Fresh" className="glowing-image" />
                                                </div>
                                                <style jsx>{`
                                                    .image-container {
                                                        display: flex;
                                                        justify-content: center;
                                                        margin: 20px 0;
                                                    }
                                                    .glowing-image {
                                                        max-width: 100%;
                                                        height: auto;
                                                        filter: drop-shadow(0 0 10px white);
                                                    }
                                                `}</style>
                    </div>

                    <div className="categories">
                        <div className="category">Vegetables</div>
                        <div className="category">Fruits</div>
                        <div className="category">Dairy</div>
                        <div className="category">Herbs</div>
                        <div className="category">Organic</div>
                    </div>

                    <div className="products">
                    </div>
                </div>
            </div>
        )
    }
}

export default Home