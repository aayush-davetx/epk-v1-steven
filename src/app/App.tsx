import { Music, Mail, Instagram, Youtube, Star, Guitar, Heart, Flower2, Piano } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import artistPhoto from '../assets/stevengroup.jpg'
import portraitPhoto from '../assets/getaway-15.jpg'
import birthdayPhoto from '../assets/birthday-photo.jpg'
import fingerPhoto from '../assets/fingerpoint.jpg'
import testAudio from '../assets/audio/test.mp3'
import { useState, useEffect } from "react";

export default function App() {

  const images = [
  "https://images.unsplash.com/photo-1745929201281-26b5f874a0d1?...",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
  
        {/* Softer earthy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/40 to-stone-900/70 z-10"></div>

        <img 
          src={artistPhoto}
          alt="Steven Wang performing"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
          
          <div className="flex items-center gap-4 mb-4">
            <Guitar className="w-12 h-12 text-amber-200" />
            
            <h1 className="text-6xl md:text-8xl tracking-tight">
              Steven Wang
            </h1>
            
            <Piano className="w-12 h-12 text-green-200" />
          </div>

          <p className="text-xl md:text-2xl mb-6 tracking-wide text-stone-100">
            Singer-Songwriter • Performer • Multi-Instrumentalist
          </p>

          <div className="flex gap-3 flex-wrap justify-center">
            
            <Badge className="bg-stone-200 text-stone-800 px-4 py-2 hover:bg-stone-300">
              Acoustic
            </Badge>

            <Badge className="bg-green-200 text-green-900 px-4 py-2 hover:bg-green-300">
              Acapella
            </Badge>

            <Badge className="bg-blue-200 text-blue-900 px-4 py-2 hover:bg-blue-300">
              Folk
            </Badge>

            <Badge className="bg-amber-200 text-amber-900 px-4 py-2 hover:bg-amber-300">
              Indie
            </Badge>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          <div className="order-2 md:order-1">
            <h2 className="text-4xl mb-6 text-stone-800">About</h2>

            <p className="text-lg text-stone-600 mb-4 leading-relaxed">
              12 years in Beijing, 8 years in Seattle—this 20 year old singer-songwriter grew up 
              submerged in Chinese ballads and later found himself entranced by soul-catching jazz 
              fusions, tear-jerking pop ballads, lyrical wonders, and ear-impregnating theatrical pop.
            </p>

            <p className="text-lg text-stone-600 mb-4 leading-relaxed">
              A proud Husky at the University of Washington, Steven's journey includes both acoustic 
              guitar storytelling and acapella vocal performances. His music explores the intimate 
              corners of lost love, regret, and the bittersweet beauty of what could have been.
            </p>

            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Armed with just his guitar and devastatingly honest lyrics, Steven's songs resonate with 
              anyone who's ever wondered "what if?" His debut release showcases the juices of his 
              influences and creative exploration, and there is much more to come—he is scheming big... 😈
            </p>

            <div className="flex flex-wrap gap-4">
              
              <div className="bg-gradient-to-r from-stone-100 to-stone-200 rounded-2xl p-6 flex-1 min-w-[140px]">
                <div className="text-3xl text-stone-700 mb-1">100K+</div>
                <div className="text-sm text-stone-800">Total Streams</div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-2xl p-6 flex-1 min-w-[140px]">
                <div className="text-3xl text-green-700 mb-1">UW</div>
                <div className="text-sm text-green-900">Proud Husky 🐺</div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-6 flex-1 min-w-[140px]">
                <div className="text-3xl text-blue-700 mb-1">2023</div>
                <div className="text-sm text-blue-900">Debut Release</div>
              </div>

            </div>
          </div>

          <div className="order-1 md:order-2">
            <img 
              src={portraitPhoto}
              alt="Steven Wang portrait"
              className="w-full h-[400px] object-cover object-[50%_30%] rounded-3xl shadow-2xl"
            />
          </div>

        </div>

        {/* Carousel Section*/} 
        <div className="mb-16">
          <div className="relative flex items-center justify-center h-[400px] overflow-hidden">

            {images.map((img, index) => {
              const position = (index - currentIndex + images.length) % images.length;

              let className = "absolute transition-all duration-700 ease-in-out";

              if (position === 0) {
                // center
                className += " z-30 scale-100 opacity-100";
              } else if (position === 1) {
                // right
                className += " z-20 translate-x-[260px] scale-80 opacity-80";
              } else if (position === 2) {
                // far right
                className += " z-10 translate-x-[520px] scale-60 opacity-50";
              } else if (position === images.length - 1) {
                // left
                className += " z-20 -translate-x-[260px] scale-80 opacity-80";
              } else if (position === images.length - 2) {
                // far left
                className += " z-10 -translate-x-[520px] scale-60 opacity-50";
              } else {
                // hidden
                className += " opacity-0 scale-50";
              }

              return (
                <img
                  key={index}
                  src={img}
                  className={`${className} w-[380px] h-[250px] object-cover rounded-2xl shadow-xl`}
                />
              );
            })}

          </div>
        </div>

        {/* UW Connection & Flowers Section */}
        {/* <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1745929201281-26b5f874a0d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBmbG93ZXJzJTIwYm91cXVldCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyNTE0NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Purple flowers"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-transparent flex items-center p-12">
              <div className="text-white max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Flower2 className="w-10 h-10" />
                  <h3 className="text-3xl">Purple & Gold</h3>
                </div>
                <p className="text-xl mb-2">
                  From the halls of the University of Washington to intimate venues across the country, 
                  Steven brings his Husky pride and acapella roots to every performance.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Featured Songs Section */}
        <div className="mb-16">
          <h2 className="text-4xl mb-8 text-purple-900 text-center">Featured Songs</h2>
          <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg border-4 border-purple-200 relative hover:border-purple-300 transition-colors overflow-hidden">
            <Heart className="absolute top-4 right-4 w-8 h-8 text-purple-900 fill-purple-900 z-10" />

            {/* Cover Art */}
            <img
              src={fingerPhoto} // import this like your other images
              alt="Blueberry Bagels cover art"
              className="w-full h-48 object-cover"
            />

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-200 p-3 rounded-full">
                  <Guitar className="w-6 h-6 text-purple-600" />
                </div>

                <div>
                  <h3 className="text-xl text-slate-800">Blueberry Bagels</h3>
                  <p className="text-sm text-gray-500">2025</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm italic mb-6">
                "A haunting reflection on love lost, with a melody that lingers like blueberries on the tongue."
              </p>

              <audio controls className="w-full mt-4">
                <source src={testAudio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              {/* Platform Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://open.spotify.com/track/1kBpkI7t7pcZDuHOBYFE0D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition"
                >
                  Spotify
                </a>

                <a
                  href="https://music.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition"
                >
                  Apple Music
                </a>

                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border-4 border-purple-200 relative hover:border-purple-300 transition-colors overflow-hidden">
            <Heart className="absolute top-4 right-4 w-8 h-8 text-purple-900 fill-purple-900 z-10" />

            {/* Cover Art */}
            <img
              src={fingerPhoto} // import this like your other images
              alt="Blueberry Bagels cover art"
              className="w-full h-48 object-cover"
            />

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-200 p-3 rounded-full">
                  <Guitar className="w-6 h-6 text-purple-600" />
                </div>

                <div>
                  <h3 className="text-xl text-slate-800">Blueberry Bagels</h3>
                  <p className="text-sm text-gray-500">2025</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm italic mb-6">
                "A haunting reflection on love lost, with a melody that lingers like blueberries on the tongue."
              </p>

              <audio controls className="w-full mt-4">
                <source src={testAudio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              {/* Platform Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://open.spotify.com/track/1kBpkI7t7pcZDuHOBYFE0D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition"
                >
                  Spotify
                </a>

                <a
                  href="https://music.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition"
                >
                  Apple Music
                </a>

                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border-4 border-purple-200 relative hover:border-purple-300 transition-colors overflow-hidden">
            <Heart className="absolute top-4 right-4 w-8 h-8 text-purple-900 fill-purple-900 z-10" />

            {/* Cover Art */}
            <img
              src={fingerPhoto} // import this like your other images
              alt="Blueberry Bagels cover art"
              className="w-full h-48 object-cover"
            />

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-200 p-3 rounded-full">
                  <Guitar className="w-6 h-6 text-purple-600" />
                </div>

                <div>
                  <h3 className="text-xl text-slate-800">Blueberry Bagels</h3>
                  <p className="text-sm text-gray-500">2025</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm italic mb-6">
                "A haunting reflection on love lost, with a melody that lingers like blueberries on the tongue."
              </p>

              <audio controls className="w-full mt-4">
                <source src={testAudio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              {/* Platform Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://open.spotify.com/track/1kBpkI7t7pcZDuHOBYFE0D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition"
                >
                  Spotify
                </a>

                <a
                  href="https://music.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition"
                >
                  Apple Music
                </a>

                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
            {/* <div className="bg-white rounded-2xl p-8 shadow-lg border-4 border-blue-200 relative hover:border-blue-300 transition-colors">
              <Heart className="absolute -top-4 -right-4 w-8 h-8 text-blue-500 fill-blue-500" />
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Guitar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl text-slate-800">Say You Want Me Too</h3>
                  <p className="text-sm text-gray-500">2025</p>
                </div>
              </div> 
              <p className="text-gray-600 text-sm italic">
                "A cauldron of emotion that simmers with passion and regret."
              </p>
              <iframe
                src="https://open.spotify.com/embed/track/0brEZHYCJJSql0jqXbFTPi?si=d0ff310735ca47dc"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg mt-2"
              ></iframe>
            </div> */}
          </div>
        </div>

        {/* Press Quotes Section */}
        <div className="mb-16">
          <h2 className="text-4xl mb-8 text-purple-900 text-center">Press & Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-400">
              <Star className="w-8 h-8 text-purple-500 fill-purple-500 mb-4" />
              <p className="text-gray-700 mb-4 italic">
                "Steven's vulnerability and emotional storytelling enchanted our wedding day beyond our wildest dreams."
              </p>
              <div className="text-purple-600">— Surayut & Quyyen's Wedding</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-rose-400">
              <Star className="w-8 h-8 text-rose-500 fill-rose-500 mb-4" />
              <p className="text-gray-700 mb-4 italic">
                "Steven's captivating vocals, tasteful song selection, and infectious passion made his birthday performance unforgettable."
              </p>
              <div className="text-rose-600">— CJ Tuloza's Birthday</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-violet-400">
              <Star className="w-8 h-8 text-violet-500 fill-violet-500 mb-4" />
              <p className="text-gray-700 mb-4 italic">
                "It's a no-brainer to book Steven for our residents because of his professionalism and uncanny ability to thrill audiences."
              </p>
              <div className="text-violet-600">— Theory U District</div>
            </div>
          </div>
        </div>

        {/* Recent Performance Section */}
        <div className="mb-16">
          <h2 className="text-4xl mb-8 text-slate-800">Recent Performances</h2>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={birthdayPhoto}
              alt="Live performance"
              className="w-full h-[400px] object-cover object-[50%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-white text-3xl mb-2">CJ's Birthday</h3>
                <p className="text-white/90 text-lg">Seattle, WA • October 26, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Intimate Studio Photo */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={fingerPhoto}
              alt="Pointing at the crowd"
              className="w-full h-[300px] object-cover object-[50%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center p-12">
              <div className="text-white max-w-2xl">
                <p className="text-2xl italic mb-4">
                  "Every song I write is a letter to someone I once knew, or a life I almost lived."
                </p>
                <p className="text-lg opacity-90">— Steven Wang</p>
              </div>
            </div>
          </div>
        </div>

{/*
        **Upcoming Shows - COMMENTED OUT FOR NOW**
        <div className="mb-16">
          <h2 className="text-4xl mb-8 text-slate-800">Upcoming Shows</h2>
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="space-y-4">
              {[
                { date: 'Mar 15, 2026', venue: 'Cafe du Nord', city: 'San Francisco, CA' },
                { date: 'Mar 28, 2026', venue: 'The Basement East', city: 'Nashville, TN' },
                { date: 'Apr 10, 2026', venue: 'Union Hall', city: 'Brooklyn, NY' },
                { date: 'Apr 24, 2026', venue: 'The Hideout', city: 'Chicago, IL' },
              ].map((show, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-amber-50 to-rose-50 hover:from-amber-100 hover:to-rose-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-700 text-white rounded-xl p-3">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-lg text-gray-900">{show.venue}</div>
                      <div className="text-sm text-gray-600">{show.city}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-700">{show.date}</div>
                    <Button className="mt-2 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white border-0">
                      Tickets
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>  */}

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-rose-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl mb-4">Book Steven For Your Special Day!</h2>
          <p className="text-xl mb-8 opacity-90">For booking inquiries, contact us over Email or Instagram DM.</p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
  
            <div className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2 rounded-md text-sm font-medium shadow-sm border border-gray-200 select-text">
              <Mail className="w-5 h-5" />
              <span className="select-text">stevenwang8801@gmail.com</span>
            </div>

          </div>
          {/* <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:stevenwang8801@gmail.com?subject=Booking Inquiry"
              className="flex items-center gap-2 bg-white text-slate-700 hover:bg-gray-100 px-4 py-2 rounded-md shadow select-text cursor-text"
            >
              <Mail className="w-5 h-5" />
              <span className="select-text">stevenwang8801@gmail.com</span>
            </a>
          </div> */}

          {/* <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Button className="bg-white text-slate-700 hover:bg-gray-100 gap-2">
              <Mail className="w-5 h-5" />
              stevenwang8801@gmail.com
            </Button>
            {/* <Button className="bg-white text-slate-700 hover:bg-gray-100 gap-2">
              <Download className="w-5 h-5" />
              Download EPK
            </Button> 
          </div> */}

          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/steventhewang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://music.apple.com/us/artist/steven-wang/1688599935" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors" title="Apple Music">
              <Music className="w-6 h-6" />
            </a>
            <a href="https://open.spotify.com/artist/4VpGvBPm9jLB3YvJ4g7oUp?si=7AhqA74YSqiBz8iltzD2RQ" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}