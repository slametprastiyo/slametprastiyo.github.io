const loading = document.querySelector(".loading");
const loadingLogo = document.querySelector(".loading .logo");
console.log(loadingLogo);
setTimeout(() => {
  loadingLogo.classList.add("show");
}, 500);

let sc = 0;
window.onload = () => {
  setTimeout(() => {
    loading.classList.add("hide");
    setTimeout(() => {
      loading.remove();
    }, 500);
  }, 3800);

  const gage = document.querySelector("#gage");
  const articleHero = document.querySelector("article.hero");
  articleHero.style.width = "100%";
  articleHero.style.height = gage.clientHeight + "px";
  let initW = window.innerWidth;
  let initH = gage.clientHeight;
  sc = initW / initH;
  console.log(initW);
  console.log(initH);
  gage.remove();

  // karin
  const heroImgKarina = document.querySelector("img.karina");
  const heroImgKarinaShadow = document.querySelector("img.karina-shadow");
  const heroImgKarinaSvg = document.querySelector("svg.karina-svg");
  // console.log(heroImgKarina.clientWidth);
  // console.log(heroImgKarina.clientWidth);
  const heroImgKarinaInitalWidth = 456; //pencatatan manual dengan ukuran device laptop
  const heroImgKarinaInitialLeft = 800;
  const heroImgKarinaCurrentWidth = heroImgKarina.clientWidth;
  if (heroImgKarinaInitalWidth != heroImgKarinaCurrentWidth) {
    const scale = heroImgKarinaInitialLeft / heroImgKarinaInitalWidth;
    const heroImgKarinaCurrentLeft = heroImgKarinaCurrentWidth * scale;
    // console.log(heroImgKarinaCurrentLeft);
    heroImgKarina.style.left = heroImgKarinaCurrentLeft + "px";
    heroImgKarinaShadow.style.left = heroImgKarinaCurrentLeft + "px";
    heroImgKarinaSvg.style.left = heroImgKarinaCurrentLeft + "px";
  }
  // karin end
  // winter
  const heroImgWinter = document.querySelector("img.winter");
  const heroImgWinterShadow = document.querySelector("img.winter-shadow");
  const heroImgWinterSvg = document.querySelector("svg.winter-svg");
  // console.log(heroImgWinter.clientWidth);
  // console.log(heroImgWinter.clientWidth);
  const heroImgWinterInitalWidth = 391; //pencatatan manual dengan ukuran device laptop
  const heroImgWinterInitialLeft = 470;
  const heroImgWinterInitialBottom = 85;
  const heroImgWinterCurrentWidth = heroImgWinter.clientWidth;
  if (heroImgWinterInitalWidth != heroImgWinterCurrentWidth) {
    const scale = heroImgWinterInitialLeft / heroImgWinterInitalWidth;
    const heroImgWinterCurrentLeft = heroImgWinterCurrentWidth * scale;
    const scaleBot = heroImgWinterInitialBottom / heroImgWinterInitalWidth;
    const heroImgWinterCurrentBot = heroImgWinterCurrentWidth * scaleBot;
    // console.log(heroImgWinterCurrentLeft);
    heroImgWinter.style.left = heroImgWinterCurrentLeft + "px";
    heroImgWinterShadow.style.left = heroImgWinterCurrentLeft + "px";
    heroImgWinterSvg.style.left = heroImgWinterCurrentLeft + "px";
    heroImgWinter.style.bottom = heroImgWinterCurrentBot + "px";
    heroImgWinterShadow.style.bottom = heroImgWinterCurrentBot + "px";
    heroImgWinterSvg.style.bottom = heroImgWinterCurrentBot + "px";
  }
  // winter end
  // ningning
  const heroImgNingning = document.querySelector("img.ningning");
  const heroImgNingningShadow = document.querySelector("img.ningning-shadow");
  const heroImgNingningSvg = document.querySelector("svg.ningning-svg");
  // console.log(heroImgNingning.clientWidth);
  console.log(heroImgNingning.clientWidth);
  const heroImgNingningInitalWidth = 235; //pencatatan manual dengan ukuran device laptop
  const heroImgNingningInitialLeft = 500;
  const heroImgNingningInitialBottom = 210;

  const heroImgNingningCurrentWidth = heroImgNingning.clientWidth;
  if (heroImgNingningInitalWidth != heroImgNingningCurrentWidth) {
    const scale = heroImgNingningInitialLeft / heroImgNingningInitalWidth;
    const heroImgNingningCurrentLeft = heroImgNingningCurrentWidth * scale;
    const scaleBot = heroImgNingningInitialBottom / heroImgNingningInitalWidth;
    const heroImgNingningCurrentBot = heroImgNingningCurrentWidth * scaleBot;
    // console.log(heroImgNingningCurrentLeft);
    heroImgNingning.style.left = heroImgNingningCurrentLeft + "px";
    heroImgNingningShadow.style.left = heroImgNingningCurrentLeft + "px";
    heroImgNingningSvg.style.left = heroImgNingningCurrentLeft + "px";
    heroImgNingning.style.bottom = heroImgNingningCurrentBot + "px";
    heroImgNingningShadow.style.bottom = heroImgNingningCurrentBot + "px";
    heroImgNingningSvg.style.bottom = heroImgNingningCurrentBot + "px";
  }
  // ningning end
  // giselle
  const heroImgGiselle = document.querySelector("img.giselle");
  const heroImgGiselleShadow = document.querySelector("img.giselle-shadow");
  const heroImgGiselleSvg = document.querySelector("svg.giselle-svg");
  // console.log(heroImgGiselle.clientWidth);
  console.log(heroImgGiselle.clientWidth);
  const heroImgGiselleInitalWidth = 365; //pencatatan manual dengan ukuran device laptop
  const heroImgGiselleInitialLeft = 250;

  const heroImgGiselleCurrentWidth = heroImgGiselle.clientWidth;
  if (heroImgGiselleInitalWidth != heroImgGiselleCurrentWidth) {
    const scale = heroImgGiselleInitialLeft / heroImgGiselleInitalWidth;
    const heroImgGiselleCurrentLeft = heroImgGiselleCurrentWidth * scale;

    // console.log(heroImgGiselleCurrentLeft);
    heroImgGiselle.style.left = heroImgGiselleCurrentLeft + "px";
    heroImgGiselleShadow.style.left = heroImgGiselleCurrentLeft + "px";
    heroImgGiselleSvg.style.left = heroImgGiselleCurrentLeft + "px";
  }
  // giselle end

  const allHDImg = document.querySelectorAll("img.hd");
  allHDImg.forEach((item) => {
    item.src = "assets/image/" + item.dataset.src;
    item.onload = function () {
      item.style.visibility = "visible";
    };
  });
  // const allHDImages = document.querySelectorAll("img.hd");
  // allHDImages.forEach((item) => {
  //   console.log(item.complete);
  //   // if (item.complete) {
  //   //   item.style.visibility = "visible";
  //   // }
  // });
};
window.addEventListener(
  "resize",
  function (event) {
    // karin
    const heroImgKarina = document.querySelector("img.karina");
    const heroImgKarinaShadow = document.querySelector("img.karina-shadow");
    const heroImgKarinaSvg = document.querySelector("svg.karina-svg");
    // console.log(heroImgKarina.clientWidth);
    // console.log(heroImgKarina.clientWidth);
    const heroImgKarinaInitalWidth = 456; //pencatatan manual dengan ukuran device laptop
    const heroImgKarinaInitialLeft = 800;
    const heroImgKarinaCurrentWidth = heroImgKarina.clientWidth;
    if (heroImgKarinaInitalWidth != heroImgKarinaCurrentWidth) {
      const scale = heroImgKarinaInitialLeft / heroImgKarinaInitalWidth;
      const heroImgKarinaCurrentLeft = heroImgKarinaCurrentWidth * scale;
      // console.log(heroImgKarinaCurrentLeft);
      heroImgKarina.style.left = heroImgKarinaCurrentLeft + "px";
      heroImgKarinaShadow.style.left = heroImgKarinaCurrentLeft + "px";
      heroImgKarinaSvg.style.left = heroImgKarinaCurrentLeft + "px";
    }
    // karin end
    // winter
    const heroImgWinter = document.querySelector("img.winter");
    const heroImgWinterShadow = document.querySelector("img.winter-shadow");
    const heroImgWinterSvg = document.querySelector("svg.winter-svg");
    // console.log(heroImgWinter.clientWidth);
    // console.log(heroImgWinter.clientWidth);
    const heroImgWinterInitalWidth = 391; //pencatatan manual dengan ukuran device laptop
    const heroImgWinterInitialLeft = 470;
    const heroImgWinterInitialBottom = 85;
    const heroImgWinterCurrentWidth = heroImgWinter.clientWidth;
    if (heroImgWinterInitalWidth != heroImgWinterCurrentWidth) {
      const scale = heroImgWinterInitialLeft / heroImgWinterInitalWidth;
      const heroImgWinterCurrentLeft = heroImgWinterCurrentWidth * scale;
      const scaleBot = heroImgWinterInitialBottom / heroImgWinterInitalWidth;
      const heroImgWinterCurrentBot = heroImgWinterCurrentWidth * scaleBot;
      // console.log(heroImgWinterCurrentLeft);
      heroImgWinter.style.left = heroImgWinterCurrentLeft + "px";
      heroImgWinterShadow.style.left = heroImgWinterCurrentLeft + "px";
      heroImgWinterSvg.style.left = heroImgWinterCurrentLeft + "px";
      heroImgWinter.style.bottom = heroImgWinterCurrentBot + "px";
      heroImgWinterShadow.style.bottom = heroImgWinterCurrentBot + "px";
      heroImgWinterSvg.style.bottom = heroImgWinterCurrentBot + "px";
    }
    // winter end
    // ningning
    const heroImgNingning = document.querySelector("img.ningning");
    const heroImgNingningShadow = document.querySelector("img.ningning-shadow");
    const heroImgNingningSvg = document.querySelector("svg.ningning-svg");
    // console.log(heroImgNingning.clientWidth);
    console.log(heroImgNingning.clientWidth);
    const heroImgNingningInitalWidth = 235; //pencatatan manual dengan ukuran device laptop
    const heroImgNingningInitialLeft = 500;
    const heroImgNingningInitialBottom = 210;

    const heroImgNingningCurrentWidth = heroImgNingning.clientWidth;
    if (heroImgNingningInitalWidth != heroImgNingningCurrentWidth) {
      const scale = heroImgNingningInitialLeft / heroImgNingningInitalWidth;
      const heroImgNingningCurrentLeft = heroImgNingningCurrentWidth * scale;
      const scaleBot =
        heroImgNingningInitialBottom / heroImgNingningInitalWidth;
      const heroImgNingningCurrentBot = heroImgNingningCurrentWidth * scaleBot;
      // console.log(heroImgNingningCurrentLeft);
      heroImgNingning.style.left = heroImgNingningCurrentLeft + "px";
      heroImgNingningShadow.style.left = heroImgNingningCurrentLeft + "px";
      heroImgNingningSvg.style.left = heroImgNingningCurrentLeft + "px";
      heroImgNingning.style.bottom = heroImgNingningCurrentBot + "px";
      heroImgNingningShadow.style.bottom = heroImgNingningCurrentBot + "px";
      heroImgNingningSvg.style.bottom = heroImgNingningCurrentBot + "px";
    }
    // ningning end
    // giselle
    const heroImgGiselle = document.querySelector("img.giselle");
    const heroImgGiselleShadow = document.querySelector("img.giselle-shadow");
    const heroImgGiselleSvg = document.querySelector("svg.giselle-svg");
    // console.log(heroImgGiselle.clientWidth);
    console.log(heroImgGiselle.clientWidth);
    const heroImgGiselleInitalWidth = 365; //pencatatan manual dengan ukuran device laptop
    const heroImgGiselleInitialLeft = 250;

    const heroImgGiselleCurrentWidth = heroImgGiselle.clientWidth;
    if (heroImgGiselleInitalWidth != heroImgGiselleCurrentWidth) {
      const scale = heroImgGiselleInitialLeft / heroImgGiselleInitalWidth;
      const heroImgGiselleCurrentLeft = heroImgGiselleCurrentWidth * scale;

      // console.log(heroImgGiselleCurrentLeft);
      heroImgGiselle.style.left = heroImgGiselleCurrentLeft + "px";
      heroImgGiselleShadow.style.left = heroImgGiselleCurrentLeft + "px";
      heroImgGiselleSvg.style.left = heroImgGiselleCurrentLeft + "px";
    }
    // giselle end
    const articleHero = document.querySelector("article.hero");
    let articleHeroHeight = window.innerWidth / sc;
    articleHero.style.height = articleHeroHeight + "px";
    console.log(articleHeroHeight);
    // articleHero.style.height = "initial";
  },
  true
);

