# ChaMap
One beautifully designed free outdoor basemap for the Chattanooga region. 

## Contribute
This project at it core consists of a free and open outdoor focused base map that anyone can use. The base map is created using openstreetmap, which you can think of as a kind of wikipedia for maps. There are several ways to contribute to the project. 

#### 1. Update the Map
Add your favorite outdoor recreation spot to the basemap using [OpenStreetMap](http://www.openstreetmap.org/#map=13/35.0360/-85.3221&layers=C). If you haven't ever edited the map before check out [this](http://learnosm.org/en/) helpful guide that will get you up and mapping in no time. 
#### 2. Make the Map Pretty
Not only is the basemap open for anyone to improve, but the design of the basemap is also open as well. You can make [suggestions](https://github.com/openchattanooga/chamap-design/issues) of design changes to the basemap you would like to see or just make the changes yourself and submit them back to the [project](https://github.com/openchattanooga/chamap-design/). 
#### 3. Make the Project Website Awesome
[Help](https://github.com/openchattanooga/chamap/tree/gh-pages) update the [project website](http://openchattanooga.com/chamap/) to make finding and using the map as easy as possible. We need designers and copy editors to make the content compelling and coders to build the project website into a fully functional webapp that can be used to take the map on the trails. See "Building The Project Site" below for build instructions.
#### 4. Make it Mobile
Contribute to the [iPhone](https://github.com/openchattanooga/chamap-iphone-app) or [Andriod](https://github.com/openchattanooga/chamap-andriod-app) mobile app development. 

## Building The Project Site

### Directly On GitHub

The project utilizes GitHub page's Jekyll support. If you see something that needs to be resolved that is relatively straightforward, you can fork the project, edit the source in your fork using GitHub's built-in editor and send a pull request. If your pull request is accepted, the page will be automatically updated.

### On Your Local Machine

If your change is more complicated, you will want to fork the project, clone your fork, and perform edits on your local machine.

#### Requirements

At least [Ruby](https://www.ruby-lang.org/en/installation/) 2.2 and [Bundler](http://bundler.io/).

#### Project Setup

You first need to install the project's Ruby dependencies. From the root directory, run:

```bash
bundle install
```

#### Running

To run the project:

```bash
bundle exec jekyll serve --watch
```

The site will now be available at `http://localhost:4000`. Jekyll will watch for changes in the project and reload them.

Project built with love from [Open Chattanooga](http://openchattanooga.com/).
