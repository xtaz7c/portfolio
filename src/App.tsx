import Header from "./components/Header/Header";
import "./App.css";

function App() {
   return (
      <div className="app">
         <div className="app__header">
            <Header />
         </div>
         <main id="inicio" className="app__main wrapper"></main>
      </div>
   );
}

export default App;
