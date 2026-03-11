module.exports = function (api) {
  const platform = api.caller((c) => c && c.platform);
  const isDev = api.caller((c) =>
    c?.isDev != null ? c.isDev : process.env.NODE_ENV === 'development'
  );

  api.cache.using(() => `${platform}:${isDev}`);

  return {
    presets: [
      'babel-preset-expo',
      [
        'react-strict-dom/babel-preset',
        { debug: isDev, dev: isDev, platform },
      ],
    ],
  };
};
