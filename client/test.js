const manifest = require('./test.json');
// const cloudFrontCompat = require('./next-aws-cloudfront');
// console.log(test.pages.ssr.nonDynamic);
const router = manifest => {
  // const {
  //   pages: { ssr, html },
  // } = manifest;

  // const allDynamicRoutes = { ...ssr.dynamic, ...html.dynamic };
  // console.log(manifest);
  return path => {
    console.log(path);
    if (1) {
      return 1;
    }

    for (let route in allDynamicRoutes) {
      const { file, regex } = allDynamicRoutes[route];

      const re = new RegExp(regex, 'i');
      const pathMatchesRoute = re.test(path);

      if (pathMatchesRoute) {
        return file;
      }
    }

    // path didn't match any route, return error page
    return 'pages/_error.js';
  };
};

const normaliseUri = uri => (uri === '/' ? '/index' : uri);

const handler = async event => {
  const pagePath = router(manifest)(22);

  if (0) {
    request.origin.s3.path = '/static-pages';
    request.uri = pagePath.replace('pages', '');
    return request;
  }

  const page = require(`./${pagePath}`);

  const { req, res, responsePromise } = cloudFrontCompat(event.Records[0].cf);

  page.render(req, res);

  return responsePromise;
};
handler();
