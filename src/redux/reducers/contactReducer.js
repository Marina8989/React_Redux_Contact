const initialState = [
    {
        name: 'Marina Alt',
        email: 'marina@gmail.com'
    },
    {
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