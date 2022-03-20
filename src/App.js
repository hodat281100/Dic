import { ThemeProvider } from 'styled-components';
import GlobalStyled from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { DARK_MODE_KEY, DARK_THEME, LIGHT_THEME } from './Helpers/constant';
import { useLocalStorage } from './Hooks';
import Home from './Pages/Home/';

function App() {
	const [isDarkMode, setIsDarkMode] = useLocalStorage(DARK_MODE_KEY, false);

	return (
		<Router>
			<ThemeProvider theme={isDarkMode ? DARK_THEME : LIGHT_THEME}>
				<GlobalStyled />
				<Navbar darkMode={isDarkMode} set={setIsDarkMode} />
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</ThemeProvider>
		</Router>
	);
}

export default App;
