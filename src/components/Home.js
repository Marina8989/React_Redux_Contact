import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Link to="/add">Add Contact</Link>
            <h1>Welcome to Contact List</h1>
        </div>
    )
}

export default Home
