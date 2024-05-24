import React, { FunctionComponent } from "react";

import Book from "../../components/Book/Book";
import Page from "../../components/Page/Page";
import ReferencesPage from "../../components/ReferencesPage/ReferencesPage";
import TitlePage from "../../components/TitlePage/TitlePage";
import { StaticImage } from "gatsby-plugin-image";

import imgOpenGlForest from "./media/opengl-forest.png";
import vidOpenGlForest from "./media/opengl-forest.webm";
import imgTrainwreck from "./media/trainwreck.png";
import vidTrainwreck from "./media/trainwreck.webm";

const SlidesGameExperiments: FunctionComponent = () => {

  return (
    <Book id="game-experiments" title="Games and Experiments">

      <TitlePage title="Games and Experiments" lecture={3}>
        <p>
          Games were always pushing the boundaries of what is possible. All in the persuit of telling a story, or creating an unforgetable experience.
        </p>
      </TitlePage>

      <Page title="Game of Life">
        <p>
          Let's start with one of the simplest games there is. <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Conway's Game of Life</a> is a famous 0-player game turning few simple rules into a living, breathing world.
        </p>
        <p>

        </p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>GOL-hash (2016)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/gol-hash">&lt;/&gt; Browse source code</a>
          </div>
          <p>
            Based on The Game of Life, I've created a simple visual-hash function that turns any string or file into it's unique representation. It can either output an image respresenting the data or a compress it into string.
          </p>
          <p>
            I don't recommend using it tho, as I haven't validated that it's uniformity or it's fitness for any secure use.
          </p>
          <p>
            <StaticImage src="./media/gol-hash.png" layout="fullWidth" alt="Game of Life based hash function" />
          </p>
        </div>
      </Page>

      <Page title="Engine or not to engine" level={2}>
        <p>
          The age old question that seems to be brough out every time a new person enters the game development community.
        </p>
        <div className="grow"></div>
        <p>
          Writing 3d graphics from scratch is very difficult, but powerful.
        </p>
        <div className="example">
          <div className="example-title">
            <h4>Open GL foreset (2017)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/opengl-forest">&lt;/&gt; Browse source code</a>
          </div>
          <p>

          </p>
          <p>
            <video poster={imgOpenGlForest} src={vidOpenGlForest} loop={true} autoPlay={true} muted={true} />
          </p>
        </div>
      </Page>

      <Page title="Web constrains">
        <p>
          You may find yourself in a situation where you have to work with limited capabilities. A great example of this is WebGL - a web-based graphics library in your browser.
        </p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>Trainwreck (2017, 2022)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/trainwreck">&lt;/&gt; Browse source code</a>
          </div>
          <p>
            A simple game that I've created using <a href="https://pixijs.com/">PixiJS</a> library on top of WebGL. It's a simple endless runner game where you switch tracks to avoid obstacles.
          </p>
          <p>
            <video poster={imgTrainwreck} src={vidTrainwreck} loop={true} autoPlay={true} muted={true} />
          </p>
          <p className="text-center">
            <a className="btn-source" href="https://ienze.me/trainwreck/">Try it out for yourself</a>
          </p>
        </div>
      </Page>

      <Page title="Modding">
        <p>
          One of the best known games that allow you to heavily modify it's content is Minecraft. Which I of course extensively used to create my own mods, plugins, and servers at the time.
        </p>
        <h4>
          Server side
        </h4>
        <div className="example-bar">
          <div className="example-title">
            <h4>Bukkit plugins (2010 – 2013)</h4>
          </div>
          <p>
            I've made many plugins for Minecraft servers in that time. Includin few public ones that gained decent popularity. But that was over a decade ago, so they fell into obscurity and are not maintained for a long time.
          </p>
          <ul>
            <li>TODO</li>
          </ul>
        </div>
        <h4>
          Client side mods and resoruce packs
        </h4>
        <div className="example-bar">
          <div className="example-title">
            <h4>Modding (2012 – 2013)</h4>
          </div>
          <p>
            
          </p>
        </div>
      </Page>

      <Page title="Game engine">
        <p>
          On the other end of the spectrum, you have game engines that are purpose built and can speed up your development process a great deal. Unity is a an example of a game engine that allows you to quickly create 3D and 2D games without having to write a lot of rendering, and entity management code. Even providing you with assets to streamline the most common use cases.
        </p>
        <div className="example">
          <div className="example-title">
            <h4>Card collecting game (2023)</h4>
          </div>
          <p>
            During my freelancing period I've worked on a blockchain based card collecting game. My area of focus was integration of distributed systems, creating WebGl port, websocket based networking, and backend. But I've also fixed several visual issues and replaced card asset loading with a more efficient method more fit for web play giving me insight into inner workings of the game itself.
          </p>
          <p>
            <StaticImage src="./media/bad-bunnies.png" layout="fullWidth" alt="Unity card collecting game" />
          </p>
          <p className="text-center">
            <a className="btn-source" href="https://badbunnies.xyz/">Game website</a>
          </p>
        </div>
      </Page>

      <Page title="Building an experience" level={2}>
        <h3>Level design</h3>
        <p>
          Hand in hand with game development goes level design. It's what actually makes an experience out of game mechanics. And once again, it's very often been pushed to the limits of what is possible on the given platform.
        </p>
        <div className="example-bar">
          <div className="example-title">
            <h4>London map (2011 – 2013)</h4>
          </div>
          <p>
            TODO
          </p>
          <p>
            <StaticImage src="./media/london-map.png" layout="fullWidth" alt="Minecraft London map" />
          </p>
        </div>
      </Page>

      <Page title="Asset pipeline">
        <p>
          Without any assets to look at, your game would be a very boring place. But creating them is extremely time consuming process. So there always was a need for tools that would speed it up.
        </p>
        <div className="example">
          <div className="example-title">
            <h4>Tile builder (2017)</h4>
          </div>
          <p>
            This tool takes a color mask and a height map, then proceeds to create a 3D model which is rendered into a 2D sprite. Then an AI styled texture enhancement gets applied on top of it to create a final tile asset with normal, specular, and diffuse maps.
          </p>
          <p>
            <StaticImage src="./media/tile-builder.png" layout="fullWidth" alt="Tile builder pipeline" />
          </p>
        </div>
      </Page>

      <Page title="Supporting tech" level={2}>
        <p>
          
        </p>
        <h3>Player simulation</h3>
        <div className="example">
          <div className="example-title">
            <h4>Game strategy simulations (2015)</h4>
            <a href="https://github.com/dee-gmiterko/py-2048">&lt;/&gt; Browse source code</a>
          </div>
          <p>
            
          </p>
          <table>
            <thead>
              <tr>
                <th className="subtitle">Avg</th>
                <th>
                  <span>Random</span><span>٭</span>
                </th>
                <th>
                  <span>Simple</span><span>٭٭</span>
                </th>
                <th>
                  <span>Predictive</span><span>٭٭٭</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Moves</th>
                <td>281</td>
                <td>869</td>
                <td>5286</td>
              </tr>
              <tr>
                <th>Score</th>
                <td>4108</td>
                <td>18451</td>
                <td>154112</td>
              </tr>
              <tr>
                <th>Largest tile</th>
                <td>512</td>
                <td>2048</td>
                <td>8192</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Page>

      <Page title="Networking">
        <p>
          
        </p>
        <div className="example">
          <div className="example-title">
            <h4>Game strategy simulations (2015)</h4>
          </div>
          <p>
            
          </p>
        </div>
      </Page>

      <Page title="Pushing the limits" level={2}>
        <p>
          Were always there at the beginning of exploring a new technology, ignoring games and how people play could be a huge mistake.
        </p>

        <table>
          Simulation x, 
          Game networking - 1988, 
        </table>
        
        <p>
          I would be up for joining in the ride..
        </p>
      </Page>

      <ReferencesPage references={["ienze.me", "github"]} />

    </Book>
  )
}

