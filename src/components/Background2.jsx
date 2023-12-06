import React, {useEffect, useState} from 'react';
import {useSpring, animated} from "@react-spring/web";
import bg from '../assets/bg1.jpg'

export const Background = () => {
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    })
    return (
        <animated.div style={{
            ...props,
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1
        }}/>
    );
};
