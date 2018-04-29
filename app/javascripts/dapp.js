import * as helper from './helper.js';
import $ from "jquery";

export function addRow() {
    var id = $('#pwdListTbl tr:last td:first')[0].innerText;
    var content = "<tr><td>" + (parseInt(id)+1) + "</td>";
    content += "<td><input type=\"text\"";
    content += "value=\"\" placeholder=\"Enter Account Name\" /></td>";
    content += "<td><input type=\"text\"";
    content += "value=\"\" placeholder=\"Enter Password\" /></td></tr>";
    $('#pwdListTbl tr:last').after(content);
}
