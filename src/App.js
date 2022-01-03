import React from "react";
import { Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route path="/add" component={() => <AddContact />} />
            </Switch>
        </div>
    )
}

export default App
