module.exports = {
  packagerConfig: {
    // extraResources: [
    //   {
    //     from: "./electron_assets",
    //     to: "electron_assets"
    //   }
    // ]
  },
  rebuildConfig: {

  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
  ]
};
