/*  $(document).ready(function () {
        alert("Hello world!");
    });
*/
//по нажатии на кнопку

//отправлят ajax 
$('#get-button').on('click', function() {
    $.ajax({
    url: 'http://localhost:8082/api/users',
    type: 'GET',
    dataType: 'json',
    headers: {
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX192IjoiaW5pdCIsImFkbWluIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6InBhc3N3b3JkIiwibmFtZSI6Ik5pY2sgQ2VybWluYXJhIiwiX2lkIjoiNThlODU1N2Q0ZDNlNjkxZDIwMTE1NTNiIn0sImlhdCI6MTQ5MTYyMTQ3NiwiZXhwIjoxNDkxNzA3ODc2fQ.o-l1R0OCdC2HQjSkyxc27f7rSJpO06jnhCKjFXiL_5M'
                },
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