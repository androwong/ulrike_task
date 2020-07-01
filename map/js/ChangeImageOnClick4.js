
function showImage(imgPath) {
    var curImage = document.getElementById('currentImg');
    curImage.src = imgPath;
 }
function addImage(id) {
    if(!$("#map-" + id).hasClass('active'))
       { 
           $("#map-" + id).addClass('active');
           $("#img_btn" + id).attr('src', 'img/'+ id + '-small.gif');
           $("#btn" + id).addClass('active');
           $("#btn" + id).attr('style', '-webkit-filter:grayscale(0)');
       }   
    else 
        {
            $("#map-" + id).removeClass('active');
            $("#img_btn" + id).attr('src', 'img/' + id + '-small-grey.gif');
            $("#btn" + id).removeClass('active');
            $("#btn" + id).attr('style', '-webkit-filter:grayscale(1)');
        }    
}


