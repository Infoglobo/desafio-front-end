// classe para carregar dados do arquivo json e formata-los apropriadamente
function json(){
	var qtdSection;
	var retorno;
	var artigos;
	var classeExtra; 
	
	// Resgatar valores
	json.prototype.resgatarValores = function(){
		$('#resultado').html('Carregando dados...');

		// Estrutura de resultado.
		$.getJSON('../../data.json', function(dados){
			this.qtdSection = dados.section.length;
			
			//varrendo as informacoes para fazer o tratamento
			for (i = 0; i < this.qtdSection; i++){
				this.retorno = '';
				classeExtra = '';
				artigos = dados.section[i].data;							
				for (j = 0; j < artigos.length; j++){
					//personalizando a session destaque
					if(dados.section[i].name == "main"){
						if(j<2) {
							if ($(window).width()>520){ 
								//codigo a parte para os dois primeiros artigos da secao destaque, em caso de usuario desktop
								this.retorno += '<div class="coluna top" style="background: url(assets/media/' + dados.section[i].data[j].image + '">';
								this.retorno += '<div id="caixaArtigo">'; 
								this.retorno += '<p class="label">' + dados.section[i].data[j].label + '</p>';
								this.retorno += '<h2><a href=" ' + dados.section[i].data[j].url + '" title="' + dados.section[i].data[j].title + '">' + dados.section[i].data[j].title + '</a></h2>';
								this.retorno += '<p class="description">' + dados.section[i].data[j].description + '</p>';
								this.retorno += '</div></div>';
								continue;
							}else classeExtra = "top";							
						} 
						else if(j<4) classeExtra = "mid";
						else classeExtra = "bot";
					}
					//criando div para paginacao de 4 itens
					if(j==4){
						if(dados.section[i].name == "Brasil") this.retorno += '<div id="brasilHidden">';
						if(dados.section[i].name == "Mundo") this.retorno += '<div id="mundoHidden">';
					}				
	  				this.retorno += '<div class="coluna ' + classeExtra + '">';
					this.retorno += '<figure class="foto"><img src="assets/media/' + dados.section[i].data[j].image + '" alt="' + dados.section[i].data[j].title + '" title="' + dados.section[i].data[j].title + '"><div class="imgbox"></div></figure>';
					this.retorno += '<p class="label">' + dados.section[i].data[j].label + '</p>';
					this.retorno += '<h2><a href=" ' + dados.section[i].data[j].url + '" title="' + dados.section[i].data[j].title + '">' + dados.section[i].data[j].title + '</a></h2>';
					this.retorno += '<p class="description">' + dados.section[i].data[j].description + '</p>';
					this.retorno += '</div>';	
				}
				//finalizando o codigo html e inserindo nas divs da view
				switch (dados.section[i].name) {
					case "main":
						$('#main').html(this.retorno);
					break;
					case "Brasil":
						this.retorno += '</div>'; //fechando div brasilHidden
						this.retorno = '<h1>Brasil</h1>' + this.retorno;
						this.retorno += '<div class="sessionBot" onclick="toggle_visibility(\'brasilHidden\');"><a href="javascript:">Brasil +</a></div>';
						$('#brasil').html(this.retorno);
					break;
					case "Mundo":
						this.retorno += '</div>'; //fechando div mundoHidden
						this.retorno = '<h1>Mundo</h1>' + this.retorno;
						this.retorno += '<div class="sessionBot" onclick="toggle_visibility(\'mundoHidden\');"><a href="javascript:">Mundo +</a></div>';
						$('#mundo').html(this.retorno);
					break;
				}
				
			}
			//escrevendo informacoes de anuncio na view
			setAdvertisingInformation();					
		});

	}

}

// inicializando Objeto.
var obj = new json();
obj.resgatarValores();

//funcao para esconder e mostrar artigos ocultos de paginacao
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
	  e.style.display = 'none';
   else
	  e.style.display = 'block';
}

//funcao para inserir o texto do anuncio de acordo com o dispositivo
function setAdvertisingInformation(){
	if ($(window).width()>520) { $('#advertising').html("Advertising 728x90"); return; }
	$('#advertising').html('Advertising 320x100');
}

