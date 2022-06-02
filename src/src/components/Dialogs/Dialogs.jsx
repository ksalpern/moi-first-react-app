import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"
import DialogItems from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let state = props.DialogsPage;

let dialogsElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id} />);
let messagesElements = state.messages.map(m => <Message message={m.message} />);
let newMessageBody = state.newMessageBody;

let onSendMessageClick = () => {
  props.sendMessage();
}


let onNewMessageChange = (e) => {
let body = e.target.value;
props.updateNewMessageBody(body);
//props.store.dispatch(updateNewMessageBodyCreator(body));
}


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      {/* messages right down */}
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
        <div><button onClick={onSendMessageClick}>Send</button></div>
      </div>
    </div>
  );
}
export default Dialogs;
