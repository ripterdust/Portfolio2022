import { Desktop } from "./components/Desktop";
import { TaskBar } from "./components/TaskBar";
import { MainRouter } from "./router/MainRouter";

function App() {
  return <div className="window">
      <div className="turnOn"></div>
      <Desktop/>
      <MainRouter/>

      <TaskBar/>
  </div>
}

export default App;
