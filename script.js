(function ($, window, document) {

  var currentlyShowing = 'vid-forward';

  var vidForward = $('#vid-forward')[0];
  var vidReverse = $('#vid-reverse')[0];

  $("#container").click(function () {
    if (currentlyShowing === 'vid-forward') {
      currentlyShowing = 'reverse';

      vidReverse.currentTime = 4 - vidForward.currentTime;
      vidReverse.play();

      TweenMax.to('#reversecontainer', 0.025, { opacity: 1, delay: 0.1, ease: Linear.easeNone });
      TweenMax.to('#introcontainer', 0.95, { opacity: 0, ease: Linear.easeNone });

    } else if (currentlyShowing === 'reverse') {
      currentlyShowing = 'vid-forward';

      vidForward.currentTime = 4 - vidReverse.currentTime;
      vidForward.play();

      TweenMax.to('#introcontainer', 0.025, { opacity: 1, delay: 0.1, ease: Linear.easeNone });
      TweenMax.to('#reversecontainer', 0.95, { opacity: 0, ease: Linear.easeNone });
    }
  });

} (window.jQuery, window, document));
