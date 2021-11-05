$( document ).ready(function() {
  var canvas = new fabric.Canvas('c');

  canvas.on('mouse:down', function(options) {
    // console.log(options.e.clientX, options.e.clientY);
    if (options.target) {
      console.log('an object was clicked! ', options.target.type, options.target);
    }
  });

  var draw_image = (item) => {
    fabric.Image.fromURL(item.src, function(oImg) {
      oImg.set({
        id:     item.id,
        left:   item.left,
        top:    item.top,
        width:  item.width,
        height: item.height,
        right:  item.right,
        scaleX: item.scaleX,
        scaleY: item.scaleY,
        selectable: false,
        preserveObjectStacking: true});
      // oImg.scale(0.3);
      canvas.add(oImg);
      canvas.sendToBack(oImg);
    });
  }

  var draw_rect = (item) => {
    let rect = new fabric.Rect({
      id: item.id,
      left: item.left,
      top: item.top,
      fill: item.fill,
      width: item.width,
      height: item.height,
      selectable: false,
      preserveObjectStacking: true
    });

    canvas.add(rect);
    // canvas.sendToFront(rect);
  }

  // canvas.loadFromJSON(canvas_data,canvas.renderAll.bind(canvas));
  // canvas.loadFromJSON()
  // var d = canvas_data = '{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0}],"background":"rgba(0, 0, 0, 0)"}';
  $.getJSON( "data.json", function( data ) {
    // canvas.loadFromJSON(data, canvas.renderAll.bind(canvas));
    $.each(data, function(i, item){
      if(item.type == 'image'){
        draw_image(item);

      }else if(item.type == 'rect'){
        draw_rect(item);
      }
    });
  });

});

