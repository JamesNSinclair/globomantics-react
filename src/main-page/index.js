import './main-page.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResults from "../search-results";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse"
import HousesContext from "../context/housesContext";

import { BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";
import logo from './logo.svg';


function App() {
  const housesContext = HousesContext
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <housesContext.Provider value={allHouses}>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter />
        <Switch>
          <Route path="/searchresults/:country" element={  <SearchResults />}>
                    </Route>
          <Route path="/house/:id" element={ <HouseFromQuery/>}>
          </Route>
          <Route path="/" element={<FeaturedHouse house={featuredHouse} />}>
          </Route>
        </Switch>
      </div>
      </housesContext.Provider>
    </Router>
  );
}

export default App;
