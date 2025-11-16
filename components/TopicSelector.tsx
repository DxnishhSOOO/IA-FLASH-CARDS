import React from 'react';

interface TopicSelectorProps {
  topics: string[];
  onSelectTopic: (topic: string) => void;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ topics, onSelectTopic }) => {
  const chemistryTopics = ['Óxidos', 'Hidruros', 'Hidróxidos', 'Ácidos'];
  const geometryTopics = ['Líneas y Puntos Notables', 'Tipos de Triángulos'];
  const physicsTopics = ['Cinemática', 'MRU', 'MRUV'];


  const renderTopicButtons = (topicList: string[]) => {
    return topicList.map((topic, index) => (
      <button
        key={topic}
        onClick={() => onSelectTopic(topic)}
        className="w-full h-32 bg-slate-800/50 border border-slate-700 text-white font-bold rounded-lg shadow-lg hover:bg-sky-500/30 hover:border-sky-400 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-400 focus:ring-opacity-50"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {topic}
      </button>
    ));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 animate-fadeInUp">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-400">
        Flashcards Interactivas
      </h1>
      
      <div className="space-y-12">
        <div style={{ animationDelay: '100ms' }} className="animate-fadeInUp">
          <h2 className="text-2xl font-semibold mb-5 flex items-center gap-3 text-slate-300 border-b-2 border-sky-500/30 pb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477zM12 6.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            Química
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {renderTopicButtons(chemistryTopics)}
          </div>
        </div>

        <div style={{ animationDelay: '200ms' }} className="animate-fadeInUp">
          <h2 className="text-2xl font-semibold mb-5 flex items-center gap-3 text-slate-300 border-b-2 border-indigo-500/30 pb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Geometría
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {renderTopicButtons(geometryTopics)}
          </div>
        </div>

        <div style={{ animationDelay: '300ms' }} className="animate-fadeInUp">
          <h2 className="text-2xl font-semibold mb-5 flex items-center gap-3 text-slate-300 border-b-2 border-fuchsia-500/30 pb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Física
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {renderTopicButtons(physicsTopics)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopicSelector;