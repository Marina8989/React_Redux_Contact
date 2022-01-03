import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const contacts = useSelector(state => state)

    return (
        <div>
            <Link to="/add">Add Contact</Link>
            <div>
                <table>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    {contacts.map((contact, id) => (
                        <tr key={id}>
                          <td>{id + 1}</td>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.number}</td>
                          <td>
                              <Link to={`/edit/${id}`}>Edite</Link>
                              <button>Delete</button>
                          </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Home
