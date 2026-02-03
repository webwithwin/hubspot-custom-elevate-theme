import { Container } from '../../ContainerComponent';
import { Row } from '../../RowComponent';

import { Island } from '@hubspot/cms-components';

import BoxAccordion from './partials/BoxAccordion.jsx?island';
import BoxVideo from './partials/BoxVideo.jsx?island';
import BoxImage from './partials/BoxImage.jsx';
import BoxCta from './partials/BoxCta.jsx';

import styles from './box-accordion.module.css';

export function Component(props) {
  const { fieldValues } = props;

  return (
    <Container className={styles.box} style={{
        backgroundColor: fieldValues.use_background_color ? '#f3f4f7' : '#ffffff'}}>
        <Row style={{flexDirection: fieldValues.img_position === 'img--left' ? 'row' : 'row-reverse',}}>
            <div className="col-12 col-lg-6 p-0">
                {fieldValues.image_field.src && (
                    <BoxImage />
                )}

                {fieldValues.video_field.embed_html && (

                  <Island 
                      hydrateOn='load'
                      module={BoxVideo} 
                      {...props} 
                      clientOnly={true}
                    />
                )}
            </div>
            <div className="col-12 col-lg-6 p-3 p-lg-5">
                <Island module={BoxAccordion} {...props} />
                <BoxCta {...props} />
            </div>
        </Row>
    </Container>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Bodo Box Accordion',
};
