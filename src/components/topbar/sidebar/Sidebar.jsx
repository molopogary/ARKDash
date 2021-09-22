import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import MailIcon from '@mui/icons-material/Mail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ChatIcon from '@mui/icons-material/Chat'; 
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PieChartIcon from '@mui/icons-material/PieChart';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleIcon className='sidebarIcon'/>
                            Home

                            
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon'/>
                            Analytics

                            
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className='sidebarIcon'/>
                            Sales

                            
                        </li>
                        
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <GroupIcon className='sidebarIcon' />
                            Users

                            
                        </li>
                        <li className="sidebarListItem">
                            <StoreIcon className='sidebarIcon'/>
                            Products

                            
                        </li>
                        <li className="sidebarListItem">
                            <InventoryIcon className='sidebarIcon'/>
                            Stock

                            
                        </li>
                        <li className="sidebarListItem">
                            <WaterfallChartIcon className='sidebarIcon'/>
                            Trasnsactions

                            
                        </li>
                        
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MailIcon className='sidebarIcon'/>
                            Mail

                            
                        </li>
                        <li className="sidebarListItem">
                            <FeedbackIcon className='sidebarIcon'/>
                            Feedback

                            
                        </li>
                        <li className="sidebarListItem">
                            <ChatIcon className='sidebarIcon'/>
                            Chat

                            
                        </li>
                        
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ManageAccountsIcon className='sidebarIcon'/>
                            Manage

                            
                        </li>
                        <li className="sidebarListItem">
                            <PieChartIcon className='sidebarIcon'/>
                            Performance

                            
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentIcon className='sidebarIcon'/>
                            Reports

                            
                        </li>
                        
                    </ul>
                </div>
                
            </div>
            
            
            
        </div>
    )
}
