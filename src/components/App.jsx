import { Typography, Statistic, Layout } from 'antd';
import { useTipCalc } from '../context/useTipCalc';
import Items from './Bill';
import Tip from './Tip';

const { Title } = Typography;
const { Header, Content } = Layout;

const App = () => {
  const { items, calcWithTip } = useTipCalc();
  const itemSubTotal = items.reduce((acc, { value }) => acc + value, 0);
  const total = calcWithTip(itemSubTotal);

  return (
    <Layout>
      <Header>
        <Title style={{ margin: `0 0.25rem 0 0.5rem`, textAlign: `center` }}>Tip Calculator</Title>
      </Header>
      <Content style={{ padding: `0 16px` }}>
        <Items />
        <Tip />

        <Statistic title="Total" prefix="$" value={total} precision={2} />
      </Content>
    </Layout>
  );
};

export default App;
