/*  $(document).ready(function () {
        alert("Hello world!");
    });
*/
//localStorage.setItem('token', data.token);
$(document).ready(function  () {
	 	$("#submit").on("click",function  (e) {
	 		e.preventDefault();
            var actionurl = e.currentTarget.action;
            $.ajax({
                url: actionurl,
                type: 'post',
                dataType: 'json',
                data: $("#submit").serialize(),
                success: function(data) {
                    console.log("succes")
                    localStorage.setItem('token', data.token);
                }
            });
	 		/*$.post("/",$(this).serialize(), function( data ) {
			  console.log(data);
			});*/
	 	})
	 });
/*$("#myform").submit(function(e) {

        //prevent Default functionality
        e.preventDefault();

        //get the action-url of the form
        //var actionurl = e.currentTarget.action;
        console.log("as");/*
        //do your own request an handle the results
        $.ajax({
                url: actionurl,
                type: 'post',
                dataType: 'json',
                data: $("#myform").serialize(),
                success: function(data) {
                    console.log('Success!')
                }
        });*/

//отправлят ajax 
$('#get-button').on('click', function() {
    $.ajax({
    url: 'http://localhost:8085/api/users',
    type: 'GET',
    dataType: 'json',
    headers: { 'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX192IjoiaW5pdCIsImFkbWluIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6InBhc3N3b3JkIiwibmFtZSI6Ik5pY2t5IiwiX2lkIjoiNThlOWM0MDA1ODUyZTUyMThjYTc1NzM5In0sImlhdCI6MTQ5MTcxNTI0NCwiZXhwIjoxNDkxODAxNjQ0fQ.RnJFqV6WjHP_KP-yjfMKcCbAhu6vUiTMTo_06K4bRPc'},
    success: function(data) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                $.each(data, function() {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + this._id + '</td>\
                            <td><input type="text" class="name" value="' + this.name + '"></td>\
                            <td>\
                                <button class="update-button">UPDATE/PUT</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
        });
    },
    error: function (error) {
        console.log(error);
                }
    });
});