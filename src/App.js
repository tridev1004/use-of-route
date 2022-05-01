import { Route } from "react-router-dom";
import Products from "./Pages/products";
import Welcome from "./Pages/welcome";
import MainHeader from "./components/mainHeader";
import ProductDetails from "./Pages/ProductDetails";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'/>
          </Route>
          <Route path="/Welcome">
            <Welcome />
          </Route>

          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
