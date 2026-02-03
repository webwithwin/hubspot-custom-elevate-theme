import { Container } from '../../ContainerComponent';
import { Row } from '../../RowComponent';

import Slider from './partials/Slider.jsx?island';

import { Island } from '@hubspot/cms-components';

export function Component(props) {

  return (
    <Container>
        <Row>
            <Island 
              hydrateOn="load"
              module={Slider} {...props}
              clientOnly={true}
            />
        </Row>
    </Container>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Bodo Testimonial Slider',
};
