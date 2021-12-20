import "./App.css";
import Info from "./images/a.jpg";
import {
  Body,
  A4Wrapper,
  Title,
  Link,
  CompanyTitle,
  Header,
  InfoDetail,
  PersonImage,
  PersonInfoBlock,
  SkillList,
  WorkDetailItem,
  BookList,
} from "./styleConfig";
import CleanCode from "./images/cleancode.jpg";
import Refactoring from "./images/refact2.webp";

function App() {
  return (
    <Body className="App">
      <A4Wrapper>
        <Header>Luna Goodnight</Header>
        <PersonInfoBlock>
          <PersonImage>
            <img src={Info} alt="info" />
          </PersonImage>
          <InfoDetail>
            <li>javaspringtea@gmail.com</li>
            <li>Taipei, Taiwan</li>
            <li>0972 303 303</li>
            <li>
              <Link>LinkedIn</Link>
            </li>
            <li>
              <Link>Github</Link>
            </li>
          </InfoDetail>
        </PersonInfoBlock>

        <div>
          <Title>Professional Summary</Title>
          <p>
            Creative Front-End Developer offering 3+ years of experience
            providing high-impact web solutions for diverse industry
            organizations. Skilled in designing, developing and testing multiple
            web-based applications incorporating a range of technologies.
            Aspiring to combine broad background with strong technical skills to
            excel as a Front-End Developer.
          </p>
        </div>

        <div>
          <Title>Work Experience</Title>

          <div>
            <CompanyTitle>Dream Cat</CompanyTitle>
            <p>June 6 2020 - currently employed</p>
            <WorkDetailItem>
              <li>
                Worked in an Agile team of .NET developers for a fast-paced
                software development firm.
              </li>
              <li>
                Expand features, refine code, and improve processes, producing
                smoother operations and enhancing user engagement
              </li>
            </WorkDetailItem>
          </div>
        </div>

        <div>
          <Title>Skills</Title>
          <SkillList>
            <li>3+ yrs of experience in developing JavaScript Applications</li>
            <li>Developing web application with React.js, Css-In-Js</li>
            <li>Experience with Selenium</li>
            <li>Experience with C#, .NET</li>
            <li>Understanding OOP</li>
            <li>Understanding SQL</li>
            <li>Experience in Git, GitHub, GitLab and Git flow.</li>
            <li>Understanding Amazon Web Services</li>
            <li>Understanding CI/CD</li>
            <li>
              Experience with containerization and orchestration tools (Docker
              and Kubernetes)
            </li>
            <li>
              Strong attention to detail on every line of code, every unit test,
              and every commit message
            </li>
            <li>
              Comfortable with rapid development cycles and tight schedules
            </li>
          </SkillList>
        </div>
        <div>
          <Title>Books I read through again and again</Title>
          <BookList>
            <li>
              <img src={CleanCode} alt="clean code" />
            </li>
            <li>
              <img src={Refactoring} alt="" />
            </li>
          </BookList>
        </div>
      </A4Wrapper>
    </Body>
  );
}

export default App;
