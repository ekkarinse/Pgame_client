import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import Dashboard from '../../page//Dashboard';
import loginpic from "../../picture/lizardboss.jpg";
import './sidebar.scss';
import "../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";

const sidebarNavItems = [
    // {
    //     display: 'ข้อมูลเทรนเนอร์',
    //     icon: <i className='bx bx-home'></i>,
    //     to: '/trainer',
    //     section: 'trainer'
    // },
    {
        display: 'เวย์โปรตีน',
        icon: <i className='bx bx-star'></i>,
        to: '/wheyprotein',
        section: 'wheyprotein'
    },
    {
        display: 'สมัครเมมเบอร์',
        icon: <i className='bx bx-calendar'></i>,
        to: '/member',
        section: 'member'
    },
    {
        display: 'ประวัติการซื้อ',
        icon: <i className='bx bx-user'></i>,
        to: '/history',
        section: 'history'
    },
    // {
    //     display: 'ออกจากระบบ',
    //     icon: <i className='bx bx-user'></i>,
    //     to: '/',
    //     section: 'logout'
    // },
]

const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo"><Link to="/dashboard" style={{ textDecoration: 'none' }}><t className="sidebartext">Deep Dark Gyms</t></Link></div>
        {/* <hr></hr> */}
        {/* <br></br> */}
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    textDecoration: 'none',
                    transform: `translateX(-50%) translateY(-85px)`
                    // transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {/* <div className='pic' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <img className='imageset' id= "image" src={loginpic} alt="loginpic" width="80" height="80"></img>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>นายพสธร ภูมิคำ</p>
            </div> */}
            <br></br><br></br>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index} style={{
                        textDecoration: 'none',
                    }}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
    
};

export default Sidebar;
