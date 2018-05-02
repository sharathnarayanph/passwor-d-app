import * as helper from './helper.js';
import $ from 'jquery';
import factory from '../res/factory.js';

export function initApp() {
    hideList();
}

export function login() {
    //Start from here
}

export function addRow() {
    showList();

    var element;
    var id;

    if ($('#pwdListTbl tr:last td:first').length == 0) {
        id = 0;
        element = $('#pwdListTbl tbody');
    }
    else {
        id = $('#pwdListTbl tr:last td:first')[0].innerText;
        element = $('#pwdListTbl tr:last')
    }

    var content = "<tr><td>" + (parseInt(id) + 1) + "</td>";
    content += "<td><input type=\"text\"";
    content += "value=\"\" placeholder=\"Enter Account Name\" /></td>";
    content += "<td><input type=\"text\"";
    content += "value=\"\" placeholder=\"Enter Password\" /></td>";
    content += "<td><a onclick=\"App.removeRow(this)\" class=\"fa fa-close\" href=\"#\"></a></td></tr>";

    if (element[0].localName == "tbody") {
        $(element).append(content);
    }
    else {
        $(element).after(content);
    }
}

export function removeRow(row) {
    row.parentNode.parentNode.remove();
    var test = $('#pwdListTbl tbody');
    if ($('#pwdListTbl tbody')[0].children.length == 0) {
        hideList();
    }
}

export function save() {
    var keys = [];
    var values = [];

    $('#pwdListTbl tbody tr').each(function () {
        keys.push(this.children[1].children[0].value);
        values.push(this.children[2].children[0].value);
    });

    savePasswords(keys, values);
}

export function loadPasswords() {
    getPasswordList();
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

function createContractInstance() {
    return helper.createContractInstance(factory.abi, factory, address);
}

function savePasswords(keys, values) {
    var instance = createContractInstance();
    var estimatedGas = 6654755;

    var txnObject = {
        from: web3.eth.coinbase,
        gas: estimatedGas
    }

    instance.savePassword.sendTransaction(keys, values, keys.length, txnObject, function (error, result) {
        if (!error) {
            console.warn(result);
        }
        else {
            console.log("Error");
        }
    });
}

function getPasswordList() {
    var instance = createContractInstance();
    var estimatedGas = 6654755;

    instance.getPassword.call(function (error, result) {
        if (!error) {
            console.log(result)
            showList();
            generatePasswordList(result[0], result[1]);
        }
        else {
            console.log('Error');
        }
    });
}

function generatePasswordList(keys, values) {
    var content;
    var element;

    for (var i = 0; i < keys.length; i++) {
        content = "<tr><td>" + (parseInt(i) + 1) + "</td>";
        content += "<td><input type=\"text\"";
        content += "value=\"" + keys[i] + "\" placeholder=\"Enter Account Name\" /></td>";
        content += "<td><input type=\"text\"";
        content += "value=\"" + values[i] + "\" placeholder=\"Enter Password\" /></td>";
        content += "<td><a onclick=\"App.removeRow(this)\" class=\"fa fa-close\" href=\"#\"></a></td></tr>";

        if(i == 0) {
            $('#pwdListTbl tbody').append(content);
        }
        else {
            $('#pwdListTbl tr:last').after(content);
        }
    }
}
