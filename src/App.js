import "./App.css";
import { Login,Logout,getData } from "../src/redux/action";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getData())
  }, [])

  console.log(auth);
  return (
    <div className="App">
    {console.log(auth.isAusth)}
    {console.log(auth.data)}
      {auth.isAusth ? (
        <div>
        <div>Welcome phone:{auth.phone}</div>
        <div> Title:{auth.data.title}</div>
        <button onClick={()=>dispatch(Logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            value={phone}
            placeholder="Enter"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={() => dispatch(Login(phone))}>Login Here</button>
        </div>
      )}
    </div>
  );
}

export default App;
