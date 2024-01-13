import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ControlPointDuplicateSharpIcon from '@mui/icons-material/ControlPointDuplicateSharp';
import HelpCenterSharpIcon from '@mui/icons-material/HelpCenterSharp';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const themefortabs = {
    position: 'absolute',
     top: 0,
     right: 0,
     display: 'flex',
     backgroundColor: 'rgb(204, 102, 0)',
     width: 300,
    
   };
    
  return (
    
    <Box  >
      <BottomNavigation
        style={themefortabs}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{ backgroundColor: 'rgb(102,51, 0)', color:'black'}} label="add new quote" icon={<ControlPointDuplicateSharpIcon />} />
        <BottomNavigationAction  sx={{ backgroundColor: 'rgb(102,51, 0)', color:'black'}} label="about us" icon={<HelpCenterSharpIcon />} />
      </BottomNavigation>
    </Box>
   
  );
}
