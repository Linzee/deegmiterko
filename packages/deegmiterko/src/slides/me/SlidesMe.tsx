import React, { FunctionComponent } from "react";
import Book from "../../components/Book/Book";
import { StaticImage } from "gatsby-plugin-image";
import ReferencesPage from "../../components/ReferencesPage/ReferencesPage";
import TitlePage from "../../components/TitlePage/TitlePage";

const SlidesMe: FunctionComponent = () => {

  return (
    <Book id="me" title="Me">

      <TitlePage title="Me" subtitle="Coder | Artist | Me" lecture={5} />
      
      <div className="page">
        <h3 id="i-will-write-a-generative-design-script">
          Top 5 places to find me
        </h3>
        <div className="example">
          <div className="example-title">
            <h4>1. Nature is cool</h4>
          </div>
          <div>
            <StaticImage src="./media/nature.jpg" alt="Me in nature" />
            <StaticImage src="./media/working-in-forest.jpg" alt="Working in forest" />
          </div>
        </div>
      </div>

      <div className="page">
        <div className="example">
          <div className="example-title">
            <h4>2. It's cooler with people</h4>
          </div>
          <StaticImage src="./media/nature.jpg" alt="Me in nature" />
        </div>
      </div>

      <div className="page">
        <div className="example">
          <div className="example-title">
            <h4>3. It's cooler with people</h4>
          </div>
          <StaticImage src="./media/nature.jpg" alt="Me in nature" />
        </div>
      </div>

      <ReferencesPage references={["instagram", "linkedin"]} />

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