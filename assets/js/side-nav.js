(function(){

    $(document).on('click', function (e) {
        if (($(e.target).closest("#mySidenav").length === 0) && ($(e.target).closest("#menu-button").length === 0)) {
            $("#mySidenav").removeClass("show-sidenav");
        }
    });

    var espisodesShown = false;

    /* Set the width of the side navigation to 250px */
    window.openNav = function () {
        var sb = document.getElementById("mySidenav");
        var name = "show-sidenav";
        var arr = sb.className.split(" ");
        if (arr.indexOf(name) == -1) {
            sb.className += " " + name;
        }
    }

    /* Set the width of the side navigation to 0 */
    window.closeNav = function () {
        var sb = document.getElementById("mySidenav");
        sb.className = sb.className.replace(/\bshow-sidenav\b/g, "");
    }

    var showEpisodes = function () {
        document.getElementById("episodes-dropdown").innerHTML = "Portafolio docente &#x25B2;";
    }

    var hideEpisodes = function () {
        document.getElementById("episodes-dropdown").innerHTML = "Portafolio docente &#x25BC;";
    }

    window.toogleEpisodes = function () {
        if (espisodesShown) {
            hideEpisodes();
        } else {
            showEpisodes();
        }
        var dw = document.getElementById("episodes-dropdown-items");
        if (dw.classList) { 
            dw.classList.toggle("tw-show");
        } else {
            // For IE9
            var classes = dw.className.split(" ");
            var i = classes.indexOf("tw-show");
        
            if (i >= 0) 
                classes.splice(i, 1);
            else 
                classes.push("tw-show");
                element.className = classes.join(" "); 
        }
        espisodesShown = !espisodesShown;
    }
}());