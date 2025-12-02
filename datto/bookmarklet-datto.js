/*
  IMPORTANT! You must allow popups in your browser security settings to bypass popup restrictions.
  Otherwise, the web browser will only allow one tab to be opened by Javascript.
*/

var $;
var ver = 0.01;

init();

function init(){
  console.log('Init bookmarklet-datto.js', ver);
  
  // Check if this 'looks' like the correct page to run this bookmarklet
  if(!document.URL.includes('rmm.datto.com/site/')){
    console.warn('Datto bookmarklet not initialised. This does not appear to be a valid page location.');
    return;
  }
  
  $ = mtjQuery;
  
  // Don't reload the UI changes if the bookmarklet is clicked again
  if($('button#wrcs').length){
    console.warn('Datto bookmarklet UI already initialised. Reload the page and click the Datto bookmarklet to reload the UI.');
    return;
  }
  
  updateUi();
}

/*
  Modify check-box selected menu (three vertical dots)
  Unfortunately this does not exist until the menu is opened by the user.
  May be able to add a menu open listener to add this.
*/
// console.log($('ul.ant-dropdown-menu'));
// var checkMenu = $('ul.ant-dropdown-menu');
// $(checkMenu).prepend('Web Remote - Control Screen');

/*
  Add new button 'Web Remote: Control Screens'
  Opens all checked, online devices.
*/
function updateUi(){
  console.log('Any', anyRowSelected());
  
  var wrcsBtn = `<button id="wrcs" data-testid="tableToolbar_run-quick-job" class="ButtonStyled--w77dbz fPdmO" style="margin-left:6px; border:1px solid #f0b30c; border-radius:4px; background:#f0b30c;">
  <span>Web Remote: Control Screens</span>
  </button>`;
  var prevElem = $('div[data-testid="moreMenu"]').after(wrcsBtn);
  // No idea why the previous element is returned, so get the new button element. 
  var newElem = $(prevElem).next();
  $(newElem).on('click', function(){
    openRemoteScreens()
  });
}

function openRemoteScreens(){
  let webRemoteArr = [];
  let i, iMax, row, rowKey, rowName, url, window;
  let userAgent = getUserAgent();

  console.log('User agent:', userAgent);
  
  $('tr.ant-table-row').each(function(i){
    // Selected rows which have a Web Remote button
    if( isRowChecked(this) && isDeviceOnline(this) ){
      // Need to change the order of the array, depending on browser type, so new tabs open in ascending order
      switch(userAgent){
        case 'chrome':
        case 'edge':
          webRemoteArr.push(this);
          break;
        default:
          webRemoteArr.unshift(this);
          break;
      }
    }
  });
  
  iMax = webRemoteArr.length;
  
  if(!iMax){
    console.log('No valid devices selected for web remote');
    return;
  }
  
  console.group('Open web remote:');
  
  for(i = 0; i < iMax; i++){
    row = webRemoteArr[i];
    rowKey = getRowKey(row);
    rowName = getRowName(row);
    url = `https://syrah.centrastage.net/csm/remote/rto/${rowKey}?tool=control&windowsSessionId=1`;
    window = `window${i}`;
    
    console.log(rowName, rowKey, window);
    open(url, window);
  }
  
  console.groupEnd();
}

function anyRowSelected(){
  if($('tr.ant-table-row input:checked')){
    return true;
  }
  return false;
}

function getRowKey(row){
  return $(row).data('row-key');
}

function getRowName(row){
  let rowName;
  
  $('a[href*="/device/"]', row).each(function(i) {
    rowName = $(this).text();
  });
  
  return rowName;
}

function isRowChecked(row){
  return $('input:checked', row).is(':checked');
}

function isDeviceOnline(row){
  if($(':button:contains("Web Remote")', row).length){
    return true; 
  }
  return false;
}

function getUserAgent(){
  let ua = window.navigator.userAgent.toLowerCase();

  if(ua.includes('edg')){
    return 'edge';
  }

  if(ua.includes('chrome')){
    return 'chrome';
  }

  if(ua.includes('firefox')){
    return 'firefox';
  }
}