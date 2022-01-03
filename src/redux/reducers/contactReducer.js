const initialState = [
    {
        id: 0,
        name: "Marina",
        email: "mar@gmail.com",
        number: 123456789
    },
    {
        id: 1,
        name: "Test",
        email: "test@gmail.com",
        number: 987654321
    }
]

const contactReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            return [...state, action.payload];
        case "DELETE_CONTACT":
            const filteredContact = state.filter(contact => contact.id === action.payload && contact);
            state = filteredContact;
            return state;    
        default: 
          return state;
    }
}

export default contactReducer