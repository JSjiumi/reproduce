import { Button } from 'antd';
import './App.css';

function App() {
  const onClickBtn = () => {
    console.info('~~来自app1：按钮点击');
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>app1页面</p>
      </header>
      <Button type="primary" onClick={onClickBtn}>
        测试按钮
      </Button>
    </div>
  );
}

export default App;