export default SlidesGameExperiments;


/* 

"Puhshing the limits"
$ Story $
Games were always pushing the boundaries of what is possible. All in the persuit of telling a story, or creating an unforgetable experience.

- [slides] gaming experiments
  - efil
    - simple principle, turned on it's head
  - [Engine or not] 
      "Engine or not to engine" - (The game-dev discussion)
      The age old question that seems to be brough out every time a new person enters the game development community.
  - shaders, Open GL forest $-github link-$ - writing 3d graphics from scratch is difficult, but powerful
  - trainwreck $-POPUP-$ - limited capabilities, e.g. WebGL
  - Minecraft modding, plugins - the power of community
  - level design - packing the most into limited space (memory, disk, asset creaation, etc.)
  - "Unity" - card collecting game - integration of disjointed systems allowing new experiences
  - block-renderer - Asset pipeline (drawing individual items is hard, so I made a tool to help me) - 
  - py-2048 - Game strategy simulation (evaluating player AIs) - allows to experience a resemblance of a competitive environment
  - ~~~ - multiplayer - the power of networking on network ~~~
  - #what can you take from it [[[most important page]]]
    - 
  - "Join me": I want to help you.


...



"Engineless"
- trainwreck (2019??)
- openGL scene and shaders

"Modding"
- minecraft

"Unity"
- card collecting game
  - blockchain based - the only mention

Experiments
gol-hash 
- based on The Game of Life - famously known 0-player game
py-2048
- Game strategy simulation


$ Conclusion $
- the power of games is not even close to being fully explored, and I would be up for joining in the ride

*/