"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const fs = require('fs');
class Helper {
    static findProjectRootPath() {
        let currentPath = './';
        while (fs.realpathSync(currentPath)) {
            if (fs.existsSync(currentPath + 'browserextensify.config.json')) {
                return currentPath;
            }
            currentPath += '../';
        }
        if (!fs.realpathSync(currentPath)) {
            throw Error('Project not found!');
        }
    }
    static mkdirPathWithArrayIfDoesntExists(existingPath, pathToCreate) {
        let fullRelativePath = existingPath;
        for (let i in pathToCreate) {
            fullRelativePath += pathToCreate[i] + '/';
            if (!fs.existsSync(fullRelativePath)) {
                fs.mkdirSync(fullRelativePath);
            }
        }
        return fullRelativePath;
    }
}
exports.Helper = Helper;
//# sourceMappingURL=Helper.js.map