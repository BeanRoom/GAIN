/*jshint esversion: 9 */
import Router from 'koa-router';

const post = new Router();

/* Functional */

board.post('/:board/write', (ctx, next) => {
  try {
    // DB 처리
  } catch (e) {

    console.log(e);
    return;
  }
  ctx.body = {
    'is_succeed': true
  };
});

/* GET home page. */
board.get('/:board', (ctx, next) => {
  let board = ctx.params.board; // get board name
  if (typeof(board !== 'freeboard' && board !== 'notice' && board !== 'storage')) {
    ctx.body = {
      'type': 'error',
      'error': `There is no board named ${board}.`
    };
    return;
  }
  dbo.collection('board').find({
    board: board
  }).toArray((err, result) => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].visible === 0) {
        result[i].writerID = "익명";
      }
    }
    ctx.body = {
      board: board,
      list: result
    };
  });
});

board.get('/:board/:id', (ctx, next) => {
  let board = ctx.params.board;
  let id = ctx.params.id;
  if ((board !== 'freeboard' && board !== 'notice' && board !== 'storage')) {
    ctx.status = 400;
    ctx.body = {
      'type': 'error',
      'error': `There is no board named ${board}.`
    };
    return;
  }
  // DB 처리
  ctx.body = {
    type: 'respond',
    data: {
      // something
    }
  };
});

board.put('/:board/:id/edit', (ctx, next) => {
  let board = req.params.board;
  if ((board !== 'freeboard' && board !== 'notice' && board !== 'storage')) {
    ctx.status = 400;
    ctx.body = {
      'is_succeed': false
    };
    return;
  }
  ctx.status = 204;
  ctx.body = {
    'is_succeed': true
  };
});


board.delete('/:board/:id/delete', (ctx, next) => {
  var board = ctx.params.board;
  if ((board !== 'freeboard' && board !== 'notice' && board !== 'storage')) {
    ctx.status = 400;
    ctx.body = {
      'is_succeed': false
    };
    return;
  }
});