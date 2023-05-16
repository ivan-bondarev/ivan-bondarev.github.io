document.getElementById("js-header").innerHTML = `
    <div class="header-wrapper">
    
        <div data-sticky-container>
        <div class="top-bar grid-x fixed-menu" id="responsive-menu" data-sticky data-options="marginTop:0;" style="width:100%">

            <div class="cell medium-4 small-6">
                <ul class="menu">
                    <li><img src="assets/img/bondarev_logo_white.svg" width="40px"></li>
                    <li class="menu-text">Иван Бондарев</li>
                </ul>
            </div>

            <div class="cell shrink align-right">
                 <ul class="dropdown menu show-for-medium" data-dropdown-menu>
                    <li><a href="index.html">База</a></li>
                    <li><a href="design.html">Дизайн</a></li>
                    <li><a href="kino_video.html">Кино и видео</a></li>
                    <li><a href="music.html">Музыка</a></li>
                    <li><a href="art.html">Арт</a></li>
                    <li><a href="index.html#contacts_anchor">Связь</a></li>
                </ul>

                <input class="mob-menu hide-for-medium" type="checkbox" id="id-mob-menu" role="button">
                <label for="id-mob-menu" class="hide-for-medium">
                    <svg class="icon-menu hide-for-medium" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 72 64" style="enable-background:new 0 0 72 64;" xml:space="preserve">
                        <style type="text/css">
                            .st0{fill:#FFFFFF;}
                        </style>
                        <g>
                            <rect class="st0" width="72" height="12"/>
                        </g>
                        <g>
                            <rect y="26" class="st0" width="72" height="12"/>
                        </g>
                        <g>
                            <rect y="52" class="st0" width="72" height="12"/>
                        </g>
                    </svg>
                    <svg class="icon-menu-close hide-for-medium" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 72 64" style="enable-background:new 0 0 72 64;" xml:space="preserve">
                        <style type="text/css">
                            .st0{fill:#FFFFFF;}
                        </style>
                        <g>
                            <polygon class="st0" points="67.79211,8.69318 59.30682,0.20789 36,23.51471 12.69318,0.20789 4.20789,8.69318 27.51471,32 
                                4.20789,55.30682 12.69318,63.79205 36,40.48523 59.30682,63.79205 67.79211,55.30682 44.48529,32 	"/>
                        </g>
                    </svg>
                </label>
                <div class="m-nav hide-for-medium">
                    <ul class="m-menu">
                        <li><a href="index.html">База</a></li>
                        <li><a href="design.html">Дизайн</a></li>
                        <li><a href="kino_video.html">Кино и видео</a></li>
                        <li><a href="music.html">Музыка</a></li>
                        <li><a href="art.html">Арт</a></li>
                        <li><a href="index.html#contacts_anchor">Связь</a></li>
                    </ul>
                </div>

            </div>

        </div>
        </div>

        
    </div>

    `;