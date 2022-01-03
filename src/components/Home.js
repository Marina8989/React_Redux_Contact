import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Welcome to the home page of the App</h2>
            <Link to="/add">Add Contact</Link>
        </div>
    )
}

export default Home
