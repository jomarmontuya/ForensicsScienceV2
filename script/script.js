$(document).ready(function() {


    $('.img-fluid').click(function quiz() {
          // This will get the data from data-next attribute

        let next = $(this).attr('data-next');
         // Check if the data is valid number
        if(next) {
            $('.question-handler').fadeIn('fast').removeClass('inactive');
            $('.active').fadeOut('fast').addClass('inactive').removeClass('active');
             // Removes the default display block styles from fade in
          $('.qblock' + next).fadeIn("fast").addClass('active').removeClass('inactive').css('display','')
        
         }
         // check if the questions reach the end
         if(next == "success") {
             $('.success').fadeIn('fast').removeClass('inactive').css('display','');
             
         }

    });

    $('.quizBtn').click(function() {
            // This will get the data from data-next attribute
           
            let next = $(this).attr('data-next');
            // Check if the data is valid number
            if(next) {
                $('.question-handler').fadeIn('fast').removeClass('inactive');
               $('.active').fadeOut('fast').addClass('inactive').removeClass('active');
                // Removes the default display block styles from fade in
             $('.qblock' + next).fadeIn("fast").addClass('active').removeClass('inactive').css('display','')
           
            }
            // check if the questions reach the end
            if(next == "success") {
                $('.success').fadeIn('fast').removeClass('inactive').css('display','');
                
            }
            // Note! When adding more questions no need to touch this script
            // You can add questions directly to HTML
    });

})