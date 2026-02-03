import styles from '../box-pop-out.module.css';
import { RichTextFieldWrapper } from '@hubspot/cms-components';

const PopOut = (props) => {

    const {
        headline,
        content,
        link,
        link_text
    } = props;

    return (
        <div className={`col-12 col-md-6 ${styles['pop-out-content']}`}>
            <h2 className={styles.headline}>{headline}</h2>
                
            <RichTextFieldWrapper fieldValue={content} className={styles.description} />

            <a className={styles.button} href={`${link.url.href}`}>
                {link_text}
            </a>
        </div>
    )
}

export default PopOut;