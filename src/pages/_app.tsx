import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const [buttonText, setButtonText] = useState('Mint');
  const handleMouseOver = () => {
    setButtonText('IYKYK');
  };

  const handleMouseOut = () => {
    setButtonText('Mint');
  };

  const imagenWWWURL = 'https://www.contra.cards/thumbnail_website.png'; // Aquí debes proporcionar la URL de tu imagen
  const [fontLoaded, setFontLoaded] = useState(false);

  const router = useRouter();
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css?family=Press+Start+2P';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    fontLink.onload = () => {
      setFontLoaded(true);
    };
  }, []);

  return (
    <div className="rpgui-content rpgui-cursor-default md:text-md text-xs " style={{ overflowY: 'scroll' }}>
      <div id="container">
        <div id="main"></div>
        <DefaultSeo
          twitter={{
            site: 'https://www.contra.cards',
            cardType: 'summary',
          }}
          title="CONTRA: CLASH OF DEGENS"
          description="Unleash your JPEGs in a new realm of degeneracy and fun | PVP Cross-Collection Card Game"
          openGraph={{
            title: 'CONTRA: CLASH OF DEGENS',
            description: 'Unleash your JPEGs in a new realm of degeneracy and fun | PVP Cross-Collection Card Game',
            images: [
              {
                url: imagenWWWURL,
                alt: 'CONTRA: CLASH OF DEGENS',
                type: 'image/png',
              },
            ],
            type: 'website',
            url: 'https://www.contra.cards',
            siteName: 'Contra Cards',
          }}
        />
        {fontLoaded ? (
          <>
            <div className="inner-header rpgui-container framed rpgui-center mb-2" style={{ position: 'relative' }}>
              <header>
                <h1 className="pb-4 pt-4" style={{ fontSize: '246%' }}>
                  CONTRA: CLASH OF DEGENS
                </h1>
                <hr className="golden" />

                <Link href={isHomePage ? '/readme' : '/'}>
                  <button className="rpgui-button ml-1 mr-1 text-center" type="button" style={{ width: '12rem' }}>
                    <p>{isHomePage ? 'Readme' : 'Home'}</p>
                  </button>
                </Link>
                <a href="#">
                  <button
                    disabled
                    className="rpgui-button ml-1 mr-1 text-center"
                    type="button"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{ width: '12rem' }}
                  >
                    <p>{buttonText}</p>
                  </button>
                </a>

                <a href="https://testnet.contra.cards/" target="_blank">
                  <button className="rpgui-button ml-1 mr-1 text-center" style={{ width: '12rem' }} type="button">
                    <p>Builder</p>
                  </button>
                </a>
                <a href="https://testnet-battlefield.contra.cards/" target="_blank">
                  <button className="rpgui-button ml-1 mr-1 text-center" style={{ width: '12rem' }} type="button">
                    <p>Battle</p>
                  </button>
                </a>
              </header>
            </div>

            <Component {...pageProps} />

            <div className="inner rpgui-container framed container-media rpgui-center" style={{ position: 'relative' }}>
              <h1 style={{ fontSize: '145%' }}>Stay tuned</h1>
              <br></br>
              <a target="_blank" href="https://twitter.com/contracards" style={{ color: 'pink' }}>
                {'Twitter'}
              </a>{' '}
              <a target="_blank" href="https://discord.gg/GQXTjxXsmn" style={{ color: 'pink' }}>
                {'Discord '}
              </a>
              <br></br>
              <br></br>
              <a className="pt-2" href="#main" style={{ color: 'white' }}>
                - Back to Top -
              </a>
              <br></br>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default MyApp;
