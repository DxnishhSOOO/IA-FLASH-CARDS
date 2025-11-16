import React, { useState, useMemo, useEffect } from 'react';
import TopicSelector from './components/TopicSelector';
import Flashcard from './components/Flashcard';
import { flashcardDecks } from './constants/flashcardData';
import type { Flashcard as FlashcardType } from './types';

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('card-enter');

  const topics = useMemo(() => Object.keys(flashcardDecks), []);
  const currentDeck: FlashcardType[] = selectedTopic ? flashcardDecks[selectedTopic] : [];

  useEffect(() => {
    if (selectedTopic) {
        setAnimationClass('card-enter');
    }
  }, [selectedTopic]);


  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    setCurrentCardIndex(0);
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  const changeCard = (nextIndex: number) => {
    setAnimationClass('card-exit');
    setTimeout(() => {
      setCurrentCardIndex(nextIndex);
      setAnimationClass('card-enter');
    }, 400); // Match animation duration
  };

  const goToNextCard = () => {
    const nextIndex = (currentCardIndex + 1) % currentDeck.length;
    changeCard(nextIndex);
  };

  const goToPrevCard = () => {
    const nextIndex = (currentCardIndex - 1 + currentDeck.length) % currentDeck.length;
    changeCard(nextIndex);
  };
  
  const currentCard = currentDeck[currentCardIndex];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-4xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/30 p-6 md:p-10">
        {!selectedTopic ? (
          <TopicSelector topics={topics} onSelectTopic={handleSelectTopic} />
        ) : (
          <div className="animate-fadeInUp">
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={handleBackToTopics}
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-semibold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Volver a temas
                </button>
                <div className="font-medium text-lg text-slate-400">
                    {currentCardIndex + 1} / {currentDeck.length}
                </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-200">{selectedTopic}</h1>
            
            <div className={animationClass}>
                <Flashcard
                key={currentCardIndex}
                question={currentCard.question}
                answer={currentCard.answer}
                />
            </div>
            
            <div className="flex justify-between w-full mt-8">
                <button
                    onClick={goToPrevCard}
                    className="px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-lg font-semibold hover:bg-slate-600/50 hover:border-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-slate-500 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Anterior
                </button>
                <button
                    onClick={goToNextCard}
                    className="px-6 py-3 bg-sky-600/80 border border-sky-500 rounded-lg font-semibold hover:bg-sky-500/80 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 flex items-center gap-2"
                >
                    Siguiente
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default App;