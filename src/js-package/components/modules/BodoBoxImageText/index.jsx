import { Container } from '../../ContainerComponent/index.jsx';
import { Row } from '../../RowComponent/index.jsx';

import styles from './box-image-text.module.css';

import { RichText } from '@hubspot/cms-components';

export function Component(props) {
  const { 
    fieldValues: {
      image: {
        src, alt, width, height 
      }
    },
    fieldValues
  } = props;
  
  return (
    <Container className={`container ${styles['image-text']}`}>
      <Row className={`row ${styles.content}`} style={{
        flexDirection: fieldValues.groupStyle.img_position === 'img--left' ? 'row' : 'row-reverse',}}>
        <div className="col-12 col-md-6">
            <img src={src} alt={alt} width={width} height={height} />
        </div>
        <div className="col-12 col-md-6">
          <div className={styles.text}>
            <h2 className={styles.headline}>{fieldValues.headline}</h2>
            <RichText fieldPath="content" />
          </div>
          
          <div className={styles.button}>
            <a href={`${fieldValues.link.url.href}`}>
              {fieldValues.link_text}
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Bodo Box Image Text',
};