let svgs = document.querySelectorAll(".hero svg path");
let nav = document.querySelector("nav");
let links = nav.querySelectorAll("a");

svgs.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const allLightImg = document.querySelectorAll("img.light");
    allLightImg.forEach((i) => {
      i.classList.remove("active");
    });
    links.forEach((i) => {
      i.classList.remove("active");
    });
    // console.log(item);
    let member = item.dataset.member;
    // console.log(member);
    mem = document.querySelector("img." + member);
    mem.classList.add("active");
    navMember = nav.querySelector("a.nav-" + member);
    navMember.classList.add("active");
    // console.log(navMember);
    // detail
    const detail = document.querySelector(
      'article[data-member="' + member + '"]'
    );
    console.log(detail);
    const allDetail = document.querySelectorAll("article.detail");
    allDetail.forEach((item) => {
      item.classList.remove("show");
    });
    detail.classList.add("show");
    // detail end
  });

  // item.addEventListener("mouseleave", () => {
  //   let member = item.dataset.member;
  //   // console.log(member);
  //   mem = document.querySelector("img." + member);
  //   mem.classList.remove("active");
  //   navMember = nav.querySelector("a.nav-" + member);
  //   navMember.classList.remove("active");
  // });
});

links.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const allHDImages = document.querySelectorAll("img.hd");
    allHDImages.forEach((item) => {
      if (item.complete) {
        item.style.visibility = "visible";
      }
    });
    const allLightImg = document.querySelectorAll("img.light");
    allLightImg.forEach((i) => {
      i.classList.remove("active");
    });
    links.forEach((i) => {
      i.classList.remove("active");
    });
    const img = document.querySelector("img." + item.dataset.member);
    // console.log(img);
    item.classList.add("active");
    img.classList.add("active");
    // detail
    const detail = document.querySelector(
      'article[data-member="' + item.dataset.member + '"]'
    );
    console.log(detail);
    const allDetail = document.querySelectorAll("article.detail");
    allDetail.forEach((item) => {
      item.classList.remove("show");
    });
    detail.classList.add("show");
    // detail end
  });

  // item.addEventListener("mouseleave", () => {
  //   const img = document.querySelector("img." + item.dataset.member);
  //   // console.log(img);
  //   item.classList.remove("active");
  //   img.classList.remove("active");
  // });
});

