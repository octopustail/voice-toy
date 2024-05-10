'use client'
import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import classNames from 'classnames';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import './VoiceToy.css'

enum RecordState {
    Pause = 'pause',
    Stop = 'stop',
    Recording = 'recording',
}

export const VoiceToy: React.FC = () => {
    const [curState, setCurState] = useState<RecordState>(RecordState.Stop)
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const handleRecordButton = async () => {
        if(curState === RecordState.Stop){
            resetTranscript();
        }
        if (curState === RecordState.Recording) {
            setCurState(RecordState.Pause)
            SpeechRecognition.stopListening();
            return;
        }
        setCurState(RecordState.Recording)
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-US'
        });
    }

    const handleStopButton = () => {
        SpeechRecognition.abortListening();
        setCurState(RecordState.Stop)
    }

    const recordButtonText = curState === RecordState.Recording ? 'Pause' : 'Record';
    const recordButtonCls = classNames({
        button: true,
        'bg-amber-500': curState === RecordState.Recording,
        'bg-lime-400': curState !== RecordState.Recording,
    });

    const stopButtonCls = classNames({
        button: true,
        'bg-gray-500': curState === RecordState.Stop,
        'bg-red-500': curState !== RecordState.Stop,
    });

    const isStopDisabled = curState === RecordState.Stop

    return <div className='border border-gray-400 rounded-md w-3/4 h-full p-12'>
        <div className='border border-gray-400 rounded-md h-4/5 p-4'>
            {transcript}
        </div>
        <div className='flex justify-between mt-6'>
            {listening ? 'listening' : 'nothing'}
            <button onClick={handleRecordButton} className={recordButtonCls}>{recordButtonText}</button>
            <button onClick={handleStopButton} className={stopButtonCls} disabled={isStopDisabled}>Stop</button>
        </div>

    </div>
}