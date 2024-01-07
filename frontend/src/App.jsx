// App.jsx
import React from 'react';

const App = () => {
  const pageStyles = {
    backgroundColor: 'orange', // Set background color to orange
    height: '100vh', 
    width: "100vw",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const headingStyles = {
    color: 'black', // Set text color to white
    position: 'absolute',
    top: 0,
    left: 0,
    width: '200px', // Set the width of the object
    height: '10px', // Set the height of the object
    padding: '0px',
    fontSize: '20px', // Set the font size of the text
    
  };

  return (
<<<<<<< HEAD
    <div style={pageStyles}>
      <h1 style={headingStyles}>Gushpiknik-Quotes</h1>
    </div>
  );
};
=======
    <div>
      Hello world
    </div>
  )
}
>>>>>>> 82017ff6534988e9a166b8aa918e163fb68904b6

export default App;
