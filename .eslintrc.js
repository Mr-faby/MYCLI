module.exports = {
    // 不往父级查找
    root: true,
    // 环境配置
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    // 拓展规则
    extends: 'airbnb-base',
    // 自定义规则，会覆盖一部分拓展规则
    // 具体这些参数代表什么规则，可以去eslint官网看
    rules: {
        indent: ['warn', 4], // 缩进
        'no-alert': 'error', // 禁止使用alert confirm prompt
        'no-var': 'error', // 要求使用 let 或 const 而不是 var
        'no-const-assign': 2, // 禁止修改const声明的变量
        'no-console': 'off', // 禁止console
        'no-debugger': 'error', // 禁止debugger
        'no-unreachable': 'error', // 不允许在return、throw、continue和break语句之后出现无法访问的代码
        'eol-last': 'error', // 文件末尾强制换行
        'no-new': 'off', // 禁止在使用new构造一个实例后不赋值
        // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量
        'no-trailing-spaces': 'error', // 一行结束后面不要有空格
        'space-before-function-paren': [
            // 函数定义时括号前面要有空格
            'error',
            {
                anonymous: 'always', // 匿名函数表达式 function () {}
                named: 'never', // 命名函数表达式 name() {}
                asyncArrow: 'always', // 异步箭头函数表达式 async () => {}
            },
        ],
        // 'no-undef': 'error', // 不能有未定义的变量,定义之前必须有var或者let
        'no-undef-init': 'error', // 变量初始化时不能直接给它赋值为undefined
        'no-undefined': 'error', // 不能使用undefined
        curly: ['error', 'all'], // 必须使用 if(){} 中的{}
        'generator-star-spacing': 'error', // allow async-await
        'space-in-parens': ['error', 'never'], // 禁止圆括号有空格，如Test( 2, 3 )
        'space-infix-ops': 'error', // 在操作符旁边必须有空格， 如 a + b而不是a+b
        'space-before-blocks': ['error', 'always'], // 语句块之前必须有空格 如 ) {}
        'spaced-comment': ['error', 'always'], // 注释前必须有空格
        'arrow-parens': 'off', // 箭头函数的参数要有()包裹
        'arrow-body-style': 'off', // 要求箭头函数必须有大括号 如 a => {}
        'arrow-spacing': ['error', { before: true, after: true }], // 定义箭头函数的箭头前后都必须有空格
        'template-curly-spacing': ['error', 'never'], // 禁止末班字符串中的{}中的变量出现空格，如以下错误`${ a }`
        'no-multi-spaces': 'error', // 禁止多个空格，只有一个空格的地方必须只有一个
        'no-whitespace-before-property': 'error', // 禁止属性前有空格，如obj. a
        'linebreak-style': 'off', // Windows 操作系统中使用的换行符（新行）通常是回车符（CR）后跟换行符（LF），使其成为回车符换行符（CRLF），而 Linux 和 Unix 使用简单的换行符（LF）。对应的控制序列是"\n"（对于LF）和"\r\n"对于（CRLF）。
        'keyword-spacing': ['error', { before: true, after: true }], // 关键字前后必须有空格 如 } else {
        // endOfLine: 'error', // 结尾是 \n \r \n\r auto
        'import/extensions': ['off'],
        'import/no-unresolved': ['off'],
        semi: ['error', 'always'],
    },
    // 语言风格
    parserOptions: {
        // 支持import
        sourceType: 'module',
    },
};
