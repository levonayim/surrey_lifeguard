lifeguard =  lifeguard || {};

lifeguard.mobile = {
	target:'.secondmobilepage',
	showResultGroup: function(index){
		console.log( "showResultGroup("+index+")" );
		
		//first hide all results
		$("#class-result > div",this.target).css( "display", "none" );
		
		//then display only the coresponding one
		if (index == 0) {
			console.log( "unhiding... 0");
				$('#lifeguard',this.target).css('display', '');
				setTimeout(function(){
					$('#lifeguard',this.target).css( "visibility", "visible" );
					$('#lifeguard',this.target).css( "opacity", "1" );
				}, 0);
		}else if (index == 1) {
			console.log( "unhiding... 1");
			$("#lifeguard_instructor",this.target).css('display', '');
				setTimeout(function(){
					$('#lifeguard_instructor',this.target).css( "visibility", "visible" );
					$('#lifeguard_instructor',this.target).css( "opacity", "1" );
				}, 0);		
		}else if (index == 2) {
			$("#red_cross_swimming_instructor",this.target).css('display', '');
				setTimeout(function(){
					$('#red_cross_swimming_instructor',this.target).css( "visibility", "visible" );
					$('#red_cross_swimming_instructor',this.target).css( "opacity", "1" );
				}, 0);		
		}else if (index == 3) {
			$("#bcrpa_aquafit_instructor",this.target).css('display', '');
				setTimeout(function(){
					$('#bcrpa_aquafit_instructor',this.target).css( "visibility", "visible" );
					$('#bcrpa_aquafit_instructor',this.target).css( "opacity", "1" );
				}, 0);			
		}
	
	},

	computeResult: function(){
		console.log( "computeResult..." );
		if (categoryIndex==-1 || ageIndex==-1) return;
		this.showResultGroup(categoryIndex);
		//if (categoryIndex==0){
			//showResultGroup(0);
		//}
		this.showResultClasses(categoryIndex,ageIndex);
		fixArrows();
	},
	init_lifeguard: function(){
		//first enable all buttons and make all visible
		$('#lifeguard_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#lifeguard_div_buttons a',this.target).css('display', '');
		
		$('#lifeguard_div_buttons a',this.target).removeClass("ui-btn-active");
		
		//make all 3 Available after the age visible
		$('#lifeguard_div_buttons .available_after_age',this.target).css('display', '');
		
		//show sfa text
		//$('#lifeguard_div_notes .ui-block-c').prop('style').removeProperty('display');//
	},
	init_lifeguard_instructor: function (){
		$('#lifeguard_instructor_div_available',this.target).css('display', '');
		
		$('#lifeguard_instructor_div_buttons',this.target).css('display', '');
		$('#lifeguard_instructor_div_sorry',this.target).css('display', '');
		
		//first enable all buttons and make all visible
		$('#lifeguard_instructor_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#lifeguard_instructor_div_buttons a',this.target).removeClass("ui-btn-active");

		
		
		//make both Available after the age visible
		$('#lifeguard_instructor_div_available .available_after_age_general',this.target).css('display', '');
		
		//
		$('#lifeguard_instructor_div_sorry a',this.target).removeClass("ui-state-disabled");
		$('#lifeguard_instructor_div_sorry a',this.target).css('display', '');
		$('#lifeguard_instructor_div_sorry',this.target).css('display', '');
	},	
	init_red_cross_swimming_instructor: function(){
		
		$('#red_cross_swimming_instructor_div_sorry',this.target).css('display', '');
		$('#red_cross_swimming_instructor_div_buttons',this.target).css('display', '');
		
		//first enable all buttons and make all visible
		$('#red_cross_swimming_instructor_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#red_cross_swimming_instructor_div_buttons a',this.target).css('display', '');
	},
	init_bcrpa_aquafit_instructor: function(){
		$('#bcrpa_aquafit_instructor_div_sorry',this.target).css('display', '');
		$('#bcrpa_aquafit_instructor_div_buttons',this.target).css('display', '');
		
		//first enable all buttons and make all visible
		$('#bcrpa_aquafit_instructor_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#bcrpa_aquafit_instructor_div_buttons a',this.target).css('display', '');
	},
	processResult_lifeguard: function(ageIndex){
		this.init_lifeguard();
			if (ageIndex == 0){
				$('#lifeguard .bronze_medallion',this.target).addClass("ui-state-disabled");
				$('#lifeguard .bronze_cross',this.target).addClass("ui-state-disabled");
				$('#lifeguard .standard_first_aid',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");
			} else if (ageIndex == 1){
				$('#lifeguard .bronze_star',this.target).css( "display", "none" );
				
				//disable last 3 buttons
				$('#lifeguard .standard_first_aid',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");				
				
				$('#lifeguard #available_after_age_13',this.target).css( "display", "none" );
				
			} else if (ageIndex == 2){
				$('#lifeguard .bronze_star',this.target).css( "display", "none" );
				
				
				$('#lifeguard #available_after_age_13',this.target).css( "display", "none" );
				$('#lifeguard #available_after_age_14',this.target).css( "display", "none" );
				
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");				
				
				////hide sfa text
				$('#lifeguard_div_notes .ui-block-c',this.target).css( "display", "none" );
				
			
			} else if (ageIndex == 3){
				$('#lifeguard .bronze_star',this.target).css( "display", "none" );
				
				$('#lifeguard #available_after_age_13',this.target).css( "display", "none" );
				$('#lifeguard #available_after_age_14',this.target).css( "display", "none" );
				
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");				
				
				
				////hide sfa text
				$('#lifeguard_div_notes .ui-block-c',this.target).css( "display", "none" );
				
				
			} else if (ageIndex == 4){
				$('#lifeguard .bronze_star',this.target).css( "display", "none" );
				
				$('#lifeguard #available_after_age_13',this.target).css( "display", "none" );
				$('#lifeguard #available_after_age_14',this.target).css( "display", "none" );
				$('#lifeguard #available_after_age_16',this.target).css( "display", "none" );
				
				////hide sfa text
				$('#lifeguard_div_notes .ui-block-c',this.target).css( "display", "none" );			
			} 	
	},
	processResult_lifeguard_instructor: function(ageIndex){
			this.init_lifeguard_instructor();
			if (ageIndex == 0){
				$('#lifeguard_instructor_div_buttons',this.target).css( "display", "none" );
				//we leave only sorry to be displayed
			} else if (ageIndex == 1){
				$('#lifeguard_instructor_div_buttons .lifesaving_instructor',this.target).addClass("ui-state-disabled");
				$('#lifeguard_instructor_div_sorry',this.target).css( "display", "none" );
			} else if (ageIndex == 2){
				$('#lifeguard_instructor_div_buttons .lifesaving_instructor',this.target).addClass("ui-state-disabled");
				$('#lifeguard_instructor_div_sorry',this.target).css( "display", "none" );	
			} else if (ageIndex == 3){
				$('#lifeguard_instructor_div_buttons .lifesaving_instructor',this.target).addClass("ui-state-disabled");
				$('#lifeguard_instructor_div_sorry',this.target).css( "display", "none" );
			} else if (ageIndex == 4){
				$('#lifeguard_instructor_div_buttons .available_after_age_general',this.target).css( "display", "none" );
				$('#lifeguard_instructor_div_sorry',this.target).css( "display", "none" );
			} 	
	},
	processResult_red_cross_swimming_instructor: function(ageIndex){
			this.init_red_cross_swimming_instructor();
			if (ageIndex == 0){
				$('#red_cross_swimming_instructor_div_buttons',this.target).css( "display", "none" );
			} else if (ageIndex == 1){
				$('#red_cross_swimming_instructor_div_buttons',this.target).css( "display", "none" );
			} else if (ageIndex == 2){
				$('#red_cross_swimming_instructor_div_buttons',this.target).css( "display", "none" );
			} else if (ageIndex == 3){
				$('#red_cross_swimming_instructor_div_sorry',this.target).css( "display", "none" );
			} else if (ageIndex == 4){
				$('#red_cross_swimming_instructor_div_sorry',this.target).css( "display", "none" );
			}
	},
	processResult_bcrpa_aquafit_instructor: function(ageIndex){
			this.init_bcrpa_aquafit_instructor();
			if (ageIndex == 0){
				$('#bcrpa_aquafit_instructor_div_buttons',this.target).css( "display", "none" );
			} else if (ageIndex == 1){
				$('#bcrpa_aquafit_instructor_div_buttons',this.target).css( "display", "none" );
			} else if (ageIndex == 2){
				$('#bcrpa_aquafit_instructor_div_buttons',this.target).css( "display", "none" );
			} else if (ageIndex == 3){
				$('#bcrpa_aquafit_instructor_div_buttons',this.target).css( "display", "none" );
			} else if (ageIndex == 4){
				$('#bcrpa_aquafit_instructor_div_sorry',this.target).css( "display", "none" );
			} 	
	},
	showResultClasses: function(categoryIndex,ageIndex){
		console.log( "showResultClasses...ageIndex:"+ ageIndex);
		if (categoryIndex==0){
			this.processResult_lifeguard(ageIndex);
		}else if (categoryIndex==1){
			this.processResult_lifeguard_instructor(ageIndex);
		}else if (categoryIndex==2){
			this.processResult_red_cross_swimming_instructor(ageIndex);
		}else if (categoryIndex==3){
			this.processResult_bcrpa_aquafit_instructor(ageIndex);
		}
	},
	
	
	initFirstPage: function (){
		var target='.secondmobilepage';
		console.log("initFirstPage should be done!");
		$('#gotosecondmobilepage').off("click").on("click",function(){
			console.log("click on a");
			$.mobile.pageContainer.pagecontainer("change", "#secondmobilepage", {});
			$("#horz_steps a",target).eq(0).click();
		});
	},
	
	initPage: function (){
	var target='.secondmobilepage';
	console.log("inside initPage");
	console.log($('#slick-mobile-container'));
	
	
	$('#slick-mobile-container').slick({
        draggable: false,
		swipe:false,
		touchMove:false,
		infinite:false,
		focusOnSelect:false,
		accessibility:false,
		arrows:false
    });
	$("#horz_steps a",target).eq(0).addClass("ui-btn-active");			
	$("#horz_steps a",target).click(function(){
		horizontalIndex=$(this).parent().index();
		console.log("horizontalIndex:"+horizontalIndex);
		$("#horz_steps a",target).eq(horizontalIndex).addClass("ui-btn-active");
		if (horizontalIndex==0){
			$("#category-grid div a.ui-btn",target).removeClass("ui-btn-active");
			//$("#horz_steps a",target).eq(0).removeClass("ui-btn-active");			
			$("#horz_steps a",target).eq(1).removeClass("ui-btn-active");
			$("#horz_steps a",target).eq(2).removeClass("ui-btn-active");	

			$("#horz_steps a",target).eq(1).addClass("ui-state-disabled");
			$("#horz_steps a",target).eq(2).addClass("ui-state-disabled");
			categoryIndex=-1;
			ageIndex=-1;
		}else if (horizontalIndex==1){
			//$("#horz_steps a",target).eq(1).removeClass("ui-btn-active");			
			$("#horz_steps a",target).eq(2).removeClass("ui-btn-active");	
			$("#age-grid div a.ui-btn",target).removeClass("ui-btn-active");
			$("#horz_steps a",target).eq(2).addClass("ui-state-disabled");
			ageIndex=-1;
			if (categoryIndex==-1){
				return;
			}
		}else if (horizontalIndex==2){
			//
			return;
		}
		
		
		$('#slick-mobile-container').slick("slickGoTo",horizontalIndex,false);
    });	
	 /* 
	$('#gotomobilepage2').click(function(){
		console.log("click");
		
	});*/	
	
	$("#age-grid div a",target).click(function(){
		console.log("#age-grid div a -> click");
		
		($("#horz_steps a",target).eq(0)).addClass("ui-btn-active");
		($("#horz_steps a",target).eq(1)).addClass("ui-btn-active");	
		($("#horz_steps a",target).eq(2)).addClass("ui-btn-active");		
		($("#horz_steps a",target).eq(2)).removeClass("ui-state-disabled");
		$("#age-grid div a",target).removeClass("ui-btn-active");
		$(this).addClass("ui-btn-active");
		ageIndex=$(this).parent().index();
		lifeguard.mobile.computeResult();
		$('#slick-mobile-container').slick("slickGoTo",2,false);
    });	
	
    $("#category-grid div a",target).click(function(){
		console.log("#category-grid div a -> click");
		($("#horz_steps a",target).eq(0)).addClass("ui-btn-active");
		($("#horz_steps a",target).eq(1)).addClass("ui-btn-active");
		$("#horz_steps a",target).eq(1).removeClass("ui-state-disabled");
		//$(this).parent().parent().children().removeClass("ui-btn-active");
		//$(this).parent().children().removeClass("ui-btn-active");
		$("#category-grid div a",target).removeClass("ui-btn-active");
		$(this).addClass("ui-btn-active");
		categoryIndex=$(this).parent().index();
		$("#age-grid",target).css( "visibility", "visible" );
		$("#age-grid",target).css( "opacity", "1" );
		
		$("#age-grid div a",target).removeClass("ui-btn-active");
		
		console.log( $(this).parent().index() +" and categoryIndex is: "+categoryIndex);
		lifeguard.mobile.computeResult();
		$('#slick-mobile-container').slick("slickGoTo",1,false);
    });
	initMobile=true;
}
};
