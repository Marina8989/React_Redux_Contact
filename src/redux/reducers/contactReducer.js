const initialState = [
    {
        id: 0,
        name: 'Marina Alt',
        email: 'marina@gmail.com'
    },
    {
        id: 1,
        name: 'Test Test',
        email: 'test@gmail.com'
    }
]

const contactReducer = (state = initialState, action) => {
   switch(action.type){
       case "ADD_CONTACT":
           return [...state, action.payload];
      default:
          return state;
   }
}

export default contactReducer;