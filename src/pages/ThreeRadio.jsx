import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react"
import DataContext from "../contexts/DataContext"

function ThreeRadio() {

  const {clickingRadioOne,clickingRadioTwo, clickingRadioThree} = useContext(DataContext);

  return (
    <div class = "radio-container">
    <div class="sliding-radio-buttons">
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="slidingRadio1" onClick={clickingRadioOne}/ >
        <label class="form-check-label" for="flexSwitchCheckDefault">Time</label>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="slidingRadio2" onClick={clickingRadioTwo} / >
        <label class="form-check-label" for="flexSwitchCheckDefault">Energy</label>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="slidingRadio3" onClick={clickingRadioThree}/>
        <label class="form-check-label" for="flexSwitchCheckDefault">Interest</label>
      </div>
  </div>
  </div>
    


  );
}

export default ThreeRadio;
