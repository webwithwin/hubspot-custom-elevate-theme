import { useEffect } from "react";
import styles from '../box-angebot.module.css';

function generateId() {
    return crypto.randomUUID();
}

let id = generateId();

const VideoContent = (props) => {

    const { 
        video_field,
    } = props;

    useEffect(() => {
        if(video_field?.embed_html) {
            const videoContent = document.querySelector(`#video-${id}`);

            videoContent.innerHTML = video_field?.embed_html;
        }
        
    }, [video_field?.embed_html]);

    return (
        <div id={`video-${id}`} className={`col-12 col-md-6 ${styles['video-content']}`}></div>
    )
}

export default VideoContent;