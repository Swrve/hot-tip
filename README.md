<div align="center">
  <a href="https://github.com/Swrve/hot-tip">
    <img width="240" src="https://github.com/Swrve/hot-tip/blob/master/examples/hot-tip.png?raw=true">
  </a>
  <br>
  <h1>HotTip</h1>
  <p>
    A stress-free redux/react tooltip solution
  <p>
</div>

Install
---------------------------------

Install with npm:

```bash
npm install --save hot-tip
```

Install with yarn:

```bash
yarn add hot-tip
```

Examples
---------------------------------

The examples contains all the information here and more.

```bash
yarn run examples
```

Why HotTip?
---------------------------------

We weren't happy with tooltip solutions that looked like react components but under the cover used the DOM api directly (or heaven forbid jQuery). HotTip

 ✅ &nbsp; Using React & Redux? HotTip's only dependencies are react, redux and react-redux

 ✅ &nbsp; HotTip plugs directly into your application state, you'll never need to force a redraw

 ✅ &nbsp; HotTip does only one thing, it positions and displays tooltips

 ✅ &nbsp; Positioning is responsive, if you're close to frame boundaries HotTip responds in a predictable way (see examples)

 ✅ &nbsp; HotTip bundles in at about 40kb (10kb compressed)

Positioning
---------------------------------

HotTip has four basic positions *Top*, *Left*, *Right*, and *Bottom*.
Extra Long tips

There is a maximum width of 200px for a tooltip.

Overflow and wrapping is handled differently for each position Top, Left, Right, and Bottom.

**Position auto-adjustments**

Hot Tip will do some magic to make sure your tooltips are always visible even if the target is close to a page boundary. All positioning utils are available as a named import.

```javascript
import {utils} from 'hot-tip'
```

API
---------------------------------

HotTip exposes four modules: two components, a reducer and some utils. The two components are *HotTipRoot* and *HotTip*.

The reducer should be included in your redux combineReducers array, it is exported as *hotTipReducer*. The HotTipRoot is connected to a data-store of this exact name so it's advised to use destructuring.

```javascript
import {HotTip, HotTipRoot, hotTipReducer, utils} from 'hot-tip'
```

The *utils* just provide access to the same positioning calculations that HotTip uses in case they are useful elsewhere in an application (why not?).

As the `HotTip` component is the part you'll be reaching for most regularly it is also the default export which means you can import it easily using whatever name you want:

```javascript
import HotTip from 'hot-tip'
<HotTip tip="I'm a tooltip">hover here</HotTip>
// or

import Hover from 'hot-tip'
<Hover tip="I'm a tooltip">hover here</Hover>
```

Licence & Contribute
---------------------------------

HotTip is on MIT so can be used anywhere with almost no restrictions. Credit is always appreciated. Fork and open a pull request to help improve the package.
