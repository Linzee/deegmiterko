import React, { FunctionComponent } from "react";
import { StaticImage } from "gatsby-plugin-image";

import Book from "../Book";
import ReferencesPage from "../ReferencesPage";
import TitlePage from "../TitlePage";
import Page from "../Page";
import LightboxButton from "../LightboxButton";
import MasonryPage from "../MasonryPage";

const SlidesArtful: FunctionComponent = () => {
  
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
          
          <div className="text-center">
            <LightboxButton path="hard-pastel/title.jpg" alt="Hard pastel: Scene" buttonClassName="w-70" />
          </div>
          <div className="text-right">
            <a className="btn-source" href="/#hard-pastel-2014-present">More drawings&nbsp;&nbsp;&nbsp;▷</a>
          </div>
        </div>
      </Page>

      <MasonryPage title="Hard pastel" subtitle="2014 – present" rows={3}>
        {[
          {
            type: "node",
            aspectRatio: 1.5,
            node: (
              <div className="masonry-text" id="hard-pastel-2014-present">
                <h3>
                  Hard pastel drawings
                  <p className="subtitle">2016 – present</p>
                </h3>
                <p>
            Over the years I've made many drawings using hard pastels...
          </p>
              </div>
            )
          },
          { type: "image", path: "hard-pastel/titan.jpg", alt: "Hard pastel: Titan" },
          { type: "image", path: "hard-pastel/percy-tower.jpg", alt: "Hard pastel: Percy's tower" },
          { type: "image", path: "hard-pastel/mushroom-forest.jpg", alt: "Hard pastel: Mushroom forest" },
          { type: "image", path: "hard-pastel/game-garden.png", alt: "Hard pastel: Game garden concept" },
          { type: "image", path: "hard-pastel/masks.jpg", alt: "Hard pastel: Masks of us" },
          { type: "image", path: "hard-pastel/choices.jpg", alt: "Hard pastel: Choices" },
          {
            type: "node",
            aspectRatio: 0.8,
            node: (
              <div className="masonry-text">
                <p className="text-center">
                  More at
                </p>
                <a href="https://www.deviantart.com/dee-gmiterko">
                  <StaticImage src="../../images/content/hard-pastel/deviantart.png" layout="fixed" alt="DevinatArt" backgroundColor="transparent" placeholder="tracedSVG" />
                </a>
              </div>
            )
          },
        ]}
      </MasonryPage>

      <Page title="Digital">
        <p>
          Another step in the evolution of art started with the digital era. As it brings new possibilities for
          creation and most importantly delivery. The name itself very often also refers to an input method - a
          stylus and a tablet. Which is by far the best way to work with digital art.
        </p>
        <p className="text-center">
          <LightboxButton path="digital.jpg" alt="Digital drawing" buttonClassName="w-80" />
        </p>
        <div className="grow" />
        <p></p>
        <div className="example">
          <div className="example-title">
            <h4>Computer graphics</h4>
          </div>
          <div>
            <p>
              I use computer graphics and digital drawing mostly for utilitarian purposes. For example creating assets for websites, games, diagrams for explanations and presentations. As my communication style is very visual I find it a very useful tool.
            </p>
          </div>
        </div>
        <p>

        </p>
      </Page>

      <Page title="Virtual (3D)" className="position-relative">
        <p>
          Another huge expansion to capabilities of an artist was the introduction of 3D modeling. Most distinctly it allowed for a new way of creating audiovisual media with much less work needed.
        </p>
        <div className="example">
          <div className="example-title">
            <h4>Girl papercraft (2014)</h4>
          </div>
          <p>
            My 3D modelling skills are not extensive at all, but I have made a few functional pieces. For example this low poly model was intended to be unrolled into a papercraft template.
          </p>
          <div>
            <a href="/files/girl-papercraft.pdf" className="btn-source">Download template</a>
          </div>
          <div className="grow" />
        </div>
        <StaticImage src="../../images/content/girl-render.png" layout="fixed" width={1200} height={1200} alt="Girl papercarft 3D render" className="page-overlay" backgroundColor="transparent" placeholder="blurred" />
      </Page>

      <Page title="Visual space">
        <p>
          Now, imagine that you are not constructing a single piece of art but a whole space containing many possible images. All part of a single concept - "sample space". While still being able to control how it looks and behaves.
        </p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>Flower space (2024)</h4>
          </div>
          <p>
            For example here I constructed and trained a neural network that when sampled returns images of imaginary plants.
          </p>
          <p>
            <LightboxButton path="flower-space.jpg" alt="Flower space" />
          </p>
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