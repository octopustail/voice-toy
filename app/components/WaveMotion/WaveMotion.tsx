'use client'
import 'regenerator-runtime/runtime';
import React from 'react';
import './WaveMotion.css'
import classNames from 'classnames';


export const WaveMotion: React.FC<{show: boolean}> = ({show}) => {
    const containerCls = classNames({
        'wave-container': true,
        'show': show
    })
    return <div className={containerCls}>
        <div className='wave'></div>
        <div className='wave wave-two'></div>
        <div className='wave wave-three'></div>
    </div>
}