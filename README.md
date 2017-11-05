# Getting Started

## Install
You will need to review the `example/webpack/README.md` as well.
In your django settings, add `react_hypernova` to your installed apps.


### Django Settings

You have some options you may configure in your settings if you like:

    - `REACT_HYPERNOVA_ADDRESS`
    - `REACT_HYPERNOVA_TIMEOUT`

`REACT_HYPERNOVA_ADDRESS` defaults to `http://localhost:8080/batch`

`REACT_HYPERNOVA_TIMEOUT` defaults to `6.05`

### Django Templates
Include the template tags:

```
{% load react_hypernova_tags %}
```

Now you can tell your templates where you would like a react component
rendered server side:

```
{% react_hypernova_component "Coffee" name="Cake" %}
```
`react_hypernova_component` has the following signature:

```
def react_hypernova_component(component_name, **kwargs)
```

Where `**kwargs` will be mapped to your component's `props`.

In the `example/webpack` folder you will find a `static/` directory. This
hosts the 2 javascript files required to run the example. They **must** be
loaded on your page if you want interactivity. Otherwise you will just have
inert HTML.

## Run the Hypernova Server

See `example/webpack/README.md`
