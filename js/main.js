$(document).ready(function(){
    document.querySelector('.pluginDemonstration0').setAttribute('style','display:block');
    document.querySelector('.pluginDemonstration1').setAttribute('style','display:none');
    document.querySelector('.pluginDemonstration2').setAttribute('style','display:none');
    document.querySelector('.pluginDemonstration3').setAttribute('style','display:none');

    document.querySelector('.plugin1').addEventListener('click', function(){
        document.querySelector('.pluginDemonstration0').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration1').setAttribute('style','display:block');
        document.querySelector('.pluginDemonstration2').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration3').setAttribute('style','display:none');
    });

    document.querySelector('.plugin2').addEventListener('click', function(){
        document.querySelector('.pluginDemonstration0').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration1').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration2').setAttribute('style','display:block');
        document.querySelector('.pluginDemonstration3').setAttribute('style','display:none');
    });

    document.querySelector('.plugin3').addEventListener('click', function(){
        document.querySelector('.pluginDemonstration0').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration1').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration2').setAttribute('style','display:none');
        document.querySelector('.pluginDemonstration3').setAttribute('style','display:block');
    });

    $('section :input').val('').fancyInput()[0].focus();
    $('menu button').on('click', function() {
		var className = '';
			idx = $(this).index() + 1,
			$fancyInput = $('.fancyInput');
		if( idx > 1 )
			className = 'effect' + idx;
		$('#content').prop('class', className);
		$fancyInput.find(':input')[0].focus();

		$(this).addClass('active').siblings().removeClass('active');
    });

    $(document).ready(function(){
        $('input').iCheck({
            checkboxClass: 'icheckbox_flat-red',
            radioClass: 'iradio_flat-red'
      });
    });

    $('.lettering-demo').lettering();
    for(var i = 0; i < 1000; i++) {
        var className = ".char" + (i+1).toString();
        var elem = $(className);
        if(elem != null) {
            var color = Math.floor(Math.random()*16777215).toString(16);
            elem.css({"color": "#"+color});
        }
    }
})
