import CampsitesList from './features/campsites/CampsitesList';
import './App.css';
import Header from './components/Header';
import FooterBar from './components/Footer';



function App() {
  return (
    <div className="App">
        <Header/>
        <CampsitesList/>
        <FooterBar/>
    </div>
  );
}

export default App;
