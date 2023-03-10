import { useEffect, useState } from 'react';
import Contact from './component/contact/contact';
import DotGroup from './component/dotgroup/dotgroup';
import Footer from './component/footer/footer';
import Landing from './component/landing/landing';
import LineGradient from './component/linegradient/linegradient';
import MySkills from './component/myskills/myskills';
import Navbar from './component/navbar/navbar';
import Projects from './component/projects/projects';
import Testimonials from './component/testimonials/testimonials';
import useMediaQuery from './hooks/useMediaQuery';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app bg-deep-blue'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className='w-5/6  mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className='w-5/6  mx-auto md:h-full'>
        <MySkills />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
        <Projects />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <Testimonials />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
