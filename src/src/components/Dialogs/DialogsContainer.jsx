import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().DialogsPage;

let onSendMessageClick = () => {
  props.store.dispatch(sendMessageCreator());
}


let onNewMessageChange = (body) => {
props.store.dispatch(updateNewMessageBodyCreator(body));
}


  return (
    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} DialogsPage={state}/>
  );
}
export default DialogsContainer;
