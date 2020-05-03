var THREEx = THREEx || {}

THREEx.VideoTexture	= function(url, thumbnail){
	// create the video element
	var video	= document.createElement('video');
	video.width	= 1920;
	video.height = 1080;
	video.setAttribute("playsinline", true);
	video.setAttribute("poster", thumbnail);
	video.autoplay	= true;
	video.src	= url;
	// expose video as this.video
	this.video	= video;

	//console.log(video);

	// create the texture
	var texture	= new THREE.Texture( video );
	
	// expose texture as this.texture
	this.texture	= texture

	/**
	 * update the object
	 */
	this.update	= function(){
		if( video.readyState !== video.HAVE_ENOUGH_DATA )	return;
		texture.needsUpdate	= true;		
	}

	/**
	 * destroy the object
	 */
	this.destroy	= function(){
		video.pause()
	}
}