import { useEffect, useState } from "react";
import styles from '../box-angebot.module.css';

const Time = (props) => {

    const {
        time_count,
        angebot_text,
        angebot_ende_text
    } = props;

    const [currentDistance, setDistance] = useState();
    const [currentDay, setDay] = useState();
    const [currentHour, setHour] = useState();
    const [currentMinute, setMinute] = useState();
    const [currentSecond, setSecond] = useState();

    // Set the date we're counting down to
    let countDownDate = new Date(time_count).getTime();

    // 'July 30, 2025 14:00:00'

    // Get today's date and time
    let now = new Date().getTime();
        
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    useEffect(() => {    
        const interval = setInterval(() => {
            setDistance(distance);
            setDay(days);
            setHour(hours);
            setMinute(minutes);
            setSecond(seconds);
        }, 1000);

        return () => clearInterval(interval);

        

    }, [currentDistance, currentDay, currentHour, currentMinute, currentSecond]);

    return (
        <div className={styles['time-wrapper']}>
            <p className={styles.heading}>
                {currentDistance < 0
                    ? `${angebot_ende_text}`
                    : `${angebot_text}`
                }
            </p>
            {currentDistance > 0 && (
                <div className={styles.time}>
                    <div className={`${styles.tage}`}>
                        <span className={`${styles.count} ${styles['tage-count']}`}>{currentDay}</span>
                        <span>Tage</span>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.stunde}>
                        <span className={`${styles.count} ${styles['stunde-count']}`}>{currentHour}</span>
                        <span>Stunden</span>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.minute}>
                        <span className={`${styles.count} ${styles['minute-count']}`}>{currentMinute}</span>
                        <span>Minuten</span>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.sekunde}>
                        <span className={`${styles.count} ${styles['sekunde-count']}`}>{currentSecond}</span>
                        <span>Sekunden</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Time;