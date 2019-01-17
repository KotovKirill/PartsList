function PopupShow(id, state){
    document.getElementById('window').style.display = state;			
    document.getElementById('wrap').style.display = state;

    $('#name').val("");
    $('#need').val("");
    $('#count').val("");
    $('#id_k').val("");

    if(id == null){
        $('#titlePart').html("Добавление комплектующей");
    }
    else{
        $('#titlePart').html("Изменение комплектующей");
    }

    if(id !== null) {
        var index = -1;
        for (var i = 0; i < data.length; i++)
            if (data[i].id == id)
                index = i;

        if (index != -1) {
            var part = data[index];
            $('#name').val(part.name);
            $('#need').val(part.isNeed == 1 ? "Да" : "Нет");
            $('#count').val(part.count);
            $('#id_k').val(part.id);
        }
    }
}

function PopupShowSearch(name, state){
    document.getElementById('window_search').style.display = state;
    document.getElementById('wrap_search').style.display = state;

    $('#name_search').val("");
    $('#need_search').val("");
    $('#count_search').val("");
}