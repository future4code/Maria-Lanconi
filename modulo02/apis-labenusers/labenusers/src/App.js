import react from "react";
import UserList from "./Components/UserList";
import SingUp from "./Components/SingUp";


export default class App extends react.Component {

  state = {
    currentPage: 'singUp'
  }

  changePage = () => {
    switch (this.state.currentPage){
      case 'singUp':
        return <SingUp buttonFunction = {this.userListPage}/>
       
      case 'userList':
        return <UserList buttonFunction = {this.singUpPage}/>
      
      default:
        return alert('ERRO!Página não encontrada')
    }
  }
  
  singUpPage = () => {
    this.setState({currentPage: 'singUp'})
  }

  userListPage = () => {
    this.setState({currentPage: 'userList'})
  }

  render() {
    return (
      <div>
        {this.changePage()}
      </div>
    )
  }
}

