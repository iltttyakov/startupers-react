import React, {FC} from 'react';
import cls from './Download.module.scss'
import Container from "../Container/Container";
import Title from "../Title/Title";
import QrCode from "../QrCode/QrCode";

import bgIconApple from './bg-icon-apple.svg'
import bgIconAndroid from './bg-icon-android.svg'
import qrAndroid from './qr-android.png'
import qrIso from './qr-ios.png'


type DownloadProps = {}

const Download: FC<DownloadProps> = () => {
    return (
        <div className={cls.box}>
            <Container className={cls.container}>

                <div className={cls.textContainer}>
                    <Title type={'h2'} className={cls.title}>
                        Скачайте<br/>приложение
                    </Title>
                    <p className={cls.text}>
                        Наведите камеру<br/>на QR-код и скачайте
                    </p>
                </div>

                <ul className={cls.list}>
                    <li className={cls.item}>
                        <div style={{backgroundImage: `url(${bgIconApple})`}}
                             className={[cls.bgIcon, cls.apple].join(' ')}/>
                        <QrCode os={'ios'} image={qrIso}/>
                    </li>
                    <li className={cls.item}>
                        <div style={{backgroundImage: `url(${bgIconAndroid})`}}
                             className={[cls.bgIcon, cls.android].join(' ')}/>
                        <QrCode os={'android'} image={qrAndroid}/>
                    </li>
                </ul>

            </Container>
        </div>
    );
};

export default Download;