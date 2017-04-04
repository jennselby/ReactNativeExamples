# Modal Example
### Why?
A modal is a "popup", and a great way to quicky create more "real estate" on your mobile screen!  It comes standard with React Native.

### Properties
This example uses a simple state variable (`this.state.modalVisible`) to control whether the modal is "visible" or not.  `this.state.modalVisible` is passed via the `visible` property, and tells the &lt;Modal&gt; whether it should render on the screen or not.  There are two buttons that simply call `this.setState({modalVisible: ...})` to modify `this.state.modalVisible`.

Other properties we are using:
- animationType={"slide"} will animate onto the screen by sliding in
- transparent={true} lets see the prior view through the unused space of the modal
- onRequestClose expects a function that is called on Android only, when the "back" button is pressed.

### Contents of Modal
Notice that this component has both opening &lt;Modal&gt; and closing &lt;/ Modal&gt; tags.  The React element(s) between these tags are called the "children" of the component, and the Modal component will show this content on the screen when the modal is visible (when the `visible` property is `true`).

### More information
You can read more and see all options here: https://facebook.github.io/react-native/docs/modal.html
