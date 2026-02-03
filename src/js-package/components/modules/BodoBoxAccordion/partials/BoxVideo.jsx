import { useEffect, useRef } from "react";
import styles from "./box-video.module.css";
// import { video_field } from "../dummyData";

export default function BoxVideo(props) {
    const { 
        video_field,
    } = props;

    const videoCurrent = useRef(video_field.embed_html);

    useEffect(() => {
        if(videoCurrent.current) {
            videoCurrent.current.innerHTML = video_field?.embed_html;
        }
    });
    
    return (
        <>
            <div className={`${styles['iframe-wrapper']}`} ref={videoCurrent}></div>
        </>
    );
}