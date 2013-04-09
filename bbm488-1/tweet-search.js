

 
function importTweets(keyword) {
    var url = 'http://search.twitter.com/search.json';
    var parameter = 'q=' + keyword + '&rpp=5';
    jQuery.ajax({
        url: url,
        data: parameter,
        crossDomain: true,
        dataType: 'jsonp',
        success: showTweets
    });
}

 
function showTweets(data) {
    jQuery('#tweetStyle').empty();
    for (var i in data['results']) {
        var status = data['results'][i];
       
		var html =
            '<div class="tweetStyle">' + '<p>' + '<img width="64" height="64" alt="" src="'+status.profile_image_url+'" />' + '<b>' + status.from_user_name + '  </b>' + '<a href="https://twitter.com/' + 
            status.from_user +'">' +
            '@' + status.from_user + '</a>' + '  ' + status.created_at + '<br/>' + status.text + '<br/>' + 
            
            '</p>' + '</div>'; 
        jQuery('#tweetStyle').append(html);
    }
}