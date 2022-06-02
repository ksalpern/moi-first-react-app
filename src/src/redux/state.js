import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

//import {rerenderEntireTree} from '../render'


let store = {
  _state: {
    ProfilePage:{ 
      posts: [
        { id: 1, message: "Hey there. How u doing?", likes: "10" },
        { id: 2, message: "It's my first post", likes: "8" },
        { id: 3, message: "Whatsaap", likes: "96" },
        { id: 4, message: "shkdv", likes: "96" },
        { id: 5, message: "yep", likes: "10" },
        { id: 6, message: "sdgv", likes: "1" },
        { id: 7, message: "e frgbeb", likes: "71" },
        { id: 8, message: "aisf. hafhk.", likes: "51" },
        { id: 9, message: "sdga", likes: "78" },
        { id: 10, message: "hrjst", likes: "15" },
        { id: 11, message: "srthtsh", likes: "2" },
       
      ], newPostText:'something'} ,
     DialogsPage: {
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
    },
FriendsPage : {
      friends: [
        { id: 1, name: "Masha", photo: "https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg" },
        { id: 2, name: "Sasha", photo: "https://media1.popsugar-assets.com/files/thumbor/rqrH_e6UUncDFPoF9Rp8aUwGNaA/1126x0:2714x1588/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/06/832/n/44498184/4a11b5145deaa4f27e6ba1.42001155_/i/baby-yoda-pictures.jpg" },
        { id: 3, name: "Dasha", photo: "https://www.coolthings.com/wp-content/uploads/2019/12/baby-yoda-toys-the-mandalorian-the-child-0.jpg" },
        { id: 4, name: "Kasha", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0No3UZqNC-ex4AMmxDPmewS72camVl9vNfZoj2UaH4sffhxzysvUtz93vjH6foa3lH7A&usqp=CAU" },
        { id: 5, name: "Yulya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 6, name: "Ura", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUo24vQr11C-WyHo5yW4Y9x9WIHLWwH6a0zkXHz1K9ODVgcupwMz5flPlBUxa7HB-Y6M&usqp=CAU" },
        { id: 7, name: "Valya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 8, name: "Susha", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 9, name: "Muha", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 10, name: "Poolya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 11, name: "Varya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 12, name: "Anya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 13, name: "Galya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
      ]},
      SidebarPage : {

      }
},
_callSubscriber  ()  {
  console.log('state was changed ');
},

getState() {
return this._state;
},
subscribe  (observer) {
  this._callSubscriber = observer;
 },
/*
addPost () {
  let newPost = {
    id: 5,
    message: this._state.ProfilePage.newPostText,
    likes: 10
  };
  this._state.ProfilePage.posts.push(newPost);
  this._state.ProfilePage.newPostText = '';
  this._callSubscriber(this._state);
}, 
updateNewPostText (newText)  {
  this._state.ProfilePage.newPostText = newText;
  this._callSubscriber(this._state);
} ,
*/
dispatch(action) {

  this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
  this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
  this._state.SidebarPage = sidebarReducer(this._state.SidebarPage, action);

 this._callSubscriber(this._state);

  
}


}







  window.store = store;
 export default store;

/*
let rerenderEntireTree = () => {
  console.log('state was changed ');
}

  let state = {
    ProfilePage:{ 
      posts: [
        { id: 1, message: "Hey there. How u doing?", likes: "10" },
        { id: 2, message: "It's my first post", likes: "8" },
        { id: 3, message: "Whatsaap", likes: "96" },
        { id: 4, message: "shkdv", likes: "96" },
        { id: 5, message: "yep", likes: "10" },
        { id: 6, message: "sdgv", likes: "1" },
        { id: 7, message: "e frgbeb", likes: "71" },
        { id: 8, message: "aisf. hafhk.", likes: "51" },
        { id: 9, message: "sdga", likes: "78" },
        { id: 10, message: "hrjst", likes: "15" },
        { id: 11, message: "srthtsh", likes: "2" },
       
      ], newPostText:'something'} ,
     DialogsPage: {
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
        { id: 5, message: "unbeliaveble" },
      ]},
FriendsPage : {
      friends: [
        { id: 1, name: "Masha", photo: "https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg" },
        { id: 2, name: "Sasha", photo: "https://media1.popsugar-assets.com/files/thumbor/rqrH_e6UUncDFPoF9Rp8aUwGNaA/1126x0:2714x1588/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/06/832/n/44498184/4a11b5145deaa4f27e6ba1.42001155_/i/baby-yoda-pictures.jpg" },
        { id: 3, name: "Dasha", photo: "https://www.coolthings.com/wp-content/uploads/2019/12/baby-yoda-toys-the-mandalorian-the-child-0.jpg" },
        { id: 4, name: "Kasha", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0No3UZqNC-ex4AMmxDPmewS72camVl9vNfZoj2UaH4sffhxzysvUtz93vjH6foa3lH7A&usqp=CAU" },
        { id: 5, name: "Yulya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 6, name: "Ura", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUo24vQr11C-WyHo5yW4Y9x9WIHLWwH6a0zkXHz1K9ODVgcupwMz5flPlBUxa7HB-Y6M&usqp=CAU" },
        { id: 7, name: "Valya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 8, name: "Susha", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 9, name: "Muha", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 10, name: "Poolya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 11, name: "Varya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 12, name: "Anya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
        { id: 13, name: "Galya", photo: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" },
      ]},
      SidebarPage : {

      }
}



 export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.ProfilePage.newPostText,
    likes: 10
  };

  state.ProfilePage.posts.push(newPost);
  state.ProfilePage.newPostText = '';
  rerenderEntireTree(state);
} 

//export const updateNewPostText = //(newText) => {
 // state.ProfilePage.newPostText = newText;
 // rerenderEntireTree(state);
//} 

//export const subscribe = (observer) => {
 //rerenderEntireTree = observer;
//}*/
 