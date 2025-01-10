"use client";

import Image from "next/image";
import { useState } from 'react';
import MessageBox from './components/messagebox';

export default function Home() {
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([]);
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [interimText, setInterimText] = useState('');
  const [isCloseModalVisible, setIsCloseModalVisible] = useState(false);

  const handleSend = (message: { sender: string, text: string }) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const toggleListening = () => {
    setListening(!listening);
  };

  const handleTranscription = (text: string, isFinal: boolean) => {
    if (isFinal) {
      setInput((prevInput) => prevInput + ' ' + text);
      setInterimText('');
    } else {
      setInterimText(text);
    }
  };

  const handleOpenCloseModal = () => {
    setIsCloseModalVisible(true);
  };

  const handleCloseCloseModal = () => {
    setIsCloseModalVisible(false);
  };

  return (
    <div className="flex items-center justify-center mx-[10%] h-screen bg-[#0C0004]">

      {/* Box Containing Main Body */}
      <div className="p-5 flex flex-col w-screen h-full rounded-2xl bg-[#0C0004]  mx-auto  font-sans">
        <h1 className="text-2xl justify-center flex text-white font-bold ">StockBot: A Concept Project</h1>

        <MessageBox />
      </div>
      
    </div>
  );
}


