const csvtojson = require('csvtojson')
const path = require('path')
const fs = require('fs')

const csvPath = path.join(__dirname, '../data/input-data.csv')
const jsonOutPath = path.join(__dirname, '../output/output-data.json')

csvtojson()
    .fromFile(csvPath)
    .then((json) => {
        fs.writeFile(jsonOutPath, JSON.stringify(json, null, 2), (error) => {
            if (error) {
                return console.log('Error during JSON conversion from CSV [', error, ']')
            }
            console.log('Conversion ended successfully')
        })
    })