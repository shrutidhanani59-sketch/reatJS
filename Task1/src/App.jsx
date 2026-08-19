import './App.css'

function App({ product }) {
  return (
    <div className="products">

      <div className="product1">
        <h1>{product[0].company}</h1>
        <h2>{product[0].model}</h2>
        <img src={product[0].img} alt={product[0].model} />
        <h4>{product[0].price}</h4>
        <h5>{product[0].description}</h5>
      </div>

      <div className="product1">
        <h1>{product[1].company}</h1>
        <h2>{product[1].model}</h2>
        <img src={product[1].img} alt={product[1].model} />
        <h4>{product[1].price}</h4>
        <h5>{product[1].description}</h5>
      </div>

    </div>
  )
}

export default App
