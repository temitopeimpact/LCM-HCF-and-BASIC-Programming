window.InitUserScripts = function()
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
window.Script2 = function()
{
  // Get Storyline player
var player = GetPlayer();

// Read inputs from Storyline variables
var base = player.GetVar("numBase");
var start = player.GetVar("rangeStart");
var end = player.GetVar("rangeEnd");

// Validate input
if (base <= 0 || start > end) {
    player.SetVar("outputText", "Invalid input. Please check your values.");
} else {
    var result = "Multiples of " + base + " from " + start + " to " + end + ":\n\n";
    var found = false;

    for (var i = start; i <= end; i++) {
        if (i % base === 0) {
            result += i + "\n";
            found = true;
        }
    }

    if (!found) {
        result += "No multiples found in this range.";
    }

    // Send result back to Storyline
    player.SetVar("outputText", result);
}

}

window.Script3 = function()
{
  // Get Storyline player
var player = GetPlayer();

// ---------- READ RAW TEXT ----------
var numbersTextRaw = player.GetVar("TextEntry6");
var rangeStartRaw = player.GetVar("TextEntry7");
var rangeEndRaw = player.GetVar("TextEntry8");

// ---------- CLEAN & CONVERT ----------
var numbersText = String(numbersTextRaw).trim();
var rangeStart = parseInt(String(rangeStartRaw).trim(), 10);
var rangeEnd = parseInt(String(rangeEndRaw).trim(), 10);

// ---------- CONVERT NUMBERS LIST ----------
var numbers = numbersText
  .split(",")
  .map(function(n) {
    return parseInt(n.trim(), 10);
  })
  .filter(function(n) {
    return !isNaN(n) && n > 0;
  });

// ---------- DEBUG SAFETY (OPTIONAL) ----------
// Uncomment this if you want to see raw values during testing
/*
player.SetVar(
  "CommonMultiplesOutput",
  "DEBUG → Numbers: " + numbers +
  " | Start: " + rangeStart +
  " | End: " + rangeEnd
);
return;
*/

// ---------- VALIDATION ----------
if (numbers.length < 2) {
  player.SetVar(
    "CommonMultiplesOutput",
    "Please enter at least two whole numbers separated by commas (e.g. 2,4,6)."
  );
  return;
}

if (
  isNaN(rangeStart) ||
  isNaN(rangeEnd) ||
  rangeStart < 1 ||
  rangeEnd < 1 ||
  rangeEnd <= rangeStart
) {
  player.SetVar(
    "CommonMultiplesOutput",
    "Please enter a valid range using numbers only. Example: start = 1, end = 50."
  );
  return;
}

// ---------- CALCULATION ----------
var commonMultiples = [];

for (var i = rangeStart; i <= rangeEnd; i++) {
  var isCommon = true;

  for (var j = 0; j < numbers.length; j++) {
    if (i % numbers[j] !== 0) {
      isCommon = false;
      break;
    }
  }

  if (isCommon) {
    commonMultiples.push(i);
  }
}

// ---------- OUTPUT ----------
if (commonMultiples.length === 0) {
  player.SetVar(
    "CommonMultiplesOutput",
    "No common multiples found between " +
      rangeStart +
      " and " +
      rangeEnd +
      ". Try increasing the range."
  );
} else {
  player.SetVar(
    "CommonMultiplesOutput",
    "Common multiples between " +
      rangeStart +
      " and " +
      rangeEnd +
      ": " +
      commonMultiples.join(", ")
  );
}

}

window.Script4 = function()
{
  // Get values from Storyline variables
var n1 = player.GetVar("TextEntry9");
var n2 = player.GetVar("TextEntry10");
var n3 = player.GetVar("TextEntry11"); // optional

// Build array of numbers (ignore zeros)
var numbers = [n1, n2, n3].filter(function(n) {
    return n > 0;
});

// GCD function
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// LCM of two numbers
function lcmTwoNumbers(a, b) {
    return (a * b) / gcd(a, b);
}

// LCM of multiple numbers
function lcmMultipleNumbers(numbers) {
    return numbers.reduce(function (currentLcm, nextNumber) {
        return lcmTwoNumbers(currentLcm, nextNumber);
    });
}

// Calculate LCM
var result = lcmMultipleNumbers(numbers);

// Send result back to Storyline
player.SetVar("lcmResult", "LCM : " + result);

}

window.Script5 = function()
{
  var player = GetPlayer();

// Get input
var input = player.GetVar("TextEntry13");

// Split input
var nums = input.split(",");

// Convert to numbers
var numbers = [];
for (var i = 0; i < nums.length; i++) {
    var n = parseInt(nums[i].trim());
    if (!isNaN(n) && n > 0) {
        numbers.push(n);
    }
}

// HCF function
function hcf(a, b) {
    while (b !== 0) {
        var t = b;
        b = a % b;
        a = t;
    }
    return a;
}

// Validate
if (numbers.length < 2) {
    player.SetVar("hcf_result", 0);
    return;
}

// Calculate HCF
var result = numbers[0];
for (var j = 1; j < numbers.length; j++) {
    result = hcf(result, numbers[j]);
}

// Send result to Storyline
player.SetVar("hcf_result", result);

}

window.Script6 = function()
{
  var player = GetPlayer();

// Create a new date object
var today = new Date();

// Month names
var months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Format the date (e.g., 16 September 2026)
var day = today.getDate();
var month = months[today.getMonth()];
var year = today.getFullYear();

var formattedDate = day + " " + month + " " + year;

// Send date to Storyline variable
player.SetVar("CompletionDate", formattedDate);

}

};
