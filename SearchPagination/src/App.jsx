import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentpage , setCurrentpage] = useState(1);

  const API = "http://localhost:3000/blog";
  // SearchPagination
  fetch(API, {
    method: "GET",
    header: { "content-type": "application/json" }
  }).then((response) => {
    response.json().then((data) => {
      setData(data);
    })
  })

  useEffect(()=>{

  },[data]);

//  Pagination

  const perpagesBlog = 3;
  const totelPages = Math.ceil(data.length/perpagesBlog);

  const lastIndex = perpagesBlog*currentpage;
  const FirstIndex = lastIndex - perpagesBlog;
  const currentBlog = data.slice(FirstIndex , lastIndex);


  return (
    <>
      <div className="container py-4">
        <div className="d-flex justify-content-center">
          <input  type="text"  placeholder="Search blogs..." className="form-control shadow-sm" onChange={(e)=>setSearch(e.target.value)
          } style={{ maxWidth: "500px" }}/>
        </div>
      </div>
      <div className="container py-5">
        <div className="row g-4">

          {currentBlog.filter((element) => {
              return element.title.toLowerCase().includes(search.toLowerCase());
          }).map((element, index) => {
            return (
              <div className="col-md-6 col-lg-4" key={index}>

                <div className="card h-100 shadow border-0">

                  <img
                    src={element.img}
                    alt={element.title}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  <div className="card-body">

                    <p className="text-muted mb-2">
                      Blog #{element.id}
                    </p>

                    <h3 className="card-title fw-bold">
                      {element.title}
                    </h3>

                    <p className="card-text text-secondary">
                      {element.description}
                    </p>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="badge bg-primary">
                        {element.author}
                      </span>

                      <small className="text-muted">
                        {element.date}
                      </small>
                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>
      
     <div className="d-flex justify-content-center mt-4">

  <ul className="pagination">

    {/* Previous Button */}
    <li className={`page-item ${currentpage === 1 ? "disabled" : ""}`}>
      <button
        className="page-link"
        onClick={() => {
          setCurrentpage(currentpage - 1);
        }}
        disabled={currentpage === 1}
      >
        Previous
      </button>
    </li>

    {/* Page Numbers */}
    {Array.from({ length: totelPages }).map((_, index) => {
      return (
        <li
          key={index}
          className={`page-item ${
            currentpage === index + 1 ? "active" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => {
              setCurrentpage(index + 1);
            }}
          >
            {index + 1}
          </button>
        </li>
      );
    })}

    {/* Next Button */}
    <li
      className={`page-item ${
        currentpage === totelPages ? "disabled" : ""
      }`}
    >
      <button
        className="page-link"
        onClick={() => {
          setCurrentpage(currentpage + 1);
        }}
        disabled={currentpage === totelPages}
      >
        Next
      </button>
    </li>

  </ul>

</div>
    </>
  )
}

export default App
