
import './topbar.css'

import image from '../../assets/img/arkd.jpg'





export default function TopBar() {
    return (
       <div className="topbar">
           <div className="topbarWrapper">
               <div className="topLeft">
                   <img src={image} alt ='Logo' className='logo'/>
               </div>
              
           </div>


       </div>
    )
}
