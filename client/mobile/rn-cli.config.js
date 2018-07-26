/**
 * This solution was taken from here: https://github.com/facebook/metro/issues/1
 * It solves the issue with react-native-packager not following symlinks with yarn workspaces.
 */
const path = require('path');
const fs = require('fs');

let blacklist,
    getPolyfills;

// Get blacklist factory
try {
  blacklist = require('metro-bundler/src/blacklist');
} catch(e) {
  blacklist = require('metro/src/blacklist');
}

// Get default react-native polyfills
try {
  getPolyfills = require('react-native/rn-get-polyfills');
} catch(e) {
  getPolyfills = () => [];
}

// See if project has custom polyfills, if so, include the path to them
try {
  let customPolyfills = require.resolve('./polyfills.js');
  getPolyfills = (function(originalGetPolyfills) {
    return () => originalGetPolyfills().concat(customPolyfills);
  })(getPolyfills);
} catch(e) {}

const moduleBlacklist = [
  //Add whatever you need to the blacklist for your project
  /node_modules[^\/]+\/.*/,
  /.*shared\/node_modules.*/,
];

const baseModulePath = path.resolve(__dirname, 'node_modules');

// NOTE: Scoped modules hasn't been fully tested yet. Please respond to
// let th317erd know if this code works with scoped modules
function getSymlinkedModules() {
  function checkModule(fileName, alternateRoots) {
    try {
      let fullFileName = path.join(baseModulePath, fileName),
          stats = fs.lstatSync(fullFileName);

      if (stats.isSymbolicLink()) {
        let realPath = fs.realpathSync(fullFileName);
        if (realPath.substring(0, (__dirname).length) !== __dirname)
          alternateRoots.push(realPath);
      }
    } catch (e) {}
  }

  function checkAllModules(modulePath, alternateRoots) {
    var stats = fs.lstatSync(modulePath);
    if (!stats.isDirectory())
      return alternateRoots;

    fs.readdirSync(modulePath).forEach((fileName) => {
      if (fileName.charAt(0) === '.')
        return;

      if (fileName.charAt(0) !== '@')
        checkModule(fileName, alternateRoots);
      else
        checkAllModules(path.join(modulePath, fileName), alternateRoots);
    });

    return alternateRoots;
  }

  return checkAllModules(baseModulePath, []);
}

function getExtraModulesForAlternateRoot(fullPath) {
  var packagePath = path.join(fullPath, 'package.json'),
      packageJSON = require(packagePath),
      alternateModules = [].concat(Object.keys(packageJSON.dependencies || {}), Object.keys(packageJSON.devDependencies || {}), Object.keys(packageJSON.peerDependencies || {})),
      extraModules = {};

  for (var i = 0, il = alternateModules.length; i < il; i++) {
    var moduleName = alternateModules[i];
    extraModules[moduleName] = path.join(baseModulePath, moduleName);
  }

  return extraModules;
}

//alternate roots (outside of project root)
var alternateRoots = getSymlinkedModules(),
//resolve external package dependencies by forcing them to look into path.join(__dirname, "node_modules")
    extraNodeModules = alternateRoots.reduce((obj, item) => {
      Object.assign(obj, getExtraModulesForAlternateRoot(item));
      return obj;
    }, {});

if (alternateRoots && alternateRoots.length)
  console.log('Found alternate project roots: ', alternateRoots);

module.exports = {
  getBlacklistRE: function() {
    return blacklist(moduleBlacklist);
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname)
    ].concat(alternateRoots);
  },
  extraNodeModules,
  getPolyfills
};