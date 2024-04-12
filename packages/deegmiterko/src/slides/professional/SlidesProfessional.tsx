import React, { FunctionComponent } from "react";
import Book from "../../components/Book/Book";
import ReferencesPage from "../../components/ReferencesPage/ReferencesPage";
import TagList from "../../components/TagList/TagList";
import TitlePage from "../../components/TitlePage/TitlePage";

const SlidesProfessional: FunctionComponent = () => {
  
  return (
    <Book id="professional" title="Professional">

      <TitlePage title="Professional" lecture={4} />

      <div className="page">
        <h3 id="transformation">Website development</h3>
        <p>
          It's commonly split into two parts, frontend (what users sees in their browser) and backend (what happens on the server). I've worked on both.
        </p>
        <div className="example-bar">
          <div className="example-title">
            <h4 id="professional-backend-developer">Backend developer @ <a className="subheading" href="https://wame.sk/">Wame</a> (2015-2016)</h4>
          </div>
          <TagList tags={["Web", "Backend", "PHP", "Nette", "E-commerce", "HTML", "E-mail camapigns"]} />
          <p>
            Development of custom e-commerce solutions as a part of a small team. I've worked on a variety of eshops.
          </p>
        </div>
        <p>
          Later during my studies at MUNI I've joined InQool in a part time capacity:
        </p>
        <div className="example-bar">
          <div className="example-title">
            <h4 id="professional-frontend-developer">Frontend developer @ <a className="subheading" href="https://inqool.cz/">InQool</a> (2017-2019)</h4>
          </div>
          <TagList tags={["Frontend", "Web", "Javascript", "CSS", "PrestaShop", "E-commerce", "React"]} />
          <p>
            Builing custom web applications for eshops. Some notable projects I've worked on include <a href="https://www.brnoid.cz/">BrnoID</a>
            and <a href="https://kreativator.cz/">Kreativator</a>. ReactJS applicaiton for customizing prints on garments.
          </p>
        </div>
      </div>

      <div className="page">
        <h3 id="transformation">Data engineering</h3>
        <p>
          It's one thing to work on a closed order like an eshop that is more or less built and delivered once. But it's a whole different story to has a little bit of sway on a constantly evolving product while it's being used by thousands of people.
        </p>
        <div className="example">
          <div className="example-title">
            <h4 id="professional-data-engineed">Data Engineer @ <a className="subheading" href="https://kiwi.com/">Kiwi.com</a> (2019-2022)</h4>
          </div>
          <TagList tags={["Data processing", "Python", "Pipeline building", "Airflow", "PubSub", "PostgreSQL", "DataOps", "BigQuery", "Data Quality", "Internal product"]} />
          <p>
            Creating and maintaining data pipelines, building data warehouse, assisting with analysis and visualization, ensuring data quality.
          </p>
        </div>
      </div>

      <div className="page">
        <h3 id="transformation">Product development</h3>
        <p>
          Working in a freelance capacity, not being bound by constraints of a single company, I've had the opportunity to work on a variety of projects. But it also means I had to wear many hats each day. I have done everything from gathering requirements, designing, developing, testing, deploying, maintaining, supporting, to accounting.
        </p>
        <div className="example">
          <div className="example-title">
            <h4 id="professional-freelance">Fullstack @ <span className="subheading">Self employed</span> (2022-2024)</h4>
          </div>
          <TagList tags={["Frontend", "Backend", "Typescript", "Project management", "Game dev", "Blockchain", "UI design", "Services integration", "Ops", "User analytics"]} />
          <h5>
            <span className="subheading">Blockchain game products</span> (2022)
          </h5>
          <p>
            TODO
          </p>
          <h5>
            <span className="subheading">Tailored system development</span> (2023)
          </h5>
          <p>
            TODO
          </p>  
        </div>
      </div>

      <div className="page">
        <h3 id="transformation">Education</h3>
        <h4 className="subtitle">Masaryk University</h4>
        <div className="example-bar">
          <div className="example-title">
            <h4 id="professional-education-data-processing">
              <a href="https://is.muni.cz/obory/8143?lang=en">Computer Systems and Data Processing</a> (2015-2018)
            </h4>
          </div>
          <TagList tags={["Applications", "Python", "Database management", "Java", "C++", "Data science", "Algorithms"]} />
          <p>Teached me architectures, principles and methods of designing integrated systems and data processing</p>
          <div className="thesis-note">
            <h5>
              <span>Thesis: </span>
              Techniques for measuring similarity of educational items
            </h5>
            <p>Focuses on measuring of item similarity of questions from tutoring systems utilizing correctness of answers from students.</p>
            <p className="text-right">
              <a className="btn-source" href="https://ienze.me/tmsei_thesis/">§ TLDR version</a>
              <a className="btn-source" href="https://is.muni.cz/th/l5dzj/gmiterko-similarity.pdf">§ Read full text</a>
            </p>
          </div>
        </div>
        <p></p>
        <div className="example-bar">
          <div className="example-title">
            <h4 id="professional-education-data-processing">
              <a href="https://is.muni.cz/program/22961/artificial%20intelligence%20and%20data%20processing">Artificial intelligence and data processing</a> (2018-2020)
            </h4>
          </div>
          <TagList tags={["Machine learning", "Cloud development", "AI", "Data analysis", "Statistics", "Big data", "Data processing"]} />
          <p>Focused on design and development of intelligent systems and analysis of big data.</p>
          <div className="thesis-note">
            <h5>
              <span>Thesis: </span>
              Tool Supporting Analysis of Meteorology Data
            </h5>
            <p>A newly built system allowin users to process and validate meteorological data while enhancing the analytical capabilities on the resulting data.</p>
            <p className="text-right">
              <a className="btn-source" href="https://is.muni.cz/th/vaev3/tool-supporting-analysis-of-meteorology-data.pdf">§ Read full text</a>
            </p>
          </div>
        </div>
      </div>

      <ReferencesPage references={["linkedin", "github"]} />

    </Book>
  )
}

export default SlidesProfessional;

/*

Oh, yeah, I've also worked in professional capacity.
But those are more difficult to share as they are often non-public and non-visual.

$ Story $
All the stuff you can find out about me easily, neat.
  - twist: No job I've ever had used all of my skills.
    - visualization: Tag bubbles
  - tags not used yet at the last slide with the "hire me" theme

[1.] Website development
- Wame [Backnd developer] ()
- InQool [Frontend developer] ()

[2.] Product development
- Kiwi [Data Engineer]
- Freelance development [-]
  - BB: blockchain game product engineering
  - Namedicinu: 

[3.] Education
- Masaryk University
  - Bc. Data Science thingy
   https://github.com/dee-gmiterko/tmsei_short_version/blob/master/index.md
  - Mgr. Artificial Intelligence

[4.] Open Source
- [Github] 
[Next]
"Hire me": Us, cooperating.
  - $-linkedIn-$
  - $-purpose led contact-$

$ Conclusion $
  No job I've ever had used all of my skills.
  tags not used yet at the last slide with the "hire me" theme


*/