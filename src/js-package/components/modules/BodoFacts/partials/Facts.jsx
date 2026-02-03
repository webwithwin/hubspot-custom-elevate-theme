import { Container } from '../../../ContainerComponent/index.jsx';
import { Row } from '../../../RowComponent/index.jsx';

import styles from '../facts.module.css';

import { RichTextFieldWrapper } from '@hubspot/cms-components';

const Facts = (props) => {

    const {
        heading,
        content,
        image: {
            src, alt, width, height
        },
        groupFacts
    } = props;

    return (
        <Container className={styles.facts}>
            <Row className={styles.direction}>
                <div className={`col-12 col-lg-6 ${styles['content-wrapper']}`}>
                    <div className={styles.text}>
                        <h2 className={styles.heading}>{heading}</h2>
                        <RichTextFieldWrapper fieldValue={content} />
                    </div>
                    
                    <div className={styles.counter}>
                        {groupFacts.map((fact, index) => {
                            return (
                                <div className="col-6" key={index}>
                                    <h3>{fact.number}</h3>
                                    <p>{fact.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <img src={src} alt={alt} width={width} height={height} />
                </div>
            </Row>
        </Container>     
    )
}

export default Facts;