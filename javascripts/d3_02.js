var svgctrl = d3.select('svg');
var c1 =svgctrl.append('line')
c1.attr('x1',36).attr('y1',40).attr('x2',76).attr('y2',100).attr('stroke','red').attr('stroke-width',3)
var c2 =svgctrl.append('line')
c2.attr('x1',206).attr('y1',40).attr('x2',166).attr('y2',100).attr('stroke','red').attr('stroke-width',3)
var c3 =svgctrl.append('rect')
c3.attr('x',16).attr('y',100).attr('width',200).attr('height',130).attr('fill','white').attr('stroke-width',3).attr('stroke','black')
var c4 =svgctrl.append('line')
c4.attr('x1',118).attr('y1',330).attr('x2',48).attr('y2',280).attr('stroke','black').attr('stroke-width',3)
var c5 =svgctrl.append('line')
c5.attr('x1',118).attr('y1',330).attr('x2',188).attr('y2',280).attr('stroke','black').attr('stroke-width',3)
var c6 =svgctrl.append('line')
c6.attr('x1',118).attr('y1',230).attr('x2',118).attr('y2',400).attr('stroke','black').attr('stroke-width',3)
var c7 =svgctrl.append('line')
c7.attr('x1',118).attr('y1',400).attr('x2',188).attr('y2',500).attr('stroke','black').attr('stroke-width',3)
var c8 =svgctrl.append('line')
c8.attr('x1',118).attr('y1',400).attr('x2',48).attr('y2',500).attr('stroke','black').attr('stroke-width',3)
var c9 =svgctrl.append('polygon')
c9.attr('points','60,130,90,130,80,160').attr('fill','white').attr('stroke','black').attr('stroke-width',2)
var c9 =svgctrl.append('polygon')
c9.attr('points','138,130,168,130,151,160').attr('fill','white').attr('stroke','black').attr('stroke-width',2)
var c10 =svgctrl.append('line')
c10.attr('x1',78).attr('y1',200).attr('x2',158).attr('y2',200).attr('stroke','black').attr('stroke-width',3)
var c11 =svgctrl.append('rect')
c11.attr('x',13).attr('y',130).attr('width',20).attr('height',60).attr('fill','white').attr('stroke-width',3).attr('stroke','black')
var c12 =svgctrl.append('rect')
c12.attr('x',200).attr('y',130).attr('width',20).attr('height',60).attr('fill','white').attr('stroke-width',3).attr('stroke','black')
$('#1').bind('click', function(){
    $('line').eq(2).attr('y2',370).attr('y1',300);
    $('line').eq(3).attr('y2',370).attr('y1',300);
    $('line').eq(5).attr('x2',228).attr('y2',480);
    $('line').eq(6).attr('x2',8).attr('y2',480);
    $('polygon').eq(0).attr('fill','red');
    $('polygon').eq(1).attr('fill','red');
})
$('#2').bind('click', function(){
    $('line').eq(2).attr('y2',280).attr('y1',330);
    $('line').eq(3).attr('y2',280).attr('y1',330);
    $('line').eq(5).attr('x2',188).attr('y2',500);
    $('line').eq(6).attr('x2',48).attr('y2',500);
    $('polygon').eq(0).attr('fill','white');
    $('polygon').eq(1).attr('fill','white');
})