'use strict';
var Z63 = (function (parent, $) {

	
    var MediaQueryListener = function() {
        
		console.log("Z63 init:");
		console.log(document.body);
		if (document.body==null){
			console.log("try again later");
			//return;
		}
		this.afterElement =  window.getComputedStyle ? window.getComputedStyle(document.body, ':after') : false;
        this.currentBreakpoint = '';
        this.lastBreakpoint = '';
        this.init();
    };

    MediaQueryListener.prototype = {

        init: function () {
            var self = this;
            
            if(!self.afterElement) {
                return;
            }

            self._resizeListener();

        },
        _resizeListener: function () {
			
            var self = this;

            $(window).on('resize orientationchange load', function() {
				console.log('resize detected');
				var activePage = $.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' );
                // Regexp for removing quotes added by various browsers
                self.currentBreakpoint = self.afterElement.getPropertyValue('content').replace(/^["']|["']$/g, '');
                //console.log("resized and breakpoint is: " +self.currentBreakpoint);
				console.log("self.currentBreakpoint: " +self.currentBreakpoint);
				console.log("self.lastBreakpoint: " +self.lastBreakpoint);
                if (self.currentBreakpoint !== self.lastBreakpoint || activePage=="startpage") {
					console.log("breakpoint match");
					//setTimeout(function(){
						$(window).trigger('breakpoint-change', self.currentBreakpoint);
						self.lastBreakpoint = self.currentBreakpoint;
					//},0);
					

					
                }else{
				//	console.log("same breakpoint");
				}  
				
				lifeguard.mobile.fixArrows();
				lifeguard.desktop.fixArrows();
            });
        }

    };

    parent.mediaqueryListener = parent.mediaqueryListener || new MediaQueryListener();

    return parent;

}(Z63 || {}, jQuery));

$(window).on('breakpoint-change', function(e, breakpoint) {
	console.log("breakpoint-change: "+breakpoint);
	var activePage = $.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' );
    if(breakpoint === 'bp-very-small') {
		console.log("bp-very-small");
		if (activePage=="startpage" ||  activePage=="desktoppage")
			$.mobile.pageContainer.pagecontainer("change", "#firstmobilepage", {});
		
    }
	
    if(breakpoint === 'bp-small') {
		console.log("bp-small");
		if (activePage=="startpage" ||  activePage=="desktoppage")
		$.mobile.pageContainer.pagecontainer("change", "#firstmobilepage", {});
		
    }

    if(breakpoint === 'bp-medium') {
		console.log("bp-medium");
		if ( activePage=="startpage" || activePage=="firstmobilepage" || activePage=="secondmobilepage" ){
			$.mobile.pageContainer.pagecontainer("change", "#desktoppage", {});
		}
    }

    if(breakpoint === 'bp-large') {
		console.log("bp-large");
		console.log("trying a transition to big..., activePage:"+activePage);
		if (activePage=="startpage" || activePage=="firstmobilepage" || activePage=="secondmobilepage"){
			$.mobile.pageContainer.pagecontainer("change", "#desktoppage", {});
		}
    }

});