import './App.css';
import InfoWrapper from './components/InfoWrapper';
import Header from './components/misc/Header';
import SearchBox from './components/SearchBox';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App container">
      <Header heading="Nutri Buddy" subheading="Live a nutritious life!"/>
      <InfoWrapper/>
    </div>
  );
}

export default App;
