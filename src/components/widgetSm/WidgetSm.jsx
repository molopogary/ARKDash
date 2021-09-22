import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?cs=srgb&dl=pexels-kebs-visuals-3992656.jpg&fm=jpg" height='100px'alt="" className="widgetSmImg" />
                    <div className="widgetSmUser"><span className="widgetSmUsername">Erykah Badu</span>
                    <span className="widgetSmUserTitle">Software Engineer</span></div>
                    <button className="widgetSmButton"><VisibilityIcon/></button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?cs=srgb&dl=pexels-tarzine-jackson-773371.jpg&fm=jpg" height='100px'alt="" className="widgetSmImg" />
                    <div className="widgetSmUser"><span className="widgetSmUsername">Jorja Smith</span>
                    <span className="widgetSmUserTitle">Quality Control</span></div>
                    <button className="widgetSmButton"><VisibilityIcon/></button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?cs=srgb&dl=pexels-elle-hughes-1680172.jpg&fm=jpg" height='100px'alt="" className="widgetSmImg" />
                    <div className="widgetSmUser"><span className="widgetSmUsername">Post Malone</span>
                    <span className="widgetSmUserTitle">Accountant</span></div>
                    <button className="widgetSmButton"><VisibilityIcon/></button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?cs=srgb&dl=pexels-nappy-936019.jpg&fm=jpg" height='100px'alt="" className="widgetSmImg" />
                    <div className="widgetSmUser"><span className="widgetSmUsername">Sam Mkhize</span>
                    <span className="widgetSmUserTitle">Head Engineer</span></div>
                    <button className="widgetSmButton"><VisibilityIcon/></button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?cs=srgb&dl=pexels-arianna-jad%C3%A9-2896853.jpg&fm=jpg" height='100px'alt="" className="widgetSmImg" />
                    <div className="widgetSmUser"><span className="widgetSmUsername">Harry Winston</span>
                    <span className="widgetSmUserTitle">Mechanical Engineer</span></div>
                    <button className="widgetSmButton"><VisibilityIcon/></button>
                </li>
            </ul>
            
        </div>
    )
}
