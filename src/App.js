import "./App.css";
import styled from "styled-components";
import Info from "./images/a.jpg";

const A4Wrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  background: #fff;
  padding: 3rem 6rem;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  font-size: 1.7rem;
`;

const Body = styled.div`
  background: thistle;
  display: flex;
  justify-content: center;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(3rem + 2vmin);
  color: teal;
`;

const PersonInfoBlock = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 100%;
  }
`;

const PersonImage = styled.div`
  width: 16.9rem;
`;

const Link = styled.a`
  color: dodgerblue;
  cursor: pointer;
`;
const InfoDetail = styled.ul`
  text-align: left;
  list-style: none;
  font-size: calc(1rem + 1vmin);
  li {
    padding-bottom: 2rem;
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const Title = styled.h3`
  color: teal;
  font-size: 2.2rem;
  padding-bottom: 1rem;
`;

const WorkDetailItem = styled.ul`
  list-style-position: inside;
`;

const CompanyTitle = styled.h4`
  font-weight: bold;
`;
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
      </A4Wrapper>
    </Body>
  );
}

export default App;
