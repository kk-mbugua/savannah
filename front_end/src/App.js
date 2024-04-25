import "./assets/styles/App.css"
import "./assets/styles/global.css"
import Home from './pages/Home';
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
