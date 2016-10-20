#! /usr/bin/env node

import histogramr from 'ebird-histogramr';
import bhttp from 'bhttp';
import Promise from 'bluebird';
import fs from 'fs';
import url from 'url';

const userArgs = process.argv.slice(2);
const hotspotUrl = userArgs[0];

Promise.try(() => {

    return bhttp.get(hotspotUrl);
})
.then((response) => {

    const hotspot = url.parse(hotspotUrl, true);
    const histogram = histogramr(response.body.toString());
    const path = process.cwd() + '/' + hotspot.query.hotspots + '-histogram.csv';

    fs.writeFile(path, histogram.emit().csv, (err) => {

        if (err) return console.log(err);

        console.log("The file was saved to " + path);
        return true;
    });
});