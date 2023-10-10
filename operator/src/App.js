import logo from './logo.svg';
import './App.css';

let userdata ={
  name : "Hinaya",
  imgurl:"https://images.unsplash.com/photo-1612506001235-f0d0892aa11b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  age: "3"
}

function Truevalue(){
  return(<div>
    <h1>Welcome:{userdata.name}</h1>
    <img src ={userdata.imgurl} alt={'photo of the user: '+ userdata.name} width={"250px"}/>
    <p>My age is {userdata.age}</p>
  </div>

  );
}
function Falsyvalue(){
  return(
    <div>
      <h1>Welcome :Unknown</h1>
      <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.pnghttps://simg.nicepng.com/pncdsmall/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png" width={"150px"}/>
      <p>The age is unavailable</p>
    </div>

  );
}

function App() {
  return (
    <div>
      {userdata.name&&userdata.imgurl&&userdata.age ? <Truevalue/>: <Falsyvalue/>}
    </div>
    
  );
}

export default App;
