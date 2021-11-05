$( document ).ready(function() {
  var canvas = new fabric.Canvas('c');

  // create a rectangle object
  // var rect1 = new fabric.Rect({
  //   left: 100,
  //   top: 100,
  //   fill: 'red',
  //   width: 50,
  //   height: 50
  // });
  //
  // rect1.set('selectable', false);
  // // "add" rectangle onto canvas
  // canvas.add(rect1);

  var getRectStruct = (item) => {
    return {
      id: item.id,
      left: item.left,
      top: item.top,
      fill: item.fill,
      width: item.width,
      height: item.height,
      type: 'rect',
      opacity: 1
    }
  }

  var getImageStruct = (item) => {debugger;
    return {
      id: item.id,
      left: item.left,
      top: item.top,
      width: item.width,
      height: item.height,
      right: item.right,
      scaleX: item.scaleX,
      scaleY: item.scaleY,
      type: 'image',
      src: item.src,
      preserveObjectStacking: true
    }
  }

  $("#btn-add-rect").click(function(){
    // create a rectangle object
    var rect = new fabric.Rect({
      id: Math.floor(Date.now() / 1000),
      left: 200,
      top: 200,
      fill: 'green',
      width: 50,
      height: 50,
      opacity: 1
    });

    // "add" rectangle onto canvas
    canvas.add(rect);
    console.log("Drawn object:", rect);
  });

  // Convert to JSON
  $("#btn-to-json").click(function(){
    var canvas_data = canvas.toJSON().objects;
    // console.log("==============>", canvas.toJSON().objects);
    $.each(canvas_data, function(index, item){
      item.id = Math.floor(Date.now() / 1000)
      canvas_data[index] = item
    });
    // $.each(canvas.getObjects(), function(i, v){
    //   if(v.type == 'rect') {
    //     canvas_data.objects[i] = getRectStruct(v);
    //   }else{
    //     canvas_data.objects[i] = getImageStruct(v);
    //   }
    // });
    console.log(canvas_data);
  });

  $("#btn-delete").click(function(){
    canvas.remove(canvas.getActiveObject());
  });

  fabric.Image.fromURL('/nurse_patient.jpg', function(oImg) {
    oImg.set({
      id: Math.floor(Date.now() / 1000),
      left: 50
    });

    oImg.scale(0.3);
    canvas.add(oImg);
  });

  canvas.on('mouse:down', function(options) {
    // console.log(options.e.clientX, options.e.clientY);
    if (options) {
      console.log('an object was clicked! ', options.target);
    }
  });

  //
  // var imgElement = document.getElementById('my-image');
  // var imgInstance = new fabric.Image(imgElement, {
  //   left: 100,
  //   top: 300,
  //   angle: 0,
  //   opacity: 0.85
  // });
  // canvas.add(imgInstance);
});

