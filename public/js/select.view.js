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

//script select initial image
function toyView5(){
    document.getElementById('name').innerHTML = "<strong>Nome:</strong> Macacão infantil até 7 anos"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível:</strong> 60 unidades"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> Cool"
    document.getElementById('price').innerHTML = "R$ 94,90"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/4.png";
}
//script select secondary image
function toyView6(){
    document.getElementById('name').innerHTML = "<strong>Nome:</strong> Roupas socias infantis"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível:</strong> 64 unidades"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> Baby care"
    document.getElementById('price').innerHTML = "R$ 59,99"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/5.png";
}
//script select third image
function toyView7(){
    document.getElementById('name').innerHTML = "<strong>Nome:</strong> Cachecol de inverno infantil"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível:</strong> 10 unidades"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> Collins"
    document.getElementById('price').innerHTML = "R$ 159,99"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/6.png";
}
//script select return image
function toyView8(){
    document.getElementById('name').innerHTML = "<strong>Nome: </strong>Roupas de moletom infantil"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível: </strong>25 unidades"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> Goosebumps"
    document.getElementById('price').innerHTML = "R$ 65,60"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/7.png";
}
//script select initial image
function toyView9(){
    document.getElementById('name').innerHTML = "<strong>Nome:</strong> Roupas infantis de 0 a 3 anos"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível:</strong> 60 unidades"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> Baby shoes"
    document.getElementById('price').innerHTML = "R$ 94,90"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/3.png";
}
//script select secondary image
function toyView10(){
    document.getElementById('name').innerHTML = "<strong>Nome:</strong> Camisas de 1 a 7 anos"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível:</strong> 564 unidades"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> Nani buggs"
    document.getElementById('price').innerHTML = "R$ 39,99"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/12.png";
}
//script select third image
function toyView11(){
    document.getElementById('name').innerHTML = "<strong>Nome:</strong> Calças jeans infantis de 03 a 07 anps"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível:</strong> 99 unidades"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> Collins"
    document.getElementById('price').innerHTML = "R$ 109,99"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/13.png";
}
//script select return image
function toyView12(){
    document.getElementById('name').innerHTML = "<strong>Nome: </strong>Roupinha infantil todas idades"
    document.getElementById('qnt').innerHTML = "<strong>Quantidade disponível: </strong>8 unidades"
    document.getElementById('marca').innerHTML = "<strong>Marca do produto:</strong> Goosebumps"
    document.getElementById('price').innerHTML = "R$ 45,60"
    document.getElementById("toyPreview").src = "public/assets/images/productkids/8.png";
}
//script valid frete product
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

