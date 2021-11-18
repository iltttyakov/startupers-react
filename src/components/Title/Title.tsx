import React, {FC} from 'react';
import cls from './Title.module.scss'


type TitleProps = {
    type: string,
    className?: string
}

const Title: FC<TitleProps> = ({type, className = '', children}) => {
    return (
        type === 'h1'
            ? <h1 className={[cls.box, cls.h1, className].join(' ')}>
                {children}
            </h1>
            : <h2 className={[cls.box, cls.h2, className].join(' ')}>
                {children}
            </h2>
    );
};

export default Title;