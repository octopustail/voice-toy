'use client'
import React, { useReducer, useState } from 'react';
import classNames from 'classnames';
import './VoiceToy.css'

enum Action {
    Pause = 'pause',
    Stop = 'stop',
    Recording = 'recording',
}

type State = {
    isRecording: boolean;
    isFinished: boolean;
}

type ActionType = { type: Action };
const reducer = (state: State, action: ActionType): State => {
    switch (action.type) {
        case Action.Pause: {
            return {
                isRecording: false,
                isFinished: false
            }
        };
        case Action.Stop: {
            return {
                isRecording: false,
                isFinished: true
            }
        };
        case Action.Recording: {
            return {
                isRecording: true,
                isFinished: false
            }
        }
        default: return state;
    }
}

const initialState = {
    isRecording: false,
    isFinished: true
}
export const VoiceToy: React.FC = () => {
    const [curState, setCurState] =  useState<Action>(Action.Stop)

    const handleRecordButton = () => {
        if (curState === Action.Recording) {
            setCurState(Action.Pause)
            return;
        }
        setCurState(Action.Recording)
    }

    const handleStopButton = () => {
        setCurState(Action.Stop)
    }

    const recordButtonText = curState === Action.Recording ? 'Pause' : 'Record';
    const recordButtonCls = classNames({
        button: true,
        'bg-amber-500': curState === Action.Recording,
        'bg-lime-400': curState !== Action.Recording,
    });

    const stopButtonCls = classNames({
        button: true,
        'bg-gray-500': curState === Action.Stop,
        'bg-red-500': curState !== Action.Stop,
    });

    const isStopDisabled = curState === Action.Stop

    return <div className='border border-gray-400 rounded-md w-3/4 h-full p-12'>
        <div className='border border-gray-400 rounded-md h-4/5 p-4'>
            text here
        </div>

        <div className='flex justify-between mt-6'>
            <button onClick={handleRecordButton} className={recordButtonCls}>{recordButtonText}</button>
            <button onClick={handleStopButton} className={stopButtonCls} disabled={isStopDisabled}>Stop</button>
        </div>

    </div>
}