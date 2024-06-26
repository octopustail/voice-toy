'use client'
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { LanguageSelector } from '@/components/LanguageSelector/LanguageSelector';
import toast, { Toaster } from 'react-hot-toast';
import './VoiceToy.css'

import { WaveMotion } from '@/components/WaveMotion/WaveMotion';

enum RecordState {
    Pause = 'pause',
    Stop = 'stop',
    Recording = 'recording',
}

export const VoiceToy: React.FC = () => {
    const [curState, setCurState] = useState<RecordState>(RecordState.Stop)
    const [lang, setLang] = useState('en')
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => {
        if (!browserSupportsSpeechRecognition) {
            toast.error(
                `Browser doesn't support speech recognition, using Chrome or Edge instead please.`
            );
        }
    }, [browserSupportsSpeechRecognition])

    const handleRecordButton = async () => {
        if (curState === RecordState.Stop) {
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
            language: lang,
        });
    }

    const handleStopButton = () => {
        SpeechRecognition.abortListening();
        setCurState(RecordState.Stop)
    }

    const recordButtonText = curState === RecordState.Recording ? 'Pause' : 'Record';
    const recordButtonCls = classNames({
        button: true,
        'button-pause': curState === RecordState.Recording,
        'button-recording': curState !== RecordState.Recording,
    });

    const stopButtonCls = classNames({
        button: true,
        'button-stop__disabled': curState === RecordState.Stop,
        'button-stop': curState !== RecordState.Stop,
    });

    const transcriptCls = classNames({
        transcript: true,
        'recording-border': curState === RecordState.Recording,
        'pause-border': curState === RecordState.Pause,
    })



    return <div className='container'>
        <Toaster />
        <div className={transcriptCls}>
            <WaveMotion show={listening} />
            <span className='relative'>
                {transcript ||
                    <span className='text-slate-400'>
                        🎤  Welcome to Voice Toy, record and recognize your speech. <br />
                        <br />
                        - Press `Record` to start.
                        <br />
                        - Press `Pause` to pause, Press `Record` to resume.
                        <br />
                        -  Press `Stop`, then press `Record` to start a new one.
                    </span>}
            </span>
        </div>
        <div className='buttons'>
            <LanguageSelector onSelect={setLang} disabled={curState === RecordState.Recording} />
            <button
                onClick={handleRecordButton}
                className={recordButtonCls}
                aria-label={`${recordButtonText} Button`}
            >
                {recordButtonText}</button>
            <button
                onClick={handleStopButton}
                className={stopButtonCls}
                disabled={curState === RecordState.Stop}
                aria-label="Stop Button"
            >Stop</button>
        </div>
    </div>
}