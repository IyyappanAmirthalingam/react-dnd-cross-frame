React Drag And Drop to IFrame
=====================

Based on the [Single Target](http://gaearon.github.io/react-dnd/examples-dustbin-single-target.html) react-dnd demo.

Uses a [patched](https://github.com/akorchev/react-dnd-html5-backend) version of react-dnd-html5-backend and a custom [Frame](https://github.com/akorchev/react-dnd-cross-frame/blob/master/src/Frame.js) component which passes the `dragDropManager` instance to the `DropTarget` that lives in the iframe.

```
@DragDropContext(HTML5Backend)
export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Frame>
            <Dustbin />
          </Frame>
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name='Glass' />
          <Box name='Banana' />
          <Box name='Paper' />
        </div>
      </div>
    );
  }
}
```

```
npm install
npm start
open http://localhost:3000
```


## License

CC0 (public domain)
