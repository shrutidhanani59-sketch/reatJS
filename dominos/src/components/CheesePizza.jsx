function Cheese()
{
     return (
        <div className="main">

            <div className="pizza-page">

                {/* Left Pizza Image */}
                <div className="pizza-image-box">
                    <img
                        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80"
                        alt="Cheese Pizza"
                    />
                </div>

                {/* Right Details */}
                <div className="pizza-details">

                    <span className="category">
                        🍕 DOMINO'S SPECIAL
                    </span>

                    <h1>Cheese Pizza</h1>

                    <div className="rating">
                        ⭐⭐⭐⭐⭐
                        <span> 4.8 (120 Reviews)</span>
                    </div>

                    <h2>₹299</h2>

                    <p className="description">
                        Enjoy the delicious taste of our classic Cheese Pizza,
                        loaded with rich mozzarella cheese and a perfectly
                        baked golden crust. A simple, cheesy and tasty choice
                        for every pizza lover.
                    </p>

                    <div className="pizza-info">

                        <div>
                            <i className="fa-solid fa-clock"></i>
                            <span>25-30 min</span>
                        </div>

                        <div>
                            <i className="fa-solid fa-fire"></i>
                            <span>Medium</span>
                        </div>

                        <div>
                            <i className="fa-solid fa-leaf"></i>
                            <span>Veg</span>
                        </div>

                    </div>

                    <div className="quantity">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>

                    <button className="order-btn">
                        <i className="fa-solid fa-cart-shopping"></i>
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    )
}


export default Cheese;