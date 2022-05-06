import Persons from './components/Persons';
import Individual from './components/Individual';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const client = new ApolloClient({
  uri: "https://3sdv5.sse.codesandbox.io/",
  cache: new InMemoryCache(),
}); 


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route  path="/" element={<Persons />} />
            <Route  path="/person/:name" element={<Individual />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
