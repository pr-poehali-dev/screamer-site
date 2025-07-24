import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const screamers = [
  {
    id: 1,
    title: "Кровавый череп",
    image: "/img/00fb6d16-9692-443e-aaf4-5f2ed0cd50c8.jpg",
    type: "Внезапный скример",
    soundUrl: "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNessFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNessFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR2PLPeiwFJHfH8N2QQAoUXrTp66hVFApGp+DDq2YeETmR2PLPeiwFJHfH8N2QQAoUXrTp66hVFApHp+DDrWYeETmS2PLPeizFI3bH8N2QQAoUXrPp66hVFApHp+DDrWYeETmS2PLPeizFI3bH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeE"
  },
  {
    id: 2,
    title: "Призрак в тени",
    image: "/img/b04f885e-acdd-4042-b9d4-d68b02077be8.jpg",
    type: "Медленный ужас",
    soundUrl: "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNessFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNessFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR2PLPeiwFJHfH8N2QQAoUXrTp66hVFApGp+DDq2YeETmR2PLPeiwFJHfH8N2QQAoUXrTp66hVFApHp+DDrWYeETmS2PLPeizFI3bH8N2QQAoUXrPp66hVFApHp+DDrWYeETmS2PLPeizFI3bH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeE"
  },
  {
    id: 3,
    title: "Демон из пекла",
    image: "/img/70b50cc9-6a72-4456-9a9a-8ee902b5fafb.jpg",
    type: "Экстремальный ужас",
    soundUrl: "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNessFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNessFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DDrWYeETiR2PLPeiwFJHfH8N2QQAoUXrTp66hVFApGp+DDq2YeETmR2PLPeiwFJHfH8N2QQAoUXrTp66hVFApHp+DDrWYeETmS2PLPeizFI3bH8N2QQAoUXrPp66hVFApHp+DDrWYeETmS2PLPeizFI3bH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeETmR2PLPeiwFJHfH8N2QQAoUXrPp66hVFApGp+DDrWYeE"
  }
];

const Index = () => {
  const [selectedScreamer, setSelectedScreamer] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    // Initialize Web Audio API
    if (typeof window !== 'undefined') {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioContext(ctx);
    }
  }, []);

  const playScreamSound = async () => {
    if (!audioContext) return;
    
    try {
      // Create a simple scream-like sound using oscillators
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Scream-like frequency modulation
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1);
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.3);
      
      // Volume envelope
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 0.3);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.type = 'sawtooth';
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
      
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 500);
    } catch (error) {
      console.error('Audio playback failed:', error);
    }
  };

  const handleScreamerClick = (id: number) => {
    setSelectedScreamer(id);
    playScreamSound();
    
    // Hide after 3 seconds
    setTimeout(() => {
      setSelectedScreamer(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-red-900/10 to-black pointer-events-none" />
      
      {/* Blood drips */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="fixed top-0 blood-drip w-2 opacity-30"
          style={{
            left: `${20 + i * 15}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}

      {/* Header */}
      <header className="relative z-10 p-8 text-center">
        <h1 
          className="text-6xl font-bold mb-4 glitch-text"
          style={{ fontFamily: 'Creepster, cursive' }}
          data-text="SCREAMER GALLERY"
        >
          SCREAMER GALLERY
        </h1>
        <p className="text-xl text-red-400 mb-8 glitch">
          Приготовься к самым страшным моментам... если осмелишься
        </p>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button 
            variant="destructive" 
            size="lg"
            className="bg-red-600 hover:bg-red-700 border-red-800"
          >
            <Icon name="Skull" className="mr-2" />
            Начать испытание
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
          >
            <Icon name="Eye" className="mr-2" />
            Правила
          </Button>
        </div>
      </header>

      {/* Gallery */}
      <main className="relative z-10 px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screamers.map((screamer) => (
              <Card 
                key={screamer.id}
                className="screamer-card bg-gray-900/80 border-red-800 hover:border-red-600"
                onClick={() => handleScreamerClick(screamer.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={screamer.image}
                      alt={screamer.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {screamer.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-red-400 bg-red-900/50 px-2 py-1 rounded">
                          {screamer.type}
                        </span>
                        <Button
                          size="sm"
                          variant="destructive"
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <Icon name="Play" size={16} className="mr-1" />
                          ИГРАТЬ
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Warning section */}
          <div className="mt-16 text-center">
            <div className="bg-red-900/30 border border-red-600 rounded-lg p-8 max-w-2xl mx-auto">
              <Icon name="AlertTriangle" size={48} className="mx-auto mb-4 text-red-500" />
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                ⚠️ ПРЕДУПРЕЖДЕНИЕ ⚠️
              </h2>
              <p className="text-gray-300 mb-4">
                Этот контент содержит внезапные пугающие элементы и громкие звуки. 
                Не рекомендуется людям с проблемами сердца, беременным женщинам 
                и детям до 18 лет.
              </p>
              <p className="text-sm text-red-400">
                Вы взаимодействуете с контентом на свой страх и риск.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Screamer overlay */}
      {selectedScreamer && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="relative">
            <img
              src={screamers.find(s => s.id === selectedScreamer)?.image}
              alt="SCREAMER!"
              className="max-w-full max-h-full glitch animate-pulse"
              style={{ 
                filter: 'contrast(150%) brightness(120%) saturate(150%)',
                animation: 'glitch 0.1s infinite'
              }}
            />
            <div className="absolute inset-0 bg-red-600/20 animate-pulse" />
          </div>
          
          {/* Sound indicator */}
          {isPlaying && (
            <div className="absolute top-8 right-8 text-6xl animate-bounce">
              🔊
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-red-900/50">
        <p className="text-gray-500 text-sm">
          © 2024 Screamer Gallery. Сделано для храбрых душ.
        </p>
      </footer>
    </div>
  );
};

export default Index;