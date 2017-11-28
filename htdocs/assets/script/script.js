$(document).ready( function () {
    qtd_main_news_banner = 2
    qtd_main_news_evidence = 2

    $.ajax({
        url:'data.json',
        complete: function(data) {
            var response = data.responseJSON.section;
            var main = response.filter( item => item.name == 'main')[0].data;
            var brasil = response.brasil;
            console.log( main )

            
            var main_news_template1 = $($('.main-news-type-1')[0]).clone()
            var main_news_template2 = $($('.main-news-type-2')[0]).clone()
            var main_news_template3 = $($('.main-news-type-3')[0]).clone()
            
            var container_main_news1 = $('.main-news-type-1').parent();
            container_main_news1.html('')
            var container_main_news2 = $('.main-news-type-2').parent();
            container_main_news2.html('')
            var container_main_news3 = $('.main-news-type-3').parent();
            container_main_news3.html('')

            var qtd_main = 0
            main.forEach(mainNews => {
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
                main_news_template.find('.news-image').text(mainNews.title)
                main_news_template.find('.news-image').text(mainNews.description)
                container.append(main_news_template)    
            });
            
            
            

            
            
            

            console.log(response)


        }
    })
})
