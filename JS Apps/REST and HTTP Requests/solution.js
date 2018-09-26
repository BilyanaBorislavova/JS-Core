function attachEvents() {
       let url = `https://messenger-9dfc1.firebaseio.com/`;
       $('#submit').on('click', function () {
           let authorName = $('#author').val();
           let messageContent = $('#content').val();

             let obj = {
                 author: authorName,
                 content: messageContent,
                 timestamp: Date.now()
             };

             $.ajax({
                 method: "POST",
                 url: url + '.json',
                 data: JSON.stringify(obj)
             });

           $('#author').val('');
           $('#content').val('');
       });


       $('#refresh').on('click', function () {
           $('#messages').empty();
            $.ajax({
                method: "GET",
                url: url + '.json'
            }).then(function func(info) {
                Object.keys(info)
                    .forEach(function eachKey(key) {
                        let id = key;
                        let author = info[id].author;
                        let message = info[id].content;

                        $('#messages').append(`${author}: ${message}\n`)
                    });
            })
       });
   }