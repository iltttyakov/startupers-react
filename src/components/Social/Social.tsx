import React, {FC} from 'react';
import cls from './Social.module.scss'

import telegram from './telegram.png'
import vk from './vk.png'
import instagram from './instagram.png'


type SocialProps = {}

const Social: FC<SocialProps> = () => {
    return (
        <ul className={cls.list}>
           <li className={cls.item}>
               <img className={cls.icon} src={telegram} width={32} height={32} alt={'telegram'}/>
               <a href={'https://telegram.org/'} target={'_blank'} className={cls.link}/>
           </li>
           <li className={cls.item}>
               <img className={cls.icon} src={vk} width={32} height={32} alt={'vk'}/>
               <a href={'https://vk.com'} target={'_blank'} className={cls.link}/>
           </li>
           <li className={cls.item}>
               <img className={cls.icon} src={instagram} width={32} height={32} alt={'instagram'}/>
               <a href={'https://www.instagram.com'} target={'_blank'} className={cls.link}/>
           </li>
        </ul>
    );
};

export default Social;