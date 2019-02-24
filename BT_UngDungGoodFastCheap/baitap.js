function sliderNut(id) {
    queryToggleClass(id + " .tron", "truot");
    queryToggleClass(id + " .xanh", "hien");
    if (id == "#nut1" && queryHasClass("#nut1 .tron", "truot")) {
        if (queryHasClass("#nut2 .tron", "truot") && queryHasClass("#nut3 .tron", "truot")) {
            queryToggleClass("#nut3 .tron", "truot");
            queryToggleClass("#nut3 .xanh", "hien");
        }
    }
    if (id == "#nut2" && queryHasClass("#nut2 .tron", "truot")) {
        if (queryHasClass("#nut1 .tron", "truot") && queryHasClass("#nut3 .tron", "truot")) {
            queryToggleClass("#nut1 .tron", "truot");
            queryToggleClass("#nut1 .xanh", "hien");
        }
    }
    if (id == "#nut3" && queryHasClass("#nut3 .tron", "truot")) {
        if (queryHasClass("#nut1 .tron", "truot") && queryHasClass("#nut2 .tron", "truot")) {
            queryToggleClass("#nut2 .tron", "truot");
            queryToggleClass("#nut2 .xanh", "hien");
        }
    }
}
function queryHasClass(query, className) {
    return document.querySelector(query).classList.contains(className);
}
function queryToggleClass(query, className) {
    return document.querySelector(query).classList.toggle(className);
}
