import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addProduct } from "./redux/action"

function App() {
  const data = useSelector((state) => {
    return state.product
  })
  const Dispatch = useDispatch();
  const [title , useTitle] = useState("");
  const [img , useImg] = useState("");
  const [description , useDescription] = useState("");
  const [price , usePrice] = useState("");
  const [category , useCategory] = useState("");

  const handlesubmit = (e)=>{
    e.preventDefault();

    Dispatch(addProduct({
      id:data.length+1,
      title:title,
      img:img,
      description:description,
      price:price,
      category:category
    }))
  }
  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Product Management</h2>

        {/* Form */}
        <div className="card shadow p-4 mb-5">
          <h4 className="mb-3">Add Product</h4>

          <form>
            <div className="mb-3">
              <label className="form-label">TITLE</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title"
                onChange={(e)=>useTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">IMG</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter img url"
                onChange={(e)=>useImg(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">DESCRIPTION</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter description"
                onChange={(e)=>useDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">PRICE</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter price"
                onChange={(e)=>usePrice(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">CATEGORY</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter category"
                onChange={(e)=>useCategory(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary" onClick={handlesubmit}>
              Add Product
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
                  {data.map((element, index) => (
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
                        <button className="btn btn-warning btn-sm me-2">
                          Edit
                        </button>

                        <button className="btn btn-danger btn-sm">
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
