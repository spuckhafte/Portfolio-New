import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useSs from "./hooks/useSs";

function App() {
  let [tabState, setTabState] = useSs('tabState', 0);
  tabState = parseInt(tabState);
  return (
    <div className="App">
      <Navbar activeTab={tabState} activateTab={setTabState} />
      {tabState === 2 && <Footer />}
      {
        tabState === 0 && <Home /> || tabState === 1 && <Work /> || tabState === 2 && <Contact />
      }
      {tabState !== 2 && <Footer />}
    </div>
  );
}

export default App;
