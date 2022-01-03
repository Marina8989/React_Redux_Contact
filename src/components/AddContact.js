import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux"

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
  
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(contacts)

    const handleSubmit = (e) => {
      e.preventDefault();

      const checkName = contacts.find(contact => contact.name === name && contact);
      const checkEmail = contacts.find(contact => contact.email === email && contact);
      const checkNumber = contacts.find(contact => contact.number === parseInt(number) && contact);


      if(!name || !email || !number) {
        console.log("All fields need to be filled in");
      }
      if(checkName){
        console.log("The name is taken");
      }
      if(checkEmail){
        console.log("The email is taken");
      }
      if(checkNumber){
        console.log("The number is taken");
      }

      const data = {
          id: contacts[contacts.length - 1].id + 1,
          name,
          email,
          number
      }

      dispatch({type: "ADD_CONTACT", payload: data})
    }

    return (
        <div>
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
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
