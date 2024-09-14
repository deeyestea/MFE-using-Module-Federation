import React from "react";
import PayslipsComponent from "./pages/payslips/payslipsComponent";
import Form16Component from "./pages/form16/form16Component";

export const routeConfig = [
    {
        path: '/app1',
        index: true,
        children: [
            {
                path: 'payslips',
                element: <PayslipsComponent />
            },
            {
                path: 'from16',
                element: <Form16Component />
            }
        ]
    }
]