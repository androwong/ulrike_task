/*
* rwdImageMaps jQuery plugin v1.6
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2016 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function($) {
	$.fn.rwdImageMaps = function() {
		var $img = this;

		var rwdImageMap = function() {
			$img.each(function() {
				if (typeof($(this).attr('usemap')) == 'undefined')
					return;

				var that = this,
					$that = $(that);

				// Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy
				$('<img />').on('load', function() {
					var attrW = 'width',
						attrH = 'height',
						w = $that.attr(attrW),
						h = $that.attr(attrH);

					if (!w || !h) {
						var temp = new Image();
						temp.src = $that.attr('src');
						if (!w)
							w = temp.width;
						if (!h)
							h = temp.height;
					}

					var wPercent = $that.width()/100,
						hPercent = $that.height()/100,
						map = $that.attr('usemap').replace('#', ''),
						c = 'coords';

					$('map[name="' + map + '"]').find('area').each(function() {
						var $this = $(this);
						var className = $this.attr('class');
						if (!$this.data(c))
							$this.data(c, $this.attr(c));

						var coords = $this.data(c).split(','),
							coordsPercent = new Array(coords.length);
						var xflag = true;	
						var yflag = true;
						var roundflag = true;
						
						for (var i = 0; i < coordsPercent.length; ++i) {
							if (className == "btn-close") {
								if($that.width() < 355) {
									if (i % 2 === 0) {
										if(roundflag === true) {
											coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
											roundflag = false;
										} else {
											coordsPercent[i] = coords[i] + 10;
										}
									} else {
										coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
									}
								} else {
									if (i % 2 === 0) {
										coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
									} else {
										coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
									}
								}		
							} else {
								if (i % 2 === 0) {
									if($that.width() < 355) {
										if(xflag === true) {
											coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent - 10);	
											xflag = false;
										} else {
											coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent + 10);	
										}
									} else {
										coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
									}
								} else {
									if($that.width() < 355) {
										if(yflag === true) {
											coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent - 10);
											yflag = false;
										} else {
											coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent + 10);
										}	
									} else {
										coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
									}
								}
							}
						}
						$this.attr(c, coordsPercent.toString());
					});
				}).attr('src', $that.attr('src'));
			});
		};
		$(window).resize(rwdImageMap).trigger('resize');

		return this;
	};
})(jQuery);
