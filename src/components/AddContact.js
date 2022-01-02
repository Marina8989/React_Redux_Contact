import React, {useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(contacts)

    const handleSubmit = (e) => {
       e.preventDefault();

       const checkName = contacts.find(contact => contact.name !== name && contact)
       const checkEmail = contacts.find(contact => contact.email !== email && contact);

       if(!name || !email){
         console.log("Please enter name and email")
       }
       if(checkName) {
         console.log("Please enter name field")
       }
       if(checkEmail){
         console.log("Please enter email field")
       }

       const data = {
           id: contacts[contacts.length-1].id + 1,
           name,
           email
       }
       dispatch({type: "ADD_CONTACT", payload: data});
       history.push("/")
       console.log('data', data)
       console.log('state', contacts)
    }
    console.log('state', contacts)
    return (
        <form onSubmit={handleSubmit}>
           <div>
            <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)}/>
           </div>
           <div>
            <input type="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
           </div>
           <div>
            <input type="submit" value="Add Contact" />
           </div>
        </form>
    )
}

export default AddContact
