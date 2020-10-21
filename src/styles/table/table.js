var http = new XMLHttpRequest();
var url = "json/data.json";
var params = 'id=1';
http.open('GET', url, true);
http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        var data = JSON.parse(http.responseText);
        var html = `<tbody class="tableList__body" id="cuerpo">`;
        for (let i = 0; i < data.length; i++) {
            const ciclo = data[i];
            let nameCiclo = ciclo.ciclo;
            html += `
            <tr class="tableList__row tableList__row--subtitle">
                <th class="tableList__colum tableList__colum--subtitle">${nameCiclo}</th>
            </tr>`;
            for (let j = 0; j < ciclo.cursos.length; j++) {
                const curso = ciclo.cursos[j];
                let name = curso.curso;
                let nota = curso.nota;
                let credito = curso.credito;
                html += `
                <tr class="tableList__row tableList__row--data">
                    <td class="tableList__colum tableList__colum--text">${name}</td>
                    <td class="tableList__colum tableList__colum--number nota">${nota}</td>
                    <td class="tableList__colum tableList__colum--number credito">${credito}</td>
                </tr>`;
            }
        }
        html += `</tbody>`;
        data_table.outerHTML = html;
        promediar();
    }
}
http.send(params);

function promediar(){
    var notaBoxList = document.querySelectorAll(".nota");
    var credioBoxtList = document.querySelectorAll(".credito");

    var sumaCredito = 0;
    var promedio = 0;

    for (let i = 0; i < credioBoxtList.length; i++) {
        var credito = parseInt(credioBoxtList[i].innerHTML);
        sumaCredito += credito;
    }

    for (let i = 0; i < notaBoxList.length; i++) {
        var nota = parseInt(notaBoxList[i].innerHTML);
        var credito = parseInt(credioBoxtList[i].innerHTML);
        promedio += nota * credito / sumaCredito;
    }

    creditoTotalBox.innerHTML = sumaCredito + " creditos";
    promedioBox.innerHTML = promedio;
}
