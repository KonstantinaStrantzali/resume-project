function fetchGitHubInformation(event){
    let username = $("#gh-username").val();
     if (!username){
         $("#gh-user-data").html(`<h2>Please use valid username</h2>`)
         return;
     }
     $("#gh-user-data").html(
         `<div id = "loader">
         <img src="loader.gif" alt="..loading"/> </div>`
     )

     $.when(
         get.JSON(`https://api.github.com/users/${username}`)
     ).then(
         function (response){
         var userData = response;
         $("#gh-user-data").html(userInformationHTML(userData));
     }, function(errorResponse){
         if (errorResponse.status === 404){
            $("#gh-user-data").html(`<h2>${username} not found</h2>`) 
         } else {
            $("#gh-user-data").html(`<h2>Error ${errorResponse.responseJSON.message}</h2>`)
         }
     }
     )

}