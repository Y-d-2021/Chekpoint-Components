
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Adress from './Components/Profile/Adress';
//import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <FullName/>
    <Adress/>
    <ProfilePhoto/>
    </div>
  );
}

export default App;
