import React from 'react';

import {Routes , Route} from "react-router-dom" 
import AboutUsPage from './Pages/AboutPage'
import HomePageBody from './Pages/HomePage';
import AddQuotePage from './Pages/AddQuotePage';
import { useNavigate } from "react-router-dom";


import styled from '@emotion/styled';
import { Button } from '@mui/material';

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
	width: 100%;
	justify-content: space-between;
	background-color: orangered;
`;

const Tabs = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 0.5em;
	flex-direction: row;
	gap: 0.5em;
`;

const PageTitle = styled('div')`
	color: black;
	font-size: 2em;
	font-weight: bold;
	margin-left: 0.5em;
	cursor: pointer;
`;

const PageBody = styled('div')`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;


function Home()
 {
	const navigate = useNavigate();
  return (
	<HomeStyle>
		<HeaderStyle>
			<PageTitle onClick={() => navigate('/')} >Gushpiknik quotes</PageTitle>
			<Tabs>
				<Button variant='contained'  href="/about" >About us</Button>
				<Button variant='contained'  href="/add-quote" >Add Quote</Button>
			</Tabs>
		</HeaderStyle>

		<PageBody>
			<Routes>
				<Route path="/" element={<HomePageBody/>} />
				<Route path="/about"  element={<AboutUsPage/>} />
				<Route path="/add-quote"  element={<AddQuotePage/>} />
			</Routes>
		</PageBody>
	</HomeStyle>
  );
}

export default Home;

