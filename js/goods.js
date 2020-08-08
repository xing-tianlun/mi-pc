window.addEventListener('load',row_nav);// 主导航及切换栏过渡效果
// function row_nav() {
//     var row_nav = document.getElementById('row_nav'),
//         tabs = row_nav.querySelectorAll('li'),
//         row_nav_con = document.getElementById('row_nav_con'),
//         cons = row_nav_con.querySelectorAll('.lis');
//     var timer;
//     row_nav.onmouseenter = function() {
//         Fblock();
//     }
//     row_nav_con.onmouseenter = function() {
//         Fblock();
//     }
//     row_nav.onmouseleave = function() {
//         Fnone();
//     }
//     row_nav_con.onmouseleave = function() {
//         Fnone();
//     }
//     function Fblock() {
//         clearTimeout(timer);
//         timer = setTimeout(function() {
//             row_nav_con.style.display = 'block';
//         },300);
//         // row_nav_con.style.display = 'block';
//         row_nav_con.style.height = '230px';
//         row_nav_con.style.animation = 'a .3s ease';
//     }
//     function Fnone() {
//         clearTimeout(timer);
//         row_nav_con.style.height = '0px';
//         row_nav_con.style.animation = 'b .3s ease';
//         timer = setTimeout(function() {
//             row_nav_con.style.display = 'none';
//         },300);
//     }
//     for(var i = 0;i < tabs.length;i++) {
//         tabs[i].index = i;
//         tabs[i].onmouseenter = function() {
//             for(var k = 0;k < cons.length;k++) {
//                 cons[k].className = 'lis';
//             }
//             cons[this.index].className = 'lis active';
//         }
//     }
// }
function row_nav() {
    var row_nav = document.getElementById('row_nav'),
        tabs = row_nav.querySelectorAll('li'),
        row_nav_con = document.getElementById('row_nav_con'),
        cons = row_nav_con.querySelectorAll('.lis');
    var timer;
    row_nav.onmouseenter = function() {
        Fblock();
    }
    row_nav_con.onmouseenter = function() {
        Fblock();
    }
    row_nav.onmouseleave = function() {
        Fnone();
    }
    row_nav_con.onmouseleave = function() {
        Fnone();
    }
    function Fblock() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            row_nav_con.style.transition = 'all .3s ease';
            row_nav_con.style.height = '230px';
        },300);
    }
    function Fnone() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            row_nav_con.style.transition = 'all .3s ease';
            row_nav_con.style.height = '0px';
        },300);
    }
    for(var i = 0;i < tabs.length;i++) {
        tabs[i].index = i;
        tabs[i].onmouseenter = function() {
            for(var k = 0;k < cons.length;k++) {
                cons[k].className = 'lis';
            }
            cons[this.index].className = 'lis active';
        }
    }

}

window.addEventListener('load',Fsidebar);// 侧边导航栏
function Fsidebar() {
    var sidebar = document.getElementById('sidebar'),
        tabs = sidebar.querySelectorAll('li'),
        sidebar_con = document.getElementById('sidebar_con'),
        cons = sidebar_con.querySelectorAll('#sidebar_con>li');
        // console.log(tabs.length,cons);
    sidebar.onmouseenter = function() {
        sidebar_con.style.display = 'block';
    }
    sidebar_con.onmouseenter = function() {
        sidebar_con.style.display = 'block';
        block_none2();
    }
    sidebar.onmouseleave = function() {
        sidebar_con_none();
    }
    sidebar_con.onmouseleave = function() {
        sidebar_con_none();
    }
    for(var j = 0;j < cons.length;j++) {
        cons[j].onmouseleave = function() {
            sidebar_con_none();
        }
    }
    block_none();
    function block_none() {
        for(var i = 0;i < tabs.length;i++) {
            tabs[i].index = i;
            tabs[i].onmouseenter = function() {
                // console.log(this.index);
                for(var k = 0;k < tabs.length;k++) {
                    tabs[k].className = cons[k].className = '';
                }
                this.className = cons[this.index].className = 'active';
            }
        }
    }
    function block_none2() {
        for(var i = 0;i < cons.length;i++) {
            cons[i].index = i;
            cons[i].onmouseenter = function() {
                // console.log(this.index);
                for(var k = 0;k < cons.length;k++) {
                    cons[k].className = '';
                }
                this.className = tabs[this.index].className = 'active';
            }
        }
    }
    function sidebar_con_none() {
        sidebar_con.style.display = 'none';
        for(var k = 0;k < tabs.length;k++) {
            tabs[k].className = '';
        }
    }
}

