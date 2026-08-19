// REST
function home( {data2 = "new" , ...restdata})
{
    console.log(data2);
    console.log(restdata);
    
    

    return(
        <h2>Home page</h2>
    )
}

export default home;