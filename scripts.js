$(document).ready(function() {
            $('.floating-btn').click(function() {
                $('body').toggleClass('dark-theme');
                if ($('body').hasClass('dark-theme')) {
                    $('.floating-btn').html('<i class="fas fa-sun"></i>');
                } else {
                    $('.floating-btn').html('<i class="fas fa-moon"></i>');
                }
            });


            $('.floating-btn, .menu-btn').on('focus', function() {
                $(this).blur();
            });

            $('.menu-btn').click(function() {
                $('.menu-drawer').toggleClass('open');
                $('.blur-overlay').toggleClass('show');
            });

            $('.blur-overlay').click(function() {
                $('.menu-drawer').removeClass('open');
                $('.blur-overlay').removeClass('show');
            });
        });
function handleMenuClick() {
            $('.menu-drawer').removeClass('open');
            $('.blur-overlay').removeClass('show');
        }

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }