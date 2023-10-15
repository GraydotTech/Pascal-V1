import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import { SearchProvider } from "./context/searchContext";

function App() {

  return (
    <div className="w-full">
      <SearchProvider>        
        <Routes>
          <Route path="/" element={<Homepage />} />          
        </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;
