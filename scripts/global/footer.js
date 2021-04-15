$(function(){
   var head='<div class="container">'+
   '             <div class="container-outtitle">'+
   '                <a href="/index.html"><img src="/images/logo.jpg" alt=""></a>'+
   '                <ul>'+
   '                    <li class="head-active"><a href="/index.html"><span>首页</span><em>Home Page</em></a></li>'+
   '                    <li><a href="/pages/groupprofile.html"><span>集团概况</span><em>Group Profile</em></a></li>'+
   '                    <li><a href="/pages/corporateculture.html"><span>企业文化</span><em>Corporate Culture</em></a></li>'+
   '                    <li><a href="/pages/news.html"><span>新闻动态</span><em>News & Trends</em></a></li>'+
   '                    <li><a href="/pages/keyprojects.html"><span>重点项目</span><em>Key Projects</em></a></li>'+
   '                    <li><a href="/pages/recruitment.html"><span>招贤纳士</span><em>Recruitment</em></a></li>'+
   '                    <li><a href="/pages/contactuS.html"><span>联系我们</span><em>Contact US</em></a></li>'+
   '                </ul>'+
   '            </div>'+
   '         </div>';
   var headcole=$(head).clone();
   if(window.location.href.indexOf("groupprofile")>-1){
       headcole.find("ul li").eq(1).addClass("head-active").siblings().removeClass("head-active")
   }else if(window.location.href.indexOf("corporateculture")>-1){
    headcole.find("ul li").eq(2).addClass("head-active").siblings().removeClass("head-active") 
   }else if(window.location.href.indexOf("news")>-1){
    headcole.find("ul li").eq(3).addClass("head-active").siblings().removeClass("head-active")
   }else if(window.location.href.indexOf("keyprojects")>-1){
    headcole.find("ul li").eq(4).addClass("head-active").siblings().removeClass("head-active")
   }else if(window.location.href.indexOf("recruitment")>-1){
    headcole.find("ul li").eq(5).addClass("head-active").siblings().removeClass("head-active")
   }else if(window.location.href.indexOf("contactuS")>-1){
    headcole.find("ul li").eq(6).addClass("head-active").siblings().removeClass("head-active")
   }
   $(".sifa-head").empty().append(headcole);
   
   var footer=' <div class="footer">'+
   '            <div class="container">'+
   '                <div class="footer-img"><img src="/images/footerlogo.png" alt=""></div>'+
   '                <div class="footer-xq clearfix">'+
   '                     <div class="footer-list">'+
   '                         <span>北京公司地址：</br>北京市东城区黄寺大街甲8号</span>'+
   '                         <span>联系电话：</br>010-6422 3026</span>'+
   '                     </div>'+
   '                     <em class="footer-line"></em>'+
   '                     <div class="footer-list">'+
   '                        <span>青岛公司地址：</br>青岛西海岸新区车轮山路88号佳沃大厦11楼</span>'+
   '                        <span>联系电话：</br>0532-8661 3555 </span>'+
   '                    </div>'+
   '                    <div class="footer-code">'+
   '                        <img src="/images/QRcode.jpg" alt="">'+
   '                        <p>官方微信</p>'+
   '                    </div>'+
   '                </div>'+
   '            </div>'+
   '        </div>'+
   '        <div class="footer-record">'+
   '            <span>Copyright ©2003-2021 shanchuan. All rights reserved. </span>'+
   '            <em>鲁ICP备08102776</em>'+
   '        </div>';
   $(".footer-box").empty().append(footer);

})