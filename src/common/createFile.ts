import { access } from 'fs/promises';
import { constants } from 'fs';
const fs = require('fs');

// export const checkHasFile = async (filePath: string) => {
//   try {
//     await access(filePath, constants.R_OK | constants.W_OK);
//     console.log('can access');
//   } catch {
//     console.error('cannot access');
//   }
// };

export const createDir = (dirPath: string) => {
  return new Promise((resolve, reject) => {
      fs.mkdir(dirPath, function (err: any) {
        if (err) {
            console.log('目录创建失败，可能已存在');
        } else {
          console.log(`接口目录路径：【${dirPath}】`);
        }
        resolve('')
      });
  })
};
