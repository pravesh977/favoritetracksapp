/Users/student/Desktop/favoritemusicapp/node_modules/express/lib/router/route.js:202
        throw new Error(msg);
        ^

Error: Route.get() requires callback functions but got a [object Undefined]
    at Route.(anonymous function) [as get] (/Users/student/Desktop/favoritemusicapp/node_modules/express/lib/router/route.js:202:15)
    at Function.proto.(anonymous function) [as get] (/Users/student/Desktop/favoritemusicapp/node_modules/express/lib/router/index.js:510:19)
    at Object.<anonymous> (/Users/student/Desktop/favoritemusicapp/routes/tracklist.js:12:17)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
[nodemon] app crashed - waiting for file changes before starting...


I WASN'T EXPORTING CONTROLLER.


{"name":"error","length":100,"severity":"ERROR","code":"22P02","position":"36","file":"int8.c","line":"99","routine":"scanint8"}


TypeError: /Users/student/Desktop/favoritemusicapp/views/favSongsViews/favsongs-edit.ejs:4
    2| <div class = 'editdiv'>
    3|   <form method = 'POST' action='/tracklist<%= id %>?_method = PUT'>
 >> 4|     <input name = 'track' type = 'text' value = '<%= editresp.track %>'>
    5|     <input name = 'artist' type = 'text' value = '<%= editresp.artist %>'>
    6|     <input name = 'album' type = 'text' value = '<%= editresp.album %>'>
    7|     <input name = 'genre_id' type = 'text' value = '<%= editresp.genre_id %>'>

Cannot read property 'track' of null
    at eval (eval at compile (/Users/student/Desktop/favoritemusicapp/node_modules/ejs/lib/ejs.js:524:12), <anonymous>:28:34)
    at returnedFn (/Users/student/Desktop/favoritemusicapp/node_modules/ejs/lib/ejs.js:555:17)
    at tryHandleCache (/Users/student/Desktop/favoritemusicapp/node_modules/ejs/lib/ejs.js:203:34)
    at View.exports.renderFile [as engine] (/Users/student/Desktop/favoritemusicapp/node_modules/ejs/lib/ejs.js:412:10)
    at View.render (/Users/student/Desktop/favoritemusicapp/node_modules/express/lib/view.js:128:8)
    at tryRender (/Users/student/Desktop/favoritemusicapp/node_modules/express/lib/application.js:640:10)
    at Function.render (/Users/student/Desktop/favoritemusicapp/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/student/Desktop/favoritemusicapp/node_modules/express/lib/response.js:966:7)
    at Fav.findById.then.editresp (/Users/student/Desktop/favoritemusicapp/controllers/appController.js:55:11)
    at process._tickCallback (internal/process/next_tick.js:109:7)