import React from "react";
import { Link } from "react-router-dom";
import {AppNavDropdownProps} from "@interfaces/AppNavDropdownProps";

export class AppNavDropdown extends React.Component<AppNavDropdownProps, any> {

    dropdown: AppNavDropdownProps;

    constructor(props: AppNavDropdownProps) {
        super(props);
        this.dropdown = props;
    }

    render() {
        return (
            <li className="nav-item dropdown mx-2">
                <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    id={`dropdownLink${this.dropdown.label.replace(" ", "")}`}
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false">
                    {this.dropdown.label}
                </a>
                <ul className="dropdown-menu dropdown-menu-start dropdown-menu-dark animate__animated animate__zoomIn animate__fastest shadow">
                    {
                        this.dropdown.routes.map((route) => (
                            <li key={`dropdownItem${this.dropdown.label.replace(" ", "")}${route.label}`}>
                                <Link className="dropdown-item" to={route.route}>{route.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </li>
        );
    }

}
