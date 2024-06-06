import React, { FunctionComponent } from "react";
import { StaticImage } from "gatsby-plugin-image";

import Book from "../Book";
import ReferencesPage from "../ReferencesPage";
import TitlePage from "../TitlePage";
import Page from "../Page";
import LightboxButton from "../LightboxButton";

const SlidesArtful: FunctionComponent = () => {
  const imgHardPastelHeight = 290;

  return (
    <Book id="artful" title="Artful">

      <TitlePage title="Art," subtitle="it's media" titleClassName="bigger" lecture={1}>
        <p>
          You don't ask why art is made, do you?
        </p>
      </TitlePage>

      <Page title="Physical">
        <p>
          The physicality of art is the most fundamental way to express oneself. It's the first way to express and it's the most intimate.
        </p>
        <div className="example-bar-w-image">
          <div className="example-title">
            <h4>Snake necklace (2011)</h4>
          </div>
          <p>
            One of the very first wearable pieces I made - an 8 cm long snake like necklace I made from a soft metal I found.
          </p>
          <LightboxButton path="snake_necklace.jpg" alt="A snake necklace" />
        </div>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Vest (2024)</h4>
          </div>
          <p>
            A contemporary victorian vest. The concept design was inspired by the victorian era but with a modern twist and techniques.
          </p>
          <div className="col-4">
            <div>
              <h5>Concept design</h5>
              <LightboxButton path="vest/vest_concept.jpg" alt="Vest, concept design" />
            </div>
            <div>
              <h5>Draftings</h5>
              <LightboxButton path="vest/vest_drafting.jpg" alt="Vest, draftings" />
            </div>
            <div>
              <h5>Sewing</h5>
              <LightboxButton path="vest/vest_sewing.jpg" alt="Vest, sewing" />
            </div>
            <div>
              <h5>Final product</h5>
              <LightboxButton path="vest/vest_finalize.jpg" alt="Vest, final product" />
            </div>
          </div>
        </div>
      </Page>
      
      <Page title="Traditional">
        <p>
          When asked about the topic most people would think of good old paper or a canvas. It seems like a unseparrable part of art.
          Over the time I have used many physical techniques. But covering colored paper by layering impressions of hard pastels still stands up to me.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Hard pastel drawings (2016 – present)</h4>
          </div>
          <p>
            Over the years I've made many drawings using hard pastels...
          </p>
          <div className="text-center">
            <LightboxButton path="hard-pastel/title.jpg" alt="Hard pastel: Scene" buttonClassName="w-80" />
          </div>
          <div className="text-right">
            <a className="btn-source" href="#hard-pastel-2014-present">More drawings&nbsp;&nbsp;&nbsp;▷</a>
          </div>
        </div>
      </Page>

      <Page title="Hard pastel" subtitle="2014 – present" className="example-page">
        <div className="example-bar">
          <div className="images-flow">
            <StaticImage src="../../images/content/hard-pastel/mushroom-forest.jpg" layout="fixed" height={imgHardPastelHeight} alt="Hard pastel: Mushroom forest" />
            <StaticImage src="../../images/content/hard-pastel/choices.jpg" layout="fixed" height={imgHardPastelHeight} alt="Hard pastel: Choices" />
            <StaticImage src="../../images/content/hard-pastel/percy-tower.jpg" layout="fixed" height={imgHardPastelHeight} alt="Hard pastel: Percy's tower" />
            <StaticImage src="../../images/content/hard-pastel/game-garden.png" layout="fixed" height={imgHardPastelHeight} alt="Hard pastel: Game garden concept" />
            <StaticImage src="../../images/content/hard-pastel/masks.jpg" layout="fixed" height={imgHardPastelHeight} alt="Hard pastel: Masks of us" />
            <a href="https://www.deviantart.com/dee-gmiterko">
              <StaticImage src="../../images/content/hard-pastel/deviantart.png" layout="fixed" height={imgHardPastelHeight} alt="DevinatArt" />
            </a>
          </div>
        </div>
      </Page>

      <Page title="Digital & virtual">
        <p>
          Another step in the evolution of art started with the digital era. As it brings new possibilities for creation and most importantly delivery.
        </p>
        <div className="example-bar">
          <div className="example-title">
            <h4>Hard pastel drawings (2014 – present)</h4>
          </div>
          <div>
            <p>

            </p>
            <LightboxButton path="digital.jpg" alt="Digital drawing" buttonClassName="w-80" />
          </div>
        </div>
        <p>

        </p>
        <div className="example">
          <div className="example-title">
            <h4>Hexaflexagon (2017)</h4>
          </div>
          <p>
            A set of image generators constructing patterns that can be folded into a "hexaflexagon"
          </p>
          <div className="text-center">
            {/* <LightboxButton path="asset-drawing.png" alt="Asset drawing" buttonClassName="w-80" /> */}
          </div>
        </div>
      </Page>

      {/*
      <Page title="Audiovisual">
        <p>
          The digital era brought us not only new ways to create art but also new ways to experience it. The audiovisual art is a great example of that.
        </p>
        <div className="example">
          <div className="example-title">
            <h4>Game development (2018)</h4>
          </div>
          <div>
            <StaticImage src="./media/asset-drawing.png" layout="fullWidth" alt="Asset drawing" className="w-80" />
            <p>
              A set of image generators constructing.. 
            </p>
          </div>
        </div>
      </Page>
      */}

      {/*

      TODO prepare images and text

      <Page title="Visual space">
        <p>
          Now, imagine that you are not constructing a single piece of art but a whole space containing many possible images. All part of a single concept.
        </p>
        <p>
          Instead of growing the reach of audience, we grow the size and variety of the art itself.
        </p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>Flower space (2024)</h4>
          </div>
          <p>For example here I constructed and trained a neural network that can be used to sample many many images of imaginary plants.</p>
          <p>
            <StaticImage src="./media/flower-space.png" layout="fullWidth" alt="Flower space" />
          </p>
        </div>
      </Page>
      */}

      <ReferencesPage references={["deviantart", "instagram"]} />

    </Book>
  )
}

export default SlidesArtful;

/*

$ Story $
- Each new media added a new way to express oneself
  - physical - on of first ways to express
  - "paper" - ease of making
  - digital - ease of delivery
  - infinite-space - scale higher than possibly needed

#my role: creative doer

- [slides] artful
  - hard pastel
  - hexaflexagon
  - digital art
  - jewlery, sewing
  - more $-deviantart-$

"Yoy don't ask why"

"Physicality"
- physical
  - "snake necklace" (2010???
  - "conterporary-victorian vest (2024)"
    - image on right panel
    - steps: concept design, draftings, sewing, final product

- paper based - hard pastel blinking slides -> deviantart
  - first photo needs to expose it's on paper and show scale

- computationaly aided design
  - 3D model -> papercraft 
  - link to gen. design
  - Hexaflexagon - computationaly aided design 

- digital art / 
  - first photo overlayed on top of tablet - with stylus
  - asset drawing for game development?
 
- image-space: training custom AI image models (2024)
  describe what is a space of "all possible" images. how it can be manipulated
  - interpolation between 2 distinct flowers

$ Conclusion $
- media evolves, intenet stays

*/