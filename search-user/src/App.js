import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Header from "./Components/HomePage/Header";
import List from './Components/UserList/List';
import SearchUser from './Components/Search/SearchUser';
import CreateUser from './Components/UserForm/CreateUser';
function App() {
  return (
   <>
    <List/>
    <Header/>
    <CreateUser/>
   </>
  );
}

export default App;
