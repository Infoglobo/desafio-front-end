$(document).ready( function () {
    qtd_main_news_banner = 2
    qtd_main_news_evidence = 2

    $.ajax({
        url:'./data.json',
        complete: function(data) {
            var response = data.responseJSON.section;
            var main = response.filter( function(item){return item.name == 'main'})[0].data;
            var brasil = response.filter( function(item){return item.name == 'Brasil'})[0].data;
            var mundo = response.filter( function(item){ return item.name == 'Mundo'})[0].data;

            
            //Main Session
            var main_news_template1 = $($('.main-news-type-1')[0]).clone()
            var main_news_template2 = $($('.main-news-type-2')[0]).clone()
            var main_news_template3 = $($('.main-news-type-3')[0]).clone()
            
            var container_main_news1 = $('#main-news .main-news-type-1').parent();
            container_main_news1.html('')
            var container_main_news2 = $('#main-news .main-news-type-2').parent();
            container_main_news2.html('')
            var container_main_news3 = $('#main-news .main-news-type-3').parent();
            container_main_news3.html('')

            var qtd_main = 0
            main.forEach(function(mainNews){
                //console.log(mainNews)
                if(qtd_main < qtd_main_news_banner) {
                    var main_news_template = main_news_template1.clone()
                    var container = container_main_news1
                } else if( qtd_main < (qtd_main_news_banner + qtd_main_news_evidence) ) {
                    var main_news_template = main_news_template2.clone()
                    var container = container_main_news2
                } else {
                    var main_news_template = main_news_template3.clone()
                    var container = container_main_news3
                }
                
                qtd_main += 1
                main_news_template.find('.news-image').attr('src', 'assets/media/'+mainNews.image)
                main_news_template.find('.news-link').attr('href', mainNews.url)
                main_news_template.find('.news-category').text(mainNews.label)
                main_news_template.find('.news-title').text(mainNews.title)
                main_news_template.find('.news-desc').text(mainNews.description)
                container.append(main_news_template)    
            });

            //Brasil session
            var brasil_news_item_template = $($('.brasil-news-item')[0]).clone()
            var container_brasil_news = $('.brasil-news-item').parent()
            container_brasil_news.html('')

            
            brasil.forEach( function(brasilNews){
                brasil_news_item_template.find('.news-image').attr('src', 'assets/media/'+brasilNews.image)
                brasil_news_item_template.find('.news-link').attr('href', brasilNews.url)
                brasil_news_item_template.find('.news-category').text(brasilNews.label)
                brasil_news_item_template.find('.news-title').text(brasilNews.title)
                brasil_news_item_template.find('.news-desc').text(brasilNews.description)
                container_brasil_news.append(brasil_news_item_template.clone())    
            });

            //Mundo session
            var mundo_news_item_template = $($('.mundo-news-item')[0]).clone()
            var container_mundo_news = $('.mundo-news-item').parent()
            container_mundo_news.html('')

            
            mundo.forEach(function(mundoNews) {
                mundo_news_item_template.find('.news-image').attr('src', 'assets/media/'+mundoNews.image)
                mundo_news_item_template.find('.news-link').attr('href', mundoNews.url)
                mundo_news_item_template.find('.news-category').text(mundoNews.label)
                mundo_news_item_template.find('.news-title').text(mundoNews.title)
                mundo_news_item_template.find('.news-desc').text(mundoNews.description)
                container_mundo_news.append(mundo_news_item_template.clone())    
            });

            $('.btn-more-brasil').click(function(event){
                $('.brasil-news').css('height','auto');
                event.stopPropagation();
            })
            $('.btn-more-mundo').click(function(event){
                $('.mundo-news').css('height','auto');
                event.stopPropagation();
            })

            
            

            
            
            



        }
    })
})
