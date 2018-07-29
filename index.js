// 引入全部模块
import createjs from 'createjs-npm';

// 只引入单个模块（xx 可以是 easel、preload、tween、sound）
import createjs from 'createjs-npm/lib/xx';


var myCanvas = document.getElementById("myCanvas");
var stage = new createjs.Stage(myCanvas);
var spriteSheet = new createjs.SpriteSheet({
    images: ["https://img.alicdn.com/tfs/TB1vMy8EeuSBuNjy1XcXXcYjFXa-2048-512.png"],
    frames: {
        height: 256,
        width: 128,
        regX: 0,
        regY: 0,
        count: 26
    },
    animations: {
        walk: [0, 25],
    },
});
var sprite = new createjs.Sprite(spriteSheet);
sprite.x = 0;
sprite.y = 20;
sprite.gotoAndPlay("walk");
stage.addChild(sprite);
createjs.Ticker.framerate = 24;
createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
createjs.Ticker.addEventListener("tick", stage);
sprite.addEventListener("tick", tickEvent);

function tickEvent(event) {
    if (sprite.x > stage.canvas.width) {
        sprite.x = 0;
    }
    sprite.x += 5;
}