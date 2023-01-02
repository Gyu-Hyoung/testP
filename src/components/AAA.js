import '../css/AAA.css'
import SubA1 from './AAA/SubA1.js'
import SubA2 from './AAA/SubA2.js'
import HomeA1 from './AAA/HomeA1.js'
import {Routes,Route} from 'react-router-dom'

function AAA(){
    return (
        <div id='aaa'>
            <Routes>
              <Route path='/' element={<HomeA1/>}/>
              <Route path='SubA1' element={<SubA1/>}/>
              <Route path='SubA2' element={<SubA2/>}/>
            </Routes>
        </div>
    )
}
export default AAA;