function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5od9Fm0yx1p":
        Script1();
        break;
      case "6Hs5yyaAJQI":
        Script2();
        break;
      case "6E2XPtQ5WDk":
        Script3();
        break;
      case "5u7aDjGwbWP":
        Script4();
        break;
      case "6IXPXcKGhm9":
        Script5();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  window.print();
}

