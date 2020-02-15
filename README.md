# Vue Lazysizes Directive
## If you use [Lazysizes](https://github.com/aFarkas/lazysizes) this vue-directive updates img element if src* attributes are dynamic

## Common usage

### Install package
```
yarn add vue-lazysizes
```

### Script section of SFC
```javascript
<script>
import vue-lazysizes from 'vue-lazysizes';

export default {
  directives: {
    lazysizes: vue-lazysizes
  },
}
</script>
```

### Template section
```html
<img v-lazysizes :data-src="dynamicSrc" :data-srcset="dynamicSrcset" />
```
