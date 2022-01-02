import React, {useState} from "react";
const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
           <div>
            <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)}/>
           </div>
           <div>
            <input type="email" placeholder="Email..." value={email} onChnage={(e) => setEmail(e.target.value)} />
           </div>
           <div>
               <input type="submit" value="Add Contact" />
           </div>
        </form>
    )
}

export default AddContact
