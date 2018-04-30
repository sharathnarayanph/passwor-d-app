import * as helper from './helper.js';
import $ from "jquery";

export function initApp() {
    hideList();
}

export function addRow() {
    showList();

    var element;
    var id;

    if($('#pwdListTbl tr:last td:first').length == 0) {
        id = 0;
        element = $('#pwdListTbl tbody');
    }
    else {
        id = $('#pwdListTbl tr:last td:first')[0].innerText;
        element = $('#pwdListTbl tr:last')
    }

    var content = "<tr><td>" + (parseInt(id)+1) + "</td>";
    content += "<td><input type=\"text\"";
    content += "value=\"\" placeholder=\"Enter Account Name\" /></td>";
    content += "<td><input type=\"text\"";
    content += "value=\"\" placeholder=\"Enter Password\" /></td>";
    content += "<td><a onclick=\"App.removeRow(this)\" class=\"fa fa-close\" href=\"#\"></a></td></tr>";

    if(element[0].localName == "tbody") {
        $(element).append(content);
    }
    else {
        $(element).after(content);
    }
}

export function removeRow(row) {
    row.parentNode.parentNode.remove();
    var test = $('#pwdListTbl tbody');
    if($('#pwdListTbl tbody')[0].children.length == 0) {
        hideList();
    }
}

export function save() {
    var keys = [];
    var values = [];

    $('#pwdListTbl tbody tr').each(function() {
        keys.push(this.children[1].children[0].value);
        values.push(this.children[2].children[0].value);
    });
}

function showList() {
    $('#noPwds').hide();
    $('#pwdTblContainer').show();
    $('#savePwds').show();
}

function hideList() {
    $('#noPwds').show();
    $('#pwdTblContainer').hide();
    $('#savePwds').hide();
}
