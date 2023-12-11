import "./App.css";
import CurrencyConverter from "../components/CurrencyConverter";
import ErrorBoundary from "../components/Error";

function App() {
    return ( <
        ErrorBoundary > <
        CurrencyConverter / >
        <
        /ErrorBoundary>
    );
}

export default App;