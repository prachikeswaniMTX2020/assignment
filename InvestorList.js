 var isVisibleSidenav = false ;
 var isShowSummarySubmenu = false;
 var isShowInvestmentsSubmenu = false;
 var isShowDocumentsSubmenu = false;
 var isShowTransactionsSubmenu = false;
 var isShowDelegateSubmenu = false;
 var isGridView = false; 

 function openNav() 
 {
  if(isVisibleSidenav == false)
  {
    document.getElementById("mySidenav").style.width = "350px";
<<<<<<< HEAD
    document.getElementById("summarySubmenu").style.display="none";
    document.getElementById("investmentsSubmenu").style.display="none";
    document.getElementById("documentsSubmenu").style.display="none";
    document.getElementById("transactionsSubmenu").style.display="none";
    document.getElementById("delegateSubmenu").style.display="none";
    isShowSummarySubmenu = false;
    isShowInvestmentsSubmenu = false;
    isShowDocumentsSubmenu = false;
    isShowTransactionsSubmenu = false;
    isShowDelegateSubmenu = false;
    isVisibleSidenav = true;
  }
  else
  {
    document.getElementById("mySidenav").style.width = "0";
=======
   // document.getElementById("main").style.marginLeft = "455px";
   // document.getElementById("heading").style.marginLeft = "1rem";
   document.getElementById("summarySubmenu").style.display="none";
   document.getElementById("investmentsSubmenu").style.display="none";
   document.getElementById("documentsSubmenu").style.display="none";
   document.getElementById("transactionsSubmenu").style.display="none";
   document.getElementById("delegateSubmenu").style.display="none";
   isShowSummarySubmenu = false;
   isShowInvestmentsSubmenu = false;
   isShowDocumentsSubmenu = false;
   isShowTransactionsSubmenu = false;
   isShowDelegateSubmenu = false;
   isVisibleSidenav = true;
 }
 else
 {
  document.getElementById("mySidenav").style.width = "0";
   // document.getElementById("main").style.marginLeft= "0";
>>>>>>> e96d52f379c7cfb4c51554764a170c50df70327d
   document.getElementById("heading").style.marginLeft = "0rem";
   isVisibleSidenav = false;
 }
}
function closeNav()
{
  if(isVisibleSidenav)
  {
    document.getElementById("mySidenav").style.width = "0";
<<<<<<< HEAD
=======
//  document.getElementById("main").style.marginLeft= "0";
>>>>>>> e96d52f379c7cfb4c51554764a170c50df70327d
document.getElementById("heading").style.marginLeft = "0rem";
isVisibleSidenav = false;
}
}
function showSummarySubmenu()
{
  if(isShowSummarySubmenu == false)
  {
    document.getElementById("summarySubmenu").style.display="block";
    document.getElementById("summarySubmenu").style.marginLeft="3rem";
    document.getElementById("summary-accordian-button").style.transform = "rotate(90deg)";
<<<<<<< HEAD
=======
 //   document.getElementById("summarySubmenu1").style.display="block";
>>>>>>> e96d52f379c7cfb4c51554764a170c50df70327d
 isShowSummarySubmenu = true;
}
else
{
  document.getElementById("summarySubmenu").style.display="none";
  document.getElementById("summary-accordian-button").style.transform = "";
  isShowSummarySubmenu = false;
}
}
function showInvestmentsSubmenu()
{
  if(isShowInvestmentsSubmenu == false)
  {
    document.getElementById("investmentsSubmenu").style.display="block";
    document.getElementById("investmentsSubmenu").style.marginLeft="3rem";
    document.getElementById("investments-accordian-button").style.transform = "rotate(90deg)";
    isShowInvestmentsSubmenu = true;
  }
  else
  {
    document.getElementById("investmentsSubmenu").style.display="none";
    document.getElementById("investments-accordian-button").style.transform = "";
    isShowInvestmentsSubmenu = false;
  }

}

function showDocumentsSubmenu()
{
  if(isShowDocumentsSubmenu == false)
  {
    document.getElementById("documentsSubmenu").style.display="block";
    document.getElementById("documentsSubmenu").style.marginLeft="3rem";
    document.getElementById("documents-accordian-button").style.transform = "rotate(90deg)";
    isShowDocumentsSubmenu = true;
  }
  else
  {
    document.getElementById("documentsSubmenu").style.display="none";
    document.getElementById("documents-accordian-button").style.transform = "";

    isShowDocumentsSubmenu = false;
  }

}


function showTransactionsSubmenu()
{
  if(isShowTransactionsSubmenu == false)
  {
    document.getElementById("transactionsSubmenu").style.display="block";
    document.getElementById("transactionsSubmenu").style.marginLeft="3rem";
    document.getElementById("transactions-accordian-button").style.transform = "rotate(90deg)";

    isShowTransactionsSubmenu = true;
  }
  else
  {
    document.getElementById("transactionsSubmenu").style.display="none";
    document.getElementById("transactions-accordian-button").style.transform = "";
    iisShowTransactionsSubmenu = false;
  }

}

