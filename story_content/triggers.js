function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5uMfNlGpZiW":
        Script1();
        break;
      case "691ndQUCijX":
        Script2();
        break;
      case "68AVT16ZLgk":
        Script3();
        break;
      case "6MqgrB3iMXG":
        Script4();
        break;
      case "6i9LZgshIjv":
        Script5();
        break;
      case "6G2aV9i3ftt":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6emCYBnaWq9');
const duration = 20000;
const easing = 'ease-in-out';
const id = '5q3bzuNsAAD';
const tiltAmount = 8;
const growAmount = 0.4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
