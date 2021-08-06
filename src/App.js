import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import bag from './assets/bag.png';
import lady from './assets/lady.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* contains header content */}
      <Header />
      {/* contains center content */}
      <Main />
      {/* contains list of items */}
      <div className="content">
        <Card image={bag} ></Card>
        <Card image={lady} ></Card>
      </div>
    </div>
  );
}

export default App;
