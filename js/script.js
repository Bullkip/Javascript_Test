$(document).ready(function () {
    $('.form__btn').click(function () {
     console.log("!!!");
     if ($('.form__input').val() == '') {
     console.log('Empty!!')
     }

     else {
     console.log($('.form__input').val())

    //  img = $('.form__input').val();
    //  localStorage.setItem("img", img)

     $('.form').append("<div class='form__group'><label class = ' form__label'>Add image url here:  <input class='form__input' type='url'></label><button class='btn form__btn'>Add</button></div>");
     }
    });

    $(function () {

        $(window).bind('storage', function (e) {
            alert('storage changed');
        });

        localStorage.setItem('a', 'test');

    });

    
    // function getBase64Image(img) {
    //     let canvas = document.createElement("canvas");
    //     canvas.width = img.width;
    //     canvas.height = img.height;

    //     let ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0);

    //     let dataURL = canvas.toDataURL("image/png");

    //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    // }

});