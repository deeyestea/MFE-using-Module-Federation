import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const menuList = [
        {id: 1, name: 'Home', route: '/'},
        {id: 2, name: 'Payslips', route: '/app1/payslips'},
        {id: 3, name: 'From16', route: '/app1/form16'},
        {id: 4, name: 'Attendance', route: '/app2/attendance'},
        {id: 5, name: 'Request', route: '/app2/request'},
    ]
  return (
    <div className='sidebar'  style={{width: "20%", height: "100svh", backgroundColor: "lightblue", display: "flex", flexDirection: "column"}}>
        {
            menuList && menuList.length > 0 && menuList.map((menu, index) => {
                return <Link to={menu.route} style={{marginTop: "2rem", textDecoration: "none"}}>{menu.name}</Link>
            })
        }
    </div>
  )
}

export default Sidebar