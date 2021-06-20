var foto;
window.onload = () => {
    foto = new Foto();
}

var gray = document.getElementById("gray");
var bright = document.getElementById("bright");
var dark = document.getElementById("dark");
var huerotate = document.getElementById("huerotate");
var blur = document.getElementById("blur");
var emboss = document.getElementById("emboss");
var sharp = document.getElementById("sharp");
var sepia = document.getElementById("sepia");

var long = document.getElementById("long");

var GrayScale = document.getElementById("GrayScale");
var Brighter = document.getElementById("Brighter");
var Dark = document.getElementById("Dark");
var Hue_Rotate = document.getElementById("Hue_Rotate");
var Blur = document.getElementById("Blur");
var Emboss = document.getElementById("Emboss");
var Sharp = document.getElementById("Sharp");
var Sepia = document.getElementById("Sepia");

let img = document.getElementById("foto-image");

function selectImage(){
    document.getElementById("foto-file").click();
}

function makeGrayScale(){
    foto.grayscale();
}

document.getElementById("GrayScale").addEventListener('long-press', function(e) {
    gray.style.display = "block";
    Blur.style.display = "block";
    Sepia.style.display = "block";
    Hue_Rotate.style.display = "block";
    GrayScale.style.display = "none";
    long.style.display = "none";
    sepia.style.display = "none";
    blur.style.display = "none";
    huerotate.style.display = "none";
});

document.getElementById("Hue_Rotate").addEventListener('long-press', function(e) {
    huerotate.style.display = "block";
    GrayScale.style.display = "block";
    Blur.style.display = "block";
    Sepia.style.display = "block";
    Hue_Rotate.style.display = "none";
    long.style.display = "none";
    sepia.style.display = "none";
    blur.style.display = "none";
    gray.style.display = "none";
});

document.getElementById("Blur").addEventListener('long-press', function(e) {
    blur.style.display = "block";
    Sepia.style.display = "block";
    GrayScale.style.display = "block";
    Hue_Rotate.style.display = "block";
    Blur.style.display = "none";
    long.style.display = "none";
    gray.style.display = "none";
    sepia.style.display = "none";
    huerotate.style.display = "none";
});

document.getElementById("Sepia").addEventListener('long-press', function(e) {
    sepia.style.display = "block";
    Blur.style.display = "block";
    GrayScale.style.display = "block";
    Hue_Rotate.style.display = "block";
    Sepia.style.display = "none";
    long.style.display = "none";
    blur.style.display = "none";
    gray.style.display = "none";
    huerotate.style.display = "none";
});

function greyfunc(){
    let gs = document.getElementById('gs').value;
    let huerotate = document.getElementById('h').value;
    let blur = document.getElementById('bl').value;
    let sepia = document.getElementById('se').value;
    img.style.filter = 'grayscale('+gs+'%) blur('+blur+'px) hue-rotate('+huerotate+'deg) sepia('+sepia+'%)';
}

function hfunc(){
    let gs = document.getElementById('gs').value;
    let huerotate = document.getElementById('h').value;
    let blur = document.getElementById('bl').value;
    let sepia = document.getElementById('se').value;
    img.style.filter = 'grayscale('+gs+'%) blur('+blur+'px) hue-rotate('+huerotate+'deg) sepia('+sepia+'%)';
}

function blfunc(){
    let gs = document.getElementById('gs').value;
    let huerotate = document.getElementById('h').value;
    let blur = document.getElementById('bl').value;
    let sepia = document.getElementById('se').value;
    img.style.filter = 'grayscale('+gs+'%) blur('+blur+'px) hue-rotate('+huerotate+'deg) sepia('+sepia+'%)';
}


function sefunc(){
    let gs = document.getElementById('gs').value;
    let huerotate = document.getElementById('h').value;
    let blur = document.getElementById('bl').value;
    let sepia = document.getElementById('se').value;
    img.style.filter = 'grayscale('+gs+'%) blur('+blur+'px) hue-rotate('+huerotate+'deg) sepia('+sepia+'%)';
}

function gback(){
    // document.getElementById('back').click()
    gray.style.display = "none";
    GrayScale.style.display = "block";
    Hue_Rotate.style.display = "block";
    Blur.style.display = "block";
    Sepia.style.display = "block";

}

function hback(){
    // document.getElementById('back').click()
    huerotate.style.display = "none";
    GrayScale.style.display = "block";
    Hue_Rotate.style.display = "block";
    Blur.style.display = "block";
    Sepia.style.display = "block";
}

function blback(){
    // document.getElementById('back').click()
    blur.style.display = "none";
    Blur.style.display = "block";
    GrayScale.style.display = "block";
    Hue_Rotate.style.display = "block";
    Sepia.style.display = "block";
}

function seback(){
    // document.getElementById('back').click()
    sepia.style.display = "none";
    GrayScale.style.display = "block";
    Hue_Rotate.style.display = "block";
    Blur.style.display = "block";
    Sepia.style.display = "block";
}

function makeBrighter(){
    foto.makeBright();
}

function makeDark(){
    foto.makeDark();
}

function makeBlur(){
    foto.applyBlurFilter();
}

function makeEmboss(){
    foto.applyEmbossFilter();
}

function makeSharp(){
    foto.applySharpFilter();
}

function download(){
    foto.export();
}

function crop(){
    foto.cropSelected();
}

function filp(){
    foto.flipVertically();
}

function rotate(deg){
    foto.rotate(deg);
}