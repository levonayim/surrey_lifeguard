categoryIndex=-1;
ageIndex=-1;

initMobile=false;
initDesktop=false;
var lifeguard =  lifeguard || {};

function fixArrows(){
	console.log(document.querySelector('.small-box'));
	var afterHeightString = window.getComputedStyle(document.querySelector('.small-box'), ':before').getPropertyValue('height');
	var afterHeight = parseInt(afterHeightString, 10);
	$(".small-box").outerHeight(afterHeight);//*0.7071
	
	afterHeightString = window.getComputedStyle(document.querySelector('.big-box'), ':before').getPropertyValue('height');
	afterHeight = parseInt(afterHeightString, 10);
	$(".big-box").outerHeight(afterHeight);//*0.7071
	
}

$(document).on("pagecontainerload", function( event, ui ) {
	$(window).trigger('resize');
	console.log("pagecontainerload triggered");
	//setTimeout(function(){$(window).trigger('resize');},1000);
	//$.mobile.pageContainer.pagecontainer("change", "#desktoppage", {});
} );

$(document).on("pagecontainershow", function () {
	console.log("pagecontainershow triggered");
    var activePage = $.mobile.pageContainer.pagecontainer("getActivePage");
	//setTimeout(function(){
	//$(window).resize();},2000);
    var activePageId = activePage[0].id;
	console.log("activePageId: "+activePageId);
    switch (activePageId) {
        case 'firstmobilepage':
			console.log("firstmobilepage switch:" +activePageId);
			$('link[data-role="lifeguard_mobile_css"]').attr('disabled', false);
			$('link[data-role="lifeguard_desktop_css"]').attr('disabled', true);	
				lifeguard.mobile.initFirstPage();
            break;		
        case 'secondmobilepage':
			console.log("secondmobilepage switch:" +activePageId);
			$('link[data-role="lifeguard_mobile_css"]').attr('disabled', false);
			$('link[data-role="lifeguard_desktop_css"]').attr('disabled', true);	
            if (!initMobile)
				lifeguard.mobile.initPage();
            break;
        case 'desktoppage':
			console.log("desktoppage switch:" +activePageId);
			$('link[data-role="lifeguard_mobile_css"]').attr('disabled', true);
			$('link[data-role="lifeguard_desktop_css"]').attr('disabled', false);				
            if (!initDesktop)			
            lifeguard.desktop.initPage();
            break;
		case 'startpage':
			console.log('detecting environment');
			//var afterElement =  window.getComputedStyle ? window.getComputedStyle(document.body, ':after') : false;
			//var currentBreakpoint = afterElement.getPropertyValue('content').replace(/^["']|["']$/g, '');
			$(window).trigger('resize');
			/*
			$.mobile.pageContainer.pagecontainer( "load", pageUrl, { showLoadMsg: false } );
			$.mobile.pageContainer..pagecontainer({
					load: function( event, ui ) {}
				});
			*/
			break;
        default:
    }
	
	             setTimeout(function(){
					fixArrows();
				},0);  
});
