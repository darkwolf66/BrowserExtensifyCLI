"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRoute = void 0;
const Helper_1 = require("../../Helper");
const fs = require('fs');
function makeRoute(route, args) {
    let routesPath = Helper_1.Helper.findProjectRootPath() + 'src/routes/';
    let routePathSplitted = route.split('/');
    if (routePathSplitted[0] == 'requirements') {
        throw Error("You cannot add routes to the route requirements path!");
    }
    let routeName = routePathSplitted.pop();
    //Make sure the path is created
    let fullRelativePath = Helper_1.Helper.mkdirPathWithArrayIfDoesntExists(routesPath, routePathSplitted);
    let newFile = fullRelativePath + routeName + '.ts';
    if (fs.existsSync(newFile)) {
        throw Error("File already exists!");
    }
    let exampleRouteFile = fs.readFileSync(Helper_1.Helper.findProjectRootPath() + '/internal/examples/ExampleRoute.example', 'utf-8');
    exampleRouteFile = exampleRouteFile.replaceAll('ExampleRoute', routeName);
    fs.writeFileSync(newFile, exampleRouteFile);
    console.log('Route successfully created!');
}
exports.makeRoute = makeRoute;
//# sourceMappingURL=Route.js.map