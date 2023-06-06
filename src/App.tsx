import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import TaskBar from "./components/TaskBar";

function App() {
  return (
    <>
      <Header />
      <div className="flex gap-y-3 gap-x-3">
        <Sidebar />
        <TaskBar />
        <TaskBar />
        <TaskBar />
        <TaskBar />
      </div>
    </>
  );
}

export default App;
