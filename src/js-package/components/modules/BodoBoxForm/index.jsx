import { Container } from '../../ContainerComponent/index.jsx';
import { Row } from '../../RowComponent/index.jsx';
import HubspotContactForm from './partials/Form.jsx?island';
import { Island, RichTextFieldWrapper } from '@hubspot/cms-components';

import styles from './box-form.module.css';

export function Component(props) {

  const { 
    fieldValues: {
      img_position,
      headline, 
      content,
      list,
      formIdNumber,
      link,
      link_text,
      image: {
        src, alt, width, height 
      },
    },
  } = props;
  
  return (
    <Container className={styles['box-form']}>
      <Row className={styles['row-form']} style={{flexDirection: img_position === 'img--left' ? 'row' : 'row-reverse',}}>
        <div className={`col-12 col-lg-5 ${styles.content}`}>
            <div className={styles.text}>
              <h2 className={styles.headline}>{headline}</h2>
              <RichTextFieldWrapper fieldValue={content} />
            </div>

            <img src={src} alt={alt} width={width} height={height} />

            <div className={styles.list}>
              <RichTextFieldWrapper fieldValue={list} />
            </div>
            
            <div className={styles.button}>
              <a href={`${link.url.href}`}>
                {link_text}
              </a>
            </div>
        </div>
        <div className="col-12 col-lg-6">
            {formIdNumber && 
              <Island module={HubspotContactForm} 
                region="eu1"
                portalId="25480917"
                formId={`${formIdNumber}`}
                cssClass={styles['hs-form-style-custom']}
                cssClassButton={styles['hs-button-style-custom']}
              />
            }
        </div>
      </Row>
    </Container>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Bodo Box Form',
};
