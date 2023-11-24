import React, { useState, useEffect } from 'react';
import './WelcomePage.scss'

export const WelcomePage = () => {
    const greetings = ['Hello', 'स्वागत', 'Bienvenue', '你好', 'Bonjour', ' Olá', 'مرحباً', 'Hallo'];
    const [greetingText, setGreetingText] = useState(greetings[0]);

    useEffect(() => {
        let i = 0;
        setTimeout(() => {
            const interval = setInterval(() => {
                i++;
                if (i < greetings.length) {
                    setGreetingText(greetings[i]);
                } else {
                    clearInterval(interval);
                }
            }, 200);
        }, 500);
    }, []);

    return (
        <div id='WelcomePage' className='welcome-page'>
            <h1>
                {greetingText}
            </h1>
        </div>
    );
};
