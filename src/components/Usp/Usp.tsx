import React, {FC} from 'react';
import cls from './Usp.module.scss'
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import DownloadButton from "../DownloadButton/DownloadButton";

import bgIcon from './bg-icon.svg'
import picture from './usp-picture.png'


type UspProps = {}

const Usp: FC<UspProps> = () => {
    return (
        <div className={cls.box} style={{backgroundImage: `url(${bgIcon})`}}>
            <Container>

                <Logo className={cls.logo}/>
                <Title className={cls.title} type={'h1'}>
                    Инвестируй в<br/>
                    проекты и получай<br/>
                    до 15% дохода
                </Title>

                <ul className={cls.list}>
                    <li className={cls.item}>
                        <DownloadButton os={'iso'} href={'https://www.apple.com/ru/app-store/'}/>
                    </li>
                    <li className={cls.item}>
                        <DownloadButton os={'android'} href={'https://play.google.com/store'}/>
                    </li>
                </ul>

            </Container>

            <img className={cls.picture} src={picture} width={750} height={750} alt={''}/>

        </div>
    );
};

export default Usp;