import styles from './footer.module.css';

import { Container } from '../../ContainerComponent/index.jsx';
import { Row } from '../../RowComponent/index.jsx';

export function Component(props) {
  const {
    fieldValues: {
        footer_logo: {
            src, width, height
        }
    },
    fieldValues
  } = props;

  return (
    <Container>
        <Row>
          <footer className={styles.footer}>
            <div className={styles['footer-logo']}>
              <img src={src} width={width} height={height} />
              <small className={styles['footer-text']}>{fieldValues.footer_text}</small>
            </div> 

            <div className={styles['footer-links']}>
              <ul>
                {fieldValues.groupLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link_url.href} target={link.link_url.target} rel={link.link_url.target === '_blank' ? 'noopener noreferrer' : ''}>
                      {link.link_text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
          </footer>
        </Row>
    </Container>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Footer',
};
