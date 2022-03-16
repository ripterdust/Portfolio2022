import { Desktop } from "./components/Desktop";
import { TaskBar } from "./components/TaskBar";
import { MainRouter } from "./router/MainRouter";

function App() {
  return (
    <div className="window">
      <div className="turnOn">
        <i className="fa-solid fa-spinner"></i>
        Turning On
      </div>
      <div className="turnOff hiden">
        <i className="fa-solid fa-bed"></i>
        Good Bye
      </div>
      <Desktop />
      <MainRouter />

      <TaskBar />
    </div>
  );
}

export default App;
