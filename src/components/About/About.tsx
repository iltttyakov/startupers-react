import React, {FC} from 'react';
import cls from './About.module.scss'
import Container from "../Container/Container";
import Title from "../Title/Title";
import DownloadButton from "../DownloadButton/DownloadButton";
import Video from "../Video/Video";

import bgIcon from './bg-icon.svg'

type AboutProps = {}

const About: FC<AboutProps> = () => {
    return (
        <div className={cls.box} style={{backgroundImage: `url(${bgIcon})`}}>
            <Container className={cls.container}>

                <div className={cls.textContainer}>
                    <Title type={'h2'} className={cls.title}>
                        Узнайте о нас<br/>за 1 минуту
                    </Title>
                    <ul className={[cls.list, cls.desktop].join(' ')}>
                        <li className={cls.item}>
                            <DownloadButton uppercase={false} os={'iso'} href={'https://www.apple.com/ru/app-store/'}/>
                        </li>
                        <li className={cls.item}>
                            <DownloadButton uppercase={false} os={'android'} href={'https://play.google.com/store'}/>
                        </li>
                    </ul>
                </div>

                <div className={cls.videoContainer}>
                    <Video/>
                </div>

                <ul className={[cls.list, cls.mobile].join(' ')}>
                    <li className={cls.item}>
                        <DownloadButton uppercase={false} os={'iso'} href={'https://www.apple.com/ru/app-store/'}/>
                    </li>
                    <li className={cls.item}>
                        <DownloadButton uppercase={false} os={'android'} href={'https://play.google.com/store'}/>
                    </li>
                </ul>

            </Container>
        </div>
    );
};

export default About;