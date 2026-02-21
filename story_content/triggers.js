function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5z0M1VIjyHb":
        Script1();
        break;
      case "6dspN0j9ZEa":
        Script2();
        break;
      case "5sdcxMeFapd":
        Script3();
        break;
      case "6KkHXOOfqCz":
        Script4();
        break;
      case "6JeFKa4RjEg":
        Script5();
        break;
      case "5gwBH0Wi9V6":
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
