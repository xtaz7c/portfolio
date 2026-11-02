import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
   return (
      <div className="app">
         <div className="app__header">
            <Header />
         </div>
         <Home />
      </div>
   );
}

export default App;
