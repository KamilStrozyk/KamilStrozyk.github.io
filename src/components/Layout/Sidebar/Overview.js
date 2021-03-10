import React, { Component } from "react";
import labelsJson from '../../../content/translations/Layout.json';

export class Overview extends Component {
    render() {
        let language = window.localStorage.getItem('language');
        if (language == null || language == undefined)
            language = 'en';
        return (
           <blockquote >
               {labelsJson[language].Overview}
           </blockquote > 
        );
    }
}

export default Overview;