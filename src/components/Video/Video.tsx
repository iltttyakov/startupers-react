import React, {FC, useRef, useState} from 'react';
import cls from './Video.module.scss'

import mp4 from './video.mp4'
import webm from './video.webm'
import cover from './video-cover.jpg'

type VideoProps = {}

const Video: FC<VideoProps> = () => {
    const playerRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    const play = () => {
        setPlaying(true)
        playerRef.current.play()
    }

    return (
        <div className={[cls.box, playing ? cls.playing : ''].join(' ')}>

            <video className={cls.player} controls width={790} height={558} ref={playerRef}>
                <source src={mp4} type={'video/mp4'}/>
                <source src={webm} type={'video/webm'}/>
            </video>

            <img className={cls.cover} src={cover} width={790} height={558} alt={''}/>

            <button className={cls.playButton} onClick={play}>
                <svg className={cls.playIcon} width={21} height={26} viewBox={'0 0 21 26'} fill={'none'}
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.2188 24.8541L19.0077 16.3282C21.3826 14.7449 21.3826 11.2551 19.0077 9.6718L6.2188 1.14587C3.56058 -0.626279 0 1.27929 0 4.47407V21.5259C0 24.7207 3.56058 26.6263 6.2188 24.8541Z"
                        fill="#ffffff"
                    />
                </svg>
            </button>

        </div>
    );
};

export default Video;