function about(propes)
{
    console.log(propes);

    const data = {
        ...propes
    }
    data.age = "10";
    console.log(data);
    
    
    return(
       <h1>About page</h1>
    )
}
export default about;