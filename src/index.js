const api = ((key, url) => ({ key, url }));

const root = document.getElementById('root');
root.className = 'hello';
root.innerText = 'Hello guys';
console.log(root);
const myApi = api('ssdkffgtgrewefrkothk', 'https://blahblahblah.com/blah/blah');
console.log(myApi.url);