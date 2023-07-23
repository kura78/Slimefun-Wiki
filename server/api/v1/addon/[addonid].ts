import * as fs from 'fs';

export default defineEventHandler((event) => {
  const addonid = event.context.params.addonid;
  if (addonid) {
    let allFiles = fs.readdirSync('./knowledge/addons/');
    // cuts 5 characters, ".json", off of each item in the array
    let addonList = allFiles.map(string => string.slice(0, -5));
    if (addonList.includes(addonid)) { // checks if addonList includes this addon
      var addonContent = fs.readFileSync('./knowledge/addons/' + addonid + '.json')

      return {
        statusCode: 200,
        statusMessage: "Success",
        ...JSON.parse(addonContent.toString())
      }
    } else {
      throw createError({
        statusCode: 404,
        statusMessage: "There is no addon by this ID.",
      })
    }
  } else {
    throw createError({
      statusCode: 404,
      statusMessage: "There is no addon by this ID.",
    })
  }
})