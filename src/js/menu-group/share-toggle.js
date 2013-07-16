/**
 * Toggle fullscreen video
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.ShareToggle = vjs.Button.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Button.call(this, player, options);
  }
});

vjs.ShareToggle.prototype.buttonText = 'Share';

vjs.ShareToggle.prototype.buildCSSClass = function(){
  return 'vjs-share-control ' + vjs.Button.prototype.buildCSSClass.call(this);
};

vjs.ShareToggle.prototype.onClick = function(){
	console.log('ola');
	/*
  if (!this.player_.isFullScreen) {
    this.player_.requestFullScreen();
    this.el_.children[0].children[0].innerHTML = 'Non-Fullscreen'; // change the button text to "Non-Fullscreen"
  } else {
    this.player_.cancelFullScreen();
    this.el_.children[0].children[0].innerHTML = 'Fullscreen'; // change the button to "Fullscreen"
  }
  */
};