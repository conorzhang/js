/* 
document.write('<h1 id="b">hello</h1>');
document.write('world!/n');
document.write('<br>'+(1+2));
document.write('<br>'+(100));
document.write('<br>'+(0.22e-2));
document.write('<br>'+(10%20));
 */
document.write(`
<div id="myDIV">
<p class="child">div 元素中第一个 class="child" 的 p 元素 (索引值为 0).</p>
<p class="child">div 元素中第二个 class="child" 的 p 元素 (索引值为 1).</p>
<p class="child">div 元素中第三个 class="child" 的 p 元素 (索引值为 2).</p>
</div>
`);

var x = document.getElementById("myDIV");
x.getElementsByClassName("child")[1].style.backgroundColor = "red";

document.write('<h1 id="b">hello</h1>');
document.getElementById("b").style.backgroundColor = "green";
document.getElementById("b").style.color = "white";

document.write('<h1 class="aaa">world</h1>');
document.getElementsByClassName("aaa")[0].style.color = "red";