import path from 'path';

import type { GatsbyNode } from 'gatsby';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@utils': path.resolve('src/utils'),
        '@atoms': path.resolve('src/components/atoms'),
        '@molecules': path.resolve('src/components/molecules'),
        '@organisms': path.resolve('src/components/organisms'),
        '@icons': path.resolve('src/components/icons'),
      },
      modules: [path.resolve('src'), 'node_modules'],
    },
  });
};
