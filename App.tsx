import React, { useState, useCallback } from 'react';
import TypewriterHeading from './components/TypewriterHeading';
import Card from './components/Card';
import HeartIcon from './components/icons/HeartIcon';
import Ballpit from './components/Ballpit';
import BallpitControls from './components/BallpitControls';
import SlidersIcon from './components/icons/SlidersIcon';
import SecretLink from './components/SecretLink';
import GameCard from './components/GameCard';
import { MusicPlayer } from './components/MusicPlayer';

const cardContent1 = (
  <>
    <p className="mb-4">
      Your presence commands respect, but not through fear —
      Through the way you carry yourself with such elegance and grace.
      The moment you walk in, backs straighten, not from obligation,
      but from inspiration. Your aura doesn't demand attention;
      it earns it naturally. 🌟
    </p>
    <p className="mb-4">
      It's in how you stand,
      how you move with purpose,
      how every word carries weight without heaviness.
      You've mastered the art of being both approachable and admirable.
    </p>
    <p>
      When you speak, we listen —
      not because we have to,
      but because we want to catch every pearl of wisdom
      that falls from your words... ✨
    </p>
  </>
);

const cardContent2 = (
  <>
    <p className="mb-4">
      Let me get this straight...
      <br />
      You did your entire school life in Gujarati medium…
      <br />
      AND NOW YOU SPEAK LIKE YOU'RE ON A NETFLIX DOCUSERIES 😭🎤🇺🇸??
    </p>
    <p className="mb-4">
      Like <em className="italic opacity-80">"hello, today we discuss assertive tone modulation"</em>
      <br />
      and I'm just sitting there like:
      <br />
      "broooo am I blushing or learning?? 🥲"
    </p>
    <p className="mb-4">
      Your vocabulary is so smooth it needs a skincare routine 🧴🫧
      <br />
      Your accent is cleaner than my codebase (and that's saying A LOT)
      <br />
      Your way of explaining complex topics? Pure poetry in motion 📚✨
      <br />
      You made me believe fluency isn't born — it's built 💪🧠💬
    </p>
    <p className="mb-4">
      Every class feels like a TED talk crossed with a heart-to-heart chat
      <br />
      The way you break down communication barriers?
      <br />
      That's not just teaching — that's <em className="italic">architectural brilliance</em> 🏛️✨
    </p>
    <p className="mb-4">
      I've seen professionals stumble over their words in meetings
      <br />
      But here you are, making eloquence look effortless
      <br />
      Like it's just another Tuesday in your world of linguistic mastery 👑
    </p>
    <p>
      And now?
      <br />
      I don't want to just speak English.
      <br />
      I wanna <em className="italic font-semibold">own it</em> — Rishi style, with a sprinkle of Ma'am magic 💫
      <br />
      Because you showed us that language isn't just about words
      <br />
      It's about painting pictures with our voice 🎨🗣️
    </p>
  </>
);

const cardContent3 = (
  <>
    <p className="mb-4">
      Dear Ma'am,
    </p>
    <p className="mb-4">
      I've built startups.
      <br />
      I've closed deals.
      <br />
      I've even pitched to the Romanian board and made AI agents smarter...
    </p>
    <p className="mb-4">
      But I've never built something <em className="italic">because someone inspired me this deeply.</em>
      <br />
      Something that came straight from the heart,
      <br />
      Powered by admiration and gratitude. ✨
    </p>
    <p className="mb-4">
      You don't just teach speaking.
      <br />
      You show us what <em className="italic">presence</em> looks like.
      <br />
      How to stand tall without casting shadows,
      <br />
      How to speak softly yet move mountains. 🗣️✨
    </p>
    <p className="mb-4">
      In every session, you weren't just teaching —
      <br />
      You were architecting confidence,
      <br />
      Building bridges between thoughts and expression,
      <br />
      Making eloquence feel like second nature. 🌉💫
    </p>
    <p className="mb-4">
      And now I'm here —
      <br />
      a pookie with too much admiration
      <br />
      and no idea how to process all this influence 🥺🫠
      <br />
      Watching in awe as you transform nervousness into grace,
      <br />
      Turn hesitation into purposeful pauses.
    </p>
    <p className="mb-4">
      If one day I speak like a leader…
      <br />
      not with loud words,
      <br />
      but with clarity, confidence, and calm...
      <br />
      If I can inspire others the way you've inspired me,
      <br />
      If I can make impact feel as natural as breathing...
    </p>
    <p className="mb-4">
      Just know:
      <br />
      <strong className="font-semibold text-white">You were the blueprint.</strong> 💙🧠🗣️
      <br />
      The north star guiding us toward eloquence,
      <br />
      The proof that excellence isn't just taught — it's lived.
    </p>
    <p className="mt-6 text-right w-full">
      — SMIT
      <br/>
      <span className="text-sm opacity-70">(not just the founder of Aveon AI India,</span>
      <br/>
      <span className="text-sm opacity-70">but the guy who went full 🐶💗👶 in your class)</span>
    </p>
  </>
);

const cardData = [
  {
    title: "Ma'am, why do I sit straighter when you enter?",
    content: cardContent1
  },
  {
    title: "Gujarati medium? Ma'am, you're lying 😭",
    content: cardContent2
  },
  {
    title: "I build AI... but this time I built something else",
    content: cardContent3
  }
];

const NextButton: React.FC<{ onClick: () => void; text?: string }> = ({ onClick, text = "Next" }) => (
  <button
    onClick={onClick}
    className="mt-8 bg-violet-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75"
    aria-label={text}
  >
    {text}
  </button>
);

const Page1: React.FC<{ onNext: () => void; content: any }> = ({ onNext, content }) => (
  <div className="animate-fade-in w-full flex flex-col items-center">
    <header className="my-12">
      <TypewriterHeading words={['Power.', 'Clarity.', 'Voice.']} />
    </header>
    <Card title={content.title}>{content.content}</Card>
    <NextButton onClick={onNext} />
  </div>
);

const ContentPage: React.FC<{ onNext: () => void; content: any; nextButtonText?: string }> = ({ onNext, content, nextButtonText }) => (
  <div className="animate-fade-in w-full flex flex-col items-center justify-center flex-grow">
    <Card title={content.title}>{content.content}</Card>
    <NextButton onClick={onNext} text={nextButtonText} />
  </div>
);

const GamePage: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <div className="animate-fade-in w-full flex flex-col items-center justify-center flex-grow">
    <GameCard />
    <NextButton onClick={onNext} text="See the final message" />
  </div>
);

