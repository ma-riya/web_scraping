const amazon = require('./amazon');

(async() => {

  await amazon.initialize();
  let details = await amazon.getProductDetails('https://www.amazon.co.uk/Apple-27-inch-display-8th-generation-processor/dp/B07PX8G1CM/ref=sr_1_1_sspa');
  debugger;

})
();