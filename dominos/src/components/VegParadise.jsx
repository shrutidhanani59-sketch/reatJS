function Veg()
{
return(
        <>
         <div className="main">

            <div className="pizza-page">

                {/* Pizza Image */}
                <div className="pizza-image-box">
                    <img
                        src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80"
                        alt="Veg Paradise Pizza"
                    />
                </div>

                {/* Pizza Details */}
                <div className="pizza-details">

                    <span className="category">
                        🍕 DOMINO'S SPECIAL
                    </span>

                    <h1>Veg Paradise Pizza</h1>

                    <div className="rating">
                        ⭐⭐⭐⭐⭐
                        <span> 4.8 (140 Reviews)</span>
                    </div>

                    <h2>₹399</h2>

                    <p className="description">
                        Enjoy our delicious Veg Paradise Pizza loaded with
                        fresh vegetables, sweet corn, capsicum, onion and
                        juicy tomatoes, topped with rich mozzarella cheese.
                        A colorful and flavorful treat for every pizza lover.
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

export default Veg;