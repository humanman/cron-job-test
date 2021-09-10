const axios = require('axios')

axios({
  url: `https://webhook.site/6b91677f-5232-4d27-bef2-93e553f5d71e`,
  method: 'post'
}).then(function (res) {
  console.log('post success  ', res);
}).catch(function (err) {
  console.log('post error  ', err);
});