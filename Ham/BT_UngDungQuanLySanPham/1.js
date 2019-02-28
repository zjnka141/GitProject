var app = new function () {
    this.products = ['Sony Xperia', 'Samsung Galaxy',
        'Xiaomi Redmi Note 4', 'Apple iPhone 6S', 'Apple iPhone 8 Plus', 'Oppo A71'];
    this.add = function () {
        var element = document.getElementById("add-name");
        if (element.value && !this.products.includes(element.value)) {
            this.products.push(element.value);
        }
        this.show();
    }
    this.show = function () {
        var data = "";
        document.getElementById("quantities").innerHTML = this.products.length;
        for (var i = 0; i < this.products.length; i++) {
            data += '<tr>'
            data += '<td style="width:60%;height: 60px;">' + this.products[i] + '</td>';
            data += '<td><input type="button" onclick="app.edit(' + i + ')" value="Edit"></td>';
            data += '<td><input type="button" onclick="app.delete(' + i + ')" value="Delete"></td>';
            data += '</tr>';
        }
        document.getElementById("products").innerHTML = data;
    }
    this.delete = function (index) {
        this.products.splice(index, 1);
        this.show();
    }
    this.edit = function (index) {
        var data = '';
        for (var i = 0; i < this.products.length; i++) {
            if (i == index) {
                data += '<tr>'
                data += '<td style="width:60%;height: 60px;"><input autofocus type="text" value="'
                    + this.products[i] + '" id="editTxt" /></td>';
                data += '<td><input type="button" onclick="app.save(' + i + ')" value="Save"></td>';
                data += '<td><input type="button" onclick="app.show()" value="X"></td>';
                data += '</tr>';
            } else {
                data += '<tr>'
                data += '<td style="width:60%;height: 60px;">' + this.products[i] + '</td>';
                data += '<td><input type="button" onclick="app.edit(' + i + ')" value="Edit"></td>';
                data += '<td><input type="button" onclick="app.delete(' + i + ')" value="Delete"></td>';
                data += '</tr>';
            }
        }
        document.getElementById("products").innerHTML = data;
        var editElement = document.getElementById("editTxt");
        editElement.focus();
        // To move cusor to the end of textbox
        var value = editElement.value;
        editElement.value = '';
        editElement.value = value;
        // End
    }
    this.save = function (index) {
        this.products[index] = document.getElementById("editTxt").value;
        this.show();
    }
}
function eventPress() {
    window.addEventListener("keydown", function (event) {
        if (document.getElementById("editTxt")) {
            switch (event.keyCode) {
                case 27:
                    document.getElementById("editTxt").parentElement.nextSibling.nextSibling.children[0].click();
                    break;
                case 13:
                    document.getElementById("editTxt").parentElement.nextSibling.children[0].click();
                    break;
            }
        }
    });
}