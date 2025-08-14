const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src/assets");

// Get all folders in assets
const folders = fs.readdirSync(baseDir).filter(file =>
  fs.statSync(path.join(baseDir, file)).isDirectory()
);

folders.forEach(folder => {
  const folderPath = path.join(baseDir, folder);
  const files = fs.readdirSync(folderPath)
    .filter(file => /\.(jpe?g|png|svg)$/i.test(file))
    .sort();

  files.forEach((file, index) => {
    const ext = ".jpg"; // force jpg extension
    const newName = `${folder}${index}${ext}`;
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, newName);

    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${file} → ${newName}`);
  });
});

console.log("All files renamed successfully!");
