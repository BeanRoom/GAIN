board.get('/', function(req, res, next) {
  res.redirect("/board/freeboard");
});

/* Functional */

board.post('/:board/write', function(req, res, next) {
  try {
    dbo.collection('meta').findOne({
      info: 'board'
    }, function(err, result) {
      var counts = result.counter + 1;
      dbo.collection('meta').updateOne({
        info: 'board'
      }, {
        $set: {
          counter: counts
        }
      });
      console.log(counts);
      dbo.collection('board').insertOne({
        board: req.params.board,
        boardNum: counts,
        title: req.body.title,
        contents: req.body.text,
        postingTime: new Date().valueOf(),
        visable: 1,
        writerID: 'startergate',
        hits: 0
      });
    });
  } catch (e) {
    res.send("<script type='text/javascript'>window.alert('ERROR.');window.location=('/board/freeboard');</script>");
    console.log(e);
    return;
  }
  res.redirect("/board/" + req.params.board);
});

/* GET home page. */
board.get('/:board', function(req, res, next) {
  var board = 'temp'; // get board name
  if (board === "error") {
    // send error
    return;
  }
  if (typeof req.params.board === "undefined" || (board !== 'freeboard' && board !== 'notice' && board !== 'storage')) {
    res.redirect("/board/freeboard");
  }
  dbo.collection('board').find({
    board: board
  }).toArray(function(err, result) {
    for (var i = 0; i < result.length; i++) {
      if (result[i].visible === 0) {
        result[i].writerID = "익명";
      }
    }
    res.render('board/lists', {
      board: board,
      list: result
    });
  });
});

board.get('/:board/:id', function(req, res, next) {
  var board = req.params.board;
  var id = req.params.id;
  if (typeof req.params.board === "undefined" || (board !== 'freeboard' && board !== 'notice' && board !== 'storage')) {
    res.redirect("/board/freeboard");
    return;
  }
  if (typeof req.params.id === "undefined") {
    res.redirect("/board/" + req.params.board);
    return;
  }
  if (id === "write") {
    res.render('board/write', {
      board: board
    });
  } else {
    // DB 처리
  }
});

board.put('/:board/:id/edit', function(req, res, next) {
  var board = req.params.board;
  if (typeof req.params.board === "undefined" || (board !== 'freeboard' && board !== 'notice' && board !== 'storage')) {
    res.redirect("/board/freeboard");
    return;
  }
  if (typeof req.params.id === "undefined") {
    res.redirect("/board/freeboard");
    return;
  }
  res.redirect("/board/" + board + "/" + req.params.id);
});

board.delete('/:board/:id/delete', function(req, res, next) {
  var board = req.params.board;
  if (typeof req.params.board === "undefined" || (board !== 'freeboard' && board !== 'notice' && board !== 'storage')) {
    res.redirect("/board/freeboard");
    return;
  }
  if (typeof req.params.id === "undefined") {
    // send something
    return;
  }
});