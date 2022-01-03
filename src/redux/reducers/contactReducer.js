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
            return [...state, action.payload]
        default: 
          return state;
    }
}

export default contactReducer