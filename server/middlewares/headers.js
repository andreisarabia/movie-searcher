const defaultHeaders = Object.freeze({
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'deny',
  'X-XSS-Protection': '1; mode=block',
});

module.exports = isProd => {
  /** TODO: add CSP for production */
  // res.set({ ...defaultHeaders, 'Content-Security-Policy': '' });
  const headers = isProd
    ? defaultHeaders
    : {
        ...defaultHeaders,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'content-type',
      };

  return (req, res, next) => {
    res.set(headers);

    next();
  };
};
