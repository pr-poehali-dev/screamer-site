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

  const playHorrorSound = async (soundType: 'skull' | 'ghost' | 'demon') => {
    if (!audioContext) return;
    
    try {
      const now = audioContext.currentTime;
      
      if (soundType === 'skull') {
        // Bone-chilling death scream with distortion
        const osc1 = audioContext.createOscillator();
        const osc2 = audioContext.createOscillator();
        const osc3 = audioContext.createOscillator();
        const gain1 = audioContext.createGain();
        const gain2 = audioContext.createGain();
        const gain3 = audioContext.createGain();
        const masterGain = audioContext.createGain();
        
        // Connect all oscillators
        osc1.connect(gain1);
        osc2.connect(gain2);
        osc3.connect(gain3);
        gain1.connect(masterGain);
        gain2.connect(masterGain);
        gain3.connect(masterGain);
        masterGain.connect(audioContext.destination);
        
        // Death scream frequencies
        osc1.frequency.setValueAtTime(150, now);
        osc1.frequency.exponentialRampToValueAtTime(800, now + 0.1);
        osc1.frequency.exponentialRampToValueAtTime(100, now + 0.8);
        
        osc2.frequency.setValueAtTime(300, now);
        osc2.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
        osc2.frequency.exponentialRampToValueAtTime(80, now + 0.9);
        
        osc3.frequency.setValueAtTime(60, now);
        osc3.frequency.exponentialRampToValueAtTime(200, now + 0.2);
        
        // Harsh waveforms
        osc1.type = 'sawtooth';
        osc2.type = 'square';
        osc3.type = 'triangle';
        
        // Volume envelopes for terror
        masterGain.gain.setValueAtTime(0, now);
        masterGain.gain.exponentialRampToValueAtTime(0.6, now + 0.01);
        masterGain.gain.exponentialRampToValueAtTime(0.4, now + 0.3);
        masterGain.gain.exponentialRampToValueAtTime(0.8, now + 0.5);
        masterGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);
        
        osc1.start(now);
        osc2.start(now + 0.05);
        osc3.start(now);
        osc1.stop(now + 1.2);
        osc2.stop(now + 1.2);
        osc3.stop(now + 1.2);
        
      } else if (soundType === 'ghost') {
        // Ethereal whisper turning into banshee wail
        const osc = audioContext.createOscillator();
        const filter = audioContext.createBiquadFilter();
        const gain = audioContext.createGain();
        const tremolo = audioContext.createOscillator();
        const tremoloGain = audioContext.createGain();
        
        osc.connect(filter);
        filter.connect(gain);
        tremolo.connect(tremoloGain);
        tremoloGain.connect(gain.gain);
        gain.connect(audioContext.destination);
        
        // Ghostly frequencies
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.5);
        osc.frequency.exponentialRampToValueAtTime(880, now + 1.0);
        osc.frequency.exponentialRampToValueAtTime(440, now + 1.5);
        
        // Ethereal filter sweep
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, now);
        filter.frequency.exponentialRampToValueAtTime(2000, now + 0.8);
        filter.frequency.exponentialRampToValueAtTime(100, now + 1.8);
        filter.Q.setValueAtTime(15, now);
        
        // Tremolo effect
        tremolo.frequency.setValueAtTime(8, now);
        tremoloGain.gain.setValueAtTime(0.3, now);
        
        osc.type = 'sine';
        tremolo.type = 'sine';
        
        // Haunting volume envelope
        gain.gain.setValueAtTime(0, now);
        gain.gain.exponentialRampToValueAtTime(0.2, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.5, now + 1.0);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 2.0);
        
        osc.start(now);
        tremolo.start(now);
        osc.stop(now + 2.0);
        tremolo.stop(now + 2.0);
        
      } else if (soundType === 'demon') {
        // Deep demonic growl with hellish overtones
        const fundamental = audioContext.createOscillator();
        const subharmonic = audioContext.createOscillator();
        const harmonic1 = audioContext.createOscillator();
        const harmonic2 = audioContext.createOscillator();
        const noise = audioContext.createOscillator();
        
        const distortion = audioContext.createWaveShaper();
        const filter = audioContext.createBiquadFilter();
        const masterGain = audioContext.createGain();
        
        // Create distortion curve
        const samples = 44100;
        const curve = new Float32Array(samples);
        const deg = Math.PI / 180;
        for (let i = 0; i < samples; i++) {
          const x = (i * 2) / samples - 1;
          curve[i] = ((3 + 50) * x * 20 * deg) / (Math.PI + 50 * Math.abs(x));
        }
        distortion.curve = curve;
        distortion.oversample = '4x';
        
        // Connect the hellish chain
        fundamental.connect(distortion);
        subharmonic.connect(distortion);
        harmonic1.connect(distortion);
        harmonic2.connect(distortion);
        noise.connect(distortion);
        distortion.connect(filter);
        filter.connect(masterGain);
        masterGain.connect(audioContext.destination);
        
        // Demonic frequencies
        fundamental.frequency.setValueAtTime(66, now); // Hell frequency
        subharmonic.frequency.setValueAtTime(33, now);
        harmonic1.frequency.setValueAtTime(132, now);
        harmonic2.frequency.setValueAtTime(198, now);
        noise.frequency.setValueAtTime(13, now);
        
        // Frequency modulation for growling
        fundamental.frequency.exponentialRampToValueAtTime(100, now + 0.3);
        fundamental.frequency.exponentialRampToValueAtTime(50, now + 0.8);
        fundamental.frequency.exponentialRampToValueAtTime(80, now + 1.5);
        
        // Demonic waveforms
        fundamental.type = 'sawtooth';
        subharmonic.type = 'square';
        harmonic1.type = 'triangle';
        harmonic2.type = 'sawtooth';
        noise.type = 'sawtooth';
        
        // Dark filter
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(300, now);
        filter.frequency.exponentialRampToValueAtTime(150, now + 1.5);
        filter.Q.setValueAtTime(10, now);
        
        // Hell's volume envelope
        masterGain.gain.setValueAtTime(0, now);
        masterGain.gain.exponentialRampToValueAtTime(0.4, now + 0.1);
        masterGain.gain.exponentialRampToValueAtTime(0.7, now + 0.5);
        masterGain.gain.exponentialRampToValueAtTime(0.3, now + 1.0);
        masterGain.gain.exponentialRampToValueAtTime(0.01, now + 1.8);
        
        fundamental.start(now);
        subharmonic.start(now);
        harmonic1.start(now + 0.1);
        harmonic2.start(now + 0.2);
        noise.start(now);
        
        fundamental.stop(now + 1.8);
        subharmonic.stop(now + 1.8);
        harmonic1.stop(now + 1.8);
        harmonic2.stop(now + 1.8);
        noise.stop(now + 1.8);
      }
      
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 2000);
    } catch (error) {
      console.error('Horror audio failed:', error);
    }
  };

  const handleScreamerClick = (id: number) => {
    setSelectedScreamer(id);
    
    // Play different sound based on screamer type
    if (id === 1) {
      playHorrorSound('skull');
    } else if (id === 2) {
      playHorrorSound('ghost');
    } else if (id === 3) {
      playHorrorSound('demon');
    }
    
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