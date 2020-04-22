const api = ((key, url) => ({ key, url }));

const myApi = api('ssdkffgtgrewefrkothk', 'https://blahblahblah.com/blah/blah');
console.log(myApi.url);