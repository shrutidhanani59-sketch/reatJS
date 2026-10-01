function Corn()
{
    return(
        <>
        
        <div className="main">

            <div className="pizza-page">

                {/* Pizza Image */}
                <div className="pizza-image-box">
                    <img
                        src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=80"
                        alt="Corn Pizza"
                    />
                </div>

                {/* Pizza Details */}
                <div className="pizza-details">

                    <span className="category">
                        🍕 DOMINO'S SPECIAL
                    </span>

                    <h1>Corn Pizza</h1>

                    <div className="rating">
                        ⭐⭐⭐⭐⭐
                        <span> 4.7 (105 Reviews)</span>
                    </div>

                    <h2>₹329</h2>

                    <p className="description">
                        A delicious and cheesy Corn Pizza loaded with sweet
                        golden corn, rich mozzarella cheese and tasty
                        seasoning. Perfectly baked with a crispy golden
                        crust for a delightful pizza experience.
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

export default Corn;