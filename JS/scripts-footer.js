<script type="text/javascript">
  $(document).ready(function(){
    // TROCAR ABAIXO OS DADOS DO POST:
    var NomeDoPost = "Como Aumentar Suas Vendas Com o Atendimento de Chat Online";
    var LinkDoPost = "https://www.agenciamestre.com/marketing-digital/chat-online-para-vender-mais/";
    var BotaoDoPost = "Acessar Post";

    // Sets the main color on the resource type element
    // var main_color = $("#container-header").css('backgroundColor');
    // $(".resource_type").css("background-color",main_color);

    // Sets the conversion button color on the scroll fixed button
    var cta_color = $("#cf_submit").css('backgroundColor');
    $(".mobile_fixed").css("background-color",cta_color);

    // Sets the Blog Post CTA do the right Post
    $(".resource_info").replaceWith("<div class='resource_info'><h2>"+ NomeDoPost +"</h2><a class='button' href='"+ LinkDoPost +"?utm_source=afiliados-rdstation&utm_medium=referral&utm_campaign=afiliados-rdstation'>"+ BotaoDoPost +"</a></div>");

    // var bg_color = $("#container-header").css('backgroundColor');
    // $("#container").css("background-color",bg_color);

    // Sets the CTA color on the progress bar
    var cta_color = $("#cf_submit").css('backgroundColor');
    $(".progress").css("background-color",cta_color);

    // Sets the current year on the copyright message
    var thisYear = (new Date()).getFullYear();
    $(".copyright-year").text(thisYear);

    // Deletes the social share element
    $("#social-share").remove();

    // Scroll button behavior
    $(".scrollto").click(function (event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 600);
      if ( $(this).hasClass("mobile_fixed") ) {
        $("#conversion-form :input:visible:enabled:first").focus();
      }
    });

    // removes captcha
    var form = document.getElementById("conversion-form");
    var fields = form.getElementsByClassName("field");
    form.removeChild(fields[fields.length-1]);

    // Fixed conversion anchor behavior
    $(window).on('resize scroll', function(){
      if ( $("#conversion").offset().top - 200 <= $(window).scrollTop() ) {
        $(".mobile_fixed").addClass("hidden");
      } else {
        $(".mobile_fixed").removeClass("hidden");
      }
    })


  })
</script>
