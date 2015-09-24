#vue-panel

This plugin aims to provide your [Vue](http://vuejs.org/) application with a
handful of light, composable, Flexbox-powered components.

###Installation

Just `bower` or `npm install ericmcdaniel/vue-panel`. The package is exposed as
a UMD module so you can require it with Browserify/Webpack/etc. or include it in
your page via script tag.

To use this plugin with Vue, simply call `Vue.use(require('vue-panel'))`, or
`Vue.use(window.VuePanel)` if including in a script tag.

###Use

`<v-panel>` responds to a variety of Flexbox parameters and is useable as both a
`display: flex` element and a flex-item:

```html
<v-panel grow="1" shrink="0"></v-panel>
```

`<v-panel>` will display any content inside of the element as it's own
transclusion content:

```html
<v-panel basis="200px">
    <h3>Foo</h3>
    <p>Lorem ipsum dolor sit amet...</p>
</v-panel>
```

`<v-panel>` responds to `align-items`, `align-self`, `order`, `direction`
(flex-direction), `flex`, `grow` (flex-grow), `shrink` (flex-shrink), `basis`
(flex-basis), and `justify` (justify-content).

The plugin provides two more components: `<v-panel-bar>` and `<v-panel-content>`
.

`<v-panel-bar>` responds to `align-items`, `direction`, `justify` and `size`
(flex-basis). It is by default 30px wide. When the `direction` value changes,
the component will broadcast the event `v-panel-bar:direction` (with it's
`$data.direction` value) to child components so they can respond to it's
flex-direction.

`<v-panel-content>` is a simple flex-item that responds to `flex`, `grow` and
`shrink`.

```html
<v-panel>
    <v-panel-bar>
        <button on="click: updateContent">Click</button>
    </v-panel-bar>
    <v-panel-content v-ref="content">Foo</v-panel-content>
</v-panel>
```

###Configuration

Each of the vue-panel components can be globally configured to initialize with
additional `data` values via an object literal where the key is the property
name and the value is the initial value. This is done by passing an object as
the second parameter to the `Vue.use` function like so:

```javascript
Vue.use(VuePanel, {
  // either hyphenated
  'v-panel': {
    class: 'Panel',
    style: {
      color: 'red',
      backgroundColor: '#ccc'
    }
  },
  // or camel case:
  'vPanelBar': {
    class: 'Panel-bar'
  },
  'vPanelContent': {
    class: 'Panel-content'
  }
});
```

`class` and `style` are currently the only options that have any built-in
effect. The value from `class` will be merged with the class list of each
component instance via the `v-bind:class` directive. The value(s) from `style`
will be merged with the inline styles of each component instance via the
`v-bind:style` directive.

###Example

Open `example/index.html` for a straightforward example.

###Tests

The plugin ships with Jasmine specs in the `test` folder if installing from NPM
or GitHub. `npm install` to pull down the Vue dependency, then open
`test/index.html` to run the specs.
