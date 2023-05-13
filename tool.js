const fs = require('fs-extra')
const path = require('path')

const p1 = path.join(__dirname, 'dist/quickLinkData_time.json')

const c1 = fs.readJSONSync(p1,{encoding: 'utf8'})

for(let k in c1) {
    for(let k2 in c1[k]) {
        c1[k][k2].collect = 0
    }
}

fs.writeJSONSync(p1, c1, {encoding: 'utf8'})

const p2 = path.join(__dirname, 'dist/quickLinkData_default.json')

const c2 = fs.readJSONSync(p2, {encoding: 'utf8'})

for(let k in c2.default) {
    c2.default[k].collect = 0
}

fs.writeJSONSync(p2, c2, {encoding: 'utf8'})

const p3 = path.join(__dirname, 'dist/quickLinkData_collect.json')

const c3 = fs.readJSONSync(p3,{encoding: 'utf8'})

for(let k in c3.default) {
    c3.default[k].collect = 1
}

console.log(p3, '-----', c3)
fs.writeJSONSync(p3, c3, {encoding: 'utf8'})
