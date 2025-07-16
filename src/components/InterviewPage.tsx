import React, { useState, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
// Add this at the very top for TypeScript PNG import support
// @ts-ignore
import interviewerAvatar from '../assets/model_1.png';
// Remove interviewerAvatar import

interface InterviewPageProps {
  job: any;
}

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

async function fetchGpt4Response(messages: {role: string, content: string}[]) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages,
      max_tokens: 300,
      temperature: 0.7,
    }),
  });
  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// Add this type declaration at the top (after imports)
declare global {
  interface ImportMetaEnv {
    readonly VITE_OPENAI_API_KEY: string;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

// Remove all three.js and 3D avatar code

const InterviewPage: React.FC<InterviewPageProps> = ({ job }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: `Welcome to your interview! Let's begin. Please introduce yourself.` }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef<any>(null);
  const [isBlinking, setIsBlinking] = useState(false);
  // Remove headAngle and head movement effect

  // Blinking effect (slower)
  React.useEffect(() => {
    let blinkTimeout: number;
    let blinkInterval: number;
    function startBlinking() {
      blinkInterval = setInterval(() => {
        setIsBlinking(true);
        blinkTimeout = setTimeout(() => setIsBlinking(false), 180); // eyelid down for 180ms
      }, 5000 + Math.random() * 3000); // blink every 5-8s
    }
    startBlinking();
    return () => {
      clearInterval(blinkInterval);
      clearTimeout(blinkTimeout);
    };
  }, []);

  // Text-to-speech for bot replies
  function speak(text: string) {
    const synth = window.speechSynthesis;
    if (!synth) return;
    const utter = new window.SpeechSynthesisUtterance(text);
    // Prefer female Indian English voice
    const voices = synth.getVoices();
    // Try to find a female Indian English voice
    const indianFemale = voices.find(v =>
      v.lang && v.lang.toLowerCase().includes('en-in') && v.name.toLowerCase().includes('female')
    ) || voices.find(v =>
      v.lang && v.lang.toLowerCase().includes('en-in') && v.name.toLowerCase().includes('woman')
    );
    // Fallback to any female voice
    const female = voices.find(v => v.name.toLowerCase().includes('female'));
    if (indianFemale) utter.voice = indianFemale;
    else if (female) utter.voice = female;
    else if (voices[0]) utter.voice = voices[0];
    utter.onstart = () => setIsSpeaking(true);
    utter.onend = () => setIsSpeaking(false);
    synth.speak(utter);
  }

  // Speak the latest AI message when it appears
  React.useEffect(() => {
    const last = messages[messages.length - 1];
    if (last && last.role === 'assistant') {
      speak(last.content);
    }
  }, [messages]);

  // Send user answer to OpenAI and get next question
  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    // Compose prompt for OpenAI
    const prompt = [
      { role: 'system', content: 'You are a professional female interviewer. Ask the candidate a follow-up technical or behavioral question based on their last answer. Keep it conversational and relevant to a job interview.' },
      ...newMessages
    ];
    const reply = await fetchGpt4Response(prompt);
    setMessages([...newMessages, { role: 'assistant', content: reply }]);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg border-4 border-purple-200 flex flex-col items-center p-8 w-full max-w-3xl" style={{ minHeight: 600 }}>
        {/* LIVE badge */}
        <div className="self-start mb-4 flex items-center bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow animate-pulse z-10">
          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
          LIVE
        </div>
        <div className="text-xl font-semibold text-purple-700 mb-4">AI Interviewer</div>
        {/* Enlarged Chat UI */}
        <div className="w-full bg-gray-50 rounded-lg border border-gray-200 p-6 flex flex-col gap-4 shadow" style={{ minHeight: 350, maxHeight: 500 }}>
          <div className="flex-1 overflow-y-auto space-y-3 mb-2 max-h-80">
            {messages.filter(m => m.role !== 'system').map((msg, idx) => (
              <div key={idx} className={msg.role === 'assistant' ? 'text-left' : 'text-right'}>
                <span className={msg.role === 'assistant' ? 'inline-block bg-white text-gray-900 px-4 py-2 rounded-lg shadow' : 'inline-block bg-purple-100 text-purple-900 px-4 py-2 rounded-lg shadow'}>
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && (
              <div className="text-left text-gray-400">AI is typing...</div>
            )}
          </div>
          <form onSubmit={handleSend} className="flex gap-2 items-center">
            <input
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none text-lg"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your answer..."
              disabled={loading}
            />
            <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold" disabled={loading || !input.trim()}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage; 