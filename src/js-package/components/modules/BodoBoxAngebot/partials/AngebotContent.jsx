import styles from '../box-angebot.module.css';
import Time from './Time.jsx?island';
import { Island, RichTextFieldWrapper } from '@hubspot/cms-components';

const Angebot = (props) => {

    const {
        headline,
        content,
        link,
        link_text,
        cta_text,
        groupStyle
    } = props;

    return (
        <div className={`col-12 col-lg-6 ${styles['angebot-content']}`}>
            <h2 className={styles.headline}>{headline}</h2>
                
            <RichTextFieldWrapper fieldValue={content} className={styles.description} />

            <Island 
                hydrateOn='load'
                module={Time} 
                {...props} 
                clientOnly={true} 
            />

            <div className={styles['cta-wrapper']}>
                <a className={styles.button} href={`${link.url.href}`}>
                    {link_text}
                </a>

                <p className={styles['cta-text']} style={{ flex: `0 1 ${groupStyle.text_width}%` }}>{cta_text}</p>
            </div>
            
        </div>
    )
}

export default Angebot;