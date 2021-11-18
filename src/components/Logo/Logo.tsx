import React, {FC} from 'react';
import cls from './Logo.module.scss'


import logo from './logo.svg'

type LogoProps = {
    className: string
}

const Logo: FC<LogoProps> = ({className}) => {
    return (
        <img className={[cls.image, className].join(' ')} src={logo} width={234} height={56}/>
    );
};

export default Logo;