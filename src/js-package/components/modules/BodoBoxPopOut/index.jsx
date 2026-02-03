import { Container } from '../../ContainerComponent/index.jsx';
import { Row } from '../../RowComponent/index.jsx';
import MarketingContent from './partials/MarketingContent.jsx';
import PopOutContent from './partials/PopOutContent.jsx';

import styles from './box-pop-out.module.css';

export function Component(props) {

  const { 
    fieldValues: {
      bg_image: {
        src
      },
    },
  } = props;
  
  return (
    <Container className={styles['box-pop-out']}>
      <Row>
        <div className={`col-12 col-lg-9 ${styles.content}`} style={{ backgroundImage: `url(${src})` }}>
          <MarketingContent {...props} />
        </div>
        <PopOutContent {...props} />
      </Row>
    </Container>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Bodo Box Pop Out',
};
