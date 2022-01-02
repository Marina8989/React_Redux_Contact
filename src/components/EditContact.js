import React from 'react';
import { Link,} from "react-router-dom";

const EditContact = () => {
    return (
        <div>
           <h3>Edit contact</h3>
           <form>
           <div>
            <input type="text" placeholder="Name..." />
           </div>
           <div>
            <input type="email" placeholder="Email..."  />
           </div>
           <div>
             <input type="submit" value="Edit Contact" />
             <Link to="/">Cancel</Link>
           </div>

          </form>
        </div>
    )
}

export default EditContact
