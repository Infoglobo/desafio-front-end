// classe para carregar dados do arquivo json e formata-los apropriadamente
function json(){
	var qtdSection, sectionName, retorno, artigos, breakSize=520;
	var classeExtra, image, title, label, url, description;
	
	// Resgatar valores
	json.prototype.resgatarValores = function(){
		$('#main').html('Carregando dados...');

		// Estrutura de resultado.
		$.getJSON('../../data.json', function(dados){
			this.qtdSection = dados.section.length;
			
			//varrendo as informacoes do arquivo json para fazer o tratamento
			for (i = 0; i < this.qtdSection; i++){
				this.retorno = '';
				artigos = dados.section[i].data;
				sectionName = dados.section[i].name;							
				
				for (j = 0; j < artigos.length; j++){
					//separando dados em variaveis para simplificar codigo
					image = dados.section[i].data[j].image;
					title = dados.section[i].data[j].title;
					label = dados.section[i].data[j].label;
					url = dados.section[i].data[j].url;
					description = dados.section[i].data[j].description;

					//personalizando a secao destaque
					if(sectionName == "main"){
						if(j<2) {
							if ($(window).width()>breakSize){ 
								//monta html da chamada para os dois primeiros artigos da secao destaque, em caso de usuario desktop
								this.retorno = montaColunaDestaqueTop(this.retorno, image, title, label, url, description);								
								continue;
							}else classeExtra = "top";							
						} 
						else if(j<4) classeExtra = "mid";
						else classeExtra = "bot";
					}
					//criando div para paginacao de 4 itens
					if(j==4 && sectionName != "main") this.retorno += '<div id="'+ sectionName +'Hidden" class="hidden">';					
					
					//montando as chamadas dos demais artigos em html
					this.retorno = montaColuna(this.retorno, classeExtra, image, title, label, url, description);	
				}
				
				//finalizando o codigo html e inserindo nas divs da view
				if(dados.section[i].name != "main") {
					this.retorno = '<h1>'+ sectionName +'</h1>' + this.retorno;
					this.retorno += '</div>'; //fechando div de paginacao
					this.retorno += '<div class="sessionBot" onclick="toggle_visibility(\''+ sectionName +'Hidden\');"><a href="javascript:">' + sectionName +' +</a></div>';
					$('#'+ sectionName.toLowerCase() +'').html(this.retorno);
				} else $('#main').html(this.retorno);
				
			}
			//escrevendo informacoes de anuncio na view
			setAdvertisingInformation(breakSize);					
		});
	}
}

// inicializando Objeto.
var obj = new json();
obj.resgatarValores();

//funcao para montar uma coluna com chamada de um artigo em html
function montaColuna(retorno, classeExtra, image, title, label, url, description){
	retorno += '<div class="coluna ' + classeExtra + '">';
	retorno += '<figure class="foto"><img src="assets/media/' + image + '" alt="' + title + '" title="' + title + '"><div class="imgbox"></div></figure>';
	retorno += '<p class="label">' + label + '</p>';
	retorno += '<h2><a href=" ' + url + '" title="' + title + '">' + title + '</a></h2>';
	retorno += '<p class="description">' + description + '</p>';
	retorno += '</div>';
	return retorno;
}

//funcao para montar a chamada para os dois primeiros artigos da secao destaque em html
function montaColunaDestaqueTop(retorno, image, title, label, url, description){
	retorno += '<div class="coluna top" style="background: url(assets/media/' + image + '">';
	retorno += '<div id="caixaArtigo">'; 
	retorno += '<p class="label">' + label + '</p>';
	retorno += '<h2><a href=" ' + url + '" title="' + title + '">' + title + '</a></h2>';
	retorno += '<p class="description">' + description + '</p>';
	retorno += '</div></div>';
	return retorno;
}

//funcao para esconder e mostrar artigos ocultos de paginacao
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
	  e.style.display = 'none';
   else
	  e.style.display = 'block';
}

//funcao para inserir o texto do anuncio de acordo com o dispositivo
function setAdvertisingInformation(breakSize){
	if ($(window).width()>breakSize) { $('#advertising').html("Advertising 728x90"); return; }
	$('#advertising').html('Advertising 320x100');
}

