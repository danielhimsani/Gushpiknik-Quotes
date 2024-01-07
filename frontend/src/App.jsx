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
    color: 'black', 
    position: 'absolute',
    backgroundColor: 'rgb(204, 102, 0)',
    top: -14,
    left: 0,
    display: 'flex',
    fontSize: '20px', 
    padding: '20px',
    cursor: 'pointer',
    marginRight: '10px',// Set the font size of the text
  };

  const containerStyle = {
    display: 'flex',
    height: '100vh', // 100% of the viewport height
    background: 'orange', // Background color for the entire screen
    height: '100vh', 
    width: "100vw",
    flexDirection: 'column',
  };

  const contentStyle = {
    padding: '30px',
    background: 'rgb(255, 128, 0)', // Background color for the content area
    alignItems: 'flex-start'
    
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
    padding: '100px',
    borderRadius: '8px',
    textAlign: 'center',
    alignItems: 'flex-start'
  }

  const tabStyles = {
    backgroundColor: 'rgb(204, 102, 0)',
    fontSize: '20px',
    color: 'black',
    fontWeight: 'bold',
    marginRight: '5px',
    padding: '15px',
    borderRadius: '10px', // Optional: Add rounded corners to the content area 
  };

    const tabNames = ["create new quotes", "about us"];

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
      <div style={containerStyle}>
      <div style={contentStyle}>
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
      </div>
    );
  };
  

export default App;

