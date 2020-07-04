import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component{
    render (){
        return (
        <div className="header">
         <h1>Employee Directory</h1>
         <p>Click on  Name to filter or use the search box</p>
         </div>
        )
    }
}

