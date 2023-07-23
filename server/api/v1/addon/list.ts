import * as fs from 'fs';

export default defineEventHandler((event) => {
    let allFiles = fs.readdirSync('./knowledge/addons/');
    // cuts 5 characters, ".json", off of each item in the array
    let addonList = allFiles.map(string => string.slice(0, -5));

    return {
        "statusCode": "200",
        "statusMessage": "Success",
        "list": [
            addonList
        ]
    }
})