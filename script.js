function datadisp(n) {
    output.value += n;

}

function clr(n) {
    output.value = ""
}

function del(n) {
    output.value = output.value.slice(0, -1);
}

function result() {
    if (output.value.includes('+')) {
        r = [];
        a = output.value;
        r = a.split('+')
        output.value = parseInt(r[0]) + parseInt(r[1])
    } else if (output.value.includes('-')) {
        r = [];
        a = output.value;
        r = a.split('-')
        output.value = parseInt(r[0]) - parseInt(r[1])
    } else if (output.value.includes('*')) {
        r = [];
        a = output.value;
        r = a.split('*')
        output.value = parseInt(r[0]) * parseInt(r[1])
    } else if (output.value.includes('/')) {
        r = [];
        a = output.value;
        r = a.split('/')
        output.value = parseInt(r[0]) / parseInt(r[1])
    }
}