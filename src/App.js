import logo from './logo.svg';
import './App.css';
import CurrencyConverter from './CurrencyConverter';
import ErrorBoundary from './Error';

function App() {
    return ( < ErrorBoundary > <
        CurrencyConverter / >
        <
        /
        ErrorBoundary >
    );
}

export default App;