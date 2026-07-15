module.exports = {
  hooks: {
    readPackage(pkg, context) {
      if (pkg.name === "sharp") {
        pkg.scripts = {};
      }
      if (pkg.name === "unrs-resolver") {
        pkg.scripts = {};
      }
      return pkg;
    },
  },
};