window.addEventListener('load',Ffixed);// 固定定位
function Ffixed() {
    var header = document.querySelector('.header'),
        nav = document.querySelector('.nav'),
        phonename = document.querySelector('.phonename'),
        goodscon = document.querySelector('.goodscon');
        document.onscroll = function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var sHeight = header.offsetHeight + nav.offsetHeight + phonename.offsetHeight;
            // console.log(sHeight);
            if (scrollTop>=sHeight) {
                phonename.className = 'phonename fixed';
                goodscon.style.paddingTop = (phonename.offsetHeight) + 'px';
                // if(scrollTop = sHeight) {
                //     $(".phonename").slideUp(0);
                // }
                // $(".phonename").animate(
                //     {
                //         top: '-40px'
                //     },0
                // )
                // $(".phonename").animate(
                //     {
                //         top: '0px'
                //     },200
                // )
            } else {
                phonename.className = 'phonename';
                goodscon.style.paddingTop = '0px';
            }
        }
}

window.addEventListener("load",banner);// 轮播图
function banner() {
    var main = document.querySelector('.ban2'),
        img_list = document.querySelector('.banimg'),
        imgs = img_list.getElementsByTagName('li'),
        tab_list = document.querySelector('.bantab'),
        tabs = tab_list.getElementsByTagName('li'),
        left = document.getElementById('banleft'),
        right = document.getElementById('banright'),
        index = 0;
    for(var i = 0;len = tabs.length,i < len;i++) {
        tabs[i].index = i;
        tabs[i].onclick = function() {
            for(var j = 0;j < len;j++) {
                tabs[j].className = imgs[j].className = '';
            }
            this.className = imgs[this.index].className = 'active';
            index = this.index;
        }
    }
    function play() {
        index++;
        if(index > len - 1) {
            index = 0;
        }
        for(var j = 0;j < len;j++) {
            tabs[j].className = imgs[j].className = '';
        }
        tabs[index].className = imgs[index].className = 'active';
    }
    right.onclick = function() {
        play();
    }
    left.onclick = function() {
        index--;
        if(index < 0) {
            index = len - 1;
        }
        for(var j = 0;j < len;j++) {
            tabs[j].className = imgs[j].className = '';
        }
        tabs[index].className = imgs[index].className = 'active';
    }
    var timer = setInterval(function() {
        play();
    },3000);
    main.onmouseenter = function() {
        clearInterval(timer);
    }
    main.onmouseleave = function() {
        timer = setInterval(function() {
            play();
        },3000);
    }
}

