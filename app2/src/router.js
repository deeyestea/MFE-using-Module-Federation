import React from "react";
import AttendanceComponent from "./pages/attendance/attendanceComponent";
import RequestComponent from "./pages/request/requestComponent";

export const routeConfig = [
    {
        path: '/app2',
        index: true,
        children: [
            {
                path: 'attendance',
                element: <AttendanceComponent />
            },
            {
                path: 'request',
                element: <RequestComponent />
            }
        ]
    }
]