## antd 在 qiankun 微前端内运行时，Button 的点击事件会报错

### 报错信息
Uncaught DOMException: Failed to execute 'appendChild' on 'Node': This node type does not support this method.

### 运行环境
- node v14.17.3
- "webpack": "^5.64.4"
- "react": "^17.0.2"
- "react-dom": "^17.0.2"
- "antd": "^4.22.8"

### 复现步骤：
1. 开启两个终端窗口
2. 终端窗口一执行 * cd qiankunAntd/app-root && npm i *  依赖安装完成后 * npm run start *
3. 终端窗口二执行 * cd qiankunAntd/app1 && npm i *  依赖安装完成后 * npm run start *
4. 本地服务启动后，http://localhost:3000/ 是微前端基座应用，http://localhost:3001/ 是微前端子应用
4. 浏览器窗口 http://localhost:3001/ 子应用中，点击“测试按钮”，浏览器控制台 Console 有 log 输出，且没有报错
5. 浏览器窗口 http://localhost:3000/ 基座应用中，点击“加载app1”按钮，待本页面下方显示出来 app1 的页面后，再点击“测试按钮”，浏览器控制台 Console 有 log 输出，且出现报错
