document.getElementById("js-header").innerHTML = `
    <div class="header-wrapper">
    
        <div data-sticky-container>
        <div class="top-bar grid-x fixed-menu" id="responsive-menu" data-sticky data-options="marginTop:0;" style="width:100%">

            <div class="cell medium-4 small-8">
                <ul class="menu">
                    <li><img src="assets/img/bondarev_logo_white.svg" width="40px"></li>
                    <li class="menu-text">Иван Бондарев</li>
                </ul>
            </div>

            <div class="cell shrink align-right show-for-medium">
                 <ul class="dropdown menu" data-dropdown-menu>
                    <li><a href="index.html">База</a></li>
                    <li><a href="design.html">Дизайн</a></li>
                    <li><a href="kino_video.html">Кино и видео</a></li>
                    <li><a href="music.html">Музыка</a></li>
                    <li><a href="art.html">Арт</a></li>
                    <li><a href="index.html#contacts_anchor">Связь</a></li>
                </ul>
            </div>
            <div class="cell shrink align-right hide-for-medium">
                <input class="mob-menu" type="checkbox" id="id-mob-menu" role="button">
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


document.getElementById("js-bg-video").innerHTML = `
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(93898630, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/93898630" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<div class="video-wrapper">
    <video loop="loop" autoplay="autoplay" muted="muted" playsinline disablepictureinpicture class="background_video" id="background_video_1">
        <source src="background_video_1.mp4" type="video/mp4">
    </video>
</div>
`;




for ( ; 
    document.getElementById("js-contact") != null; ){
    document.getElementById("js-contact").innerHTML = `

<div class="grid-x grid-margin-x align-center contacts-section" id="contacts_anchor">
        <div class="cell grid-x xxlarge-10 large-12 medium-8 align-center align-top content-padding-small">
    
                <div class="cell grid-x xlarge-4 large-6 small-12 contacts-plate">
                    <a href="https://t.me/ivan_a_bc">
                    <div class="cell small-12 grid-x contacts-headings">
                        <div class="cell medium-1 small-1">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve" width="100%" class="contact-icon">
                            <style type="text/css">
                                .st0{fill:#FFFFFF;}
                            </style>
                            <g>
                                <path class="st0" d="M0,0.00001v100h100v-100C100,0.00001,0,0.00001,0,0.00001z M89.88184,23.40022l-8.89758,59.19586
                                    c-0.71509,4.75787-6.24463,7.03558-10.10345,4.16187L43.91919,66.6789c-1.94928-1.45166-2.11584-4.31116-0.34827-5.97931
                                    l24.43616-25.23804c0.89319-0.84302-0.21625-2.24603-1.24249-1.57123L34.71807,56.89637
                                    c-2.84051,1.86792-6.3244,2.48511-9.63379,1.70679L9.15484,54.85682c-3.953-0.92969-4.4035-6.37622-0.65692-7.94275
                                    l72.60297-30.35663C85.6944,14.63679,90.62183,18.47669,89.88184,23.40022z"/>
                            </g>
                            </svg>
                        </div>
                        <div class="cell medium-10 small-10 contact-description">
                            <h2>Личка&nbsp;Telegram&nbsp;</h2>
                        </div>
                    </div>
                    </a>
                    <div class="cell medium-10 contact-description small-offset-1">
                            <p class="regular-text">Мой основной способ связи.</p>
                    </div>
                </div>

                <div class="cell grid-x xlarge-4 large-6 small-12 contacts-plate">
                    <a href="mailto:ivan.a.bondarev@gmail.com">
                    <div class="cell small-12 grid-x contacts-headings">
                        <div class="cell medium-1 small-1">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve" width="100%" class="contact-icon">
                            <style type="text/css">
                                .st0{fill:#FFFFFF;}
                            </style>
                            <path class="st0" d="M0,0.00001v100h100v-100H0z M18.94507,21.49623h62.10986c4.27167,0,7.94415,2.52863,9.62823,6.16583
                                L48.35162,51.95594L8.73822,29.22199C9.99792,24.76557,14.08539,21.49623,18.94507,21.49623z M91.67035,71.25105
                                c0,5.86273-4.75269,10.61536-10.61542,10.61536H18.94507c-5.86273,0-10.61542-4.75262-10.61542-10.61536V39.36439l40.02197,22.96851
                                l43.31873-24.86047V71.25105z"/>
                            </svg>
                        </div>
                        <div class="cell medium-10 small-10 contact-description">
                            <h2>Почта&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                        </div>
                    </div>
                    </a>
                    <div class="cell medium-10 contact-description small-offset-1">
                            <p class="regular-text">ivan.a.bondarev@gmail.com<br>Лучше&nbsp;сообщите мне в&nbsp;телеграм об&nbsp;отправке письма.</p>
                    </div>
                </div>
            
        </div>
</div>

    `; 
    break;
}


document.getElementById("js-footer").innerHTML = `
    <div class="grid-y footer-block">
        <div class="cell small-12"><hr id="footer-hr"></div>
        <div class="cell footer-texts">
            <p class="mild-text regular-text">Это футер, чтобы было понятно, <br class="hide-for-large">что страница закончилась.</p>
        </div>
        <div class="cell footer-texts">
            <p class="mild-text regular-text">Сайт собрал на <a class="text-button-hover" style="color: #ffffff" target="_blank" rel="noopener noreferrer" href="https://github.com/foundation"><strong>Foundation</strong></a>.</p>
        </div>
        <div class="cell footer-texts">
            <p class="mild-text regular-text">Ну и вот копирайт, раз уж так принято:<br>Иван Бондарев © 12023</p>
        </div>
    </div>
    `;