function showDelegateSubmenu()
{
  if(isShowDelegateSubmenu == false)
  {
    document.getElementById("delegateSubmenu").style.display="block";
    document.getElementById("delegateSubmenu").style.marginLeft="3rem";
    document.getElementById("delegate-accordian-button").style.transform = "rotate(90deg)";
    isShowDelegateSubmenu = true;
  }
  else
  {
    document.getElementById("delegateSubmenu").style.display="none";
    document.getElementById("delegate-accordian-button").style.transform = "";
    iisShowDelegateSubmenu = false;
  }

}

function gridView()
{ 
  if(isGridView == false)
  {
    document.getElementById("gridViewButton").style.backgroundColor = "#03a9f4";
    document.getElementById("listViewButton").style.backgroundColor = "white";
    document.getElementById("tableHeading").style.display = "none";
    document.getElementById("cardsContainer").style.flexFlow="row wrap";
    var gridViewShowList = document.getElementsByClassName("gridViewShow")
    for(var i=0 ; i < gridViewShowList.length ;i++)
    {
     gridViewShowList[i].style.display = "block";
   }
   var detailButtonList = document.getElementsByClassName("detail-button");
   for(var i=0 ; i < detailButtonList.length ;i++)
   {
     detailButtonList[i].style.order = "0";
     detailButtonList[i].style.float = "right";
   }
   var cardCustomOrderList = document.getElementsByClassName("cardCustomOrder3");
   for(var i=0 ; i < cardCustomOrderList.length ;i++)
   {
     cardCustomOrderList[i].style.order = "3";
   }
   var gridViewNoneList = document.getElementsByClassName("grid-view-none");
   for(var i=0 ; i < gridViewNoneList.length ;i++)
   {
    gridViewNoneList[i].style.display = "none";
  }
  var cardsList = document.getElementsByClassName("container-list");
  for(var i = 0; i < cardsList.length; i++)
  {
    cardsList[i].style.maxWidth ="20%";
    cardsList[i].style.minWidth ="20%";
    cardsList[i].style.marginTop= "1.5rem";
    cardsList[i].style.marginLeft= "1.2rem";
    cardsList[i].style.marginRight= "1.2rem";
  }
  var headshotsList = document.getElementsByClassName("headshots");
  for(var i = 0; i < headshotsList.length; i++)
  {
    headshotsList[i].style.width ="7.5rem";
    headshotsList[i].style.height ="7.5rem";
  }
  var cardColumnsList = document.getElementsByClassName("cardContentColumn");
  for(var i = 0; i < cardColumnsList.length; i++)
  {
    cardColumnsList[i].style.width ="100%";
    cardColumnsList[i].style.textAlign ="center";
  }
  var list = document.getElementsByClassName("cardColumn");
  for(var i = 0; i < list.length; i++)
  {
    list[i].style.flexDirection="column";
  }
  isGridView = true;
}
}


function listView()
{
  if(isGridView == true)
  {
    document.getElementById("listViewButton").style.backgroundColor = "#03a9f4";
    document.getElementById("gridViewButton").style.backgroundColor = "white";
    document.getElementById("tableHeading").style.display = "block";
    document.getElementById("cardsContainer").style.flexFlow = "column nowrap";
    var gridViewShowList = document.getElementsByClassName("gridViewShow")
    for(var i=0 ; i < gridViewShowList.length ;i++)
    {
     gridViewShowList[i].style.display = "none";
   }
   var detailButtonList = document.getElementsByClassName("detail-button");
   for(var i=0 ; i < detailButtonList.length ;i++)
   {
     detailButtonList[i].style.order = "";
     detailButtonList[i].style.textAlign ="";
   }
   var cardCustomOrderList = document.getElementsByClassName("cardCustomOrder3");
   for(var i=0 ; i < cardCustomOrderList.length ;i++)
   {
     cardCustomOrderList[i].style.order = "";

   }
   var gridViewNoneList = document.getElementsByClassName("grid-view-none");
   for(var i=0 ; i < gridViewNoneList.length ;i++)
   {
    gridViewNoneList[i].style.display = "";
  }
  var cardsList = document.getElementsByClassName("container-list");
  for(var i = 0; i < cardsList.length; i++)
  {
    cardsList[i].style.maxWidth ="";
    cardsList[i].style.minWidth ="";
    cardsList[i].style.marginTop= "";

  }
  var headshotsList = document.getElementsByClassName("headshots");
  for(var i = 0; i < headshotsList.length; i++)
  {
    headshotsList[i].style.width ="";
    headshotsList[i].style.height ="";
  }
  var cardColumnsList = document.getElementsByClassName("cardContentColumn");
  for(var i = 0; i < cardColumnsList.length; i++)
  {
    cardColumnsList[i].style.width = "";
    cardColumnsList[i].style.textAlign ="";
  }
  var list = document.getElementsByClassName("cardColumn");
  for(var i = 0; i < list.length; i++)
  {
    list[i].style.flexDirection="row";
  }
  isGridView = false;
}
}
