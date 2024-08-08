# react-dev-os

![NPM version](https://img.shields.io/npm/v/react-dev-os.svg?style=flat)
![NPM license](https://img.shields.io/npm/l/react-dev-os.svg?style=flat)
![NPM total downloads](https://img.shields.io/npm/dt/react-dev-os.svg?style=flat)
![NPM monthly downloads](https://img.shields.io/npm/dm/react-dev-os.svg?style=flat)

DevOS provides a simple window manager for custom and/or pre-built tools that can easily be added to your current react project.

## Install

```bash
$ npm install react-dev-os
 # or
$ yarn add react-dev-os
```

## Getting Started

Adding DevOS to your project is simple. Since it is just a React component, we can just import and add it to our component tree. There are a few different props that we can pass down, but for this basic example we will just pass in an array to the tools prop.

```jsx
import DevOS from "./DevOS";
import tools from "./tools";

const App = () => {
  return (
    <View>
      <Body />
      <DevOS tools={tools} />
    </View>
  );
};
```
