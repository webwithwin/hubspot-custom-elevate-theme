import { useEffect } from "react";

const HubspotContactForm = (props) => {
    const { 
        region,
        portalId,
        formId,
        cssClass,
        cssClassButton
    } = props;

    useEffect(() => {

        const script = document.createElement('script');
        script.src='https://js-eu1.hsforms.net/forms/embed/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: portalId,
                    formId: formId,
                    region: region,
                    target: '#hubspotForm',
                    css: '',
                    cssClass: cssClass,
                    submitButtonClass: cssClassButton,
                })
            }
        });

    }, []);

    return (
        <>
            <div id="hubspotForm"></div>
        </>
    );

}

export default HubspotContactForm;