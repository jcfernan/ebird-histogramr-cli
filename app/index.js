#! /usr/bin/env node
'use strict';

var _ebirdHistogramr = require('ebird-histogramr');

var _ebirdHistogramr2 = _interopRequireDefault(_ebirdHistogramr);

var _bhttp = require('bhttp');

var _bhttp2 = _interopRequireDefault(_bhttp);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userArgs = process.argv.slice(2);
var hotspotUrl = userArgs[0];

if (!hotspotUrl) {
    console.log('No hotspot url provided.');
    process.exit(1);
}

_bluebird2.default.try(function () {

    return _bhttp2.default.get(hotspotUrl);
}).then(function (response) {

    var hotspot = _url2.default.parse(hotspotUrl, true);
    var histogram = (0, _ebirdHistogramr2.default)(response.body.toString());
    var path = process.cwd() + '/' + hotspot.query.hotspots + '-histogram-' + hotspot.query.bYear + '-' + hotspot.query.eYear + '.csv';

    _fs2.default.writeFile(path, histogram.emit().allCsv, function (err) {

        if (err) return console.log(err);

        console.log("The file was saved to " + path);
        return true;
    });
});