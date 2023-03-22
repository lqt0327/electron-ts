import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';
import path from 'path';
import BuildPlugin from './plugins/buildPlugin'

const config: ForgeConfig = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [new MakerSquirrel({}), new MakerZIP({}, ['darwin']), new MakerRpm({}), new MakerDeb({})],
  plugins: [
    
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig, 
        entryPoints: [
          {
            html: path.join(__dirname, 'electron_view_ts/build/index.html'),
            js: path.join(__dirname, 'electron_view_ts/build/assets/index.js'),
            name: 'main_window',
            preload: {
              js: './src/preload.ts',
            },
          },
        ],
      },
    }),
    new BuildPlugin({
      
    }),
  ],
};

export default config;
