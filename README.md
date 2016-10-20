# eBird Histogram Reader CLI (ebird-histogramr-cli)
####v0.1.0

A CLI tool for parsing eBird ["BarChart" histogram files](http://help.ebird.org/customer/portal/articles/1010553-understanding-the-ebird-bar-charts).

## Features

Currently, the only feature is conversion of an eBird Histogram into a CSV. More features coming soon!

## Installation

You'll need Node.js installed on your system. After that, in the terminal, you can install with the command:

```
npm install ebird-histogram-cli --global
```

## Usage

It's a pretty simple command-line tool right now. The only command right now is:

```
histogramr-csv "[Histogram URL]"
```

The "BarChart URL" is found at the bottom of any eBird "Bar Chart" page. Just copy the link, and paste it in with quotes around it.

So, for example...

```
histogramr-csv "http://ebird.org/ebird/BarChart?cmd=getChart&displayType=download&getLocations=hotspots&hotspots=L2093687&bYear=1900&eYear=2016&bMonth=1&eMonth=12&reportType=location&"
```

This will create a `*-histogram.csv` file, where `*` is the hotspot location ID. Histograms do not contain the human-readable Hotspot name, unfortunately, so this is the format for now.

##License

The MIT License (MIT)

Copyright (c) 2016 Robert Gerald Porter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
