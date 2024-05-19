import React, { FunctionComponent } from "react";
import Book from "../../components/Book/Book";
import { StaticImage } from "gatsby-plugin-image";
import ReferencesPage from "../../components/ReferencesPage/ReferencesPage";
import TitlePage from "../../components/TitlePage/TitlePage";
import Page from "../../components/Page/Page";

const SlidesMe: FunctionComponent = () => {

  return (
    <Book id="me" title="Me">

      <TitlePage title="Me" subtitle="Coder | Artist | Me" lecture={5} />
      
      <Page title="Top 6 places to find me">
        <div className="example">
          <div className="two-columns">
            <div>
              <div className="example-title">
                <h4>1. Nature is cool</h4>
              </div>
              <div>
                <StaticImage src="./media/nature.jpg" alt="Me in nature" />
              </div>
            </div>
            <div>
              <div className="example-title">
                <h4>2. Working from forest</h4>
              </div>
              <div>
                <StaticImage src="./media/working-in-forest.jpg" alt="Working in forest" />
              </div>
            </div>
          </div>
        </div>
      </Page>

      <Page title="It's cooler with people">
        <div className="example">
          <div className="two-columns">
            <div>
              <div className="example-title">
                <h4>3. Board games</h4>
              </div>
              <div>
                <StaticImage src="./media/board-games.jpg" alt="Me playing board games" />
              </div>
            </div>
            <div>
              <div className="example-title">
                <h4>2. Festival</h4>
              </div>
              <div>
                <StaticImage src="./media/festival.jpg" alt="Visiting festival" />
              </div>
            </div>
          </div>
        </div>
      </Page>

      <Page title="It's cooler with people">
        <div className="example">
          <div className="two-columns">
            <div>
              <div className="example-title">
                <h4>3. Board games</h4>
              </div>
              <div>
                <StaticImage src="./media/board-games.jpg" alt="Me playing board games" />
              </div>
            </div>
            <div>
              <div className="example-title">
                <h4>2. Festival</h4>
              </div>
              <div>
                <StaticImage src="./media/festival.jpg" alt="Visiting festival" />
              </div>
            </div>
          </div>
        </div>
      </Page>

      <ReferencesPage references={["instagram", "contact"]} />

    </Book>
  )
}

export default SlidesMe;

/*

$ Story $
- Top 5 places where to find me

- readable to the ones in the known

Then, there is Me.

Goals:
- get people prepared to my varying presentation
  - rel "purple har freak" comment


- [slides] me
Top 5 places where to find me
(outside of work)
  - nature is cool
  - it's cooler with people
  - board games.. [[go take a photo to Za zrcadlem]]
  - gendr, foxie!
"Watch me": Where can I follow you?

$ Conclusion $
- It's still too early to say how this all ends up...

*/