import React, { useState } from "react";

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    return (
        <div>
            <h2>Add Contact</h2>
            <form>
              <div>
                  <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div>
                  <input type="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div>
                  <input type="number" placeholder="Number..." value={number} onChange={(e) => setNumber(e.target.value)}/>
              </div>
              <div>
                  <input type="submit" value="Add Student" />
              </div>
            </form>
        </div>
    )
}

export default AddContact
