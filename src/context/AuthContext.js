import React, { createContext, useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
//import axios from 'axios';

const Context = createContext();

const AuthContext = ({ children }) => {
	const localStorage = window.localStorage;
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [userData, setUserData] = useState({});
	//const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('userToken');

		if (token && token === !null) {
			// axios.defaults.header.post['Content-Type'] = 'application/json';
			// axios.defaults.headers = `x-access-token ${JSON.parse(token)}`;
			setAuthenticated(true);
		}

		setLoading(false);
	}, []);

	return (
		<Context.Provider
			value={{
				authenticated,
				setAuthenticated,
				loading,
				setLoading,
				userData,
				setUserData,
			}}>
			{children}
		</Context.Provider>
	);
};

export { Context, AuthContext };
