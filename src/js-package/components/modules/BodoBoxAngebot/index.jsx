import { Container } from '../../ContainerComponent/index.jsx';
import { Row } from '../../RowComponent/index.jsx';
import VideoContent from './partials/VideoContent.jsx?island';
import Angebot from './partials/AngebotContent.jsx';

import { Island } from '@hubspot/cms-components';
import styles from './box-angebot.module.css';

export function Component(props) {

  const { fieldValues } = props;
  
  return (
    <Container className={styles['box-angebot']}>
      <Row>
        <div className={`col-12 col-lg-9 ${styles.content}`}>
          <Angebot {...props} />
        </div>

        {fieldValues.video_field.embed_html && (

          <Island 
            hydrateOn='load'
            module={VideoContent} 
            {...props} 
            clientOnly={true}
          />

        )}
        
      </Row>
    </Container>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Bodo Box Angebot',
};
