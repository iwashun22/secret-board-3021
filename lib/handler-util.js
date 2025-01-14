'use strict';

function handleLogout(req, res) {
   res.writeHead(401, {
      'Content-Type': 'text/plain; charset=utf-8'
   });
   res.end('ログアウトしました');
}

function handleNotFound(req, res) {
   res.writeHead(404, {
      'Content-Type': 'text/plain; charset=utf-8'
   });
   res.end('ページが見つかりません');
}

module.exports = {
   handleLogout,
   handleNotFound
}