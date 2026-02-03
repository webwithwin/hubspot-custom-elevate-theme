import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

// import 'swiper/css';
// import "swiper/swiper-bundle.css";

import styles from '../value-stacking.module.css';

import { RichTextFieldWrapper } from '@hubspot/cms-components';

const ArrowLeft = (props) => {
  const { className } = props;

  return (
    <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 11.7385L11.7385 18L18 24.2615L19.0615 23.2L14.631 18.769L24.769 18.769L24.769 17.231L14.631 17.231L19.0615 12.8L18 11.7385ZM17.9935 -1.57418e-06C20.4748 -1.35725e-06 22.8047 0.472331 24.983 1.417C27.1613 2.36166 29.0693 3.652 30.707 5.288C32.3447 6.924 33.6362 8.83017 34.5815 11.0065C35.5272 13.1828 36 15.5118 36 17.9935C36 20.4825 35.5277 22.8227 34.583 25.014C33.6383 27.205 32.348 29.111 30.712 30.732C29.076 32.353 27.1698 33.6362 24.9935 34.5815C22.8172 35.5272 20.4882 36 18.0065 36C15.5175 36 13.1773 35.5277 10.986 34.583C8.795 33.6383 6.889 32.3563 5.268 30.737C3.647 29.1177 2.36384 27.2133 1.4185 25.024C0.472833 22.835 1.35542e-06 20.4958 1.57304e-06 18.0065C1.78997e-06 15.5252 0.472338 13.1953 1.417 11.017C2.36167 8.83866 3.64367 6.93066 5.263 5.293C6.88234 3.65533 8.78667 2.36383 10.976 1.4185C13.165 0.47283 15.5042 -1.7918e-06 17.9935 -1.57418e-06ZM18 1.5385C13.4207 1.5385 9.53217 3.13917 6.3345 6.3405C3.13717 9.54183 1.5385 13.4283 1.5385 18C1.5385 22.5793 3.13717 26.4678 6.3345 29.6655C9.53217 32.8628 13.4207 34.4615 18 34.4615C22.5717 34.4615 26.4582 32.8628 29.6595 29.6655C32.8608 26.4678 34.4615 22.5793 34.4615 18C34.4615 13.4283 32.8608 9.54183 29.6595 6.3405C26.4582 3.13917 22.5717 1.5385 18 1.5385Z" fill="#000000"/>
    </svg>
  );
};

const ArrowRight = (props) => {
  const { className } = props;

  return (
    <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 24.2615L24.2615 18L18 11.7385L16.9385 12.8L21.369 17.231H11.231V18.769H21.369L16.9385 23.2L18 24.2615ZM18.0065 36C15.5252 36 13.1953 35.5277 11.017 34.583C8.83867 33.6383 6.93067 32.348 5.293 30.712C3.65533 29.076 2.36383 27.1698 1.4185 24.9935C0.472833 22.8172 0 20.4882 0 18.0065C0 15.5175 0.472333 13.1773 1.417 10.986C2.36167 8.795 3.652 6.889 5.288 5.268C6.924 3.647 8.83017 2.36383 11.0065 1.4185C13.1828 0.472833 15.5118 0 17.9935 0C20.4825 0 22.8227 0.472335 25.014 1.417C27.205 2.36167 29.111 3.64367 30.732 5.263C32.353 6.88233 33.6362 8.78667 34.5815 10.976C35.5272 13.165 36 15.5042 36 17.9935C36 20.4748 35.5277 22.8047 34.583 24.983C33.6383 27.1613 32.3563 29.0693 30.737 30.707C29.1177 32.3447 27.2133 33.6362 25.024 34.5815C22.835 35.5272 20.4958 36 18.0065 36ZM18 34.4615C22.5793 34.4615 26.4678 32.8608 29.6655 29.6595C32.8628 26.4582 34.4615 22.5717 34.4615 18C34.4615 13.4207 32.8628 9.53217 29.6655 6.3345C26.4678 3.13717 22.5793 1.5385 18 1.5385C13.4283 1.5385 9.54183 3.13717 6.3405 6.3345C3.13917 9.53217 1.5385 13.4207 1.5385 18C1.5385 22.5717 3.13917 26.4582 6.3405 29.6595C9.54183 32.8608 13.4283 34.4615 18 34.4615Z" fill="#000000"/>
    </svg>
  );
};

const Value = (props) => {

    const {
        link_text,
        link_url,
        groupValue
    } = props;

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    let valueSwiper = undefined;

    let mobile = window.matchMedia('(max-width: 1199px)');
    let desktop = window.matchMedia('(min-width: 1200px)');

    useEffect(() => {

        if(mobile.matches && valueSwiper === undefined) {
            valueSwiper = new Swiper(`.${styles['value-swiper']}`, {
                modules: [Pagination, Navigation],
                slidesPerView: 5,
                spaceBetween: 20,

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            
                navigation: {
                    nextEl: '.swiper-next-box',
                    prevEl: '.swiper-prev-box',
                },
            
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    }
                },
            });
            valueSwiper.wrapperEl.classList.remove(`${styles['no-swiper']}`);

        } else if(desktop.matches && valueSwiper !== undefined) {
            valueSwiper.destroy();
            valueSwiper = undefined;
        } else if(desktop.matches && valueSwiper === undefined) {
            document.querySelector(`.${styles['value-swiper']} .swiper-wrapper`).classList.add(`${styles['no-swiper']}`);
        }

        window.addEventListener("resize", handleResize, false);

    },[]);

    return (
        <>
            <div className={styles['value-swiper']}>
                <div className="swiper-wrapper">
                    {groupValue.map((value, index) => {
                        return (
                            <div className={`swiper-slide ${styles.slide}`} key={index}>
                                <div className={styles['text-wrapper']}>
                                    <h2>{value.heading}</h2>
                                    <RichTextFieldWrapper fieldValue={value.content} />
                                </div>

                                <div className={styles['img-wrapper']}>
                                    <img src={value.image.src} width={value.image.width} height={value.image.height} />
                                </div>

                                <div className={styles['wert-wrapper']}>
                                    <RichTextFieldWrapper fieldValue={value.wert} />
                                </div>
                                
                            </div>
                        )
                    })}
                </div>

                <div className={styles.control}>
                    <div className={`swiper-pagination ${styles.pagination}`}></div>

                    <div className={`swiper-navigation ${styles.navigation}`}>
                        <div className="swiper-prev-box"><ArrowLeft /></div>
                        <div className="swiper-next-box"><ArrowRight /></div>
                    </div>
                </div>

                
            </div>

            <div className={styles.button}>
                <a href={`${link_url.url.href}`}>
                    {link_text}
                </a>
            </div>
        </>
        
    )
}

export default Value;