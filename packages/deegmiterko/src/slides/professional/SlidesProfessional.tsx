import React, { FunctionComponent } from "react";
import Book from "../../components/Book/Book";
import ReferencesPage from "../../components/ReferencesPage/ReferencesPage";
import TagList from "../../components/TagList/TagList";
import TitlePage from "../../components/TitlePage/TitlePage";
import Page from "../../components/Page/Page";

const SlidesProfessional: FunctionComponent = () => {
  
  return (
    <Book id="professional" title="Professional">

      <TitlePage title="Professional" subtitle="“real job”" lecture={4} />

      <Page title="Website development">
        <p>
          It's commonly split into two parts, frontend (what users sees in their browser) and backend (what happens on the server). I've worked on both.
        </p>
        <div className="example-bar">
          <div className="example-title">
            <h4 id="professional-backend-developer">Backend developer @ <a className="subheading" href="https://wame.sk/">Wame</a> (2015 – 2016)</h4>
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
            <h4 id="professional-frontend-developer">Frontend developer @ <a className="subheading" href="https://inqool.cz/">InQool</a> (2017 – 2019)</h4>
          </div>
          <TagList tags={["Frontend", "Web", "Javascript", "CSS", "PrestaShop", "E-commerce", "React"]} />
          <p>
            Builing custom web applications for eshops. Some notable projects I've worked on include <a href="https://www.brnoid.cz/">BrnoID</a>
            and <a href="https://kreativator.cz/">Kreativator</a>. ReactJS applicaiton for customizing prints on garments.
          </p>
        </div>
      </Page>

      <Page title="Data engineering">
        <p>
          It's one thing to work on a closed order like an eshop that is more or less built and delivered once. But it's a whole different story to has a little bit of sway on a constantly evolving product while it's being used by thousands of people.
        </p>
        <div className="example">
          <div className="example-title">
            <h4 id="professional-data-engineed">Data Engineer @ <a className="subheading" href="https://kiwi.com/">Kiwi.com</a> (2019 – 2022)</h4>
          </div>
          <TagList tags={["Data processing", "Python", "Pipeline building", "Airflow", "PubSub", "PostgreSQL", "DataOps", "BigQuery", "Data Quality", "Internal product"]} />
          <p>
            Creating and maintaining data pipelines, building data warehouse, assisting with analysis and visualization, ensuring data quality.
          </p>
        </div>
      </Page>

      <Page title="Freelance development">
        <p>
          Working in a freelance capacity, not being bound by constraints of a single company, I've had the opportunity to work on a variety of projects. But it also means I had to wear many hats each day. I have done everything from gathering requirements, designing, developing, testing, deploying, maintaining, supporting, to accounting. Wearing all the hats is not always easy, but it's definitely a great way to learn your limits.
        </p>
        <div className="example">
          <div className="example-title">
            <h4 id="professional-freelance">Fullstack @ <span className="subheading">Blockchain game development</span> (2022 – 2024)</h4>
          </div>
          <TagList tags={["Frontend", "Backend", "Project management", "Game dev", "Blockchain", "UI design", "Services integration", "Ops", "Unity"]} />
          <p>
            My 
          </p>
          <ol className="2-columns">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
          <h4>
            Fullstack @ <span className="subheading">Tailored system development</span> (2023 – 2024)
          </h4>
          <TagList tags={["Static websites", "Application", "Typescript", "Video streaming", "Adaptive learning", "User analytics", "Firebase", "Google Cloud Platform", "CDN"]} />
          <p>
            TODO
          </p>
          <div>
            <span>Project details ▷</span>
          </div>
        </div>
      </Page>

      <Page title="System Na medicínu">
        <p>
          One project in particular I would like to highlight is a set of services that I developed for study course <a href="https://namedicinu.cz">Na medicínu</a>.
        </p>
        <div className="example">
          <h5>
            <span className="subheading"></span> (2022)
          </h5>
          <p>
            Public websites
              Bring new people in
            Internal system for students and lectors
              Helping students to learn by providing lecture video recording streaming and an adaptive environment for flashcard learning.
              While also empowering lectors to know what are strengths and weaknesses of their students.
            Admin backend
              Seamlessly handle lecture recording upload and processing.
              And control over users, their access and management for quizzes and website content.
            Analytics, data export for invoicing, email generator
              Measurable insights for usage of the system

          </p>
        </div>
      </Page>

      <Page title="Education">
        <h4 className="subtitle">Masaryk University</h4>
        <div className="example-bar">
          <div className="example-title">
            <h4 id="professional-education-data-processing">
              <a href="https://is.muni.cz/obory/8143?lang=en">Computer Systems and Data Processing</a> (2015 – 2018)
            </h4>
          </div>
          <TagList tags={["Applications", "Python", "Database management", "Java", "C++", "Data science", "Algorithms"]} />
          <p>Teached me architectures, principles and methods of designing integrated systems and data processing</p>
          <div className="thesis-note">
            <h5>
              <span>Bc. Thesis: </span>
              Techniques for measuring similarity of educational items
            </h5>
            <p>Focuses on measuring of item similarity of questions from an adaptive tutoring systems utilizing correctness of answers from students.</p>
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
              <a href="https://is.muni.cz/program/22961/artificial%20intelligence%20and%20data%20processing">Artificial intelligence and data processing</a> (2018 – 2020)
            </h4>
          </div>
          <TagList tags={["Machine learning", "Cloud development", "AI", "Data analysis", "Statistics", "Big data", "Data processing"]} />
          <p>Focused on design and development of intelligent systems and analysis of big data.</p>
          <div className="thesis-note">
            <h5>
              <span>Mgr. Thesis: </span>
              Tool Supporting Analysis of Meteorology Data
            </h5>
            <p>A newly built system allowin users to process and validate meteorological data while enhancing the analytical capabilities on the resulting data.</p>
            <p className="text-right">
              <a className="btn-source" href="https://is.muni.cz/th/vaev3/tool-supporting-analysis-of-meteorology-data.pdf">§ Read full text</a>
            </p>
          </div>
        </div>
      </Page>

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