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
  List,
} from "./styleConfig";
import CleanCode from "./images/cleancode.jpg";
import Refactoring from "./images/refact2.webp";
import DesignPattern from "./images/designPattern.webp";
import Peaa from "./images/peaa.webp";

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
            <li>
              <Link href="mailto:javaspringtea@gmail.com">
                javaspringtea@gmail.com
              </Link>
            </li>
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
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>C#</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>React Testing Library</li>
            <li>.NET</li>
            <li>Entity Framework</li>
            <li>Selenium</li>
            <li>Webpack</li>
            <li>OOP Concept</li>
            <li>Docker and Kubernetes</li>
            <li>CSS, SASS, CSS-In-Js</li>
            <li>Git, GitLab</li>
            <li>CI/CD</li>
            <li>Amazon Web Services</li>
            <li>Postman</li>
            <li>Swagger</li>
            <li>Ansible</li>
          </SkillList>
        </div>
        <div>
          <Title>Books I read again and again</Title>
          <BookList>
            <li>
              <img src={CleanCode} alt="clean code" />
            </li>
            <li>
              <img src={Refactoring} alt="" />
            </li>
            <li>
              <img src={Peaa} alt="" />
            </li>
            <li>
              <img src={DesignPattern} alt="" />
            </li>
          </BookList>
        </div>
        <div>
          <Title>Portfolio</Title>
          <List>
            <li>
              <Link href="https://devlinks.pinkjelly.org/" target="_blank">
                Developer Links
              </Link>
            </li>
            <li>
              <Link href="http://crown.pinkjelly.org/" target="_blank">
                H8 Bet
              </Link>
            </li>
            <li>
              <Link href="http://chicocbetrwd.pinkjelly.org/" target="_blank">
                Cbet
              </Link>
            </li>
            <li>
              <Link href="http://heychat.pinkjelly.org/" target="_blank">
                HeyChat
              </Link>
            </li>
          </List>
        </div>
      </A4Wrapper>
    </Body>
  );
}

export const SkillListOlder = () => {
  return (
    <div>
      <li>Language: JavaScript, TypeScript, Node.js, C#</li>
      <li>Framework: React.js, .NET</li>
      <li>Write Test case using Selenium, MSTest</li>
      <li>Understanding OOP</li>
      <li>Understanding SQL</li>
      <li>Experience in Git, GitHub, GitLab and Git flow.</li>
      <li>Understanding Amazon Web Services</li>
      <li>Understanding CI/CD</li>
      <li>
        Experience with containerization and orchestration tools (Docker and
        Kubernetes)
      </li>
      <li>
        Strong attention to detail on every line of code, every unit test, and
        every commit message
      </li>
      <li>Comfortable with rapid development cycles and tight schedules</li>
    </div>
  );
};

export default App;
