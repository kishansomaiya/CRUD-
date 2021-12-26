document.addEventListener("DOMContentLoaded", function (event) {
    (function () {
      var video = document.querySelector("#player");
      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(
          "https://vz-c992896b-65e.b-cdn.net/deaf5837-50cd-4e59-855a-7fce80668b5b/playlist.m3u8"
        );
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          console.log("about to play video");
          video.play();
        });
      }
      plyr.setup(video);

      let oneTimeAd1 = true;
      function addimage(url) {
        var image = document.createElement("img");
        image.src = url;
        return image;
      }

      function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(
          newNode,
          referenceNode.nextSibling
        );
      }

      var video = document.getElementById("player");
      function genericAddCreate(
        adImageUrl,
        product_link,
        adStartTime,
        adEndTime,
        oneTimeAd
      ) {
        var firstAdforAd1 = document.createElement("div");
        firstAdforAd1.setAttribute("id", "firstadidforAd1");
        firstAdforAd1.style.cssText =
          "cursor: pointer;margin:10px;position:relative;width:30%;height:30%;opacity:1;z-index:1;background:rgba(56,255,255,0.0);top:-53px;left:758px;pointer-events:none;display:none";

        var imageforAd1 = addimage(adImageUrl);
        imageforAd1.style.cssText =
          "pointer-events: auto;cursor: pointer;position:relative;left:42%;top:-87%;cursor:pointer;float:center;width:50%";

        imageforAd1.addEventListener("click", function () {
          video.pause();
          oneTimeAd = false;
          window.open(product_link, "_blank");
        });

        insertAfter(video, firstAdforAd1);
        document.getElementById("firstadidforAd1").appendChild(imageforAd1);

        video.addEventListener("timeupdate", function () {
          if (
            this.currentTime > adStartTime &&
            this.currentTime < adEndTime &&
            oneTimeAd == true
          ) {
            firstAdforAd1.style.display = "block";
          } else {
            firstAdforAd1.style.display = "none";
          }
        });
      }

      genericAddCreate(
        "https://i.ibb.co/JjNsyft/one-removebg-preview.png",
        "https://j.mp/3IDGsfB",
        10,
        20,
        oneTimeAd1
      );
    })();
  });
