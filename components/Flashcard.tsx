import React, { useState, useEffect } from 'react';

interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [question]);

  const handleAskAI = (e: React.MouseEvent) => {
    e.stopPropagation();
    const searchUrl = `https://www.perplexity.ai/search?q=${encodeURIComponent(question)}`;
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="w-full h-80 md:h-96 cursor-pointer group"
      style={{ perspective: '1200px' }}
      onClick={() => setIsFlipped(!isFlipped)}
      aria-live="polite"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? setIsFlipped(!isFlipped) : null}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-indigo-700 to-slate-900 rounded-xl shadow-2xl shadow-indigo-900/40 border border-indigo-600" style={{ backfaceVisibility: 'hidden' }}>
          <div className="flex-grow flex flex-col justify-center items-center">
            <h2 className="text-xl md:text-3xl font-bold">{question}</h2>
            <p className="text-indigo-300 mt-4 text-sm opacity-70 group-hover:opacity-100 transition-opacity">Haz clic para voltear</p>
          </div>
          <button
            onClick={handleAskAI}
            className="mt-4 flex-shrink-0 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-full text-sm font-semibold text-slate-300 hover:bg-slate-700/70 hover:text-white transition-all flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Preguntar a la IA
          </button>
        </div>
        
        {/* Back of the card */}
        <div className="absolute w-full h-full flex items-center justify-center p-6 text-center bg-gradient-to-br from-purple-700 to-slate-900 rounded-xl shadow-2xl shadow-purple-900/40 border border-purple-600" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <p className="text-lg md:text-2xl font-semibold">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;