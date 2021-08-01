//script select initial image
function toyView1(){
    document.getElementById('name').innerHTML = "<strong>Nome:</strong> Lego infantil"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível:</strong> 670 unidades"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> Lego"
    document.getElementById('price').innerHTML = "R$ 64,90"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/2.png";
}
//script select secondary image
function toyView2(){
    document.getElementById('name').innerHTML = "<strong>Nome:</strong> jogo de trens completos"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível:</strong> 10 unidades"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> Tek toy"
    document.getElementById('price').innerHTML = "R$ 170,90"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/9.png";
}
//script select third image
function toyView3(){
    document.getElementById('name').innerHTML = "<strong>Nome:</strong> Conjunto de carrinhos"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível:</strong> 210 unidades(conjunto com 10 carros)"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> TBrincateca"
    document.getElementById('price').innerHTML = "R$ 35,99"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/10.png";
}
//script select return image
function toyView4(){
    document.getElementById('name').innerHTML = "<strong>Nome: </strong>Brinquedo Mario de montagem"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível: </strong>25 unidades"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> Nintendo"
    document.getElementById('price').innerHTML = "R$ 45,60"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/11.png";
}
//script count frete product
function validZip(){

    let cep = document.getElementById('cep')

    if(cep.value == ''){
        event.preventDefault()
        Swal.fire({
            icon: 'error',
            title: 'Oops... preencha o campo cep por gentileza',
            footer: '<a href="">Deseja tentar novamente?</a>'
        })
    }else{
        event.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Yeah, sua região tem frete grátis',
            footer: '<a href="">Deseja tentar novamente?</a>'
        })
    }

}

