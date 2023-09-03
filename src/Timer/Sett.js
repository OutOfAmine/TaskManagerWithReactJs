import { useContext } from 'react'
import ReactSlider from 'react-slider'
import Backbutton from './Backbutton'
import SettinsContext from './SettingsContext'
import './Slider.css'
function Settings() {
   const SettingsInfo= useContext(SettinsContext)
    return(
        <div style={{textAlign:'left'}}>
            <label>Timer : {SettingsInfo.work}:00 minutes</label>
            <ReactSlider 
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={SettingsInfo.work}
            onChange={newValue=>SettingsInfo.setwork(newValue)}
            min={1}
            max={120}
            />
            <div style={{textAlign:'center',marginTop:'40px'}}>
         <Backbutton onClick={()=>SettingsInfo.setShowsett(false)}/>
         </div>
        </div>
    )
}
export default Settings