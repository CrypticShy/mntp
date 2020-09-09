[].slice.call(document.querySelectorAll('.mdc-button')).forEach(
function(ele) {
  mdc.ripple.MDCRipple.attachTo(ele);
});

[].slice.call(document.querySelectorAll('.mdc-fab')).forEach(
function(ele) {
  mdc.ripple.MDCRipple.attachTo(ele);
});

[].slice.call(document.querySelectorAll('.mdc-text-field')).forEach(
function(ele) {
  mdc.textField.MDCTextField.attachTo(ele);
});