const FinalPage: React.FC<{ onRestart: () => void }> = ({ onRestart }) => (
  <div className="animate-fade-in w-full flex flex-col items-center justify-center flex-grow">
    <button
      onClick={onRestart}
      className="text-slate-400 italic hover:text-white transition-colors duration-300 text-lg"
    >
      Read the story again?
    </button>
    <SecretLink />
  </div>
);

const ballpitColors = [0x7e22ce, 0xc026d3, 0x64748b, 0x475569, 0x1e293b];

const App: React.FC = () => {
  const [page, setPage] = useState(0);
  const [showControls, setShowControls] = useState(false);

  // Ballpit settings state
  const [followCursor, setFollowCursor] = useState(true);
  const [count, setCount] = useState(150);
  const [gravity, setGravity] = useState(0.1);
  const [friction, setFriction] = useState(0.9);
  const [wallBounce, setWallBounce] = useState(0.95);
  const [lightIntensity, setLightIntensity] = useState(100);
  const [ambientIntensity, setAmbientIntensity] = useState(1);
  const [minSize, setMinSize] = useState(0.8);
  const [maxSize, setMaxSize] = useState(1.5);
  const [maxVelocity, setMaxVelocity] = useState(0.15);

  const nextPage = useCallback(() => {
    setPage(p => (p + 1) % (cardData.length + 2)); // +2 for game and final pages
  }, []);

  const restartPages = useCallback(() => {
    setPage(0);
  }, []);

  const toggleControls = useCallback(() => {
    setShowControls(s => !s);
  }, []);

  const handleMinSizeChange = (value: number) => {
    if (value > maxSize) {
      setMaxSize(value);
    }
    setMinSize(value);
  };

  const handleMaxSizeChange = (value: number) => {
    if (value < minSize) {
      setMinSize(value);
    }
    setMaxSize(value);
  };

  const pages = [
    <Page1 key="page1" onNext={nextPage} content={cardData[0]} />,
    <ContentPage key="page2" onNext={nextPage} content={cardData[1]} />,
    <ContentPage key="page3" onNext={nextPage} content={cardData[2]} nextButtonText="With my thanks" />,
    <GamePage key="pageGame" onNext={nextPage} />,
    <FinalPage key="page4" onRestart={restartPages} />
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0a0014]">
      <div className="absolute inset-0 z-0 opacity-100">
        <Ballpit
          className="w-full h-full"
          colors={ballpitColors}
          gravity={gravity}
          friction={friction}
          count={count}
          minSize={minSize}
          maxSize={maxSize}
          size0={3}
          lightIntensity={lightIntensity}
          ambientIntensity={ambientIntensity}
          maxVelocity={maxVelocity}
          wallBounce={wallBounce}
          followCursor={followCursor}
        />
      </div>

      {showControls && (
        <BallpitControls
          followCursor={followCursor}
          setFollowCursor={setFollowCursor}
          count={count}
          setCount={setCount}
          gravity={gravity}
          setGravity={setGravity}
          friction={friction}
          setFriction={setFriction}
          wallBounce={wallBounce}
          setWallBounce={setWallBounce}
          lightIntensity={lightIntensity}
          setLightIntensity={setLightIntensity}
          ambientIntensity={ambientIntensity}
          setAmbientIntensity={setAmbientIntensity}
          minSize={minSize}
          setMinSize={handleMinSizeChange}
          maxSize={maxSize}
          setMaxSize={handleMaxSizeChange}
          maxVelocity={maxVelocity}
          setMaxVelocity={setMaxVelocity}
        />
      )}

      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 overflow-hidden">
        <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto flex-grow text-center">
          {pages[page]}
        </main>
        <footer className="w-full text-center py-4">
          <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
            <p className="animate-pulse">
              Built by Smit — the boy who usually builds AI, but this time… just wanted ma'am to be proud 🥹💻💗
            </p>
            <HeartIcon className="h-4 w-4 text-pink-400" />
            <button 
              onClick={toggleControls} 
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Customize animation"
              title="Customize animation"
            >
              <SlidersIcon className="h-4 w-4 text-slate-400"/>
            </button>
          </div>
        </footer>
      </div>

      <MusicPlayer />
    </div>
  );
};

export default App;
