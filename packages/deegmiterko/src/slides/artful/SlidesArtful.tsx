import React, { FunctionComponent } from "react";
import { StaticImage } from "gatsby-plugin-image";

import Book from "../../components/Book/Book";
import ReferencesPage from "../../components/ReferencesPage/ReferencesPage";
import TitlePage from "../../components/TitlePage/TitlePage";
import Page from "../../components/Page/Page";

const SlidesArtful: FunctionComponent = () => {
  const imgHardPastelHeight = 290;

  return (
    <Book id="artful" title="Artful">

      <TitlePage title="Art," subtitle="it's media" titleClassName="bigger" lecture={1} />

      <Page title="Art and it's media">
        <p>
          You don't ask why art is created, do you? It's a part of human nature to express oneself.
        </p>
      </Page>

      <Page title="Physical">
        <p>An artificial intelligence is quite successfully used to solve specific problems like:</p>
        <ul>
          <li>generating a collection of similar objects (e.g anime characters) given a set of examples</li>
          <li>generating images from a text description</li>
          <li>image restoration, upscaling</li>
        </ul>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4 id="vest-2024">Vest (2024)</h4>
          </div>
          <p>
            A contemporary victorian vest. The concept design was inspired by the victorian era but with a modern twist and techniques.
          </p>
          <div className="col-4">
            <div>
              <h5>Concept design</h5>
              <StaticImage src="./media/vest/vest_concept.jpg" layout="fullWidth" alt="Vest, concept design" />
            </div>
            <div>
              <h5>Draftings</h5>
              <StaticImage src="./media/vest/vest_drafting.jpg" layout="fullWidth" alt="Vest, draftings" />
            </div>
            <div>
              <h5>Sewing</h5>
              <StaticImage src="./media/vest/vest_sewing.jpg" layout="fullWidth" alt="Vest, sewing" />
            </div>
            <div>
              <h5>Final product</h5>
              <StaticImage src="./media/vest/vest_finalize.jpg" layout="fullWidth" alt="Vest, final product" />
            </div>
          </div>
        </div>
      </Page>
      
      <Page title="Traditional">
        <p>
          When asked about the topic most people would think of good old paper or a canvas. It seems like a unseparrable part of art.
          Over the time I have used many physical techniques. But covering colored paper by layering impressions of hard pastels still stands up to me.
        </p>
        <div className="example">
          <div className="example-title">
            <h4 id="artful-hard-pastel-drawings-2016">Hard pastel drawings (2016 – present)</h4>
          </div>
          <p>

          </p>
          <div className="text-center">
            <StaticImage src="./media/hard-pastel/title.jpg" layout="fullWidth" alt="Hard pastel: Scene" className="w-80" />
          </div>
        </div>
      </Page>

      <Page title="Hard pastel" subtitle="2016 – present" className="example-page">
        <div className="example-bar">
          <div className="images-flow">
            <StaticImage src="./media/hard-pastel/mushroom-forest.jpg" layout="fixed" height={imgHardPastelHeight} alt="Hard pastel: Mushroom forest" />
            <StaticImage src="./media/hard-pastel/choices.jpg" layout="fixed" height={imgHardPastelHeight} alt="Hard pastel: Choices" />
            <StaticImage src="./media/hard-pastel/percy-tower.jpg" layout="fixed" height={imgHardPastelHeight} alt="Hard pastel: Percy's tower" />
            <StaticImage src="./media/hard-pastel/game-garden.png" layout="fixed" height={imgHardPastelHeight} alt="Hard pastel: Game garden concept" />
            <StaticImage src="./media/hard-pastel/masks.jpg" layout="fixed" height={imgHardPastelHeight} alt="Hard pastel: Masks of us" />
            <a href="https://www.deviantart.com/dee-gmiterko">
              <StaticImage src="./media/hard-pastel/deviantart.png" layout="fixed" height={imgHardPastelHeight} alt="DevinatArt" />
            </a>
          </div>
        </div>
      </Page>

      <Page title="Digital">
        <p>
          Another step 
        </p>
        <div className="example">
          <div className="example-title">
            <h4 id="artful-hard-pastel-drawings-2016">Hard pastel drawings (2016 – 2023)</h4>
          </div>
          <p>

          </p>
          <div className="text-center">
            <StaticImage src="./media/digital.jpg" layout="fullWidth" alt="Digital drawing" className="w-80" />
          </div>
        </div>
      </Page>

      <Page title="Artificial intelligence">
        <p>A very current technique used to solve many problems across the board is artificial intelligence. And of course, it can be applied also to generative art.</p>
        <p>An artificial intelligence is quite successfully used to solve specific problems like:</p>
        <ul>
          <li>generating a collection of similar objects (e.g anime characters) given a set of examples</li>
          <li>generating images from a text description</li>
          <li>image restoration, upscaling</li>
        </ul>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4 id="style-transfer-2017">Style transfer (2017)</h4>
          </div>
          <p>For example here I used a neural network to color in a picture for me given a silhouette and a style to match.</p>
          <p><StaticImage src="./media/artificial-intelligence.png" layout="fullWidth" alt="First tests with AI image generation" /></p>
        </div>
      </Page>

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