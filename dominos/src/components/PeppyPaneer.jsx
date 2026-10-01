function Peppy()
{
    return(
        <>
         <div className="main">

            <div className="pizza-page">

                {/* Pizza Image */}
                <div className="pizza-image-box">
                    <img
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80"
                        alt="Peppy Paneer Pizza"
                    />
                </div>

                {/* Pizza Details */}
                <div className="pizza-details">

                    <span className="category">
                        🍕 DOMINO'S SPECIAL
                    </span>

                    <h1>Peppy Paneer Pizza</h1>

                    <div className="rating">
                        ⭐⭐⭐⭐⭐
                        <span> 4.9 (150 Reviews)</span>
                    </div>

                    <h2>₹399</h2>

                    <p className="description">
                        Treat yourself to a delicious Peppy Paneer Pizza
                        loaded with soft paneer, crunchy capsicum, spicy
                        seasonings and lots of melted mozzarella cheese.
                        A perfect combination of spicy and cheesy flavors.
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
        </>
    )
}

export default Peppy;