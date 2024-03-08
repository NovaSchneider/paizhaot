// 异步文件写入
async function writeFileAsync(filePath, content) {
  try {
      await fs.promises.writeFile(filePath, content);
      console.log('File written successfully.');
  } catch (error) {
      console.error('Error writing to file:', error);
      throw error;
  }
}

// 获取文件后缀名
function getFileExtension(filePath) {
  return path.extname(filePath);
}

// 获取文件大小
async function getFileSize(filePath) {
  try {
      const stats = await fs.promises.stat(filePath);
      return stats.size;
  } catch (error) {
      console.error('Error getting file size:', error);
      throw error;
  }
}

// 获取文件/文件夹列表
async function getFileOrFolderList(directoryPath) {
  try {
      const files = await fs.promises.readdir(directoryPath);
      return files;
  } catch (error) {
      console.error('Error getting file/folder list:', error);
      throw error;
  }
}