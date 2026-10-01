function Display()
{
    const data = JSON.parse(localStorage.getItem("formData"));
    return(
        <>
          <h1>Application Details</h1>

            <p>Name: {data?.fname}</p>
            <p>Email: {data?.email}</p>
            <p>Phone: {data?.phone}</p>
            <p>Notes: {data?.note}</p>
            <p>CV: {data?.cv}</p>
        </>
    )
}

export default Display;