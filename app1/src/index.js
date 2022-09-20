import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function render(props) {
  const { container } = props || {};
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.getElementById('root'));
}

// 子应用独立运行判断
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.info('~~app1 bootstraped');
}

export async function mount(props) {
  render(props);
}

export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  );
}
