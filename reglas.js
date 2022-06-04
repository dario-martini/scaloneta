const reglasband = document.querySelector(".reglas");
reglasband.addEventListener('click', reglas);

function reglas() {
    swal({
        title: "Estas listo/a???",
        text: "Vamos a poner a prueba tus conocimientos",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Debes escribir a que pais pertenece cada bandera debajo de cada una de ellas sin acentos! BUENA SUERTE!!", {
                    icon: "success",
                });
            } else {
                swal("Deberas esforzarte mas para estar en la Scaloneta");
            }
        });
}