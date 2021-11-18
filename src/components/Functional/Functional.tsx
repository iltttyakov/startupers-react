import React, {FC} from 'react';
import cls from './Functional.module.scss'
import Container from "../Container/Container";
import Title from "../Title/Title";

import bgIcon from './bg-icon.svg'
import picture from './functional-picture.png'
import pictureMob from './functional-picture-mob.png'

type FunctionalProps = {}

const Functional: FC<FunctionalProps> = () => {
    return (
        <div className={cls.box} style={{backgroundImage: `url(${bgIcon})`}}>
            <Container className={cls.container}>

                <div className={cls.textContainer}>
                    <Title type={'h2'} className={cls.title}>
                        Что можно делать<br/>в приложении
                    </Title>
                    <ul className={cls.list}>
                        <li className={cls.item}>
                            <div className={cls.numberContainer}>
                                <span className={cls.number}>1</span>
                            </div>
                            <p className={cls.text}>
                                Инвестируйте в проекты<br/>
                                и получайте доход до 15%
                            </p>
                        </li>
                        <li className={cls.item}>
                            <div className={cls.numberContainer}>
                                <span className={cls.number}>2</span>
                            </div>
                            <p className={cls.text}>
                                Создавайте проекты и<br/>
                                получиайте инвестиции от<br/>
                                других пользователей
                            </p>
                        </li>
                        <li className={cls.item}>
                            <div className={cls.numberContainer}>
                                <span className={cls.number}>3</span>
                            </div>
                            <p className={cls.text}>
                                Покупайте или продавайте<br/>
                                проекты
                            </p>
                        </li>
                    </ul>
                </div>

                <div className={cls.pictureContainer}>
                    <img
                        className={cls.picture} src={window.innerWidth > 768 ? picture : pictureMob}
                        width={675} height={936} alt={''}
                    />
                </div>

            </Container>
        </div>
    );
};

export default Functional;