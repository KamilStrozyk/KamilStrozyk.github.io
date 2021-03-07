import React, { Component } from "react";

export class DarkModeButton extends Component {

    toggleTheme = () => {
        let theme = window.localStorage.getItem('theme');
        if (theme === 'light') {
            this.setTheme('dark');
        } else {
            this.setTheme('light');
        }
    }

    setTheme(theme) {
        window.localStorage.setItem('theme', theme);
        if (theme === 'light')
            document.body.classList.remove('dark');
        else
            document.body.classList.add('dark');
    }

    render() {
        let theme = window.localStorage.getItem('theme');
        if (theme != undefined)
            this.setTheme(theme);
        return (
            <button onClick={this.toggleTheme} class="transition duration-300 ease-in-out  block px-4 py-2  text-sm font-semibold text-gray-900 dark:text-gray-200 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200  dark:bg-gray-900 bg-white hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-700 border-gray-300 border-l-2">
                <svg class="w-6 dark:svg-white" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24" /><path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" /></svg>
            </button>
        );
    }
}

export default DarkModeButton;