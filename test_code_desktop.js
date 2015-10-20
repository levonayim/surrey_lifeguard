lifeguard =  lifeguard || {};

lifeguard.desktop = {
	target:'.desktoppage',
	showResultGroup: function(index){
		console.log( "showResultGroup..." );
		
		//first hide all results
		$("#class-result > div").css( "display", "none" );
		
		//then display only the coresponding one
		if (index == 0) {
				$('#lifeguard',this.target).prop('style').removeProperty('display');
				setTimeout(function(){
					$('#lifeguard',this.target).css( "visibility", "visible" );
					$('#lifeguard',this.target).css( "opacity", "1" );
				}, 0);
		}else if (index == 1) {
			$("#lifeguard_instructor",this.target).prop('style').removeProperty('display');
				setTimeout(function(){
					$('#lifeguard_instructor',this.target).css( "visibility", "visible" );
					$('#lifeguard_instructor',this.target).css( "opacity", "1" );
				}, 0);		
		}else if (index == 2) {
			$("#red_cross_swimming_instructor",this.target).prop('style').removeProperty('display');
				setTimeout(function(){
					$('#red_cross_swimming_instructor',this.target).css( "visibility", "visible" );
					$('#red_cross_swimming_instructor',this.target).css( "opacity", "1" );
				}, 0);		
		}else if (index == 3) {
			$("#bcrpa_aquafit_instructor",this.target).prop('style').removeProperty('display');
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
	},
	init_lifeguard: function(){
		//first enable all buttons and make all visible
		$('#lifeguard_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#lifeguard_div_buttons a',this.target).prop('style').removeProperty('visibility');
		
		$('#lifeguard_div_buttons a',this.target).removeClass("ui-btn-active");
		
		//make both Available after the age visible
		$('#lifeguard_div_available .available_after_age',this.target).prop('style').removeProperty('visibility');
		
		//show sfa text
		$('#lifeguard_div_notes .ui-block-c',this.target).prop('style').removeProperty('visibility');
	},

	init_lifeguard_instructor: function(){
	
		$('#lifeguard_instructor_div_available',this.target).prop('style').removeProperty('visibility');
		
		$('#lifeguard_instructor_div_available',this.target).prop('style').removeProperty('display');
		$('#lifeguard_instructor_div_buttons',this.target).prop('style').removeProperty('display');
		$('#lifeguard_instructor_div_sorry',this.target).prop('style').removeProperty('display');
		
		//first enable all buttons and make all visible
		$('#lifeguard_instructor_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#lifeguard_instructor_div_buttons a',this.target).removeClass("ui-btn-active");

		
		$('#lifeguard_instructor_div_buttons a',this.target).prop('style').removeProperty('visibility');
		
		//make both Available after the age visible
		$('#lifeguard_instructor_div_available .available_after_age_general',this.target).prop('style').removeProperty('visibility');
		
		//
		$('#lifeguard_instructor_div_sorry a',this.target).removeClass("ui-state-disabled");
		$('#lifeguard_instructor_div_sorry a',this.target).prop('style').removeProperty('visibility');
		$('#lifeguard_instructor_div_sorry',this.target).prop('style').removeProperty('visibility');
		
		
	//	$('#lifeguard_instructor_div_sorry').css( "visibility", "hidden" );
	},

	init_red_cross_swimming_instructor: function(){
		
		$('#red_cross_swimming_instructor_div_sorry',this.target).prop('style').removeProperty('display');
		$('#red_cross_swimming_instructor_div_buttons',this.target).prop('style').removeProperty('display');
		$('#red_cross_swimming_instructor_div_notes',this.target).prop('style').removeProperty('display');
		
		//first enable all buttons and make all visible
		$('#red_cross_swimming_instructor_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#red_cross_swimming_instructor_div_buttons a',this.target).prop('style').removeProperty('visibility');
		
		//make both Available after the age visible
		$('#red_cross_swimming_instructor_div_sorry a',this.target).removeClass("ui-state-disabled");
		$('#red_cross_swimming_instructor_div_sorry a',this.target).prop('style').removeProperty('visibility');
		
		//
		$('#red_cross_swimming_instructor_div_notes',this.target).prop('style').removeProperty('visibility');
	},
	init_bcrpa_aquafit_instructor: function(){
		
		$('#bcrpa_aquafit_instructor_div_sorry',this.target).prop('style').removeProperty('display');
		$('#bcrpa_aquafit_instructor_div_buttons',this.target).prop('style').removeProperty('display');
		$('#bcrpa_aquafit_instructor_div_notes',this.target).prop('style').removeProperty('display');
		
		//first enable all buttons and make all visible
		$('#bcrpa_aquafit_instructor_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#bcrpa_aquafit_instructor_div_buttons a',this.target).prop('style').removeProperty('visibility');
		
		//make both Available after the age visible
		$('#bcrpa_aquafit_instructor_div_sorry a',this.target).removeClass("ui-state-disabled");
		$('#bcrpa_aquafit_instructor_div_sorry a',this.target).prop('style').removeProperty('visibility');
		
		//
		$('#bcrpa_aquafit_instructor_div_notes',this.target).prop('style').removeProperty('visibility');
	},

	processResult_lifeguard: function (ageIndex){
		this.init_lifeguard();
			if (ageIndex == 0){
				$('#lifeguard .bronze_medallion',this.target).addClass("ui-state-disabled");
				$('#lifeguard .bronze_cross',this.target).addClass("ui-state-disabled");
				$('#lifeguard .standard_first_aid',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");
			} else if (ageIndex == 1){
				$('#lifeguard .bronze_star',this.target).css( "visibility", "hidden" );
				//$('#lifeguard .bronze_star').css( "display", "none" );
				//$('#lifeguard .bronze_medallion').addClass("ui-btn-active");
				//$('#lifeguard .bronze_cross').addClass("ui-btn-active");
				
				$('#lifeguard .standard_first_aid',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");				
				
				$('#lifeguard #lifeguard_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
				
				/*
				//first disable all buttons
				$('#lifeguard #lifeguard_div_buttons a').addClass("ui-state-disabled");
				
				//enable medallion and cross
				$('#bronze_medallion').removeClass("ui-state-disabled");
				$('#bronze_cross').removeClass("ui-state-disabled");
				
				
				$('#lifeguard #lifeguard_div_available .available_after_age').prop('style').removeProperty('visibility');
				$('#lifeguard #lifeguard_div_available .ui-block-b').css( "visibility", "hidden" );
				
				$('#bronze_star').css( "visibility", "hidden" );
				
				//show sfa text
				$('#lifeguard #lifeguard_div_notes .ui-block-c').prop('style').removeProperty('visibility');
				*/
			} else if (ageIndex == 2){
				$('#lifeguard .bronze_star',this.target).css( "visibility", "hidden" );
				
				//$('#lifeguard .bronze_medallion').addClass("ui-btn-active");
				//$('#lifeguard .bronze_cross').addClass("ui-btn-active");
				//$('#lifeguard .standard_first_aid').addClass("ui-btn-active");
				
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");				
				
				$('#lifeguard_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
				
				////hide sfa text
				$('#lifeguard_div_notes .ui-block-c',this.target).css( "visibility", "hidden" );
				

			
			} else if (ageIndex == 3){
				$('#lifeguard .bronze_star',this.target).css( "visibility", "hidden" );
				
				//$('#lifeguard .bronze_medallion').addClass("ui-btn-active");
				//$('#lifeguard .bronze_cross').addClass("ui-btn-active");
				//$('#lifeguard .standard_first_aid').addClass("ui-btn-active");
				
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");				
				
				$('#lifeguard_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
				
				////hide sfa text
				$('#lifeguard_div_notes .ui-block-c',this.target).css( "visibility", "hidden" );
				
				
			} else if (ageIndex == 4){
				$('#lifeguard .bronze_star',this.target).css( "visibility", "hidden" );
				
				//$('#lifeguard .bronze_medallion').addClass("ui-btn-active");
				//$('#lifeguard .bronze_cross').addClass("ui-btn-active");
				//$('#lifeguard .standard_first_aid').addClass("ui-btn-active");
				
				
				//$('#lifeguard .national_lifeguard_pool').addClass("ui-btn-active");
				//$('#lifeguard .national_lifeguard_water_park').addClass("ui-btn-active");			
				
				$('#lifeguard_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
				$('#lifeguard_div_available .ui-block-c',this.target).css( "visibility", "hidden" );
				////hide sfa text
				$('#lifeguard_div_notes .ui-block-c',this.target).css( "visibility", "hidden" );				
			} 	
	},
	processResult_lifeguard_instructor: function(ageIndex){
			this.init_lifeguard_instructor();
			if (ageIndex == 0){
				$('#lifeguard_instructor_div_available',this.target).css( "visibility", "hidden" );
				$('#lifeguard_instructor_div_buttons',this.target).css( "display", "none" );
				//$('#lifeguard_instructor_div_sorry a').addClass("ui-state-disabled");
				
				//$('#lifeguard_instructor_div_sorry').css( "visibility", "hidden" );
			} else if (ageIndex == 1){
				//$('#lifeguard_instructor_div_buttons .bronze_medallion').addClass("ui-btn-active");
				//$('#lifeguard_instructor_div_buttons .bronze_cross').addClass("ui-btn-active");
				$('#lifeguard_instructor_div_buttons .lifesaving_instructor').addClass("ui-state-disabled");
				$('#lifeguard_instructor_div_sorry',this.target).css( "display", "none" );
				/*
				$('#bronze_star').css( "visibility", "hidden" );
				
				$('#bronze_medallion').addClass("ui-btn-active");
				$('#bronze_cross').addClass("ui-btn-active");
				
				$('#standard_first_aid').addClass("ui-state-disabled");
				$('#national_lifeguard_pool').addClass("ui-state-disabled");
				$('#national_lifeguard_water_park').addClass("ui-state-disabled");				
				
				$('#lifeguard #lifeguard_div_available .ui-block-b').css( "visibility", "hidden" );
				
				//////////////////////
				
				//first disable all buttons
				$('#lifeguard #lifeguard_div_buttons a').addClass("ui-state-disabled");
				
				//enable medallion and cross
				$('#bronze_medallion').removeClass("ui-state-disabled");
				$('#bronze_cross').removeClass("ui-state-disabled");
				
				
				$('#lifeguard #lifeguard_div_available .available_after_age').prop('style').removeProperty('visibility');
				$('#lifeguard #lifeguard_div_available .ui-block-b').css( "visibility", "hidden" );
				
				$('#bronze_star').css( "visibility", "hidden" );
				
				//show sfa text
				$('#lifeguard #lifeguard_div_notes .ui-block-c').prop('style').removeProperty('visibility');
				*/
			} else if (ageIndex == 2){
				//$('#lifeguard_instructor_div_buttons .bronze_medallion').addClass("ui-btn-active");
				//$('#lifeguard_instructor_div_buttons .bronze_cross').addClass("ui-btn-active");
				$('#lifeguard_instructor_div_buttons .lifesaving_instructor',this.target).addClass("ui-state-disabled");
				$('#lifeguard_instructor_div_sorry',this.target).css( "display", "none" );	
			} else if (ageIndex == 3){
				//$('#lifeguard_instructor_div_buttons .bronze_medallion').addClass("ui-btn-active");
				//$('#lifeguard_instructor_div_buttons .bronze_cross').addClass("ui-btn-active");
				$('#lifeguard_instructor_div_buttons .lifesaving_instructor',this.target).addClass("ui-state-disabled");
				$('#lifeguard_instructor_div_sorry',this.target).css( "display", "none" );
			} else if (ageIndex == 4){
				$('#lifeguard_instructor_div_available',this.target).css( "visibility", "hidden" );
				
				//$('#lifeguard_instructor_div_buttons .bronze_medallion').addClass("ui-btn-active");
				//$('#lifeguard_instructor_div_buttons .bronze_cross').addClass("ui-btn-active");
				//$('#lifeguard_instructor_div_buttons .lifesaving_instructor').addClass("ui-btn-active");
				$('#lifeguard_instructor_div_sorry',this.target).css( "display", "none" );
			} 	
	},
	processResult_red_cross_swimming_instructor: function(ageIndex){
			this.init_red_cross_swimming_instructor();
			if (ageIndex == 0){
				$('#red_cross_swimming_instructor_div_buttons',this.target).css( "display", "none" );
				$('#red_cross_swimming_instructor_div_notes',this.target).css( "visibility", "hidden" );
			} else if (ageIndex == 1){
				$('#red_cross_swimming_instructor_div_buttons',this.target).css( "display", "none" );
				$('#red_cross_swimming_instructor_div_notes',this.target).css( "visibility", "hidden" );
			} else if (ageIndex == 2){
				$('#red_cross_swimming_instructor_div_buttons',this.target).css( "display", "none" );
				$('#red_cross_swimming_instructor_div_notes',this.target).css( "visibility", "hidden" );
			} else if (ageIndex == 3){
				$('#red_cross_swimming_instructor_div_sorry',this.target).css( "display", "none" );
				//$('#red_cross_swimming_instructor_div_buttons .assistant_water_safety_instructor').addClass("ui-btn-active");
				//$('#red_cross_swimming_instructor_div_buttons .water_safety_instructor').addClass("ui-btn-active");
			} else if (ageIndex == 4){
				$('#red_cross_swimming_instructor_div_sorry',this.target).css( "display", "none" );
				//$('#red_cross_swimming_instructor_div_buttons .assistant_water_safety_instructor').addClass("ui-btn-active");
				//$('#red_cross_swimming_instructor_div_buttons .water_safety_instructor').addClass("ui-btn-active");
			} 	
	},
	processResult_bcrpa_aquafit_instructor: function (ageIndex){
			this.init_bcrpa_aquafit_instructor();
			if (ageIndex == 0){
				$('#bcrpa_aquafit_instructor_div_buttons',this.target).css( "display", "none" );
				$('#bcrpa_aquafit_instructor_div_notes',this.target).css( "visibility", "hidden" );
			} else if (ageIndex == 1){
				$('#bcrpa_aquafit_instructor_div_buttons',this.target).css( "display", "none" );
				$('#bcrpa_aquafit_instructor_div_notes',this.target).css( "visibility", "hidden" );
			} else if (ageIndex == 2){
				$('#bcrpa_aquafit_instructor_div_buttons',this.target).css( "display", "none" );
				$('#bcrpa_aquafit_instructor_div_notes',this.target).css( "visibility", "hidden" );
			} else if (ageIndex == 3){
				$('#bcrpa_aquafit_instructor_div_buttons',this.target).css( "display", "none" );
				$('#bcrpa_aquafit_instructor_div_notes',this.target).css( "visibility", "hidden" );
				/*
				$('#red_cross_swimming_instructor_div_sorry').css( "display", "none" );
				$('#red_cross_swimming_instructor_div_buttons .assistant_water_safety_instructor').addClass("ui-btn-active");
				$('#red_cross_swimming_instructor_div_buttons .water_safety_instructor').addClass("ui-btn-active");
				*/
			} else if (ageIndex == 4){
				$('#bcrpa_aquafit_instructor_div_sorry',this.target).css( "display", "none" );
				//$('#bcrpa_aquafit_instructor_div_buttons .fitness_theory').addClass("ui-btn-active");
				//$('#bcrpa_aquafit_instructor_div_buttons .instructor_aquafit').addClass("ui-btn-active");
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
	initPage:function(){
		console.log("desktop init");
		var target='.desktoppage';
		$("#age-grid div a",target).click(function(){
			console.log("#age-grid div a -> click");
			$("#age-grid div a",target).removeClass("ui-btn-active");
			$(this).addClass("ui-btn-active");
			ageIndex=$(this).parent().index();
			lifeguard.desktop.computeResult();
			//$('#slick-mobile-container').slick("slickGoTo",2,false);
		});
		$("#category-grid div a",target).click(function(){
			console.log("#category-grid div a -> click");
			$("#category-grid div a",target).removeClass("ui-btn-active");
			$(this).addClass("ui-btn-active");
			categoryIndex=$(this).parent().index();
			$("#age-grid",target).css( "visibility", "visible" );
			$("#age-grid",target).css( "opacity", "1" );
			console.log( $(this).parent().index() +" and categoryIndex is: "+categoryIndex);
			lifeguard.desktop.computeResult();
		});
			initDesktop=true;
	}
};
  

