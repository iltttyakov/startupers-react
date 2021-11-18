import React, {FC} from 'react';
import cls from './QrCode.module.scss'


type QrCodeProps = {
    os: string,
    image: string
}

const QrCode: FC<QrCodeProps> = ({os, image}) => {
    return (
        <div className={cls.box}>
            <div className={cls.imageContainer}>
                <img className={cls.image} src={image} alt={'Qr код'} width={240} height={240}/>
            </div>
            <p className={cls.label}>
                для {os}
            </p>
        </div>
    );
};

export default QrCode;