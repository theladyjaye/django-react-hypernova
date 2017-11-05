# Getting Started

## External Resources

https://blog.larah.me/2017/04/10/react-server-side-rendering/
https://github.com/airbnb/hypernova

## Locations

    - `@static/` - contains relevant components along with the hypernova server
    - `docker` - docker configuration
    - `frontend` - the front end javascript counterpart to hypernova
    - `hypernova` - the build output dir. This is what will be run in the end.

## Make it go right now

```
$ make
$ docker run --rm -p 8080:8080 -it hypernova-example
$ curl -X POST localhost:8080/batch -H Content-Type:application/json -d '{"data":{"name":"Coffee", "data": {"name":"Cake"}}}'
```

## @static

All of the parts we will need for both front end and server side rendering

### @static/frontend
The `@static/frontend` directory contians the relevant files for the frontend.
Note that both `@static/frontend` and `@static/hypernova` both import our
react components. The frontend will need to be required on your pages. In this
case we have webpack breaking it up into 2 files:

    - `common.js`: All of the shared javascript modules
    - `index.js`: Our application specific javascript, which bootstraps
    our server side rendered components.

running `npm run frontend` from the `@static` directory will generate these
files in `./static`


### @static/hypernova
The `@static/hypernova` directory contians the relevant files for the hypernova
server.

#### `@static/hypernova/bundle`
Import all the modules we would like hypernova to render server side here.

#### `@static/hypernova/server`
Boilerplate hypernova server. You can confgure this to your liking, but what is
provided seems to do the trick. More configuration options can be found here:

https://github.com/airbnb/hypernova

### @static/components`

`@static/components` contains the components for your frontend. We will tell
hypernova we would like to render these server side as well.
