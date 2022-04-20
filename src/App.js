
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
   
   <div className='app-wrapper'>
     <Header />

<Sidebar />
<div className='app-wrapper-content'>
  <Content/>
  <Dialogs/>
</div>

</div >  

);
}

export default App;
