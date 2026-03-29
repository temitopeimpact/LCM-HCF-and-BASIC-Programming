function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GSCejcUp3j":
        Script1();
        break;
      case "6MZksjS9gZZ":
        Script2();
        break;
      case "6qpGwBoqcGv":
        Script3();
        break;
      case "6GvB10MPPb0":
        Script4();
        break;
      case "6SgG6GXo1Sl":
        Script5();
        break;
      case "5ag4169ODFL":
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
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
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
