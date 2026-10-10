// 获取登录表单元素
const loginForm = document.getElementById('loginForm');

// 为表单添加提交事件监听器
loginForm.addEventListener('submit', function (e) {
    // 阻止表单默认提交行为
    e.preventDefault();

    // 获取输入的账号和密码
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 模拟登录验证，这里简单判断账号和密码是否都为 1066528
    if (username === '1066528' && password === '1066528') {
        // 登录成功，跳转到 main.html 页面
        window.location.href = 'main.html';
    } else {
        // 登录失败，显示错误信息
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = '账号或密码错误，请重新输入';
    }
});