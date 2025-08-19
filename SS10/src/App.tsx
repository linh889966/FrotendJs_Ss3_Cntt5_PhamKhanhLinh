improt "./styles/app.css"

function App() {
  let textColor = "red";
  let h2check = true;
  let arr = [1,2,3,4,5];
  return(
    <h1 style ={{color: textColor}}>Hello</h1>
    {h2check ?<h2>Linh</h2> : <h3>Loan</h3>}
    <ul>
      {arr.map((element)=>{
        return <li>{element}</li>
      })}
    </ul>
  )
}

export default App
