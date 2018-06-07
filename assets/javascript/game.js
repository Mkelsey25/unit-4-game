    var targetnumber = [Math.floor(Math.random() * 102) + 18];
    $("#number-to-guess").text(targetnumber);
    var crystals = $("#crystals");
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var images = ["assets/images/crystal-a.png", "assets/images/crystal-b.png", "assets/images/crystal-c.png", "assets/images/crystal-d.png"]
    function createCrystals() {
    for(var i = 0; i < 4; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", images[i]);
        imageCrystal.attr("data-crystalvalue", [Math.floor(Math.random() * 11) + 1]);
        crystals.append(imageCrystal);
        }
        }
    createCrystals();
        
    crystals.on("click", ".crystal-image", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#score").text(counter);
        if(counter == targetnumber) {
            wins++;
            $("#winsID").text(wins);
            counter = 0;
            targetnumber = [Math.floor(Math.random() * 102) + 18]; 
            console.log(targetnumber);
            $("#number-to-guess").text(targetnumber);
            $('#crystals').empty();
            createCrystals();  
            }
        else if(counter > targetnumber) {
            losses++;
            $("#lossesID").text(losses);
            counter = 0;
            targetnumber = [Math.floor(Math.random() * 102) + 18]; 
            console.log(targetnumber);
            $("#number-to-guess").text(targetnumber);
            $('#crystals').empty();
            createCrystals();
            }
            });

