import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Header from "./Components/HomePage/Header";
import List from './Components/UserList/List';
import SearchUser from './Components/Search/SearchUser';
function App() {
  return (
   <>
    <List/>
    <Header/>
   </>
  );
}

export default App;
