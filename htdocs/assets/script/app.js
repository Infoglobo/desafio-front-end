$(document).ready(function() {

	$.getJSON('../../data.json', function(k, data) {
		//var cont = data.
		var section_destaque = k.section[0].data;
		var section_brasil  = k.section[1].data;
		var section_mundo  = k.section[2].data;
		
		var dprimary = "";
		var dsecond = "";
		var dlist = "";
		var brasil = "";
		var mundo = "";
		

		for(i=0;i<section_destaque.length;i++) {
			
			if(i<2) {

				dprimary += '<div class="column">'
				dprimary +=		'<a class="link_geralb" href="'+section_destaque[i].url+'">'
				dprimary +=		'<div class="box">'
				dprimary +=			'<div class="image">'
				dprimary +=				'<img src="assets/media/'+section_destaque[i].image+'" height="261" width="464"/>'
				dprimary +=				'<div class="mask"></div>'
				dprimary +=			'</div>'
				dprimary +=			'<div class="caption">'
				dprimary +=			'<span class="categoria">'+section_destaque[i].label+'</span>'
				dprimary +=			'<h2 class="title">'+section_destaque[i].title+'</h2>'
				dprimary +=			'<p>'+section_destaque[i].description+'</p>'
				dprimary +=			'</div>'
				dprimary +=		'</div>'
				dprimary +=		'</a>'
				dprimary +=	'</div>'
				dprimary += '<div class="divider"></div>'

				$('.destaque').find('.first').html(dprimary);
				//console.log(section_destaque[i]);
			} else if (i<4) {
				dsecond += '<div class="column">'
				dsecond +=		'<div class="box">'
				dsecond +=			'<div class="figure">'
				dsecond +=				'<img src="assets/media/'+section_destaque[i].image+'" height="216" width="216"/>'
				dsecond +=			'</div>'
				dsecond +=			'<span class="categoria">'+section_destaque[i].label+'</span>'
				dsecond +=			'<h2 class="title">'+section_destaque[i].title+'</h2>'
				dsecond +=			'<p>'+section_destaque[i].description+'</p>'
				dsecond +=		'</div>'
				dsecond +=	'</div>'
				dsecond +=	 '<div class="divider"></div>'

				$('.destaque').find('.second').html(dsecond);
				//console.log(section_destaque[i]);
			} else {
				dlist += '<div class="column min">'
				dlist +=		'<div class="box has-min">'
				dlist +=			'<div class="figure">'
				dlist +=				'<img src="assets/media/'+section_destaque[i].image+'" height="121" width="216"/>'
				dlist +=			'</div>'
				dlist +=			'<span class="categoria">'+section_destaque[i].label+'</span>'
				dlist +=			'<h2 class="title">'+section_destaque[i].title+'</h2>'
				dlist +=			'<p>'+section_destaque[i].description+'</p>'
				dlist +=		'<a class="link_geralp" href="'+section_destaque[i].url+'"></a>'
				dlist +=		'</div>'
				dlist +=	'</div>'
				dlist +=	 '<div class="divider"></div>'

				$('.destaque').find('.list').html(dlist);
				//console.log(section_destaque[i]);
			}
		}

		for(i=0;i<section_brasil.length;i++) {
			
			if(i<4) {

				brasil += '<div class="divider"></div>'
				brasil += '<div class="column min">'
				brasil +=		'<div class="box has-min">'
				brasil +=			'<div class="figure">'
				brasil +=				'<img src="assets/media/'+section_brasil[i].image+'" height="121" width="216"/>'
				brasil +=			'</div>'
				brasil +=			'<span class="categoria">'+section_brasil[i].label+'</span>'
				brasil +=			'<h2 class="title">'+section_brasil[i].title+'</h2>'
				brasil +=			'<p>'+section_brasil[i].description+'</p>'
				brasil +=		'<a class="link_geralp" href="'+section_brasil[i].url+'"></a>'
				brasil +=		'</div>'
				brasil +=	'</div>'

				$('.brasil').find('.line').html(brasil);
				//console.log(section_brasil[i]);
			}
			
		}

		for(i=0;i<section_mundo.length;i++) {
			if(i<4) {
				mundo += '<div class="divider"></div>'
				mundo += '<div class="column min">'
				mundo +=		'<div class="box has-min">'
				mundo +=			'<div class="figure">'
				mundo +=				'<img src="assets/media/'+section_mundo[i].image+'" height="121" width="216"/>'
				mundo +=			'</div>'
				mundo +=			'<span class="categoria">'+section_mundo[i].label+'</span>'
				mundo +=			'<h2 class="title">'+section_mundo[i].title+'</h2>'
				mundo +=			'<p>'+section_mundo[i].description+'</p>'
				mundo +=		'<a class="link_geralp" href="'+section_mundo[i].url+'"></a>'
				mundo +=		'</div>'
				mundo +=	'</div>'

				$('.mundo').find('.line').html(mundo);
				//console.log(section_mundo[i]);
			}
			
		}

});
	
});