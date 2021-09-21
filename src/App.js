import { useEffect, useState } from 'react';
import './App.css';
import Books from './components/Books/Books'; 
import Device from './components/Device/Device';

function App() {
  const [steps, setSteps ] = useState(0);
  const books =[
    {name: 'Mahmud Khan', author:'nai'},
    {name:'Bill Gates', author:'John'},
    {name:'small giants', author:'bo'},
    {name:'Bill Gates', author:'John2'},
  ]
  const handleIncreaseSteps = () => {
     const newStepsCount = steps +1;
    setSteps(newStepsCount);
    // console.log(steps); 
    
  }
  useEffect(() => {
    console.log(steps);
  }, [steps])
  return (
    <div className="App">
      {/* <h5>nmp = Node package manager</h5>
      <p>cli= Command line interface</p> */}
      <h3>My Steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk </button>
      <Device name="phone" steps={steps} price ="13599"/>
      <Books books={books}/>
    </div>
  );
}

export default App;
