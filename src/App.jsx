import './App.css';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import ThemeProvider from './context/ThemeProvider';

function App() {
	return (
		<>
			<ThemeProvider>
				<Header />
				<ThemeToggle />
			</ThemeProvider>
		</>
	);
}

export default App;
