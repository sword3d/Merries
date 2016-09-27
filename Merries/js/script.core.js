;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.openTopBox();
			self.formOpen();
			self.childrenQt.init();

		},

		windowLoad: function(){

			var self = this;

			//self.NameFunction();

		},

		/**
		**	Purpose code
		**/

		openTopBox : function(){

		    $(".btn_open_top_box").on('click', function () {
            	$(this).toggleClass("active").parent().prev(".four_box_wr").find(".hide").toggleClass("active");
            });

		},

		/**
		**	Purpose code
		**/

		formOpen : function(){

		     $(".btn_form_box_open").on('click', function(event){

		        $('.form_box_open').addClass('active').slideDown("medium");;	       
		    
		      });

		     $(".btn_form_box_close").on('click', function(event){

		        $('.form_box_open').removeClass('active').slideUp("medium");;	       
		    
		      });

		},


		/**
		**	Children Qt
		**/

		childrenQt: {

			init: function(){

				var self = this;

				self.select = $('#qtChildren');
				self.box = $('#cildren_qt_box');
				self.temtpate = self.box.html();

				self.events();

			},

			events: function(){

				var self = this;
				
				self.select.on('change', function(){
					self.check();
					$(".calendar").ionDatePicker();
					//$(".validateform").validate();
				});

			},

			check: function(){

				var self = this;
				
				self.box.html('');

				for (var i = 1; i <= self.select.val(); i++) {
					self.box.append(self.temtpate).find('.cildren_qt_item').eq(i-1).find('.calendar').attr('name', i);
				}
			},

		}


	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});


})(jQuery);