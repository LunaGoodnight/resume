import './App.css';
import styled from "styled-components";

const A4Wrapper = styled.div`
  width: 100%;
  max-width: 77rem;
  background: #fff;
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
  font-size: calc(2rem + 2vmin);
`
function App() {
  return (
    <Body className="App">
      <A4Wrapper>

        <Header>Luna Goodnight</Header>
      </A4Wrapper>



    </Body>
  );
}

export default App;
