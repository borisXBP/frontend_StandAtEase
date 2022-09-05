import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  inlineLimit: 10,
  mock: undefined,
  mfsu: false,
  layout: {
    title: null,
    name: 'Boris',
    primaryColor: '#FFDEAD',
    contentWidth: '100px',
  },
  routes,
  npmClient: 'pnpm',
});
