import React, { useState, useEffect } from "react"; 
import "./App.css";
import Home from "./Home";
import { fetchItems, addItem } from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import slugify from "slugify";
import AddForm from "./AddForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let snacks = await fetchItems("snacks");
      let drinks = await fetchItems("drinks");
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleAddItem = async (type, { name, description, recipe, serve }) => {
    let id = slugify(name, { lower: true });
    let objData = { id, name, description, recipe, serve };
    await addItem(type, objData);
    if (type === "snacks") {
      setSnacks((prevSnacks) => [...prevSnacks, objData]);
    } else if (type === "drinks") {
      setDrinks((prevDrinks) => [...prevDrinks, objData]);
    }
  };

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home snacks={snacks} drinks={drinks} />}
          />
          <Route
            exact
            path="/snacks/"
            render={() => <Menu items={snacks} title="Snacks" />}
          />
          <Route
            exact
            path="/drinks/"
            render={() => <Menu items={drinks} title="Drinks" />}
          />
          <Route
            path="/snacks/:id"
            render={(props) => (
              <Item items={snacks} cantFind="/snacks/" {...props} />
            )}
          />
          <Route
            path="/drinks/:id"
            render={(props) => (
              <Item items={drinks} cantFind="/drinks/" {...props} />
            )}
          />
          <Route
            path="/add/"
            render={(props) => <AddForm addItem={handleAddItem} {...props} />}
          />
          <Route>
            <p>Whoops, No Snacks or Booze here.</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
