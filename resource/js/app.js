var data_person = {
    urlJSON: "/public/assets/json/dados.json",
    urlImages: "/public/assets/images/",
    dataPeople: [],
    containerModel: null,
    containerLoad: null,
    containerPeople: document.getElementById("data-people"),
    closeLoad: function () {
        var container = document.getElementById("container-load");
        data_person.containerLoad = container.innerHTML;
        container.parentNode.removeChild(container);
    },
    isHidden: function (el) {
        var style = window.getComputedStyle(el);
        return (style.display === 'none');
    },
    toggleMenuMobile: function () {
        var menu = document.getElementById("menu");
        if (data_person.isHidden(menu)) {
            menu.classList.add("show");
        } else {
            menu.className = menu.className.replace("show", "");
        }
    },
    selectFirstItem: function () {
        document.getElementById("data-people").children[0].click();
    },
    unSelectAllItems: function () {
        var containerItems = document.getElementById("data-people");
        for (var item of containerItems.children) {
            var person = item.children[0];
            person.className = person.className.replace("is-active", "");
        }
    },
    selectItem: function () {
        var i = this.dataset.i;
        var person = data_person.dataPeople[i];
        document.getElementById("photo").src = data_person.urlImages + person.foto;
        document.getElementById("name").innerHTML = person.nome;
        document.getElementById("office").innerHTML = person.cargo;
        document.getElementById("yearsAge").innerHTML = person.idade;
        data_person.unSelectAllItems();
        this.children[0].classList.add("is-active");
    },
    insertDataPage: function (i) {
        var person = data_person.dataPeople[i];
        var element = document.createElement("div");
        element.className = "col-3-6-12";
        element.innerHTML = data_person.containerModel;
        element.dataset.i = i;
        element.innerHTML = element.innerHTML.replace("[id]", person.id);
        element.innerHTML = element.innerHTML
            .replace("data-src", "src")
            .replace("[photo]", data_person.urlImages + person.foto);
        element.innerHTML = element.innerHTML.replace("[name]", person.nome);
        element.innerHTML = element.innerHTML.replace("[office]", person.cargo);
        element.onclick = data_person.selectItem;
        data_person.containerPeople.appendChild(element);
    },
    loadContainerModel: function () {
        var container = document.getElementById("model-person");
        data_person.containerModel = container.innerHTML;
        container.parentNode.removeChild(container);
    },
    loadPage: function () {
        this.loadContainerModel();
        this.getData().then(function (data) {
            data_person.dataPeople = data;
            for (var i in data) {
                data_person.insertDataPage(i);
            }
            data_person.selectFirstItem();
            data_person.closeLoad();
        }).catch(function (code) {
            if (code > 400 && code < 406) {
                alert("Arquivo de dados não encontrado!");
            } else {
                alert("Erro interno!");
            }
            data_person.closeLoad();
        });
    },
    getData: function () {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', data_person.urlJSON, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                var status = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send();
        });
    },
    init: function () {
        this.loadPage();
        document.getElementsByClassName("btn-menu")[0].onclick = data_person.toggleMenuMobile;
    }
};
data_person.init();