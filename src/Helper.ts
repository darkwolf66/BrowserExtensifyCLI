const fs = require('fs')

export class Helper {
    static findProjectRootPath(){
        let currentPath = './'
        while (fs.realpathSync(currentPath)){
            if(fs.existsSync(currentPath+'browserextensify.config.json')){
                return currentPath
            }
            currentPath += '../'
        }
        if(!fs.realpathSync(currentPath)){
            throw Error('Project not found!')
        }
    }
    static mkdirPathWithArrayIfDoesntExists(existingPath:string, pathToCreate:Array<string>):string{
        let fullRelativePath = existingPath;
        for (let i in pathToCreate){
            fullRelativePath += pathToCreate[i]+'/';
            if(!fs.existsSync(fullRelativePath)){
                fs.mkdirSync(fullRelativePath)
            }
        }
        return fullRelativePath;
    }
}