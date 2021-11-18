import React, {FC} from 'react';
import cls from './DownloadButton.module.scss'

import android from './android.png'
import ios from './ios.png'

type DownloadButtonProps = {
    os: string,
    href: string,
    uppercase?: boolean
}

const DownloadButton: FC<DownloadButtonProps> = ({os, href, uppercase = true}) => {
    let label = 'Скачать в AppStore'
    let icon = ios

    const clsArrLabel = [cls.label]
    if (uppercase) clsArrLabel.push(cls.uppercase)

    if (os === 'android') {
        label = 'Скачать в playmarket'
        icon = android
    }

    return (
        <div className={cls.box}>
            <img className={cls.icon} src={icon} width={24} height={24} alt={os}/>
            <span className={clsArrLabel.join(' ')}>{label}</span>
            <a href={href} target={'_blank'} className={cls.link}/>
        </div>
    );
};

export default DownloadButton;