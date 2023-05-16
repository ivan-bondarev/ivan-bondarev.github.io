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

   ym(91161042, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/91161042" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
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
        <div class="cell grid-x xxlarge-10 large-12 medium-8 align-top content-padding-small">
    
                <div class="cell grid-x xlarge-4 large-6 small-12 contacts-plate">
                    <a href="https://t.me/trashnbond">
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
                            <p class="regular-text">Тут можно написать мне сообщение, задать вопрос или&nbsp;просто пообщаться.</p>
                    </div>
                </div>
                <div class="cell grid-x xlarge-4 large-6 small-12 contacts-plate">
                    <a href="https://t.me/trashnbond_live">
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
                            <h2>Telegram&nbsp;канал</h2>
                        </div>
                    </div>
                    </a>
                    <div class="cell medium-10 contact-description small-offset-1">
                            <p class="regular-text">Мой канал в&nbsp;телеграм, который пока концептуально не&nbsp;оформился, но&nbsp;существует.</p>
                    </div>
                </div>
                <div class="cell grid-x xlarge-4 large-6 small-12 contacts-plate">
                    <a href="https://trashnbond.bandcamp.com">
                    <div class="cell small-12 grid-x contacts-headings">
                        <div class="cell medium-1 small-1">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve" width="100%" class="contact-icon">
                            <style type="text/css">
                                .st0{fill:#FFFFFF;}
                            </style>
                            <g>
                                <path class="st0" d="M0,0.00001v19.61938h32.35162L0.51837,78.38062H0V100h100V0C100,0,0,0,0,0.00001z M53.09796,72.49158
                                    c-4.18146,0-8.66132-1.04822-10.69269-5.25116h-0.11823v4.38898H35.8352v-44.12l0.00049-0.00098h6.80902v16.31152h0.12048
                                    c1.8515-3.08862,5.73395-5.00488,9.19855-5.00488c9.73468,0,14.45514,7.66461,14.45514,16.99542
                                    C66.41888,64.3968,62.2384,72.49158,53.09796,72.49158z M84.84503,66.93348c3.94153,0,6.68835-2.72205,7.34705-7.29504h6.80878
                                    c-1.25464,8.28021-6.21118,12.85309-14.15582,12.85309c-9.67725,0-14.99292-7.10431-14.99292-16.49664
                                    c0-9.63898,5.07721-17.17786,15.23163-17.17786c7.16748,0,13.26202,3.70715,13.91711,11.55524h-6.79773l-0.01105-0.00024
                                    c-0.53827-3.89301-3.28528-5.9953-7.04797-5.9953c-3.52618,0-8.48273,1.91669-8.48273,11.61816
                                    C76.66138,61.30964,78.93024,66.93348,84.84503,66.93348z"/>
                                <path class="st0" d="M51.06579,44.37629c-5.73157,0.00061-8.66003,4.51215-8.66003,11.30847
                                    c0,6.42487,3.16699,11.24683,8.66107,11.24683c6.21307,0,8.5423-5.68567,8.5423-11.24683
                                    C59.60479,49.87782,56.67767,44.3769,51.06579,44.37629z"/>
                            </g>
                            </svg>
                        </div>
                        <div class="cell medium-10 small-10 contact-description">       
                            <h2>Bandcamp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                        </div>
                    </div>
                    </a>
                    <div class="cell medium-10 contact-description small-offset-1">
                            <p class="regular-text">Здесь можно послушать мою музыку.</p>
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
                            <p class="regular-text">ivan.a.bondarev@gmail.com<br>Не&nbsp;знаю, кто сейчас пользуется почтой для&nbsp;общения.</p>
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
            <p class="mild-text regular-text">Это футер, чтобы было понятно, <br>что страница закончилась.</p>
        </div>
        <div class="cell footer-texts">
            <p class="mild-text regular-text">Ну и вот копирайт, раз уж так принято:<br>Иван Бондарев © 12022</p>
        </div>
    </div>
    `;