import TreeView from ".";
import "./App.css";
import menus from "./data";

function App() {
  return (
    <>
     <TreeView menus={menus} />
    </>
  );
}

export default App;
