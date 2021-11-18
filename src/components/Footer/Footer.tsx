import React, {FC} from 'react';
import cls from './Footer.module.scss'
import Container from "../Container/Container";
import Social from "../Social/Social";


type FooterProps = {}

const Footer: FC<FooterProps> = () => {
    return (
        <div className={cls.box}>
            <Container className={cls.container}>

                <div className={cls.textContainer}>
                    <p className={cls.copyright}>STURTUPERS @ 2021</p>
                    <p className={cls.details}>ИП Бондарь Михаил Александрович, ОГРНИП: 321312300035189, ИНН 310208225142</p>
                    <p className={cls.details}>ИП Журавлев Александр Олегович, ОГРИНИП: 320132600016278, ИНН: 132300806446</p>
                </div>

                <div className={cls.contactsContainer}>
                    <a className={cls.email} href={'mailto:startupers.app@gmail.com'}>
                        startupers.app@gmail.com
                    </a>
                    <Social/>
                </div>

            </Container>
        </div>
    );
};

export default Footer;