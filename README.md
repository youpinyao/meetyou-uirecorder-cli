# meetyou-uirecorder-cli

base on alibaba/uirecorder

## PC端测试

### step 1:新建一个测试目录

````node
mkdir uirecorder-test
cd uirecorder-test
````

### step 2:初始化项目

````node
meetyou-uirecorder init
````

### step 3:录制测试案例

````node
meetyou-uirecorder ./test/test.spec.js
````

### step 4:启动服务

````node
meetyou-uirecorder server
````

### step 5:执行测试案例

````node
meetyou-uirecorder run ./test/test.spec.js
````