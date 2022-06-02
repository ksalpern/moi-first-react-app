import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route} from "react-router-dom";
import Friend from './components/Sidebar/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';




const App = (props) => {
  return (
   <div className='app-wrapper'>
     <Header />

<Sidebar />
<div className='app-wrapper-content'>
<Routes>
  <Route path='/profile' element={<Content
  store={props.store} />} 
 />
  <Route path='/dialogs/*' element= {<DialogsContainer 
  store={props.store} />}/> 
  <Route path='/news' element={<News/>} />
  <Route path='/music' element={<Music/>} />
  <Route path='/seettings' element={<Settings/>} />
  <Route path='/friends' element={<Friend  />} />
  </Routes>
</div>

</div >  
);
}

export default App;
