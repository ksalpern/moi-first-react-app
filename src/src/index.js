import './index.css';
import reportWebVitals from './reportWebVitals';
//import state, { subscribe } { addPost, updateNewPostText } from './redux/state';
//import { rerenderEntireTree } from './render';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree = (state) => {
  
  root.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>
  );
}

 rerenderEntireTree(store.getState());
 store.subscribe(()=>{
   let state = store.getState();
 rerenderEntireTree(state)  
} );
reportWebVitals();
//addPost('yeg whyyyyyyy');

 //let renderEntireTree = (state) => {
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
   // <App state={state} addPost={ addPost } updateNewPostText={updateNewPostText} />
  //</React.StrictMode>
//);}

//subscribe(renderEntireTree);

/*export let renderEntireTree = () => {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <React.StrictMode>
    <App state={state} addPost={addPost} />
  </React.StrictMode>
);}*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

