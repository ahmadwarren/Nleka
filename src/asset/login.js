import { useState } from "react";
import { Navigate } from "react-router-dom";

    // eslint-disable-next-line react-hooks/rules-of-hooks
    //const navigate = useNavigate();
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
//  const [setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
//  const users = [{ username: "Jane", password: "testpassword" }];
 const HandleSubmit = (e) => {
    e.preventDefault()
    alert("hello " + password + username)
// const account = users.find((user) => user.username === username);
//  if (account && account.password === password) {

//   setauthenticated(true)
//   localStorage.setItem("authenticated", true);
//   
  return <Navigate to={"/cart"} />;
// }
};
 return (
  <div>
    <p>Welcome Back</p>
    <form onSubmit={HandleSubmit}>
    <input
       type="text"
       name="Username"
       value={username}
       onChange={(e) => setusername(e.target.value)}
    />
    <input
    type="password"
    name="Password"
    onChange={(e) => setpassword(e.target.value)}
    />
    <input type="submit" value="Submit" />
    </form>
   </div>
  )
};


export default Login;