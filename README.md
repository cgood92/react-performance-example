# React Performance Example

A presentation for OpenWest Conference 2019.

### Background

While building Workfront Library, we had a grid of assets that were clickable. I noticed that after clicking an asset, it took almost a full second sometimes for app to update to show that asset as selected. I learned some things about React performance, which I have replicated in this repository.

### How to increase performance

The best thing you could do for your app is to reduce the number of re-renders a component goes through, especially for components with expensive computations. This example repository shows how to reduce unnecessary re-renders.

### Show me by example

**Final product:** https://codesandbox.io/s/github/cgood92/react-performance-example/tree/master/

- [Commit 0](https://github.com/cgood92/react-performance-example/tree/2e8462b6069db213db791ccd936a204c770f83c7)

  I notice that the components in the grid are re-rendering more often than makes sense. I know this because I put a `console.count()` in the render function. I also turn on "Highlight Updates" in the [React Dev Tools](https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation). Every time I click an item in the grid, all the other items in the grid also re-render, even though they look exactly the same. Strange...

- [Commit 1](https://github.com/cgood92/react-performance-example/commit/2e8462b6069db213db791ccd936a204c770f83c7)

  I dig in to see exactly what props have changed, causing the re-render to happen. After comparing (shallow-ly) old props vs new props, I see that `item` is different on re-render, even though the object mostly looks the same. That must mean the the item object reference is different, even though its contents look similar.

- [Commit 2](https://github.com/cgood92/react-performance-example/commit/ad13f381f2cdbaf67553e0b7e04f1ce9b8411aa1)

  I find the culprit

  `Object.assign({}, item, { isSelected: item.id === selectedId })`

  That line was causing a new object to be created every time. I figure out a way to not augment the item object in the selector, but instead pass in `isSelected` as a separate prop. This solves the object reference difference problem.

- [Commit 3](https://github.com/cgood92/react-performance-example/commit/d7c5f63c12418ef48e8108dcb92190db601a0cfb)

  Because I am using `.map()` on an array in my selector, it is creating a new array each time, though it's contents look the same. I solve this by using an array stored in `redux`, so that it doesn't change references. I pass `id` to each `<Card/>`, instead of the whole object. I then get the item in each `<Card/>` using a `redux` selector.

- [Commit 4](https://github.com/cgood92/react-performance-example/commit/d530f102feb5b41837308d196f933ffb47931f6f)

  Now React doesn't have to re-render components, because the object references haven't changed. We tell react not to do this unnecessary re-render if the props are the same by using `memo` on functional components, or `PureComponent` on class components. Or, if you are using `redux`, they will provide a similar shallow-comparison on props to determine whether to re-render the component or not.
