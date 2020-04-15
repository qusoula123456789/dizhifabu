(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        content  = document.getElementById('main');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    menuLink.onclick = function (e) {
        toggleAll(e);
    };

    content.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };


    var elems = document.querySelectorAll('#menu .pure-menu-item');
	for(var i=0;i<elems.length;i++){
		var li = elems[i];
		var url = li.querySelectorAll('a')[0].href;
		var locationUrl =  location.protocol +'//'+ window.location.host + location.pathname;
		//console.log(url +"===" +locationUrl )
		if(url == locationUrl){
			li.className = 'pure-menu-item pure-menu-selected';
			return;
		}
	}
    

}(this, this.document));
