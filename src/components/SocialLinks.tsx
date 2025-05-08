import React from 'react';
import { Instagram, Twitter, Youtube, Music } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/hozier/', 
      icon: <Instagram className="w-5 h-5" />
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/hozier', 
      icon: <Twitter className="w-5 h-5" />
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/channel/UCwAam3W_VLfb6mEKPW2nDFg', 
      icon: <Youtube className="w-5 h-5" />
    },
    { 
      name: 'Spotify', 
      url: 'https://open.spotify.com/artist/2FXC3k01G6Gw61bmprjgqS', 
      icon: <Music className="w-5 h-5" />
    }
  ];

  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cream dark:bg-deepPurple p-3 rounded-full text-charcoal dark:text-cream hover:bg-gold dark:hover:bg-purple transition-colors duration-300"
          aria-label={`Follow Hozier on ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;