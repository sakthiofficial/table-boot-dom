function cm(tag, attr, attrvalue) {
    var ele = document.createElement(tag);
    ele.setAttribute(attr, attrvalue);
    return ele;
}
function head(tag, attr, attrvalue,cont) {
    let ele = document.createElement(tag)
    ele.setAttribute(attr, attrvalue)
    ele.innerHTML=cont;
    return ele;
}
function data(tag,cont){
var ele = document.createElement(tag);
ele.innerHTML=cont;
return ele;
}
var tb = cm("table","class","table")
var th = cm("thead","class","thead-dark")
tb.append(th);

var tr = document.createElement("tr")
th.append(tr)
var hd = head("th","scope","col","First")
tr.append(hd);
var hd2 = head("th","scope","col","Middle")
tr.append(hd2);
var hd3 = head("th","scope","col","Last")
tr.append(hd3)
var bd = document.createElement("tbody")
tb.append(bd);
var tr1 = document.createElement("tr")
bd.append(tr1)
var td1 = data("td","mark");
tr1.append(td1)
var td2 = data("td","otto");
tr1.append(td2)
var td3 = data("td","@mdo");
tr1.append(td3)
document.body.append(tb)
