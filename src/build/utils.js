/**
 * The module dependencies.
 */
const path = require("path");
const slash = require("slash");

module.exports.srcPath = (basePath = "", destPath = "") => slash(path.resolve(__dirname, "../assets/", basePath, destPath));
module.exports.srcStylesPath = destPath => exports.srcPath("scss", destPath);
module.exports.srcImagesPath = destPath => exports.srcPath("images", destPath);
module.exports.srcFontsPath = destPath => exports.srcPath("fonts", destPath);

module.exports.buildPath = (basePath = "", destPath = "") => path.resolve(__dirname, "../../dist", basePath, destPath);
module.exports.buildStylesPath = destPath => exports.buildPath("css", destPath);
module.exports.buildImagesPath = destPath => exports.buildPath("images", destPath);
module.exports.buildFontsPath = destPath => exports.buildPath("fonts", destPath);

module.exports.detectEnv = () => {
    const env = process.env.NODE_ENV || "development";
    const isDev = env === "development";
    const isProd = env === "production";
    const isBuild = env === "build";

    return {
        env,
        isDev,
        isProd,
        isBuild,
    };
};
