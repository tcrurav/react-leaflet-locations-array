# Simplest example with react-leaflet, some markers and position you click on

This project is just a project example to learn how to use Leaflet with React.

When you run this project It shows an array of locations, and also you can click in the map and gives you the latitude and longitude of the position you clicked on.

## Getting Started

Read the links in the acknowlegements section bellow to get an idea about Leaflet.

Download links:

From Github: https://github.com/tcrurav/react-leaflet-locations-array.git

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/tcrurav/react-leaflet-locations-array.git
```

Once you have cloned the project customize your environment files.

Now install all dependencies.

```
cd react-leaflet-locations-array
npm install
```

And finally run the project.

```
cd react-leaflet-locations-array
npm start
```

Enjoy!!!

## Some tips to start using react-leaflet

As you can see in this example you need the following packages:
```
npm install leaflet
npm install react-leaflet
```

It's important that you import the leaflet styles when you are using react-leaflet:
```
import "leaflet/dist/leaflet.css";
```

When you are using react-leaflet don't forget to give some dimmensions to your map. If you don't then the map is going to be invisible. Here are the style class I have used for the `MapContainer` in this example:
```
.locations-map-container{
  margin: 10vh auto;
  width: 80vw;
  height: 80vh;
}
```

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [leaflet](https://react-leaflet.js.org/docs/start-introduction/) - an open-source JavaScript library
for mobile-friendly interactive maps.
* [react-leaflet](https://react-leaflet.js.org/docs/start-introduction/) - React Leaflet provides bindings between React and Leaflet. It does not replace Leaflet, but leverages it to abstract Leaflet layers as React components.

## Acknowledgments

* https://leafletjs.com/examples/quick-start/. Official Leaflet website.
* https://react-leaflet.js.org/docs/start-installation/. Official react-leaflet website.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