window.addEventListener("load",Sphone);// 选择手机及型号
function Sphone() {
    var lis = document.querySelectorAll('.sphone');
    var gprice = document.querySelector('.Gprice');
    var selected_list = document.querySelector('.selected-list'),
        list = selected_list.querySelectorAll('li');
    for(var q = 0;q < lis.length;q++) {
        lis[q].index = q;
        lis[q].onclick = function() {
            var ul = this.parentNode;
            var ulli = ul.querySelectorAll('li');
            for(var k = 0;k < ulli.length;k++) {
                ulli[k].className = 'sphone';
            }
            this.className = 'sphone active';
            
            switch (this.index) {
                case 0:
                    lis[2].style.display = 'block';
                    lis[3].style.display = 'block';
                    lis[4].style.display = 'block';
                    lis[5].style.display = 'none';
                    lis[6].style.display = 'block';
                    lis[7].style.display = 'block';
                    lis[8].style.display = 'block';
                    lis[2].className = 'sphone';
                    lis[3].className = 'sphone';
                    lis[4].className = 'sphone active';
                    lis[5].className = 'sphone';
                break; 
                case 1:
                    lis[2].style.display = 'none';
                    lis[3].style.display = 'none';
                    lis[4].style.display = 'block';
                    lis[5].style.display = 'block';
                    lis[6].style.display = 'block';
                    lis[7].style.display = 'block';
                    lis[8].style.display = 'block';
                    lis[2].className = 'sphone';
                    lis[3].className = 'sphone';
                    lis[4].className = 'sphone active';
                    lis[5].className = 'sphone';
                break; 
                case 2:
                    lis[6].style.display = 'block';
                    lis[7].style.display = 'block';
                    lis[8].style.display = 'none';
                break; 
                case 3:
                    lis[6].style.display = 'block';
                    lis[7].style.display = 'block';
                    lis[8].style.display = 'block';
                break; 
                case 4:
                    lis[6].style.display = 'block';
                    lis[7].style.display = 'block';
                    lis[8].style.display = 'block';
                break;
                case 5:
                    lis[6].style.display = 'block';
                    lis[7].style.display = 'block';
                    lis[8].style.display = 'block';
                break;
                default:
                break;
            }

            var sphoneactive = document.querySelectorAll('.sphone.active');
            // console.log(sphoneactive[0].innerText + sphoneactive[1].innerText);
            switch (sphoneactive[0].innerText + sphoneactive[1].innerText) {
                case 'Redmi 10X 5G6GB+64GB':
                    gprice.innerText = '1599元';
                break;
                case 'Redmi 10X 5G6GB+128GB':
                    gprice.innerText = '1799元';
                break;
                case 'Redmi 10X 5G8GB+128GB':
                    gprice.innerText = '2099元';
                break;
                case 'Redmi 10X Pro 5G8GB+128GB':
                    gprice.innerText = '2299元';
                break;
                case 'Redmi 10X Pro 5G8GB+256GB':
                    gprice.innerText = '2599元';
                break;
                default:
                break;
            }
            list[0].innerHTML = sphoneactive[0].innerText + ' ' + sphoneactive[1].innerText + ' ' + sphoneactive[2].innerText + '<span>' + gprice.innerText + '</span>';
            // console.log(list[0].innerHTML);

            var selected_list = document.querySelector('.selected-list');
            // console.log(service,lists);
            var total_price = document.querySelector('.total-price');
            function addprice() {
                var prices = selected_list.querySelectorAll('span'),
                    add = 0;
                for(var k = 0;k < prices.length;k++) {
                    add = add + Number(prices[k].innerText.slice(0,-1));
                }
                return add;
            }
            total_price.innerText = '总计：' + addprice() + '元';
        }
    }
    
}

window.addEventListener("load",service);// 选择服务
function service() {
    var lis = document.querySelectorAll('.servicelis');
    for(var q = 0;q < lis.length;q++) {
        lis[q].index = q;
        lis[q].onclick = function() {
            if(this.className != 'servicelis active') {
                var ul = this.parentNode;
                var ulli = ul.querySelectorAll('li');
                for(var k = 0;k < ulli.length;k++) {
                    ulli[k].className = 'servicelis';
                }
                this.className = 'servicelis active';
            }else if(this.className === 'servicelis active') {
                this.className = 'servicelis';
            }
        }
    }
}

window.addEventListener('load',addservice);// 服务和商品总价结算
function addservice() {
    var service = document.querySelectorAll('.service-item-box'),
        selected_list = document.querySelector('.selected-list'),
        lists = selected_list.querySelectorAll('ul');
        // console.log(service,lists);
    var total_price = document.querySelector('.total-price');
    function addprice() {
        var prices = selected_list.querySelectorAll('span'),
            add = 0;
        for(var k = 0;k < prices.length;k++) {
            add = add + Number(prices[k].innerText.slice(0,-1));
        }
        return add;
    }
    for(var i = 0;i < service.length;i++) {
        service[i].index = i;
        service[i].onclick = function() {
            // console.log(this.index);
            var lis = this.querySelectorAll('li');
            for(var j = 0;j < lis.length;j++) {
                if(lis[j].className == 'servicelis active') {
                    var hcon = lis[j].querySelector('h3'),
                        str = hcon.innerHTML.split(" "),
                        price = lis[j].querySelector('.price').innerText;
                    // console.log(str[0],price);
                    lists[this.index + 1].innerHTML = '<li>' + str[0] + '<span>' + price + '</span>' + '</li>';
                    total_price.innerText = '总计：' + addprice() + '元';
                    break;
                }else {
                    if(j === (lis.length - 1)) {
                        lists[this.index + 1].innerHTML = '';
                    }
                    total_price.innerText = '总计：' + addprice() + '元';
                    continue;
                }
            }
        }
    }
}

window.addEventListener('load',backtop);// 回到顶部
function backtop() {
    var backTop = document.getElementById('backTop');
    // console.log(backTop);
    window.onscroll = function() {
        var nowtop = window.scrollY;
        // console.log(nowtop);
        if(nowtop >= 1000) {
            backTop.style.display = 'block';
        }else {
            backTop.style.display = 'none';
        }
    }
    backTop.onclick = function() {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
}