# Vue Lazysizes Directive
## If you use [Lazysizes](https://github.com/aFarkas/lazysizes) this vue-directive updates img element if src attribute is dynamic

## How to use

### Install package
```
yarn add vue-lazysizes
```

### Script section of SFC
```javascript
<script>
import vueLazysizes from 'vue-lazysizes';

export default {
  directives: {
    lazysizes: vueLazysizes
  },
}
</script>
```

### Template section
```html
<img v-lazysizes :data-src="dynamicSrc" />
```
