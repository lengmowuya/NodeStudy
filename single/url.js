// let url = require('url');
// // 把字符串转成URL对象
// const myURL = url.parse('https//user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
// console.log(myURL);
// Url {
//     protocol: null,
//     slashes: null,
//     auth: null,
//     host: null,
//     port: null,
//     hostname: null,
//     hash: '#hash',
//     search: '?query=string',
//     query: 'query=string',
//     pathname: 'https//user:pass@sub.example.com:8080/p/a/t/h',
//     path: 'https//user:pass@sub.example.com:8080/p/a/t/h?query=string',
//     href: 'https//user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
//   }


const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(myURL);
// URL {
//     href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
//     origin: 'https://sub.example.com:8080',
//     protocol: 'https:',
//     username: 'user',
//     password: 'pass',
//     host: 'sub.example.com:8080',
//     hostname: 'sub.example.com',
//     port: '8080',
//     pathname: '/p/a/t/h',
//     search: '?query=string',
//     searchParams: URLSearchParams { 'query' => 'string' },
//     hash: '#hash'
//   }