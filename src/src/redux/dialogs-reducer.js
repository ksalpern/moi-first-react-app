const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
    { id: 1, name: "Masha" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Dasha" },
    { id: 4, name: "Kasha" },
    { id: 5, name: "Yulya" },
    { id: 6, name: "Ura" },
    { id: 7, name: "Valya" },
    { id: 8, name: "Susha" },
    { id: 9, name: "Muha" },
    { id: 10, name: "Poolya" },
    { id: 11, name: "Varya" },
    { id: 12, name: "Anya" },
    { id: 13, name: "Galya" },
  ],
  messages: [
    { id: 1, message: "hi" },
    { id: 2, message: "whattsaaap" },
    { id: 3, message: "how u doin" },
    { id: 4, message: "that's crazy!!" },
    { id: 5, message: "unbeliaveble" }
  ], newMessageBody: "" 
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
     case UPDATE_NEW_MESSAGE_BODY:
       state.newMessageBody = action.body;
       return state;
     case SEND_MESSAGE:
       let body = state.newMessageBody;
       state.newMessageBody = "";
       state.messages.push({ id: 6, message: body });
       return state;
     default:
       return state;
   }   
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;