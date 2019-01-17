function getCountComputers() {
    var count = Number.MAX_VALUE;
    for(var i = 0; i<data.length; i++){
        var obj = data[i];
        if(obj.isNeed == 1 && obj.count < count)
            count = obj.count;
    }
    return count;
}

function showParts(){
    $("tbody").html("");
    $.ajax({
        type: "POST",
        url: 'Main?showParts=true',
        //data: {"OBJFromClient": JSON.stringify(OBJForSend)},
        success:[ function (FromServerJ) {
            var FromServer = JSON.parse(FromServerJ);

            data = FromServer;

            for(var i = 0; i<FromServer.length; i++){
                var markup = "<tr>" +
                    "<td>" + FromServer[i].name + "</td>" +
                    "<td>" + (FromServer[i].isNeed == 1 ? "Да" : "Нет") + "</td>"+
                    "<td>" + FromServer[i].count + "</td>"
                    + "<td><button id='"+ FromServer[i].id +"' value='change' class='button'>Изменить</button></td>"
                    + "<td><button id='"+ FromServer[i].id +"' value='delete' class='delete'>Удалить</button></td></tr>";
                $("table tbody").append(markup);
            }

            $('#count_computers').html('Число компьютеров для сборки: ' + getCountComputers());
            pagination();
        }],
        error:[ function () {
            alert("error");
        }]
    });
}

function deletePart(id) {
    $.ajax({
        type: "POST",
        url: 'Main?deletePart=true&id='+id,
        success:[ function (FromServerJ) {
            if(FromServerJ === "OK")
                showParts();
        }],
        error:[ function () {
            alert("error");
        }]
    });
    return data;
}

function updatePart() {
    if(ValidateForm()){
        var name = $('#name').val();
        var need = $('#need').val() === "Да" ? 1 : 0;
        var count  = $('#count').val();
        var id = $('#id_k').val();

        if(id !== "") {
            $.ajax({
                type: "POST",
                url: 'Main?updatePart=true&id=' + id + '&name=' + name + '&need=' + need + '&count=' + count,
                success: [function (FromServerJ) {
                    if (FromServerJ === "OK") {
                        showParts();
                        alert("Успешно!");
                        PopupShow(null, 'none');
                    }
                }],
                error: [function () {
                    alert("error");
                }]
            });
        }
        else{
            $.ajax({
                type: "POST",
                url: 'Main?createPart=true' + '&name=' + name + '&need=' + need + '&count=' + count,
                success: [function (FromServerJ) {
                    if (FromServerJ === "OK") {
                        showParts();
                        alert("Успешно!");
                        PopupShow(null, 'none');
                    }
                }],
                error: [function () {
                    alert("error");
                }]
            });
        }

    }
}

function searchPart() {
    var name = $('#name_search').val().toLowerCase();
    if(name !== "") {
        var index = -1;
        for (var i = 0; i < data.length; i++)
            if (data[i].name.toLowerCase() === name)
                index = i;

        if (index != -1) {
            var part = data[index];
            $('#name_search').val(part.name);
            $('#need_search').val(part.isNeed == 1 ? "Да" : "Нет");
            $('#count_search').val(part.count);
        }
        else
            alert("Комплектующей с таким имененм не найдено!");
    }
}

