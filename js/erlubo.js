$.ajax({
    type: "get",
    url: "php/aaa.php",
    data: "ttdata=erlunbodata",
    success: function (res) {
        var erlunbostr = "";
        JSON.parse(res).forEach(item => {
            erlunbostr += `<div class="xxx"><a href="javascript:;">
                <img src="images/${item.img}" alt="">
                <p>${item.content}</p>
                <div class="hongbai">
                    <div class="hong">￥${item.price}</div>
                    <div class="bai">￥<s>${item.preprice}</s></div>
                </div>
                </a>
            </div>`
        });
        xxxbaba.innerHTML = erlunbostr;

        function lunbo(aa, bb, cc) {
            clearInterval(aa.timer)
            if (bb === "left") {
                aa.timer = setInterval(function () {
                    aa.style.left = aa.offsetLeft - 10 + "px";
                    if (aa.offsetLeft <= cc) {
                        aa.style.left = cc + "px";
                        clearInterval(aa.timer)
                    }
                })

            } else {
                aa.timer = setInterval(function () {
                    aa.style.left = aa.offsetLeft + 10 + "px";
                    if (aa.offsetLeft >= cc) {
                        aa.style.left = cc + "px";
                        clearInterval(aa.timer)
                    }
                })
            }
        }

        var iiier = 0;
        ne2xt.onclick = function () {
            if (iiier >= 4) {
                xxxbaba.style.left = 0;
                iiier = 0
            }
            iiier++;
            lunbo(xxxbaba, "left", -800 * iiier)
        }
        pr2e.onclick = function () {
            if (iiier <= 0) {
                xxxbaba.style.left = "3200px";
                iiier = 4
            }
            iiier--;
            lunbo(xxxbaba, "right", -800 * iiier)
        }
    }
})