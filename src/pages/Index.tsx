import React, { useState } from 'react';
import { Instagram, Music, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Background3D } from '@/components/Background3D';
import { MusicPlayer } from '@/components/MusicPlayer';
import { TrackCard } from '@/components/TrackCard';
import { ArtistBio } from '@/components/ArtistBio';
import { tracks } from '@/data/tracks';
import heroBg from '@/assets/hero-bg.jpg';

const Index = () => {
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

  const handleTrackSelect = (index: number) => {
    setSelectedTrackIndex(index);
    // Scroll to player
    const playerElement = document.getElementById('player');
    playerElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Background3D />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 gradient-text">
              PEDRIN
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              👺♨️ O Som Autêntico do Trap Brasileiro ♨️👺
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Escute e faça o download das minhas faixas mais recentes. 
              Cada batida, cada verso, direto das ruas para seus fones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('musicas')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                <Music className="h-5 w-5 mr-2" />
                Ouvir Agora
              </Button>
              
              <Button
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/60 text-lg px-8 py-6"
              >
                Sobre o Artista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Music Player Section */}
      <section id="player" className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MusicPlayer tracks={tracks} />
          </div>
        </div>
      </section>

      {/* Artist Bio Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Sobre o Artista</h2>
            <p className="text-xl text-muted-foreground">Conheça a história por trás do som</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ArtistBio />
          </div>
        </div>
      </section>

      {/* Tracks Grid Section */}
      <section id="musicas" className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Minhas Faixas</h2>
            <p className="text-xl text-muted-foreground">👺♨️ Discografia Completa ♨️👺</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tracks.map((track, index) => (
              <TrackCard
                key={track.id}
                title={track.title}
                cover={track.cover}
                audio={track.audio}
                downloadUrl={track.downloadUrl}
                isPlaying={selectedTrackIndex === index}
                onPlay={() => handleTrackSelect(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold gradient-text mb-4">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground mb-12">Siga nas redes sociais para mais novidades</p>
          
          <div className="flex gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <a 
                href="https://www.instagram.com/pedro_silveiraa/?hl=pt-br" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
            
            <Button
              asChild
              className="bg-gradient-secondary hover:shadow-glow-secondary transition-all duration-300"
            >
              <a 
                href="https://www.tiktok.com/@d1n.https?lang=pt-BR" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Music className="h-5 w-5 mr-2" />
                TikTok
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-secondary border-t border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 Pedrin. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
