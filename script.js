$(document).ready(function(){
    let $scramble = $(".scramble");
    $scramble.scramble(3000, 20, "alphabet", true);
})

let t1 = gsap.timeline();
t1.to(".loading",{
    opacity: 0,
    delay: 3,
})

.to("loader",{
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInout",
})

.to(".loader",{
    y: "-100%",
    duration: 1,
},
"up"
)



// 2nd

.to(
    ".svgwaala",{
        opacity: 1,
        delay: -1.7,
        ease: "Expo.easeInOut",
    },
    "donut"
)

.to(
    "#dotted",{
        opacity: 1,
        delay: -1.8,
        ease: "Expo.easeInOut",
    },
    "donut"
)

.to(
    "#donut",{
        opacity: 1,
        scale: 2,
        delay: -1.4,
        ease: "Expo.easeInOut",
        rotationY: "+=15",
        duration: 3,
        rotationX: "+=15",
        rotationZ: "+=15",       
    },
    "up"
)

.from(
    "#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i",{
        opacity: 0,
        duration: 1,
        scale: 0,
        top: "40%",
        left: "47%",
    },
    "up"
);


let t12 = gsap.timeline();

document.querySelectorAll("#explore").forEach(function (elem){
    elem.addEventListener("click", function () {
        t12
            .to(
                "#kothik-k",{
                    left: "-15%",
                    top: "-15%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                },
                "sw"
            )

            .to(
                "#kothik-o",{
                    top: "20%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                },
                "sw"
            )

            .to(
                "#kothik-t",{
                    left: "-115%",
                    top: "-20%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                },
                "sw"
            )

            .to(
                "#kothik-h",{
                    left: "-115%",
                    top: "-110%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                },
                "sw"
            )
            
            .to(
                "#kothik-i",{
                    left: "35%",
                    top: "120%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                },
                "sw"
            )

            .to(
                "#kothik-k2",{
                    left: "-15%",
                    top: "80%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                },
                "sw"
            )

            .to(
                "#donut",{
                    width: "80vw",
                    top: "-10%",
                    rotate: "360deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                    delay: "-1",
                })

            .to(
                "dotted",{
                    opacity: 0,
                },
                "sw"
            )

            .to(".svgwaala",{
                opacity: 0,
            });
    });
});

function example() {
    window.location.href = "Second.html";
}


// 3rd

let t17 = gsap.timeline();

t17.from(".main-abhishek",{
    opacity: 0,
    ease: "expo.InOut",
    duration: 1,
},
"anim3"
);

t17.from(".front-page-img",{
    opacity: "0",
    ease: "expo.InOut",
    duration: 1,
},
"anim3"
)

.from(
    "#line-effect-3",{
        opacity: "0",
        ease: "expo.InOut",
        duration: 1,
    },
    "anim3"
)

.from(
    "#line-effect-1",{
        height: "0%",
        ease: "expo.InOut",
        duration: 2,
    },
    "anim1"
)

.from(
    "#line-effect-2",{
        height: "0%",
        ease: "expo.InOut",
        duration: 1,
    },
    "anim2"
)

.from(
    ".img-one",{
        height: "0%",
        ease: "expo.InOut",
        duration: 1,
    },
    "anim1"
)

.from(
    ".mandit",{
        width: "0%",
        opacity: 0,
        ease: "expo.InOut",
        duration: 1,
    },
    "anim1"
)

.from(
    ".mandit-2",{
        height: "0%",
        opacity: 0,
        ease: "expo.InOut",
        duration: 1,
    },
    "anim1"
)

.from(
    ".main-txt-front",{
        opacity: 0,
        ease: "expo.InOut",
        delay: -0.5,
        duration: 1,
    },
    "anim2"
)

.from(
    "#circle",{
        opacity: 0,
        ease: "expo.InOut",
        duration: 2,
    },
    "anim2"
)

.from(
    "#nav",{
        top: -50,
        opacity: 0,
        ease: "expo.InOut",
        duration: 1,
    },
    "anim2"
);



document.querySelector("#cntr-nav .ri-menu-line")
.addEventListener("click", function () {
    document.querySelector(".upper-menu").style.top = "0%";
    document.querySelector(".upper-menu .ri-close-fill").style.display = "initial";
    document.querySelector("cntr-nav .ri-menu-line").style.display = "none"; 
});

document.querySelector(".upper-menu .ri-close-fill")
.addEventListener("click", function () {
    document.querySelector(".upper-menu").style.top = "-100%";
    document.querySelector(".upper-menu .ri-close-fill").style.display = "none";
    document.querySelector("#cntr-nav .ri-menu-line").style.display = "initial";
});

document.querySelector("#abhishek").addEventListener("mousemove", function () {
    document.querySelector("#slider-upper").style.marginTop = "0%";
    document.querySelector("#abhishek").style.cursor = "pointer";
});

document.querySelector("#amarjeet").addEventListener("mousemove", function () {
    document.querySelector("#slider-upper").style.marginTop = "-50vh";
    document.querySelector("#amarjeet").style.cursor = "pointer";
});

document.querySelector("#rk").addEventListener("mousemove", function () {
    document.querySelector("#slider-upper").style.marginTop = "-100vh";
    document.querySelector("#rk").style.cursor = "pointer";
});

document.querySelector("#ak").addEventListener("mousemove", function () {
    document.querySelector("#slider-upper").style.marginTop = "-150vh";
    document.querySelector("#ak").style.cursor = "pointer";
});


// 4th

function dom(){
    const canvas = document.querySelector("#home>canvas");
    const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  })
  
  function files(index) {
    var data = `Canvas/0.jpg
                Canvas/1.jpg
                Canvas/2.jpg
                Canvas/3.jpg
                Canvas/4.jpg
                Canvas/5.jpg
                Canvas/6.jpg
                Canvas/7.jpg
                Canvas/8.jpg
                Canvas/9.jpg
                Canvas/10.jpg
                Canvas/11.jpg
                Canvas/12.jpg
                Canvas/13.jpg
                Canvas/14.jpg
                Canvas/15.jpg
                Canvas/16.jpg
                Canvas/17.jpg
                Canvas/18.jpg
                Canvas/19.jpg
                Canvas/20.jpg
                Canvas/21.jpg
                Canvas/22.jpg
                Canvas/23.jpg
                Canvas/24.jpg
                Canvas/25.jpg
                Canvas/26.jpg
                Canvas/27.jpg
                Canvas/28.jpg
                Canvas/29.jpg
                Canvas/30.jpg
                Canvas/31.jpg
                Canvas/32.jpg
                Canvas/33.jpg
                Canvas/34.jpg
                Canvas/35.jpg
                Canvas/36.jpg
                Canvas/37.jpg
                Canvas/38.jpg
                Canvas/39.jpg
                Canvas/40.jpg
                Canvas/41.jpg
                Canvas/42.jpg
                Canvas/43.jpg
                Canvas/44.jpg
                Canvas/45.jpg
                Canvas/46.jpg
                Canvas/47.jpg
                Canvas/48.jpg
                Canvas/49.jpg
                Canvas/50.jpg
                Canvas/51.jpg
                Canvas/52.jpg
                Canvas/53.jpg
                Canvas/54.jpg
                Canvas/55.jpg
                Canvas/56.jpg
                Canvas/57.jpg
                Canvas/58.jpg
                Canvas/59.jpg
                Canvas/60.jpg
                Canvas/61.jpg
                Canvas/62.jpg
                Canvas/63.jpg
                Canvas/64.jpg
                Canvas/65.jpg
                Canvas/66.jpg
                Canvas/67.jpg
                Canvas/68.jpg
                Canvas/69.jpg
                Canvas/70.jpg
                Canvas/71.jpg
                Canvas/72.jpg
                Canvas/73.jpg
                Canvas/74.jpg
                Canvas/75.jpg
                Canvas/76.jpg
                Canvas/77.jpg
                Canvas/78.jpg
                Canvas/79.jpg
                Canvas/80.jpg
                Canvas/81.jpg
                Canvas/82.jpg
                Canvas/83.jpg
                Canvas/84.jpg
                Canvas/85.jpg
                Canvas/86.jpg
                Canvas/87.jpg
                Canvas/88.jpg
                Canvas/89.jpg
                Canvas/90.jpg
                Canvas/91.jpg
                Canvas/92.jpg
                Canvas/93.jpg
                Canvas/94.jpg
                Canvas/95.jpg
                Canvas/96.jpg
                Canvas/97.jpg
                Canvas/98.jpg
                Canvas/99.jpg
                Canvas/100.jpg
                Canvas/101.jpg
                Canvas/102.jpg
                Canvas/103.jpg
                Canvas/104.jpg
                Canvas/105.jpg
                Canvas/106.jpg
                Canvas/107.jpg
                Canvas/108.jpg
                Canvas/109.jpg
                Canvas/110.jpg
                Canvas/111.jpg
                Canvas/112.jpg
                Canvas/113.jpg
                Canvas/114.jpg
                Canvas/115.jpg
                Canvas/116.jpg
                Canvas/117.jpg
                Canvas/118.jpg
                Canvas/119.jpg
                Canvas/120.jpg
                Canvas/121.jpg
                Canvas/122.jpg
                Canvas/123.jpg
                Canvas/124.jpg
                Canvas/125.jpg
                Canvas/126.jpg
                Canvas/127.jpg
                Canvas/128.jpg
                Canvas/129.jpg
                Canvas/130.jpg
                Canvas/131.jpg
                Canvas/132.jpg
                Canvas/133.jpg
                Canvas/134.jpg
                Canvas/135.jpg
                Canvas/136.jpg
                Canvas/137.jpg
                Canvas/138.jpg
                Canvas/139.jpg
                Canvas/140.jpg
                Canvas/141.jpg
                Canvas/142.jpg
                Canvas/143.jpg
                Canvas/144.jpg
                Canvas/145.jpg
                Canvas/146.jpg
                Canvas/147.jpg
                Canvas/148.jpg
                Canvas/149.jpg
                Canvas/150.jpg
                Canvas/151.jpg
                Canvas/152.jpg
                Canvas/153.jpg
                Canvas/154.jpg
                Canvas/155.jpg
                Canvas/156.jpg
                Canvas/157.jpg
                Canvas/158.jpg
                Canvas/159.jpg
                Canvas/160.jpg
                Canvas/161.jpg
                Canvas/162.jpg
                Canvas/163.jpg
                Canvas/164.jpg
                Canvas/165.jpg
                Canvas/166.jpg
                Canvas/167.jpg
                Canvas/168.jpg
                Canvas/169.jpg
                Canvas/170.jpg
                Canvas/171.jpg
                Canvas/172.jpg
                Canvas/173.jpg
                Canvas/174.jpg
                Canvas/175.jpg
                Canvas/176.jpg
                Canvas/177.jpg
                Canvas/178.jpg
                Canvas/179.jpg
                Canvas/180.jpg
                Canvas/181.jpg
                Canvas/182.jpg
                Canvas/183.jpg
                Canvas/184.jpg
                Canvas/185.jpg
                Canvas/186.jpg
                Canvas/187.jpg
                Canvas/188.jpg
                Canvas/189.jpg
                Canvas/190.jpg
                Canvas/191.jpg
                Canvas/192.jpg
                Canvas/193.jpg
                Canvas/194.jpg
                Canvas/195.jpg
                Canvas/196.jpg
                Canvas/197.jpg
                Canvas/198.jpg
                Canvas/199.jpg
                Canvas/200.jpg
                Canvas/201.jpg
                Canvas/202.jpg
                Canvas/203.jpg
                Canvas/204.jpg
                Canvas/205.jpg
                Canvas/206.jpg
                Canvas/207.jpg
                Canvas/208.jpg
                Canvas/209.jpg
                Canvas/210.jpg
                Canvas/211.jpg
                Canvas/212.jpg
                Canvas/213.jpg
                Canvas/214.jpg
                Canvas/215.jpg
                Canvas/216.jpg
                Canvas/217.jpg
                Canvas/218.jpg
                Canvas/219.jpg
                Canvas/220.jpg
                Canvas/221.jpg
                Canvas/222.jpg
                Canvas/223.jpg
                Canvas/224.jpg
                Canvas/225.jpg
                Canvas/226.jpg
                Canvas/227.jpg
                Canvas/228.jpg
                Canvas/229.jpg
                Canvas/230.jpg
                Canvas/231.jpg
                Canvas/232.jpg
                Canvas/233.jpg
                Canvas/234.jpg
                Canvas/235.jpg
                Canvas/236.jpg
                Canvas/237.jpg
                Canvas/238.jpg
                Canvas/239.jpg
                Canvas/240.jpg
                Canvas/241.jpg
                Canvas/242.jpg
                Canvas/243.jpg
                Canvas/244.jpg
                Canvas/245.jpg
                Canvas/246.jpg
                Canvas/247.jpg
                Canvas/248.jpg
                Canvas/249.jpg
                Canvas/250.jpg
                Canvas/251.jpg
                Canvas/252.jpg
                Canvas/253.jpg
                Canvas/254.jpg
                Canvas/255.jpg
                Canvas/256.jpg
                Canvas/257.jpg
                Canvas/258.jpg
                Canvas/259.jpg
                Canvas/260.jpg
                Canvas/261.jpg
                Canvas/262.jpg
                Canvas/263.jpg
                Canvas/264.jpg
                Canvas/265.jpg
                Canvas/266.jpg
                Canvas/267.jpg
                Canvas/268.jpg
                Canvas/269.jpg
                Canvas/270.jpg
                Canvas/271.jpg
                Canvas/272.jpg
                Canvas/273.jpg
                Canvas/274.jpg
                Canvas/275.jpg
                Canvas/276.jpg
                Canvas/277.jpg
                Canvas/278.jpg
                Canvas/279.jpg
                Canvas/280.jpg
                Canvas/281.jpg
                Canvas/282.jpg
                Canvas/283.jpg
                Canvas/284.jpg
                Canvas/285.jpg
                Canvas/286.jpg
                Canvas/287.jpg
                Canvas/288.jpg
                Canvas/289.jpg
                Canvas/290.jpg
                Canvas/291.jpg
                Canvas/292.jpg
                Canvas/293.jpg
                Canvas/294.jpg
                Canvas/295.jpg
                Canvas/296.jpg
                Canvas/297.jpg
                Canvas/298.jpg
                Canvas/299.jpg
                Canvas/300.jpg
                Canvas/301.jpg
                Canvas/302.jpg
                Canvas/303.jpg
                Canvas/304.jpg
                Canvas/305.jpg
                Canvas/306.jpg
                Canvas/307.jpg
                Canvas/308.jpg
                Canvas/309.jpg
                Canvas/310.jpg
                Canvas/311.jpg
                Canvas/312.jpg
                Canvas/313.jpg
                Canvas/314.jpg
                Canvas/315.jpg
                Canvas/316.jpg
                Canvas/317.jpg
                Canvas/318.jpg
                Canvas/319.jpg
                Canvas/320.jpg
                Canvas/321.jpg
                Canvas/322.jpg
                Canvas/323.jpg
                Canvas/324.jpg
                Canvas/325.jpg
                Canvas/326.jpg
                Canvas/327.jpg
                Canvas/328.jpg
                Canvas/329.jpg
                Canvas/330.jpg
                Canvas/331.jpg
                Canvas/332.jpg
                Canvas/333.jpg
                Canvas/334.jpg
                Canvas/335.jpg
                Canvas/336.jpg
                Canvas/337.jpg
                Canvas/338.jpg
                Canvas/339.jpg
                Canvas/340.jpg
                Canvas/341.jpg
                Canvas/342.jpg
                Canvas/343.jpg
                Canvas/344.jpg
                Canvas/345.jpg
                Canvas/346.jpg
                Canvas/347.jpg
                Canvas/348.jpg
                Canvas/349.jpg
                Canvas/350.jpg
                Canvas/351.jpg
                Canvas/352.jpg
                Canvas/353.jpg
                Canvas/354.jpg
                Canvas/355.jpg
                Canvas/356.jpg
                Canvas/357.jpg
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 358;
  
  const images = [];
  const imageSeq = {
    frame: 0
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub:1.8,
        pin:true,
        trigger:"#home",
    },
    onUpdate: render
  });
  
  images[0].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context)
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }
  
  gsap.to("#home canvas",{
    scale:0.8,
    scrollTrigger:{
        scrub:.1,
        trigger:"#home",
        start:"bottom 100%",
        // markers:true,
    },
  })
  ScrollTrigger.create({
    trigger:"#home",
    pin:true,
    start:"bottom 100%",
  })
  
  }
  
  dom()