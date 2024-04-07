import React, { useEffect } from 'react';
import "./Recaptcha.css";

const ReCaptchaComponent = () => {
    useEffect(() => {
        // Create script element
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);


        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="g-recaptcha" data-sitekey="6LfvwLIpAAAAAHKIrpN22HNCXC4pRlQnS9mFlfSb"></div>

    );
};

export default ReCaptchaComponent;