const sectionPict = document.querySelectorAll(
  "section.picture .picture-container"
);
// console.log(sectionPict[0].clientWidth);
sectionPict.forEach((item) => {
  item.style.height = sectionPict[0].clientWidth + "px";
});
const sectionBio = document.querySelector("section.bio");
sectionBio.style.minHeight = sectionBio.clientWidth + "px";

const play = document.querySelector("img.play");
const stop = document.querySelector("img.stop");
const audio = document.querySelector("audio");
audio.src = "assets/audio/Hold On Tight.mp3";
const musicPlayer = document.querySelector(".music-player");
const musicPlayerLoader = document.querySelector(".music-player .loader");
play.addEventListener("click", () => {
  const audio = document.querySelector(".music-player audio");

  if (musicPlayerLoader != null) {
    musicPlayerLoader.classList.add("show");
  }
  audio.addEventListener("loadeddata", () => {
    musicPlayerLoader.remove();
  });
  if (play.dataset.playing == false) {
    play.dataset.playing = 1;
    play.src = "assets/image/controller/pause.png";
    musicPlay(true);
    audio.play();
  } else {
    play.dataset.playing = 0;
    play.src = "assets/image/controller/play.png";
    musicPlay(false);
    audio.pause();
  }
});
stop.addEventListener("click", () => {
  audio.currentTime = 0;
  audio.pause();
  play.dataset.playing = 0;
  play.src = "assets/image/controller/play.png";
  musicPlay(false);
});

