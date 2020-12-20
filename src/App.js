import './App.css';
import Row from './Row';
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>StreamIt</h1>

      <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} ></Row>
      <Row title="Tranding Now" fetchUrl={requests.fetchTrending}></Row>
    
    </div>
  );
}

export default App;
