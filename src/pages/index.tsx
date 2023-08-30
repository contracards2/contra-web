import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { type } from 'os';
import React, { useEffect, useState } from 'react';

function Home() {
  const [fontLoaded, setFontLoaded] = useState(false);

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
    <>
      <div className="inner rpgui-container framed mb-2 text-left" style={{ position: 'relative' }}>
        <div className=" rpgui-container framed-golden flex w-full flex-col gap-4 rounded-xl p-12 lg:border lg:border-gray-400 lg:dark:border-gray-800">
          <div className="flex flex-col items-center justify-between xs:flex-row">
            <p className="mr-4" style={{ fontSize: '246%', lineHeight: '2rem' }}>
              Welcome
            </p>
            <div className="flex-shrink-0">
              <img src="./contralogo_emoji.gif" alt="Image" width={72} />
            </div>
          </div>

          <p>
            You arrived at very early stages. Please start here:{' '}
            <Link href={'/readme'} className="text-yellow">
              {'README'}
            </Link>
            .
          </p>
          <p className="mb-1 mt-1">TLDR</p>
          <p>
            In <span>Contra</span> degens will plug their assets from multiple collections into NFT Contra Cards to
            battle each other.
          </p>
          <p>The cards start empty and can be leveled up through matches.</p>
        </div>

        <div className="m-8 flex flex-wrap">
          <div className="w-full xs:p-2 md:w-1/3 lg:p-4">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="example_card_1.png"
              alt="Image 1"
              className="hidden h-auto w-full md:block"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <div className="w-full xs:p-2 md:w-1/3 lg:p-4">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="example_card_2.png"
              alt="Image 2"
              className="hidden h-auto w-full md:block"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <div className="w-full xs:p-2 md:w-1/3 lg:p-4">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img src="example_card_3.png" alt="Image 3" className="h-auto w-full" style={{ imageRendering: 'auto' }} />
          </div>
        </div>

        <div className=" rpgui-container framed-golden flex w-full flex-col gap-4 rounded-xl p-12 lg:border lg:border-gray-400 lg:dark:border-gray-800">
          <div className="text-left">
            <p>
              <span>Contra</span> analyzes the NFT collection data to generate dynamic stats into the playing cards; For
              the&nbsp;
              <span style={{ color: 'red' }}>HP</span> / <span style={{ color: 'blue' }}>Attack</span> /{' '}
              <span style={{ color: 'green' }}>Defense</span> Values.
            </p>
            <br />
            <div>
              <p className="text-yellow">Relevant Inputs:</p>
            </div>
          </div>
          <div className="text-left">
            <ul style={{ fontSize: '0.9rem' }}>
              <li>- Collection Floor Price.</li>
              <li>- Collection Volume.</li>
              <li>- Unique holders.</li>
              <li>- Number of items player holds from the same Collection.</li>

              <li>- Time holding the JPG.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
