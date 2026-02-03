import { useEffect } from 'react';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

import styles from '../testimonial-slider.module.css';

import { RichTextFieldWrapper } from '@hubspot/cms-components';

const Slider = (props) => {

    const {
        groupTestimonial
    } = props;

    useEffect(() => {
        const swiper = new Swiper(`.${styles['testimonial-swiper']}`, {
            modules: [Pagination],
            slidesPerView: 3,
            spaceBetween: 50,
            speed: 500,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                }
            },
        });

    },[]);

    return (
        <div className={styles['testimonial-swiper']}>
            <div className="swiper-wrapper">
                {groupTestimonial.map((testimonial, index) => {
                    return (
                        <div className={`swiper-slide ${styles.slide}`} key={index}>
                            <RichTextFieldWrapper fieldValue={testimonial.content} />

                            <div className={styles.profile}>
                                <div className={styles['img-wrapper']}>
                                    <img src={testimonial.profile_image.src} width={testimonial.profile_image.width} height={testimonial.profile_image.height} />
                                </div>
                                <p>
                                    <span className={styles['profile-name']}>{testimonial.profile_name}</span><br />
                                    <span className={styles['profile-detail']}>{testimonial.profile_detail}</span>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={`swiper-pagination ${styles.pagination}`}></div>
        </div>
    )
}

export default Slider;