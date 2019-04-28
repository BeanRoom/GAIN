/*jshint esversion: 9 */
import Router from 'koa-router';

const board = new Router();

noBoardErrorMessage = {
  'type': 'error',
  'error': `There is no board named ${board}.`
};

board.get('/:board', (ctx, next) => {
  let board = ctx.params.board; // get board name
  if ((board in ['freeboard', 'notice', 'storage'])) {
    ctx.status = 400;
    ctx.body = noBoardErrorMessage;
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
  if ((board in ['freeboard', 'notice', 'storage'])) {
    ctx.status = 400;
    ctx.body = noBoardErrorMessage;
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

board.post('/:board/new', (ctx, next) => {
  // 세션 검증
  let board = req.params.board;
  if ((board in ['freeboard', 'notice', 'storage'])) {
    ctx.status = 400;
    ctx.body = noBoardErrorMessage;
    return;
  }
  ctx.status = 204;
  ctx.body = {
    'is_succeed': true
  };
});

board.put('/:board/:id/edit', (ctx, next) => {
  // 세션 검증
  let board = req.params.board;
  if ((board in ['freeboard', 'notice', 'storage'])) {
    ctx.status = 400;
    ctx.body = noBoardErrorMessage;
    return;
  }
  ctx.status = 204;
  ctx.body = {
    'is_succeed': true
  };
});


board.delete('/:board/:id/delete', (ctx, next) => {
  // 세션 검증
  var board = ctx.params.board;
  if ((board in ['freeboard', 'notice', 'storage'])) {
    ctx.status = 400;
    ctx.body = noBoardErrorMessage;
    return;
  }
});