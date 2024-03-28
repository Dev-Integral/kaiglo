import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Stays } from "./components/Stays";

function App() {
  return (
    <div className="">
      <Header />
      <div id="per" className="flex">
        <Sidebar />
        <Stays />
      </div>
    </div>
  );
}

export default App;
