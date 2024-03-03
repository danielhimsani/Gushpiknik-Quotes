import React from 'react';

import {Routes , Route} from "react-router-dom" 
import AboutUsPage from './Pages/AboutPage';
import HomePageBody from './Pages/HomePage';
import AddQuotePage from './Pages/addquotepage/AddQuotePageMain';
import { useNavigate } from "react-router-dom";


import styled from '@emotion/styled';
import {Button, Divider} from '@mui/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

const HomeStyle = styled('div')`
	background-color: #FFFFFF;
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
	position: fixed;
	background-color: #FFFFFF;
	z-index: 999;
	opacity: 0.75;
	backdrop-filter: blur(10px);
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
	font-size: 2.5em;
	font-weight: bold;
	margin-left: 0.5em;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	gap: 0.5em;
	align-items: center;
	color: #FF9F1C;
	font-family: "Roboto Thin";
`;

const PageBody = styled('div')`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TabButton = styled(Button)`
	background: transparent;
	color: #FF9F1C;
	font-weight: 700;
`;


function Home()
 {
	const navigate = useNavigate();
  return (
	<HomeStyle>
		<HeaderStyle>
			<PageTitle onClick={() => navigate('/')} >
				<FontAwesomeIcon icon={faQuoteLeft} />
			</PageTitle>
			<Tabs>
				<TabButton variant='text'  href="/about" >About us</TabButton>
				<TabButton variant='text'  href="/add-quote" >Add Quote</TabButton>
			</Tabs>
		</HeaderStyle>
		<Divider/>
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

