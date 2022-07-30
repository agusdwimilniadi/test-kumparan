import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import "./assets/scss/style.scss";
import Detailphoto from "./pages/DetailPhoto";
import Detailpost from "./pages/DetailPost";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import Userdetail from "./pages/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/detail/:id" component={Detailpost}></Route>
        <Route exact path="/user/:id" component={Userdetail}></Route>
        <Route exact path="/photo/details/:id" component={Detailphoto}></Route>
        <Route component={Notfound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
