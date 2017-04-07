$(document).ready(function() {
            var newsSites = ['abc-news-au', 'bbc-news', 'cnbc'];
            newsSites.map(function(item,i) {
                var url = "https://newsapi.org/v1/articles?source=" + item + "&sortBy=top&apiKey=d937eaf48fc9474daf451332a1684ff7";
                 
                 $.getJSON(url,function(data){
                    $.each(data.articles, function(index, item) {


                var e = "<a href=" + item.url +" target='_blank'>" + "<p>" + item.title + "</p>" + "<p>" + item.description + "</p></a>";
               
                     $(e).appendTo("#entry"+i);   
                 

                return;
                    

});
                
            
            });
        });
        });

