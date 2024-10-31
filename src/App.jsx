import "./App.css";
import Navigation from './components/Navigation/Navigation';
import Priceoptions from './components/Priceoptions/Priceoptions';
import Linecharts from './components/Linecharts/Linecharts';
import Phones from './components/Phones/Phones';


function App() {
  return (
    <>
        <Navigation></Navigation>
        <Priceoptions></Priceoptions>
        <Linecharts></Linecharts>
        <Phones></Phones>
    </>
  );
}

export default App;
