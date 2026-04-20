import "./home.css";
import { getAllUsers } from "../../api/service";

export default function Home() {
  return (
    <div style={{display: "flex",justifyContent: "center"}}>
      <h1 style={{color:'white'}}>Welcome</h1>
      <div></div>
    </div>
  );
}