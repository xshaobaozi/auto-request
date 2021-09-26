import typescript from 'rollup-plugin-typescript2';
import path from 'path';

const getPath = (_path) => path.resolve(__dirname, _path);
const extensions = ['.js', '.ts', '.tsx'];
const tsPlugin = typescript({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
  extensions,
});

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  plugins: [
    tsPlugin, // 会自动读取 文件tsconfig.json配置
  ],
};
