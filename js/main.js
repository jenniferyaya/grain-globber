  grains.forEach(function (grains) {
    var $ul = $('ul');
    var $li = $('<li>');
    var $img = $('<img>');
    var $h2 = $('<h2>');
    var $p = $('<p>');

    $ul.append($li);
    $li.append($img);
    $li.append($h2);
    $li.append($p);
    $img.attr('src', 'images/' + grains.img);
    $h2.html(grains.name);
    $p.html(grains.desc);
  });
