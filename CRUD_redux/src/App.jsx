import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addProduct , deleteProduct, updateProduct } from "./redux/action"

function App() {
  const data = useSelector((state) => {
    return state.product
  })
  const Dispatch = useDispatch();
  const [title , setTitle] = useState("");
  const [img , setImg] = useState("");
  const [description , setDescription] = useState("");
  const [price , setPrice] = useState("");
  const [category , setCategory] = useState("");
  const [id , setId] = useState(null)

  const handlesubmit = (e)=>{
    e.preventDefault();
    if(title == "" || img == "" || description == "" || price == "" || category == ""){
      return
    }
    if(id){
      Dispatch(updateProduct({
      id:id,
      title:title,
      img:img,
      description:description,
      price:price,
      category:category
    }))
    }else{
      Dispatch(addProduct({
      id:data.length+1,
      title:title,
      img:img,
      description:description,
      price:price,
      category:category
    }))
    }
    setTitle("")
    setImg("")
    setDescription("")
    setPrice("")
    setCategory("")
    setId(null)
  }


  const handleupdate = (element)=>{
    setTitle(element.title)
    setImg(element.img)
    setDescription(element.description)
    setPrice(element.price)
    setCategory(element.category)
    setId(element.id)

  }
  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Product Management</h2>

        {/* Form */}
        <div className="card shadow p-4 mb-5">
          <h4 className="mb-3"> {(id) ? "Edit Product" :" Add Product"}</h4>

          <form>
            <div className="mb-3">
              <label className="form-label">TITLE</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">IMG</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter img url"
                onChange={(e)=>setImg(e.target.value)}
                value={img}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">DESCRIPTION</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter description"
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">PRICE</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter price"
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">CATEGORY</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter category"
                onChange={(e)=>setCategory(e.target.value)}
                value={category}
              />
            </div>

            <button type="submit" className="btn btn-primary" onClick={handlesubmit}>
             {(id) ? "Edit Product" :" Add Product"}
            </button>
          </form>
        </div>

        {/* Table */}
        <div className="card shadow">
          <div className="card-body">
            <h4 className="mb-3">Product List</h4>

            <div className="table-responsive">
              <table className="table table-bordered table-hover table-striped align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>img</th>
                    <th>description</th>
                    <th>price</th>
                    <th>category</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((element) => (
                    <tr key={element.id}>
                      <td>{element.id}</td>
                      <td>{element.title}</td>

                      <td>
                        <img
                          src={element.img}
                          alt={element.title}
                          width="80"
                          height="60"
                          className="rounded object-fit-cover"
                        />
                      </td>

                      <td>{element.description}</td>
                      <td>₹{element.price}</td>
                      <td>
                        <span className="badge bg-info">
                          {element.category}
                        </span>
                      </td>

                      <td>
                        <button className="btn btn-warning btn-sm me-2"
                        onClick={() => handleupdate(element)}
                        >
                          Edit
                        </button>

                        <button className="btn btn-danger btn-sm"
                        onClick={()=>Dispatch(deleteProduct(element.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
