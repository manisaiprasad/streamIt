import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      {/* <h1>StreamIt</h1> */}
      <Nav/>
      <Banner/>
      <Row title="Tranding Now" fetchUrl={requests.fetchTrending}isLargeRow></Row>
      <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} ></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>

    </div>
  );
}

export default App;
