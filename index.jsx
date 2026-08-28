import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from './components/Badge';

    

function App() {
    const backgroundColors = ["white", "red", "yellow", "green", "blue", "indigo", "purple", "pink"] 

    const badges = backgroundColors.map((color) => {
      {return <Badge key={color} backgroundColor={color}>Badge</Badge>}
    })

    const badgesPill = backgroundColors.map((color) => {
      {return <Badge key={color} backgroundColor={color} variant="pill">Badge</Badge>}
    })

  return (
    <main>
    <div className='badge-container'>
    <p><b>Square</b></p>
    {badges}
    </div>
    <div className='badge-container'>
    <p><b>Pill</b></p>
    {badgesPill}
    </div>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
