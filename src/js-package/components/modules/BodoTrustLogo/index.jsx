import { Container } from '../../ContainerComponent';
import { Row } from '../../RowComponent';

import styles from './trust-logo.module.css';

export function Component(props) {
  const {
    heading,
    groupLogo 
  } = props;

  return (
    <Container>
        <Row className={styles['trust-logo']}>
          
            <h2 className={styles.heading}>{heading}</h2>

            {groupLogo.map((logo, index) => {
              return (
                <div className="col-4 col-lg-2" key={index}>
                  <img src={logo.logo.src} width={logo.logo.width} height={logo.logo.height} />
                </div>
              )
            })}
        </Row>
    </Container>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Bodo Trust Logo',
};
