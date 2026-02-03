import styles from './box-accordion.module.css';
import { RichTextFieldWrapper } from '@hubspot/cms-components';

const AccordionDown = (props) => {
  const { className } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className={className}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
  );
};

const AccordionClose = (props) => {
  const { className } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="inherit" className={className}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
  );
};

export default function Accordion(props) {
  const {
    useAccordion,
    groupAccordion
  } = props;

  const HandleToggle = (item) => {
    const accordions = document.querySelectorAll(`.${styles.accordion}`);
    const content = document.querySelectorAll(`.${styles.content}`);
    const arrow = document.querySelectorAll(`.${styles.arrow}`);

    accordions.forEach((accordionItem, index) => {
      accordionItem.classList.toggle(styles.open, index === item);  
    });

    content.forEach((contentItem, index) => {
      contentItem.classList.toggle(styles.active, index === item);

    });
    arrow.forEach((arrowItem, index) => {
      arrowItem.classList.toggle(styles.rotate, index === item);
    });
  }

  return (
    <>
      {groupAccordion.map((acc, index) => {
          return (
              <div className={`mb-2 ${styles.accordion} ${useAccordion ? styles.toggle : ''}`} key={index} {...(useAccordion ? { onClick: () => HandleToggle(index)} : {})}>
                  <div className={styles.title}>
                    <h3>{acc.title}</h3>

                    <AccordionDown className={`col-2 ${styles.down}`} />
                    <AccordionClose className={`col-2 ${styles.close}`} />
                  </div>
                  <div className={styles.content}>
                      <RichTextFieldWrapper fieldValue={acc.content} />
                  </div>
              </div>
          );
      })}
    </>
  );
}