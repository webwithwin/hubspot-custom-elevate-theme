import styles from './header.module.css';

import { Container } from '../../ContainerComponent';
import { Row } from '../../RowComponent';

export function Component(props) {
  const {
    fieldValues: {
        header_logo: {
            src, width, height
        }
    },
    fieldValues
  } = props;

  return (
    <Container>
        <Row>
          <header className={styles.header}> 
            {fieldValues.show_logo === 'show' && (
                <div className={`col-6 ${styles['logo-wrapper']}`} style={{
            display: fieldValues.show_logo === 'show' ? 'flex' : 'none', justifyContent: fieldValues.groupStyle.header_position === 'left' ? 'left' : 'center', width: fieldValues.show_header_text === 'hide' ? '100%' : '50%' }}>
                    <h1><img src={src} width={width} height={height} /></h1>
                </div>
            )}

            {fieldValues.show_header_text === 'show' && (
                <div className={`col-6 ${styles['header-text-wrapper']}`} style={{
                    display: fieldValues.show_header_text === 'show' ? 'flex' : 'none', justifyContent: fieldValues.groupStyle.header_position === 'left' ? 'right' : 'center', width: fieldValues.show_logo === 'hide' ? '100%' : '50%' }}>
                    <h2 className={styles['header-text']}>{fieldValues.header_text}</h2>
                </div>
            )}
          </header>
        </Row>
    </Container>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Header',
};
