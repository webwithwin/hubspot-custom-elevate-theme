import styles from './box-cta.module.css';
import { RichTextFieldWrapper } from '@hubspot/cms-components';

export default function BoxCta(props) {
    const { 
        groupCta
    } = props;
  
    return (
        <>
            {groupCta.map((cta, index) => {
                return (
                    <div key={index}>
                        <div className={styles.text}>
                            <h2 className={`heading-4 ${styles.headline}`}>{cta.headline_field}</h2>
                            <RichTextFieldWrapper className={styles.description} fieldValue={cta.text_field} />
                        </div>
                            
                        <div className={styles.button}>
                            <a href={`${cta.link_field.url.href}`}>
                                {cta.link_text}
                            </a>
                        </div> 
                    </div> 
                )
            })}
        </>
    );
}