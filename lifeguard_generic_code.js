categoryIndex=-1;
ageIndex=-1;

initMobile=false;
initDesktop=false;
var lifeguard =  lifeguard || {};


$(document).on("pagecontainerload", function( event, ui ) {
	//$(window).trigger('resize');
	console.log("pagecontainerload triggered");
	setTimeout(function(){$(window).trigger('resize');});
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
			$(window).trigger('resize');

			break;
        default:
    }
});
