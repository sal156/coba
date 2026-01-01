function ujiUnderscore() {
    let text = "";

    // variabel dengan underscore
    let _lastName = "Johnson";
    let _x = 2;
    let _100 = 5;

    text += "Variabel dengan Underscore (_):\n\n";
    text += "_lastName = " + _lastName + "\n";
    text += "_x        = " + _x + "\n";
    text += "_100      = " + _100 + "\n";

    // underscore sebagai nama variabel penuh
    let _ = "Variabel underscore penuh";
    text += "\nVariabel _ = " + _ + "\n";

    document.getElementById("output").textContent = text;
}