let interval;
let random = 0;
function musicPlay(stat) {
  console.log(stat);
  if (stat == false) {
    clearInterval(interval);
    musicPlayer.style.boxShadow = "0 0 0 rgba(255, 255, 255, 1)";
    return;
  }
  interval = setInterval(() => {
    random = Math.random().toFixed(1) * 0.5;
    let random2 = Math.random().toFixed(1) * 0.1;
    let random3 = Math.random().toFixed(1) * 40;
    let random4 = Math.random().toFixed(1);

    let randomR = Math.random() * 255;
    let randomG = Math.random() * 255;
    let randomB = Math.random() * 255;
    // musicPlayer.style.background =
    //   "linear-gradient(to top right,rgba(255, 255, 255, " +
    //   random +
    //   "),rgba(255, 255, 255, " +
    //   random2 +
    //   ")";
    musicPlayer.style.transition = ".2s ease";
    musicPlayer.style.boxShadow =
      "0 0 " +
      random3 +
      "px rgba(" +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ", " +
      random +
      ")";
    musicPlayerLoader.remove();
  }, 100);
}

audio.addEventListener("ended", () => {
  clearInterval(interval);
  play.dataset.playing = 0;
  play.src = "assets/image/controller/play.png";
  musicPlay(false);
});
const bioArrow = document.querySelector(".arrow");
const bio = document.querySelector(".biodata");
bioArrow.addEventListener("click", () => {
  if (bioArrow.dataset.stat == "down") {
    bio.classList.add("show");
    bioArrow.dataset.stat = "up";
    bioArrow.innerHTML = "&#11165;";
  } else {
    bio.classList.remove("show");
    bioArrow.dataset.stat = "down";
    bioArrow.innerHTML = "&#11167;";
  }
});
