import "./App.css";
import { FavoriteProvider } from "./components/FavoriteContext";
import Signup from "./components/Signup";
import { WatchlistProvider } from "./components/WatchlistContext";

function App() {
  return (
    <FavoriteProvider>
      <WatchlistProvider>
        <div className="App">
          <Signup />
        </div>
      </WatchlistProvider>
    </FavoriteProvider>
  );
}

export default App;
