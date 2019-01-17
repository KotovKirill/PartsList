function ValidateForm(){
    str = "";
    isCorrect = true;
    if($('#name').val() === ""){
        str += "Имя\n";
        isCorrect = false;
    }

    if($('#need').val() === ""){
        str += "Необходимость\n";
        isCorrect = false;
    }

    var count = $('#count').val();
    if(isNaN(parseFloat(count)))
        if(count === ""){
            str += "Количество\n";
            isCorrect = false;
        }
        else{
            alert("Поле количество быть числом");
            return false;
        }
    if(isCorrect===false)
        alert("Поля:\n" + str + "не могут быть пустыми");
    return isCorrect;
}