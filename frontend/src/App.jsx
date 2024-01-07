// App.jsx
import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  
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
    backgroundColor: 'rgb(204, 102, 0)',
    top: 0,
    left: 0,
    //width: '100%', // Set the width of the object
    fontSize: '20px', // Set the font size of the text
  };
  const tabsContainerStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
  };

  const NameforTabs = {
    position: 'absolute',
    color: 'black',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '50px',
    backgroundColor: 'orange',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  }

  const tabStyles = {
    padding: '10px',
    backgroundColor: 'rgb(204, 102, 0)',
    fontSize: '20px',
    color: 'black',
    cursor: 'pointer',
    marginRight: '10px',
  };
    const tabNames = ["create new quotes", "about us"];

    const contentStyles = {
      marginTop: '50px', // Adjust as needed
      fontSize: '18px',
      color: 'black',
    };

    const renderContent = () => {
      switch (activeTab) {
        case "create new quotes":
          return <div style={NameforTabs}>Ronen</div>;
        case "about us":
          return <div style={NameforTabs}>Hemo</div>;
        default:
          return null;
      }
    };
  
 

    return (
      <div style={pageStyles}>
        <h1 style={headingStyles}>Gushpiknik-Quotes</h1>
        <div style={tabsContainerStyles}>
          {tabNames.map((tabName, index) => (
            <div
              key={index}
              style={tabStyles}
              onClick={() => setActiveTab(tabName)}
            >
              {tabName}
            </div>
          ))}
        </div>
        {renderContent()}
      </div>
    );
  };
  

export default App;

