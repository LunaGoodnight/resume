import './App.css';
import styled from "styled-components";
import Info from './images/a.jpg'

const A4Wrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  background: #fff;
  padding: 3rem;
`

const Body = styled.div`
  background: thistle;
  display: flex;
  justify-content: center;
`
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(3rem + 2vmin);
  color: teal;
  padding-bottom: 2rem;
`

const PersonInfoBlock = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  img {
    width: 100%;
  }
`

const PersonImage = styled.div`
  width: 16rem;
`

const InfoDetail = styled.ul`
  text-align: left;
  list-style: none;
  font-size: calc(1rem + 1vmin);
  width: 60rem;
  li {
    padding-bottom: 1rem;
  }
`
function App() {
  return (
    <Body className="App">
      <A4Wrapper>

        <Header>Luna Goodnight</Header>
        <PersonInfoBlock>
          <PersonImage>

            <img src={Info} alt="info"/>
          </PersonImage>
          <InfoDetail>
            <li>javaspringtea@gmail.com</li>
            <li>Taipei, Taiwan</li>
          </InfoDetail>

        </PersonInfoBlock>

      </A4Wrapper>



    </Body>
  );
}

export default App;
