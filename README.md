<div align="center">
  <a href="https://github.com/Swrve/hot-tip">
    <img width="240" src="https://github.com/Swrve/hot-tip/blob/master/examples/Hot-Tip.png?raw=true">
  </a>
  <br>
  <h1>Hot-Tip</h1>
  <p>
    A stress-free redux/react tooltip solution
  <p>
</div>

<h2 align="center">Install</h2>

Install with npm:

```bash
npm install --save hot-tip
```

Install with yarn:

```bash
yarn add hot-tip
```



<h2 align="center">Why Hot-Tip?</h2>

We weren't happy with tooltip solutions that looked like react components but under the cover used the DOM api directly (or heaven forbid jQuery).

 ✅ &nbsp; Using React & Redux? Hot-Tip's only dependencies are react, redux and react-redux

 ✅ &nbsp; Hot-Tip plugs directly into your application state, you'll never need to force a redraw

 ✅ &nbsp; Hot-Tip does only one thing, it positions and displays tooltips

 ✅ &nbsp; Positioning is responsive, if you're close to frame boundaries Hot-Tip responds in a predictable way

 ✅ &nbsp; Hot-Tip bundles in at 13.6kb before minification

<h2 align="center">Positioning</h2>

HotTip has four basic positions Top, Left, Right, and Bottom.
Extra Long tips

There is a maximum width of 200px for a tooltip. Overflow and wrapping is handled differently for each position Top, Left, Right, and Bottom.
Position auto-adjustments

Hot Tip will do some magic to make sure your tooltips are always visible even if the target is close to a page boundary.


<h2 align="center">API</h2>

HotTip exposes four modules: two components, a reducer and some utils. The two components are HotTipRoot and HotTip.
The reducer should be included in your redux combineReducers array, it is exported as hotTipReducer. The HotTipRoot is connected to a data-store of this exact name so it's advised to use destructuring.
The utils just provide access to the same positioning calculations that HotTip uses in case they are useful elsewhere in an application (why not?).

<h2 align="center">Licence & Contribute</h2>

HotTip is on MIT so can be used anywhere. Credit is always appreciated. Fork and PR to help improve the product.
