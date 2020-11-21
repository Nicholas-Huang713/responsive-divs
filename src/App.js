import React, {useState} from 'react';
// import Layout from './components/Layout/Layout'
import Box from './components/Box/Box'
import './App.css';

function App() {
  const [currentColor, setCurrentColor] = useState(null);

  const handleClick = (color) => {
    setCurrentColor(color)
  }
  const titleColor = {
    color: currentColor
  }
  return (
    <div className="app-wrapper">
      {/* <Layout>  */}
      <h1 style={titleColor}>Title Title Title</h1>
        <Box color="red" handleClick={handleClick}/>
        <Box color="yellow" handleClick={handleClick}/>
        <Box color='green' handleClick={handleClick}/>
        <Box color='blue' handleClick={handleClick}/>
        <Box color="orange" handleClick={handleClick}/>
        <Box color="purple" handleClick={handleClick}/>
      {/* </Layout> */}
    </div>
  );
}

export default App;
