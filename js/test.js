const createNavbar = function(data){
    let navbarHtml ='<nav class="navbar  navbar-default zavbar-fixed-top">'
    + '<div class="container">'
    + '    <ul class="nav navbar-nav">'
              //form elemanları
    data.links.forEach(element => {
        if (element.list) {
            //list yazdir
            navbarHtml += '<li class="dropdown">'
                + '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'+ element.text +' <span class="caret"></span></a>'
                + '<ul class="dropdown-menu">'
            element.list.forEach(sub => {

                navbarHtml += '<li><a href="' + sub.url + '">'+ sub.text +'</a></li>'
                
            });

            navbarHtml += '</ul>'
            + '</li>'

        } else {
            navbarHtml += '<li><a href="'+ element.url +'">'+ element.text +'</a></li>'
        }
        
    })

    + '    </ul>'
    + '</div>'
    + '</nav>'
    $("body").append(navbarHtml)


    // $("ul li a").on("click",function(){
    //     for(let i in data.links){
    //         if($(this).text() == data.links[i].text){
    //             // console.log(data.links[i].text)
    //             // console.log($(this).attr("href"))
    //             $(this).attr("href" , data.links[i].url)
    //         }
    //         for(let u in data.links[i].list){
    //             if($(this).text() == data.links[i].list[u].text){
    //                 // console.log(data.links[i].list[u].text)
    //                 // console.log($(this).attr("href"))
    //                 $(this).attr("href" , data.links[i].list[u].url)
    //             }
    //         }
    //     }
    // })
}


$(function(){
                $.ajax({
            method : "GET",
            url : "../castum.json",
            data : {},
            success : function(data , status , xhr){
                console.log(createNavbar(data))
            },
            error : function(xhr, status , error){
                console.log("yes the is error")
            },complete : function( one, status){
                console.log("yes the is complit")
            }
        })
})


