import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import '../styles/Pomodoro.css'; // Import your CSS here

const Pomodoro = () => {
    const [time, setTime] = useState(1500); // 25 minutes in seconds
    const [breakTime, setBreakTime] = useState(300); // 5 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            clearInterval(interval);
            setIsActive(false);
            setIsBreak(!isBreak);
            isBreak ? setTime(1500) : setTime(300); // Toggle between work and break
            document.getElementById('alarmTone').play();
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time, isBreak]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${sec < 10 ? '0' : ''}${sec}`;
    };

    const handleStartPause = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setTime(1500); // Reset to 25 minutes
        setBreakTime(300); // Reset to 5 minutes
        setIsActive(false);
        setIsBreak(false);
    };

    const handleSkip = () => {
        setIsBreak(!isBreak);
        isBreak ? setTime(1500) : setTime(300); // Toggle between work and break
    };

    return (
        <div className="pomodoro-timer">
            <div className="container h-[100vh] justify-center max-[1024px]:h-[100vh] max-[1024px]:justify-center">
                <div className="myContainer items-center flex flex-col justify-center border border-black bg-[#B6FFBB] rounded-lg w-[220px] py-4">
                    <div className="timer-container">
                        <h1 id="focusTime">{isBreak ? 'Break Time' : 'Focus Time'}</h1>
                    </div>
                    <div className="clock-container">
                        <h1 id="time">{formatTime(time)}</h1>
                    </div>
                    <div className="clock-btn">
                        <button id="startBtn" className='bg-green-400 hover:bg-green-500' onClick={handleStartPause}>
                            {isActive ? 'Pause' : 'Start'}
                        </button>
                    </div>
                    <hr className='opacity-10 border border-black w-[100%] m-4' />
                    <div className="extraButtons">
                        <button id="skipButton" className="extraBtn bg-white hover:bg-gray-100" onClick={handleSkip}>Skip</button>
                        <button id="reloadButton" className="extraBtn bg-white hover:bg-gray-100" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
            <audio id="alarmTone" src="audio.mp3"></audio>
        </div>
    );
};

export default Pomodoro;
