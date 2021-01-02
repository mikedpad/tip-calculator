import ReactDOM from 'react-dom';
import App from './components/App';
import { TipCalcProvider } from './context/useTipCalc';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.dark.css';
import './style.scss';

const AppRoot = (
  <TipCalcProvider>
    <App />
  </TipCalcProvider>
);

ReactDOM.render(AppRoot, document.getElementById(`app`));
