import './App.scss'

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { createContext, useEffect, useRef, useState } from 'react'

import { Home } from './Pages/Home/Home'
import { Navbar } from './Components/Navbar/Navbar'
import { Projects } from './Pages/Projects/Projects'
import { About } from './Pages/About/About'
import { Contact } from './Pages/Contact/Contact'
import { WelcomePage } from './Components/WelcomePage/WelcomePage'
import { Footer } from './Components/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { TbVolume, TbVolumeOff } from 'react-icons/tb'

export const AppContext = createContext();

function App() {
  const navigate = useNavigate()
  const transitionPageRef = useRef();
  const location = useLocation();
  const [welcome, setWelcome] = useState(true);
  const innerMouseRef = useRef();
  const outerMouseRef = useRef();
  const [audioPlay, setAudioPlay] = useState(false);

  const toggleAudio = () => {
    const audio = document.querySelector('audio');
    if (audio.paused) {
      audio.play();
      setAudioPlay(true);
    } else {
      audio.pause();
      setAudioPlay(false);
    }
  };

  const handleMouseEnter = () => {
    innerMouseRef.current.style.opacity = 0;
    outerMouseRef.current.style.opacity = 0;
  };

  const handleMouseLeave = () => {
    innerMouseRef.current.style.opacity = 1;
    outerMouseRef.current.style.opacity = 1;
  };

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let newX = e.clientX;
      let newY = e.clientY;

      innerMouseRef.current.style.top = newY + 'px';
      innerMouseRef.current.style.left = newX + 'px';

      outerMouseRef.current.animate({
        top: newY + 'px',
        left: newX + 'px'
      }, { duration: 500, fill: 'forwards' });
    })

    window.addEventListener('touchstart', () => {
      innerMouseRef.current.style.display = 'none';
      outerMouseRef.current.style.display = 'none';
    })

    const progressBar = document.getElementById('progressBar');
    window.addEventListener('scroll', () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progressBar.style.height = `${scrollPercentage}%`;
    });

    window.addEventListener('blur', function () {
      document.title = "Come back ;("
    })

    window.addEventListener('focus', function () {
      document.title = "Sourav Goyal"
    })
  }, [])

  setTimeout(() => {
    setWelcome(false);
  }, 2500);

  function pageAnimation(pageName, page) {
    transitionPageRef.current.innerHTML = pageName
    transitionPageRef.current.classList.add('ActivePageTransition')
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 800)
    setTimeout(() => {
      transitionPageRef.current.classList.remove('ActivePageTransition')
      navigate(`/${page}`)
    }, 1500)
  }

  // const volumeFromTop = (navHeight) => {
  //   const volumeIcon = document.querySelectorAll('.volumeIcon');
  //   volumeIcon.forEach(icon => {
  //     icon.style.top = navHeight + 5 + 'px';
  //   })
  // }

  return (
    <div className='App'>
      <AppContext.Provider value={{ innerMouseRef, outerMouseRef, transitionPageRef }} >
        <div ref={transitionPageRef} className="transitionPage">Home</div>
        <div ref={innerMouseRef} className="innerMouse"></div>
        <div ref={outerMouseRef} className="outerMouse"></div>
        <div className="upperSpace"></div>
        <div id="scrollPath"></div>
        <div className='progressBar' id="progressBar"></div>
        {audioPlay ? (
          <TbVolume className='volumeIcon' onClick={toggleAudio} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ cursor: 'pointer' }} />
        ) : (
          <TbVolumeOff className='volumeIcon' onClick={toggleAudio} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ cursor: 'pointer' }} />
        )}
        <audio loop src="assets/audio/music2.mp3"></audio>
        {welcome ?
          <WelcomePage /> :
          <>
            <Navbar pageAnimation={pageAnimation} />
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home pageAnimation={pageAnimation} />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<h1>Page Not Found</h1>} />
            </Routes>
            <Footer pageAnimation={pageAnimation} />
          </>
        }
      </AppContext.Provider>
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </div>
  )
}

export default App