import React from 'react';

import SimpleBottomNavigation from './linebar';
import styled from '@emotion/styled';

const HomeStyle = styled('div')`
	background-color: orange;
	position: absolute;
	top: 0;
	left: 0%;
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
`;

const HeaderStyle = styled('div')`
	display: flex;
	flex-direction: row;
	width: 1000%;
	justify-content: space-between;
	background-color: orangered;
`;

const PageTitle = styled('div')`
	color: black;
	font-size: 2em;
	font-weight: bold;
`;


function Home()
 {
    
    const background = {
        display: 'flex',
        height: '100vh', // 100% of the viewport height
        background: 'orange', // Background color for the entire screen
        height: '100vh', 
        width: "100vw",
        flexDirection: 'column',
      };

    const contentStyle = {
        padding: '28px',
        background: 'rgb(204, 102, 0)', // Background color for the content area
        alignItems: 'flex-start'
      };
    const headingStyles = {
        color: 'black', 
        position: 'absolute',
        backgroundColor: 'rgb(102,51, 0)',
        top: 0,
        left: 0,
        fontSize: '37px',
        fontWeight: 'bold'
  };

  return (

	<HomeStyle>
		<HeaderStyle>
			<PageTitle>Gushpiknik quotes</PageTitle>

		</HeaderStyle>
		

	</HomeStyle>

	
    
    //   <div style={background} >
    //     <div style={contentStyle}>
    //     <div style={headingStyles}>Gushpiknik-Quotes</div>
    //       <SimpleBottomNavigation >
    //       </SimpleBottomNavigation>
    //     </div>
    //   </div>
     
  );
}

export default Home;

