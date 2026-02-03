import { Container } from '../../ContainerComponent';
import { Row } from '../../RowComponent';

import styles from './card.module.css';

export function Component(props) {

    const { fieldValues } = props;

    return (
        <Container>
            <h2 className={`heading-3 ${styles.heading}`}>{fieldValues.topHeading}</h2>
            <Row>
                {fieldValues.groupCards.map((card, index) => {
                    const hasValidImageSrc = card?.image?.src;
                    return (
                        <div className={`col-12 col-md-6 col-lg-4 mb-5 ${styles['card-wrapper']}`} key={index}>
                            <div className={styles.card}>
                                {hasValidImageSrc && (
                                    <div className={styles.imageWrapper}>
                                        <img src={card.image.src}
                                            alt={card.image.alt}
                                            width={card.image.width}
                                            height={card.image.height} />
                                    </div>
                                )}
                                <div className={styles.text} style={{textAlign: fieldValues.groupStyle.text_align === 'text--left' ? 'left' : 'center'}}>
                                    <h3 className='heading-5'>{card.headline}</h3>
                                    <p>{card.content}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Row>
        </Container>
    );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Bodo Card',
};
