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
            	$(this).toggleClass("active").parent().prevAll(".open_top_box").slideToggle("medium");
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
				self.temtpate = '<div class="cildren_line"></div><div><div class="form_box"><label>Какими подгузниками пользовались</label><select><option>Подгузник 1</option><option>Подгузник 2</option><option>Подгузник 3</option><option>Подгузник 4</option></select></div></div><div class="row clearfix"><div class="col-50pr"><div class="form_box"><label>Дата рождения</label><div class="calendar_wr"><span class="icon_calendar"></span><input class="calendar" data-lang="ru" data-years="1990-2016" data-format="LL" data-sundayfirst="false" placeholder=""/></div></div></div><div class="col-50pr"><div class="form_box"><label>Пол</label><select><option>Мальчик</option><option>Девочка</option></select></div></div></div>';

				self.events();

			},

			events: function(){

				var self = this;
				
				self.select.on('change', function(){
					self.check();
					$(".calendar").ionDatePicker();
				});

			},

			check: function(){

				var self = this;
				
				self.box.html('');

				for (var i = 1; i <= self.select.val(); i++) {
					self.box.append(self.temtpate);
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