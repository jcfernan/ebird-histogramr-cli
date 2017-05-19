#! /usr/bin/env node

import histogramr from 'ebird-histogramr';
import bhttp from 'bhttp';
import Promise from 'bluebird';
import fs from 'fs';
import url from 'url';

const userArgs = process.argv.slice(2);
const hotspotUrl = userArgs[0];

if ( ! hotspotUrl ) {
    console.log('No hotspot url provided.');
    process.exit(1);
}

Promise.try(() => {

    const session = bhttp.session({ headers: {"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3100.0 Safari/537.36"} });

    return session.get(hotspotUrl);
})
.then((response) => {

    const hotspot = url.parse(hotspotUrl, true);
    const histogram = histogramr(response.body.toString());
    const path = process.cwd() + '/' + hotspot.query.r + '-histogram-' +
        hotspot.query.byr + '-' + hotspot.query.eyr + '.csv';

    fs.writeFile(path, histogram.emit().allCsv, (err) => {

        if (err) return console.log(err);

        console.log("The file was saved to " + path);
        return true;
    });
});