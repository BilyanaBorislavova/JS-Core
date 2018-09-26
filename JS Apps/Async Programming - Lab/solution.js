function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_BkcXFYJEm';
    const USERNAME = 'peter';
    const PASSWORD = 'p';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {"Authorization": 'Basic ' + BASE_64};

    $('#btnLoadPosts').on('click', function () {

        $.ajax({
            method: "GET",
            url: URL + '/posts',
            headers: AUTH
        }).then(function (result) {
            for (let obj of result) {
                $('#posts').append($('<option>').text(obj.title).val(obj._id));
            }
        }).catch(function (err) {
            console.log(err);
        })
    });

    $('#btnViewPost').on('click', function () {
        let postId = $('#posts').find(":selected").val();
        $.ajax({
            method: "GET",
            url: URL + `/posts/${postId}`,
            headers: AUTH
        }).then(function (result) {
            $('#post-title').text(result.title);
            $('#post-body').text(result.body);
        });

        $.ajax({
            method: "GET",
            url: URL + `/comments/?query={"post_id":"${postId}"}`,
            headers: AUTH
        }).then(function (res) {
            $('#post-comments').empty();
            for (let obj of res) {
                $('#post-comments').append($('<li>').text(obj.text))
            }
        }).catch(function (err) {
            console.log(err);
        })
    });

}


