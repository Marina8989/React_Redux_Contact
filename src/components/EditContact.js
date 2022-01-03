import React, {useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";

const EditContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const contacts = useSelector(state => state);
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    const handleSubmit = (e) => {
      e.preventDefault();

      const checkName = contacts.find(contact => contact.id !== parseInt(id) && contact.name === name && contact);
      const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email && contact);
      const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number) && contact);


      if(!name || !email || !number) {
        console.log("All fields need to be filled in");
      }
      if(checkName){
        console.log("The name is updated");
      }
      if(checkEmail){
        console.log("The email is updated");
      }
      if(checkNumber){
        console.log("The number is updated");
      }

      const data = {
          id: parseInt(id),
          name,
          email,
          number
      }

      dispatch({type: "UPDATE_CONTACT", payload: data})
      history.push("/");
    }

    useEffect(() => {
       if(currentContact){
           setName(currentContact.name);
           setEmail(currentContact.email);
           setNumber(currentContact.number);
       }
    }, [currentContact])
  
    return (
        <div>
            <h3>Edit Contact {id}</h3>
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
                  <input type="submit" value="Update Student" />
                  <Link to="/">Cancel</Link>
              </div>
            </form>
        </div>
    )
}

export default EditContact
