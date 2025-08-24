import React, { useState, useEffect } from 'react'
import { MdKeyboardVoice } from "react-icons/md";
import './Navbar.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

export default function Speaker({ onTranscript }) {
    const navigate = useNavigate();
    const [display, setDisplay] = useState(false);

    const { transcript, browserSupportsSpeechRecognition, listening } = useSpeechRecognition();

    const showingMike = () => {
        setDisplay(true);
        SpeechRecognition.startListening({
            language: 'en-IN',
            continuous: false
        });
    };

    const closespeech = () => {
        SpeechRecognition.stopListening();
        setDisplay(false);
    };

    const visitTo = () => {
        if (transcript && transcript.trim().length > 1) { navigate(`/product-list/${transcript}`); }
    };
    useEffect(() => {
        if (!listening && transcript) {
            if (onTranscript) {
                onTranscript(transcript); // 👈 send data up
            }
            visitTo(); closespeech();

        }
    }, [listening, transcript]);


    if (!browserSupportsSpeechRecognition) return null;

    return (
        <div>
            <button className='me-2' onClick={showingMike}>
                <MdKeyboardVoice color='#ffffffff' size={22} />
            </button>

            {display && (
                <div className="speak-content position-absolute rounded-3">
                    <div className="visible-speech d-flex justify-content-between">
                        <div className="speaked">{transcript || "Listening ..."}</div>
                        <div className="stop-speech cursor-pointer" onClick={closespeech}>
                            <RxCross2 size={20} color="#fff" />
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center speaker-container position-relative'>
                        <div className="voice-speaker d-flex justify-content-center align-items-center">
                            <MdKeyboardVoice color='#ffffffff' size={40} />
                        </div>
                        <div className="speaker-waves"></div>
                    </div>
                </div>
            )}
        </div>
    );
}

