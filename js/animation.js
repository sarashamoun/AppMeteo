var $icone = $('#icone');
var $description = $('#description');
var $termo = $('.termo');
var $min = $('#min');
var $max = $('#max');
var $icone2 = $('#icone2');
var $description2 = $('#description2');
var $termo = $('.termo');
var $min2 = $('#min2');
var $max2 = $('#max2');
var $ville = $('#nom_ville');
var $ville2 = $('#nom_ville2');

var tl = new TimelineLite();
tl.to([$icone,$icone2], 1, {x:0,y:-28,opacity:1,},0.7);

var tl2 = new TimelineLite();
tl2.to([$description,$description2,$ville,$ville2], 1, {opacity:1,},0.7);

var tl3 = new TimelineLite();
tl3.to($termo, 1, {x:0,y:-28,opacity:1,},0.7).to([$min,$max,$min2,$max2], 1, {opacity:1,},1.5); 