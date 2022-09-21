import { loadMicroApp } from 'qiankun'
import './App.css'

function App() {
  const loadApp1 = () => {
    loadMicroApp({
      name: 'app1',
      entry: '//localhost:3001',
      container: '#rootQiankun',
    }, {
      sandbox: { strictStyleIsolation: true }, // 开启严格的样式隔离模式
    });
  }

  return (
    <div className='App'>
      <header className='App-header'>
        app-root页面
        <button onClick={loadApp1}>加载app1</button>
      </header>
      <div id='rootQiankun'></div>
    </div>
  )
}

export default App
