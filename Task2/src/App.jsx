
import './App.css'

var students = [
  {
    Name: "Shruti",
    CollageName:" S.P.S",
    Gender:"Female",
    Age: 18
  },
  {
    Name: "Hiral",
    CollageName:" S.P.S",
    Gender:"Female",
    Age: 18
  },
  {
    Name: "Rajal",
    CollageName:" S.P.S",
    Gender:"Female",
    Age: 18
  },
  {
    Name: "Ansi",
    CollageName:" S.P.S",
    Gender:"Female",
    Age: 18
  },
  {
    Name: "Mehek",
    CollageName:" S.P.S",
    Gender:"Female",
    Age: 18
  },
]
function App() {
  return (
  <section>
    {
      students.map((student)=>{
        return(
          <div>
            <h2>Name is: {student.Name}</h2>
            <h2>Collage Name : {student.CollageName}</h2>
            <h2>Gender : {student.Gender}</h2>
            <h2>Age: {student.Age}</h2>
          </div>
        )
      })
    }
  </section>
    
  )
}

export default App
