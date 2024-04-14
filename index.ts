const {
  fs,
  writeFileSync,
  mkdirSync,
  readFileSync,
  copySync,
  existsSync,
  rmSync,
} = require("fs-extra");
const path = require("path");
const yaml = require("js-yaml");

const srcDir = path.join(__dirname, "src");
const distDir = path.join(__dirname, "dist");
const imgDir = path.join(srcDir, "img");
const linkListPath = path.join(srcDir, "linklist.yml");
const imgPath = path.join(distDir, "img");
const linkListDistPath = path.join(distDir, "linklist.json");
const announcementPath = path.join(srcDir, "announcement.yml");
const annoucementDistPath = path.join(distDir, "announcement.json");

try {
  if (existsSync(distDir)) {
    rmSync(distDir, { recursive: true, force: true });
  }
  mkdirSync(distDir);

  console.log("Successfully cleaned dist.");
} catch (e) {
  console.error(e);
}

try {
  const listData = yaml.load(readFileSync(linkListPath, "utf8"));
  copySync(imgDir, imgPath);
  writeFileSync(linkListDistPath, JSON.stringify(listData, null, 2));

  console.log("Successfully generated linkList.");
} catch (e) {
  console.error(e);
}

try {
  const announcementData = yaml.load(readFileSync(announcementPath, "utf8"));
  writeFileSync(annoucementDistPath, JSON.stringify(announcementData, null, 2));
  console.log("Successfully generated annoucements.")
} catch (e) {
  console.error(e);
}
