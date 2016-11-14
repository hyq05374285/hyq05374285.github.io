var x1=118 ;
var y1=118 ;
function a(x1,y1){
    var svgctrl = d3.select('svg');
var c1 =svgctrl.append('line')
c1.attr('x1',x1-83).attr('y1',y1-78).attr('x2',x1-42).attr('y2',y1-18).attr('stroke','red').attr('stroke-width',3)
var c2 =svgctrl.append('line')
c2.attr('x1',x1+88).attr('y1',y1-78).attr('x2',x1+48).attr('y2',y1-18).attr('stroke','red').attr('stroke-width',3)
var c3 =svgctrl.append('rect')
c3.attr('x',x1-102).attr('y',y1-18).attr('width',200).attr('height',130).attr('fill','white').attr('stroke-width',3).attr('stroke','black')
var c4 =svgctrl.append('line')
c4.attr('x1',x1).attr('y1',y1+212).attr('x2',x1-70).attr('y2',y1+162).attr('stroke','black').attr('stroke-width',3)
var c5 =svgctrl.append('line')
c5.attr('x1',x1).attr('y1',y1+212).attr('x2',x1+70).attr('y2',y1+162).attr('stroke','black').attr('stroke-width',3)
var c6 =svgctrl.append('line')
c6.attr('x1',x1).attr('y1',y1+112).attr('x2',x1).attr('y2',y1+282).attr('stroke','black').attr('stroke-width',3)
var c7 =svgctrl.append('line')
c7.attr('x1',x1).attr('y1',y1+282).attr('x2',x1+70).attr('y2',y1+382).attr('stroke','black').attr('stroke-width',3)
var c8 =svgctrl.append('line')
c8.attr('x1',x1).attr('y1',y1+282).attr('x2',x1-70).attr('y2',y1+382).attr('stroke','black').attr('stroke-width',3)
var c9 =svgctrl.append('polygon')
c9.attr('points',(x1*1-58)+','+(y1*1+12)+','+(x1*1-28)+','+(y1*1+12)+','+(x1*1-35)+','+(y1*1+42)).attr('fill','white').attr('stroke','black').attr('stroke-width',2)
var c9 =svgctrl.append('polygon')
c9.attr('points',(x1*1+20)+','+(y1*1+12)+','+(x1*1+50)+','+(y1*1+12)+','+(x1*1+35)+','+(y1*1+42)).attr('fill','white').attr('stroke','black').attr('stroke-width',2)
var c10 =svgctrl.append('line')
c10.attr('x1',x1-40).attr('y1',y1+82).attr('x2',x1+40).attr('y2',y1+82).attr('stroke','black').attr('stroke-width',3)
var c11 =svgctrl.append('rect')
c11.attr('x',x1-105).attr('y',y1+12).attr('width',20).attr('height',60).attr('fill','white').attr('stroke-width',3).attr('stroke','black')
var c12 =svgctrl.append('rect')
c12.attr('x',x1+82).attr('y',y1+12).attr('width',20).attr('height',60).attr('fill','white').attr('stroke-width',3).attr('stroke','black')
}
a(x1,y1);
$('#1').bind('click', function(){
    $('line').eq(2).attr('y2',370).attr('y1',300);
    $('line').eq(3).attr('y2',370).attr('y1',300);
    $('line').eq(5).attr('x2',228).attr('y2',480);
    $('line').eq(6).attr('x2',8).attr('y2',480);
    $('polygon').eq(0).attr('fill','red');
    $('polygon').eq(1).attr('fill','red');
    $('svg').animate({left:'+=20px'});
})
$('#2').bind('click', function(){
    $('line').eq(2).attr('y2',280).attr('y1',330);
    $('line').eq(3).attr('y2',280).attr('y1',330);
    $('line').eq(5).attr('x2',188).attr('y2',500);
    $('line').eq(6).attr('x2',48).attr('y2',500);
    $('polygon').eq(0).attr('fill','white');
    $('polygon').eq(1).attr('fill','white');
    $('svg').animate({left:'-=20px'});
})
