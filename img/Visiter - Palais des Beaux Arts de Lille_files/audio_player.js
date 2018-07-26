(function ($) {
    /*
        audio.currentTime = X;

    */

    function sectostr(s){return(s-(s%=60))/60+(9<s?':':':0')+s;}
    function playAudio(audio){
        audio.$control.addClass('playing');
        audio.player.play();
        audio.majTime = setInterval(function(){
            var current_time = Math.floor(audio.player.currentTime);
            updateTime(audio, current_time);
        },50);
    }
    function stopAudio(audio){
        audio.$control.removeClass('playing');
        audio.player.pause();
        clearInterval(audio.majTime);
    }
    function updateTime(audio, time){
        var ratio = (time / audio.player.duration) * 100;
        audio.$bar.width(ratio + '%');
        audio.$current_time.html(sectostr(time));
    }

    function resetAudio(audio){
        stopAudio(audio);
        audio.$bar.width(0);
        audio.$current_time.html('0:00');
    }

    window.initAudioPlayer = function(){
        var $player = $('.media-audio-player');
        if($player.length){
            $player.each(function(index, element){
                var player = $(element).find('audio')[0];
                var audio = {
                    player: player,
                    $control: $(element).find('.player-control'),
                    $bar: $(element).find('.player-progress-bar .player-running-bar'),
                    $current_time: $(element).find('.player-time-current'),
                    $total_time: $(element).find('.player-time-total'),
                    $range : $(element).find('input[type="range"]'),
                    majTime : function(){}
                };

                audio.player.addEventListener('canplay', function(){                
                    audio.$total_time.html(sectostr(Math.floor(audio.player.duration)));
                });

                audio.player.addEventListener('ended', function(){
                    stopAudio(audio);
                    resetAudio(audio);
                });

                audio.$range.on('click', function(){
                    var target_time = Math.floor(($(this)[0].value * audio.player.duration) / 100);
                    audio.player.currentTime = target_time;
                    updateTime(audio, target_time);
                });
                
                audio.$control.on('click', function(){
                    if($(this).hasClass('playing')){
                        stopAudio(audio);
                    }else{
                        playAudio(audio);
                    }
                });

            });
        }
    };

    initAudioPlayer();

}(jQuery));
