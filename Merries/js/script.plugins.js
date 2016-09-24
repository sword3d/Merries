;(function($){

	"use strict";

	$(document).ready(function(){

        /* ------------------------------------------------
                Modal
        ------------------------------------------------ */

        if($('.modal').length){ 

            $('.modal_btn').on('click', function(){
                $('.modal').arcticmodal();              
            });

        }

        if($('.modal2').length){ 

            $('.modal_btn2').on('click', function(){
                $('.modal2').arcticmodal();              
            });

        }

        if($('.modal3').length){ 

            $('.modal_btn3').on('click', function(){
                $('.modal3').arcticmodal();              
            });

        }

        if($('.modal4').length){ 

            $('.modal_btn4').on('click', function(){
                $('.modal4').arcticmodal();              
            });

        }


        /* ------------------------------------------------
                End of Modal
        ------------------------------------------------ */

        /* ------------------------------------------------
                Modal
        ------------------------------------------------ */

        if($('.masonry').length){ 

            $('.masonry').masonry({
			  // options
			  itemSelector: '.four_box',
			});

            $('.btn_open_top_box').on('click', function(){
                $('.masonry').masonry({
                  // options
                  itemSelector: '.four_box',
                });             
            });

			$('.btn_open_top_box').on('click', function(){
                $('.masonry2').masonry({
				  // options
				  itemSelector: '.four_box',
				});             
            });


        }

        /* ------------------------------------------------
                End of Modal
        ------------------------------------------------ */

                /* ------------------------------------------------
                validateform
        ------------------------------------------------ */

        var validator = $(".validateform").validate({

           rules:{

                name:{
                    required: true,
                    minlength: 2,
                    maxlength: 16,
                    characters: true,
                },

                m_name:{
                    required: true,
                    minlength: 2,
                    maxlength: 16,
                    characters: true,
                },

                l_name:{
                    required: true,
                    minlength: 2,
                    maxlength: 16,
                    characters: true,
                },

                number:{
                    required: true,
                    //number: true
                },

                email:{
                    required: true,
                    email: true
                },

                data:{
                    required: true,
                    date: true
                },

                // country:{
                //     required: true,
                // },

                 postcode:{
                     required: true,
                     number: true
                 },

                 // city:{
                 //     required: true,
                 // },

                 street:{
                     required: true,
                 },


                 building:{
                     required: true,
                 },

                 apartment:{
                     required: true,
                 },

                 housing:{
                     required: true,
                 },

                 dete_birth:{
                     required: true,
                 },

           },

           messages:{

                name:{
                     required: "Это поле обязательно для заполнения",
                     minlength: "Имя должно быть минимум 2 символа",
                     maxlength: "Максимальное число символо - 16",
                     characters: "Пожалуйста, введите имя без цифр",
                 },

                m_name:{
                    required: "Это поле обязательно для заполнения",
                     minlength: "Имя должно быть минимум 2 символа",
                     maxlength: "Максимальное число символо - 16",
                     characters: "Пожалуйста, введите имя без цифр",
                },

                l_name:{
                    required: "Это поле обязательно для заполнения",
                     minlength: "Имя должно быть минимум 2 символа",
                     maxlength: "Максимальное число символо - 16",
                     characters: "Пожалуйста, введите имя без цифр",
                },

                number:{
                    required: "Это поле обязательно для заполнения",
                    //number: "Только цифры",

                },

                email:{
                    required: "Это поле обязательно для заполнения",
                    email: "E-mail введен не корректно",

                },

                data:{
                    required: "Это поле обязательно для заполнения",
                    date: "Только дата",

                },

                // country:{
                //     required: "Error. Invalid data.",
                // },

                 postcode:{
                    required: "Это поле обязательно для заполнения",
                    number: "Только цифры",

                 },

                 // city:{
                 //     required: "Это поле обязательно для заполнения",
                 // },

                 street:{
                     required: "Это поле обязательно для заполнения",
                 },

                 building:{
                     required: "Это поле обязательно для заполнения",
                 },

                 apartment:{
                     required: "Это поле обязательно для заполнения",
                 },

                 housing:{
                     required: "Это поле обязательно для заполнения",
                 },

                 dete_birth:{
                     required: "Это поле обязательно для заполнения",
                 },
                
                

           }

        });


        var validator = $(".validateform2").validate({

           rules:{

                name:{
                    required: true,
                    minlength: 2,
                    maxlength: 16,
                    characters: true,
                },

                email:{
                    required: true,
                    email: true
                },
                
                message:{
                    required: true,
                },


           },

           messages:{

                 name:{
                     required: "Это поле обязательно для заполнения",
                     minlength: "Имя должно быть минимум 2 символа",
                     maxlength: "Максимальное число символо - 16",
                     characters: "Пожалуйста, введите имя без цифр",
                 },


                email:{
                    required: "Это поле обязательно для заполнения",
                    email: "E-mail введен не корректно",

                },

                message:{
                    required: "Это поле обязательно для заполнения",

                },

           }

        });



        /* ------------------------------------------------
                End of validateform
        ------------------------------------------------ */

        /* ------------------------------------------------
                Maskedinput
        ------------------------------------------------ */

        if($('.phone_mask').length){ 

            $(".phone_mask").mask("+7 (999) 999-9999");

        }

        /* ------------------------------------------------
                End of Maskedinput
        ------------------------------------------------ */

        /* ------------------------------------------------
                Calendar
        ------------------------------------------------ */

        if($('.calendar').length){ 

           $(".calendar").ionDatePicker();

        }

        /* ------------------------------------------------
                End of Calendar
        ------------------------------------------------ */


	});

	$(window).load(function(){

		/* ------------------------------------------------
				Name pudin
		------------------------------------------------ */


        /* ------------------------------------------------
				End of Name pudin
		------------------------------------------------ */

	});

})(jQuery);