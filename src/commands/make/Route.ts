import {Helper} from "../../Helper";

const fs = require('fs')

export function makeRoute(route:string, args:Array<any>) {
    let routesPath = Helper.findProjectRootPath()+'src/routes/'

    let routePathSplitted = route.split('/')

    if(routePathSplitted[0] == 'requirements'){
        throw Error("You cannot add routes to the route requirements path!")
    }

    let routeName = routePathSplitted.pop()

    //Make sure the path is created
    let fullRelativePath = Helper.mkdirPathWithArrayIfDoesntExists(routesPath, routePathSplitted)

    let newFile = fullRelativePath+routeName+'.ts'
    if(fs.existsSync(newFile)){
        throw Error("File already exists!")
    }

    let exampleRouteFile = fs.readFileSync(Helper.findProjectRootPath()+'/internal/examples/ExampleRoute.example', 'utf-8')
    exampleRouteFile = exampleRouteFile.replaceAll('ExampleRoute', routeName)

    fs.writeFileSync(newFile, exampleRouteFile)

    console.log('Route successfully created!')
}