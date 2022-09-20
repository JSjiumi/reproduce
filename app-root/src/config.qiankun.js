import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'app1',
    entry: '//localhost:3001',
    container: '#rootQiankun',
    activeRule: '/app1',
  },
]);

start();
