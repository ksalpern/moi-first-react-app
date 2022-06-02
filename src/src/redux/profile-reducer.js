const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = { 
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
     
    ], newPostText:'something'};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 5,
          message: state.newPostText,
          likes: 10,
        };
        state.posts.push(newPost);
        state.newPostText = "";

      case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state;
      default:
        return state;
    }
    
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;