import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NumberOfEvents />
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
