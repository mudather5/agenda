// Generated by CoffeeScript 1.4.0
(function() {
  var $;

  $ = window.jQuery || window.Zepto || window.$;

  $.fn.fancySelect = function(opts) {
    var isiOS, settings;
    if (opts == null) {
      opts = {};
    }
    settings = $.extend({
      forceiOS: false,
      includeBlank: false,
      optionTemplate: function(optionEl) {
        return optionEl.text();
      },
      triggerTemplate: function(optionEl) {
        return optionEl.text();
      }
    }, opts);
    isiOS = !!navigator.userAgent.match(/iP(hone|od|ad)/i);
    return this.each(function() {
      var copyOptionsToList, disabled, options, sel, trigger, updateTriggerText, wrapper;
      sel = $(this);
      if (sel.hasClass('fancified') || sel[0].tagName !== 'SELECT') {
        return;
      }
      sel.addClass('fancified');
      sel.css({
        width: 1,
        height: 1,
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0
      });
      sel.wrap('<div class="fancy-select">');
      wrapper = sel.parent();
      if (sel.data('class')) {
        wrapper.addClass(sel.data('class'));
      }
      wrapper.append('<div class="trigger">');
      if (!(isiOS && !settings.forceiOS)) {
        wrapper.append('<ul class="options">');
      }
      trigger = wrapper.find('.trigger');
      options = wrapper.find('.options');
      disabled = sel.prop('disabled');
      if (disabled) {
        wrapper.addClass('disabled');
      }
      updateTriggerText = function() {
        var triggerHtml;
        triggerHtml = settings.triggerTemplate(sel.find(':selected'));
        return trigger.html(triggerHtml);
      };
      sel.on('blur.fs', function() {
        if (trigger.hasClass('open')) {
          return setTimeout(function() {
            return trigger.trigger('close.fs');
          }, 120);
        }
      });
      trigger.on('close.fs', function() {
        trigger.removeClass('open');
        return options.removeClass('open');
      });
      trigger.on('click.fs', function() {
        var offParent, parent;
        if (!disabled) {
          trigger.toggleClass('open');
          if (isiOS && !settings.forceiOS) {
            if (trigger.hasClass('open')) {
              return sel.focus();
            }
          } else {
            if (trigger.hasClass('open')) {
              parent = trigger.parent();
              offParent = parent.offsetParent();
              if ((parent.offset().top + parent.outerHeight() + options.outerHeight() + 20) > $(window).height() + $(window).scrollTop()) {
                // options.addClass('overflowing'); Empecher ouverture vers le haut
              } else {
                options.removeClass('overflowing');
              }
            }
            options.toggleClass('open');
            if (!isiOS) {
              return sel.focus();
            }
          }
        }
      });
      sel.on('enable', function() {
        sel.prop('disabled', false);
        wrapper.removeClass('disabled');
        disabled = false;
        return copyOptionsToList();
      });
      sel.on('disable', function() {
        sel.prop('disabled', true);
        wrapper.addClass('disabled');
        return disabled = true;
      });
      sel.on('change.fs', function(e) {
        if (e.originalEvent && e.originalEvent.isTrusted) {
          return e.stopPropagation();
        } else {
          return updateTriggerText();
        }
      });
      // function saveNameAtLowerCase(){
      //     
      //   options.find('li').each(function(){
      //     var smallName = $(this).html().toLowerCase();
      //     $(this).data('lower-name',smallName);
      //     
      //   })
      // }
      // saveNameAtLowerCase();
	  
		sel.on('focus', function() {
			//console.log("lala");
			wrapper.addClass('focus-fancy-select');
		}).on('blur', function(){
			//console.log("salut");
			wrapper.removeClass('focus-fancy-select');
		});
	  
	  
      var oldCaracter = 'raz';
      var index= 0;
      sel.on('keydown', function(e) {
        var hovered, newHovered, w;
        w = e.which;
        hovered = options.find('.hover');
        hovered.removeClass('hover');
        var optionList = new Array();
        var innerCount = 0;

        if (options.hasClass('open')) {
        //Update sélection par lettre au clavier
          // On test le keypress d'un caractere alphanumérique
          if((w>47 && w<91) || (w>95 && w<106)){
            var caracter = String.fromCharCode(w).toLowerCase();


            // Construction du tableau des options contenant le caractère entré
            options.find('li').each(function(){
              smallName = $(this).html().toLowerCase();
				
              //if (smallName.indexOf(caracter) >= 0){
              if (smallName.indexOf(caracter) == 0){
                optionList[innerCount] = $(this);
                innerCount ++;
              }
            })

            // Si une même touche est presse plusieur fois, on cible l'élément suivant. Si autre touche, on RAZ le compteur
            if(oldCaracter==caracter){
              index ++;
            }else{
              index =0;
            }
            // // Si aucune autre entrée n'est présente avec cette lettre, on RAZ
            // if(options.find($('li[data-raw-value^='+caracter+']')[index+1]).length){
            //   oldCaracter = String.fromCharCode(w).toLowerCase();
            // }else{
            //   oldCaracter= 'raz';
            // }
            // Si aucune autre entrée n'est présente avec cette lettre, on RAZ
            if(optionList[index+1]){
              oldCaracter = String.fromCharCode(w).toLowerCase();
            }else{
              oldCaracter= 'raz';
            }


            // // Ajout de la classe hover sur l'élément commençant par la touche pressée si elle existe
            // if(options.find($('li:contains('+caracter+')')[index]).length){
            //   
            //   // options.find($('li[data-raw-value^='+caracter+']')[index]).addClass('hover');
            // }else{
            //   if(options.find($('li[data-raw-value^='+caracter+']')[index-1]).length){
            //     options.find($('li[data-raw-value^='+caracter+']')[index-1]).addClass('hover');
            //   }
            // }
            // Ajout de la classe hover sur l'élément commençant par la touche pressée si elle existe
            if(optionList[index]){
              optionList[index].addClass('hover');
            }else{
              if(optionList[index-1]){
                optionList[index-1].addClass('hover');
              }
            }

          }
        }


        if (!options.hasClass('open')) {
          options.find('li').removeClass('selected');
          if((w>47 && w<91) || (w>95 && w<106)){

          //OLD
            // var caracter = String.fromCharCode(w).toLowerCase();
            // // Si une même touche est presse plusieur fois, on cible l'élément suivant. Si autre touche, on RAZ le compteur
            // if(oldCaracter==caracter){
            //   index ++;
            // }else{
            //   index =0;
            // }
            // // Si aucune autre entrée n'est présente avec cette lettre, on RAZ
            // if(options.find($('li[data-raw-value^='+caracter+']')[index+1]).length){
            //   oldCaracter = String.fromCharCode(w).toLowerCase();
            // }else{
            //   oldCaracter= 'raz';
            // }
            
            // // Ajout de la classe hover sur l'élément commençant par la touche pressée si elle existe
            // if(options.find($('li[data-raw-value^='+caracter+']')[index]).length){
            //   options.find($('li[data-raw-value^='+caracter+']')[index]).addClass('selected');

            // }else{
            //   if(options.find($('li[data-raw-value^='+caracter+']')[index-1]).length){
            //     options.find($('li[data-raw-value^='+caracter+']')[index-1]).addClass('selected');
            //   }
            // }

            // // MISE A JOUR DU SELECTED
            // var selectedHtml = options.find('.selected').html();
            // var selectedValue = options.find('.selected').data('raw-value');
            // trigger.html(selectedHtml);
            // sel.val(selectedValue);
          //
            var caracter = String.fromCharCode(w).toLowerCase();
            // Construction du tableau des options contenant le caractère entré
            options.find('li').each(function(){
              smallName = $(this).html().toLowerCase();
              //if (smallName.indexOf(caracter) >= 0){
              if (smallName.indexOf(caracter) == 0){
                optionList[innerCount] = $(this);
                innerCount ++;
              }
            })
            // Si une même touche est presse plusieur fois, on cible l'élément suivant. Si autre touche, on RAZ le compteur
            if(oldCaracter==caracter){
              index ++;
            }else{
              index =0;
            }
            // Si aucune autre entrée n'est présente avec cette lettre, on RAZ
            if(optionList[index+1]){
              oldCaracter = String.fromCharCode(w).toLowerCase();
            }else{
              oldCaracter= 'raz';
            }
            
            // Ajout de la classe hover sur l'élément commençant par la touche pressée si elle existe
            if(optionList[index]){
              optionList[index].addClass('selected');
            }else{
              if(optionList[index-1]){
                optionList[index-1].addClass('selected');
              }
            }

            // MISE A JOUR DU SELECTED
            var selectedHtml = options.find('.selected').html();
            var selectedValue = options.find('.selected').data('raw-value');
            trigger.html(selectedHtml);
            sel.val(selectedValue);

          }
          if (w === 13 || w === 32 || w === 38 || w === 40) {
            e.preventDefault();
            return trigger.trigger('click.fs');
          }
        } else {
          if (w === 38) {
            e.preventDefault();
            if (hovered.length && hovered.index() > 0) {
              hovered.prev().addClass('hover');
            } else {
              options.find('li:last-child').addClass('hover');
            }
          } else if (w === 40) {
            e.preventDefault();
            if (hovered.length && hovered.index() < options.find('li').length - 1) {
              hovered.next().addClass('hover');
            } else {
              options.find('li:first-child').addClass('hover');
            }
          } else if (w === 27) {
            e.preventDefault();
            trigger.trigger('click.fs');
          } else if (w === 13 || w === 32) {
            e.preventDefault();
            hovered.trigger('mousedown.fs');
          } else if (w === 9) {
            if (trigger.hasClass('open')) {
              trigger.trigger('close.fs');
            }
          }
          newHovered = options.find('.hover');
          if (newHovered.length) {
            options.scrollTop(0);
            return options.scrollTop(newHovered.position().top - 12);
          }
        }
      });
      options.on('mousedown.fs', 'li', function(e) {
        var clicked;
        clicked = $(this);
        sel.val(clicked.data('raw-value'));
        if (!isiOS) {
          sel.trigger('blur.fs').trigger('focus.fs');
        }
        options.find('.selected').removeClass('selected');
        clicked.addClass('selected');
        trigger.addClass('selected');
        return sel.val(clicked.data('raw-value')).trigger('change.fs').trigger('blur.fs').trigger('focus.fs');
      });
      options.on('mouseenter.fs', 'li', function() {
        var hovered, nowHovered;
        nowHovered = $(this);
        hovered = options.find('.hover');
        hovered.removeClass('hover');
        return nowHovered.addClass('hover');
      });
      options.on('mouseleave.fs', 'li', function() {
        return options.find('.hover').removeClass('hover');
      });
      copyOptionsToList = function() {
        var selOpts;
        updateTriggerText();
        if (isiOS && !settings.forceiOS) {
          return;
        }
        selOpts = sel.find('option');
        return sel.find('option').each(function(i, opt) {
          var optHtml;
          opt = $(opt);
          if (!opt.prop('disabled') && (opt.val() || settings.includeBlank)) {
            optHtml = settings.optionTemplate(opt);
            if (opt.prop('selected')) {
              return options.append("<li data-raw-value=\"" + (opt.val()) + "\" class=\"selected\">" + optHtml + "</li>");
            } else {
              return options.append("<li data-raw-value=\"" + (opt.val()) + "\">" + optHtml + "</li>");
            }
          }
        });
      };
      sel.on('update.fs', function() {
        wrapper.find('.options').empty();
        return copyOptionsToList();
      });
      return copyOptionsToList();
    });
  };

}).call(this);
