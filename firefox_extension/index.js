var buttons = require('sdk/ui/button/action');
var data = require('sdk/self').data;
var panel = require('sdk/panel');

var converter = panel.Panel({
  width: 360,
  height: 120,
  contentURL: data.url('popup.html'),
  contentScriptFile: [data.url('compiled.js'), data.url("popup.js")]
});

var changeState = function (state) {
  converter.show({ position: button });
};

var button = buttons.ActionButton({
  id: "show-converter",
  label: "Show Converter",
  icon: {
    "16": "./icon16.png",
    "32": "./icon32.png",
    "64": "./icon64.png"
  },
  onClick: changeState
});
