import './App.css'
import Button from './components/button/button'


function App() {
  const handleClick = () =>{
    console.log('button 1 clicked');
  }
  const handleClickTwo = () =>{
    console.log('button 2 clicked');
  }
  const handleClickThree = () =>{
    alert('button 3 clicked');
  }

  return (
    <div className="App">
      <Button
      type="white" onClick ={handleClick}
      >
        Button 1
      </Button>
      <Button
      type ="brown"
      onClick ={handleClickTwo}
      >
        Button 2
      </Button>
      <Button
      type = "round-black"
      onClick ={handleClickThree}
      >
        Button 3
      </Button>
    </div>
  );
}

export default App;
