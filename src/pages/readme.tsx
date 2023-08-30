import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { type } from 'os';
import React, { useEffect, useState } from 'react';

function Readme() {
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
      <div className="inner rpgui-container framed readme mb-2" style={{ position: 'relative' }}>
        <img src="./contralogo_emoji.gif" alt="Image" width={128} className="float-left mr-4 hidden sm:block" />
        <img src="./contralogo_emoji.gif" alt="Image" width={72} className="float-left block sm:hidden" />
        <br></br>

        <div className="text-right">
          <div style={{ fontSize: '300%' }}>CONTRA</div>
          <br></br>
          <br></br>
          <div className="text-green text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">CLASH OF DEGENS</div>

          <div style={{ fontSize: '220%' }} className="text-green"></div>
        </div>
        <div>
          <div className="yellow-text pb-6 pt-12 text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <span className="text-yellow">WHY ARE WE DOING THIS?</span>
          </div>
          <p className="pb-6">
            Despite the groundbreaking role NFTs play in reshaping digital ownership. It&apos;s widely recognized that
            most assets are confined within echo chambers and lack substantial utility.
            <br /> <br />
            <span className="text-green"> Let&apos;s unlock a new realm of degeneracy for our JPEGs.</span>
          </p>
        </div>
        <hr className="golden"></hr>
        <div className="text-right">
          <div className="yellow-text pb-10 pt-12 text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <span className="text-yellow">WHAT ARE WE DOING?</span>
          </div>
        </div>
        <div className="text-green text-green pb-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          CONTRA: CLASH OF DEGENS
        </div>
        <p>
          In Contra degens will plug their assets from multiple collections into NFT Contra Cards to battle each other.{' '}
          <br />
          <br />
          Cards come empty and can be leveled up through matches.
          <br />
          <br />
          The tactical fusion of ownership and competition drives excitement while opening appealing investment
          opportunities.
        </p>
        <br />
        <div className="ml-16 mr-16 flex flex-wrap">
          <div className="w-full xs:p-2 md:w-1/3 lg:p-4">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="example_card_1.png"
              alt="Image 1"
              className="h-auto w-full md:block"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <div className="w-full xs:p-2 md:w-1/3 lg:p-4">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="example_card_2.png"
              alt="Image 2"
              className=" h-auto w-full md:block"
              style={{ imageRendering: 'auto' }}
            />
          </div>

          <div className="w-full xs:p-2 md:w-1/3 lg:p-4">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img src="example_card_3.png" alt="Image 3" className="h-auto w-full" style={{ imageRendering: 'auto' }} />
          </div>
        </div>
        <br />
        <p>
          The integration of NFTs as inputs for playable cards enriches the gameplay with profound personalization,
          while also linking us to existing web3 communities for widespread adoption.
        </p>
        <p className="pb-4 pt-4">
          On the other hand, Contra uses decentralized finance technology to raise funds and establish a sustainable
          ecosystem.
          <div className="flex flex-wrap justify-center pb-2 pt-2 md:pl-12 md:pr-12">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="roadmap.png"
              alt="Image 2"
              className="w-mid mx-auto h-auto md:block"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <br />
          The majority of the income will be allocated to reward holders, players, and community initiatives, ensuring a
          fair and prosperous environment.
        </p>
        <br />

        <hr className="golden"></hr>
        <div className="text-right">
          <div className="yellow-text  pb-10 pt-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <span className="text-yellow">HOW WE DOING IT?</span>
          </div>
        </div>
        <div className="text-green  pb-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          FEW TECHNICAL POINTS
        </div>
        <p>
          Contra cards are deployed into the Ethereum network as ERC-721 tokens. The process of plugging and swapping
          each NFT&apos;s representation into the card occurs off-chain.
        </p>
        <p>
          Primarily for two reasons: safety, as the NFT never leaves the player&apos;s custody, and to circumvent any
          gas fees.
        </p>
        <br></br>
        <a className="text-white" href="https://github.com/offshoredao/poc-crossitem-dnft" target={'_blank'}>
          Previous POC by the team
        </a>
        <div className="pb-8 pt-8 text-center">CARD BUILDER v0.2</div>
        <div className="flex flex-wrap pb-2 pt-2 md:pl-12 md:pr-12">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="builder.png" alt="Image 2" className=" h-auto w-full md:block" style={{ imageRendering: 'auto' }} />
        </div>
        <div className="pb-8 pt-8 text-center">CARD BUILDER v0.3</div>
        <div className="flex flex-wrap pb-2 pt-2 md:pl-12 md:pr-12">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src="build-v3.png"
            alt="Image 2"
            className=" h-auto w-full md:block"
            style={{ imageRendering: 'auto' }}
          />
        </div>
        <div className="pb-8 pt-8 text-center">TESTNET COLLECTION GOERLI ON OPENSEA:</div>
        <div className="flex flex-wrap pb-2 pt-2 text-center md:pl-12 md:pr-12">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="os.png" alt="Image 2" className=" h-auto w-full md:block" style={{ imageRendering: 'auto' }} />
          <a
            className="pt-2 text-white"
            href="https://testnets.opensea.io/collection/test-contra-6?search[sortAscending]=false&search[sortBy]=FAVORITE_COUNT"
            target={'_blank'}
          >
            Link to testnet Opensea
          </a>
        </div>
        <div style={{ fontSize: '220%' }} className="yellow-text pb-4 pt-5">
          <br />
          <span className="text-green">GAMEPLAY</span>
        </div>

        <p>
          In the <strong>early stages</strong>, it&apos;s a <strong>head-to-head clash</strong>: Degen 1 with 1 Card v/s
          Degen 2 with 1 Card.
          <div className="pt-2 text-left">
            <span>Contra</span> analyzes the NFT collection data to generate dynamic stats into the playing cards; For
            the&nbsp;
            <span style={{ color: 'red' }}>HP</span> / <span style={{ color: 'blue' }}>Attack</span> /{' '}
            <span style={{ color: 'green' }}>Defense</span> Values.
            <br />
            <div>
              <br />
              <p className="text-yellow">Relevant Inputs:</p>
            </div>
          </div>
          <div className="text-left">
            <ul style={{ fontSize: '0.9rem' }}>
              <li>- Collection Floor Price</li>
              <li>- Collection Volume</li>
              <li>- Unique holders</li>
              <li>- Number of items player holds from the same Collection</li>
              <li>- Time holding the JPG.</li>
            </ul>
          </div>
        </p>
        <br />
        <p>
          Turns are taken for actions, with two dices in the middle to determine the effectiveness of most moves, adding
          a thrilling gambling zest.
        </p>
        <p>
          <br />
          <hr className="golden"></hr>
          <br />
          You will surely find references from <strong>Magic the Gathering</strong>/ <strong>Pokemon Cards</strong>/{' '}
          <strong>Hearthstone</strong>/ <strong>Texas Holdem</strong> among other <strong>beloved classics</strong>.
        </p>
        <p>
          <br />
          To crank things up, we&apos;re diving into upcoming versions to cook up even juicier clashes– think 3 cards
          per player and beyond...
        </p>
        <br />
        <p>
          To explore a diverse range of balance techniques, we are collaborating with the pro gamers, while conducting a
          high volume of AI simulations.
        </p>
        <br />
        <p>
          <strong>Deeper gameplay discussions</strong> will take place on our{' '}
          <a
            href="https://discord.gg/6pAtFpHuPX"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 'smaller' }}
          >
            Discord
          </a>
          . <strong>Jump in!</strong>
        </p>

        <div className="pb-8 pt-8 text-center">First Battlefield Draft</div>
        <div className="flex flex-wrap pb-2 pt-2 text-center md:pl-12 md:pr-12">
          <div className="w-full ">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="bf-alpha.png"
              alt="Image 2"
              className=" h-auto w-full md:block"
              style={{ imageRendering: 'auto' }}
            />
          </div>
        </div>
        <div className="pb-8 pt-8 text-center">Battlefield v.0.1.3</div>
        <div className="flex flex-wrap pb-2 pt-2 text-center md:pl-12 md:pr-12">
          <div className="w-full ">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img src="bf.png" alt="Image 2" className=" h-auto w-full md:block" style={{ imageRendering: 'auto' }} />
          </div>
        </div>
        <div className="yellow-text  pb-10 pt-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          <span className="text-green">COMMUNITY BUILDING</span>
        </div>
        <p>
          We will integrate relevant collections in a deliberate order, considering each case individually. <br />
          <br />
          Looking to collaborate with founders and teams to streamline the onboarding process and capture the attention
          of their community members effectively.
        </p>
        <div className="flex flex-wrap pb-4 pt-4 text-center md:pl-12 md:pr-12">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src="cross-pollination.png"
            alt="Image 2"
            className="h-auto w-full md:block"
            style={{ imageRendering: 'auto' }}
          />
        </div>
        <p className="pb-6 pt-6">
          This process also fuels our socials with continuous content and turns every new collection into an engagement
          and attention opportunity into our network.
        </p>
        <a href="https://twitter.com/contracards/status/1675221308487892995" target={'_blank'}>
          Sample content 1
        </a>
        <br></br>
        <a href="https://twitter.com/contracards/status/1675894964214022144" target={'_blank'}>
          Sample content 2
        </a>
        <div className="yellow-text pb-10 pt-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          <span className="text-green">GO TO MARKET</span>
        </div>
        <p>
          Our initial go-to-market involves the release of three limited edition card sets, with the initial IYKYK
          edition featuring the scarcest and most powerful cards for the long run.
          <br /> <br />
          This approach drives exclusivity and speculation, generating interest and creating early demand.
          <br />
          <br /> Further up the road, a more affordable Open Edition will be introduced, designed to broaden
          participation and cultivate inclusivity among fellow degens.
        </p>
        <div className="text-green pt-4 text-base">IYKYK Edition</div>
        <ul>
          <li>Supply: 420 Cards.</li>
          <li>Price: 0.12 ETH.</li>
          <li>Max: 5 per Wallet.</li>
          <li>Distribution: Beta-Testers, selected Collections &amp; Brand Champions will get up to -42.0% OFF.</li>
        </ul>
        <div className="text-green pt-4 text-base">Alpha Edition</div>
        <ul>
          <li>Supply: 2690 Cards.</li>
          <li>Price: 0.069 ETH.</li>
          <li>Max: 7 per Wallet.</li>
          <li>Distribution: IYKYK gets x1 free Mints.</li>
        </ul>
        <div className="text-green pt-4 text-base">Limited Edition: Silver Lineage</div>
        <ul>
          <li>Supply: 10000 Cards.</li>
          <li>Price: 0.042 ETH.</li>
          <li>Max: 10 per Wallet.</li>
          <li>Distribution: Alpha edition gets x1 free Min.t</li>
        </ul>
        <div className="text-green pt-4 text-base">Open Edition</div>
        <ul>
          <li>Supply: Unlimited.</li>
          <li>Price: 0.0069 ETH.</li>
          <li>Max: Unlimited.</li>
          <li>Distribution: 48hrs Timeframe | Silver Linage gets x1 free Mint.</li>
        </ul>
        <div className="yellow-text pb-10 pt-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          <span className="text-green">FUNDS DISTRIBUTION</span>
        </div>
        <p>
          The mint fund allows Contra a solid runway, providing the necessary resources to expand the team and achieve
          long-term success without the constant concern of market conditions.
        </p>
        <p className="pb-4 pt-4">
          <span className={'text-green'}>40%</span> of the mint funds will go towards the community treasury, rewarding
          players and holders through leaderboards, incentive programs, tournaments, and community-driven initiatives.
        </p>
        <hr className="golden "></hr>
        <p className="pb-4 pt-4">
          We offer more than just rewards and incentives; we will create opportunities and foster an ecosystem that
          thrives on passion and innovation.
        </p>
        <hr className="golden"></hr>
        <p className="pb-4 pt-4">
          <span className={'text-green'}>30%</span> will be allocated to the software development and design teams along
          with operational expenses, ensuring we have the necessary resources for continuous improvement.
        </p>
        <p className="pb-4 pt-4">
          <span className={'text-green'}>20%</span> will be dedicated to marketing initiatives to reach a wider audience
          and expand our presence.
        </p>
        <p className="pb-4 pt-4">
          <span className={'text-green'}>10%</span> will be earmarked for the founders and advisors.
        </p>
        <div className="flex flex-wrap pb-4 pt-4 text-center md:pl-12 md:pr-12">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="dist.png" alt="Image 2" className=" h-auto w-full md:block" style={{ imageRendering: 'auto' }} />
        </div>
        <div style={{ fontSize: '220%' }} className="yellow-text pb-10 pt-12">
          <hr className="golden"></hr>
          <br />
          <span className="text-green">SUMMARY</span>
        </div>
        <p>
          <span className="text-yellow">CONTRA: CLASH OF DEGENS</span> breaks new ground by integrating Cross-Collection
          NFTs into playable cards.
          <br />
          <br />
          Our strategic approach unifies diverse web3 communities, assuring engagement across previously isolated
          groups. <br />
          <br />
          The tactical go-to-market strategy, coupled with progressive edition releases, fosters early adoption, while
          fund allocation ensures substantial community rewards, sustainable growth, continued development, and expanded
          marketing and growth efforts.
          <br />
          <br />
          <span className="text-yellow">Ready to roll? </span> Links Bellow.
        </p>
      </div>
    </>
  );
}

export default Readme;
