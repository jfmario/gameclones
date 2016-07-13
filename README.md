

### Nunjucks #

```javascript
var env = nunjucks.configure('/path/to/templates', {
  tags: {
    blockStart: '{%',
    blockEnd: '%}',
    variableStart: '<$',
    variableEnd: '$>',
    commentStart: '<#',
    commentEnd: '#>'
  }
});
```

### Run #

```
cs site
http-server
```