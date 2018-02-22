# meetyou-uirecorder-cli

base on alibaba/uirecorder

## PC端测试

### step 1: 新建一个测试目录

````node
mkdir uirecorder-test
cd uirecorder-test
````

### step 2: 初始化项目

````node
meetyou-uirecorder init
````

### step 3: 录制测试案例

````node
meetyou-uirecorder record ./test/test.spec.js
````

### step 4: 启动服务

````node
meetyou-uirecorder server
````

### step 5: 执行测试案例

````node
meetyou-uirecorder run ./test/test.spec.js
````

## 移动端测试

### step 1: 安装macaca 并启动服务

````node
Install macaca: http://macacajs.com/
Connect your mobile or open emulator
macaca server --port 4444
````

### step 2: 初始化项目

````node
meetyou-uirecorder init-mobile
````

### step 3: 录制测试案例

````node
meetyou-uirecorder record-mobile ./test/test.spec.js
````

### step 4: 执行测试案例

````node
meetyou-uirecorder run ./test/test.spec.js
````