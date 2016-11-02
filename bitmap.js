function makeGrid(width,height){
  var width = width || document.getElementById("image_width").value+1;
  var height = height || document.getElementById("image_height").value+1;
  var grid = "";
  for(var y = 0;y<height;y++){
    for(var x = 0;x<width;x++){
      grid+="<button onClick=\"console.log('hi');\" id=\""+x+"_"+y+"\">&nbsp;</button>";
    }
    grid+="<br/>";
  }
  return grid;
}
