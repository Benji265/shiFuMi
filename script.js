let winValue = 1
let looseValue = 1
let drawValue = 1
let myDate = new Date();

$("button").click(function () {
    if ($(this).data("choice") == "Pierre") {
        $("#choicePlayer").empty();
        $("#choicePlayer").append(`<img id="playerImg" class="styleImg" src="img/pierre.png" data-imgchoice="Pierre">`);
    } else if ($(this).data("choice") == "Papier") {
        $("#choicePlayer").empty();
        $("#choicePlayer").append(`<img id="playerImg" class="styleImg" src="img/papier.png" data-imgchoice="Papier">`);
    } else {
        $("#choicePlayer").empty();
        $("#choicePlayer").append(`<img id="playerImg" class="styleImg" src="img/ciseaux.png" data-imgchoice="Ciseaux">`);
    }
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            $("#choiceIA").empty();
            $("#choiceIA").append(`<img id="cpuImg" class="styleImg" src="img/papier.png" data-iachoice="Papier">`);
            break;
        case 1:
            $("#choiceIA").empty();
            $("#choiceIA").append(`<img id="cpuImg" class="styleImg" src="img/ciseaux.png" data-iachoice="Ciseaux">`);
            break;
        case 2:
            $("#choiceIA").empty();
            $("#choiceIA").append(`<img id="cpuImg" class="styleImg" src="img/pierre.png" data-iachoice="Pierre">`);
            break;
        default:
            window.alert("Erreur");
            break;
    };

    if ($("#playerImg").data("imgchoice") == "Pierre" && $("#cpuImg").data("iachoice") == "Pierre") {
        $("#draw").val(drawValue++);
    } else if ($("#playerImg").data("imgchoice") == "Pierre" && $("#cpuImg").data("iachoice") == "Papier") {
        $("#loose").val(looseValue++)
    } else if ($("#playerImg").data("imgchoice") == "Pierre" && $("#cpuImg").data("iachoice") == "Ciseaux") {
        $("#win").val(winValue++)
    } else if ($("#playerImg").data("imgchoice") == "Papier" && $("#cpuImg").data("iachoice") == "Pierre") {
        $("#win").val(winValue++)
    } else if ($("#playerImg").data("imgchoice") == "Papier" && $("#cpuImg").data("iachoice") == "Papier") {
        $("#draw").val(drawValue++)
    } else if ($("#playerImg").data("imgchoice") == "Papier" && $("#cpuImg").data("iachoice") == "Ciseaux") {
        $("#loose").val(looseValue++)
    } else if ($("#playerImg").data("imgchoice") == "Ciseaux" && $("#cpuImg").data("iachoice") == "Pierre") {
        $("#loose").val(looseValue++)
    } else if ($("#playerImg").data("imgchoice") == "Ciseaux" && $("#cpuImg").data("iachoice") == "Papier") {
        $("#win").val(winValue++)
    } else {
        $("#draw").val(drawValue++)
    }

    if ($("#win").val() == 3) {
        Swal.fire({
            title: 'Victoire',
            text: 'Voulez-vous rejouez ?',
            icon: 'success',
            confirmButtonText: 'Replay',
        })
        $(".swal2-confirm").click(function () {
            location.reload();
        })
    } else if ($("#loose").val() == 3) {
        Swal.fire({
            title: 'Defaite',
            text: 'Voulez-vous rejouez ?',
            icon: 'error',
            confirmButtonText: 'Replay'
        })
        $(".swal2-confirm").click(function () {
            location.reload();
        })
    }
});