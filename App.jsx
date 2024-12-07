import { useSelector,useDispatch } from "react-redux";
import {changeName} from "./nameSlice";
const App=()=>{
    const mynm=useSelector((state)=>state.myname.nm);
     const dispatch=useDispatch();
     return(
      <>
      <h1>welcome to my app</h1>
      <h2>{mynm}</h2>
      <button onClick={()=>{dispatch(changeName())}}>click here</button>
      </>
     )
}
export default App;