import styled from 'styled-components/macro';
import MainContent from './UI/Main';
import FooterContent from './UI/Footer';

const Title = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  padding: 4px 16px;
  text-align: center;
  text-transform: uppercase;
`;

const Grid = styled.div`
  background-color: #e6e6ef;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
`;

const Header = styled.header`
  background-color: #035aa2;
`;

const Main = styled.main`
  background-color: #fff;
  overflow-y: scroll;
  padding: 0 0 40px;
`;

const Footer = styled.footer`
  padding: 16px 0;
`;

const App = () => (
  <Grid>
    <Header>
      <Title>Tip Calculator</Title>
    </Header>
    <Main>
      <MainContent />
    </Main>
    <Footer>
      <FooterContent />
    </Footer>
  </Grid>
);

export default App;
