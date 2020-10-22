function getdata(){
    var nama = document.getElementById('nama').value;
    if (nama != "") {
        document.getElementById('pnama').innerHTML = nama;
    }else {
        var n = "Anda Belum Mengisi Nama !"
        document.getElementById('pvn').innerHTML = n;
    }
   
    
    var email = document.getElementById('asal').value;
    if (email != ""){
        document.getElementById('pAsal').innerHTML = email;
    }else{
        var e = "Anda Belum Mengisi Asal !"
        document.getElementById('pve').innerHTML = e;
    }

    var negara = document.getElementById('Atempur').value;
    if (negara != ""){
        document.getElementById('pAtempur').innerHTML = negara;
    }else{
        var ne = "Anda Belum Memilih Tempat tempur !"
        document.getElementById('pvne').innerHTML = ne;
    }
    

    var thn = document.getElementById('umur').value;
    if (thn != "") {
        document.getElementById('ptahun').innerHTML = thn + " tahun";
    }else{
        var ta = "Anda Belum Mengisi Usia !"
        document.getElementById('pvta').innerHTML = ta;
    }
    
    
    var jenis = new Array();
    var jenis = document.getElementsByName("jeniskelamin");
    if (jenis[0].checked === true) {
         var j = jenis[0].value;
    }else if (jenis[1].checked === true){
        var j = jenis[1].value;
    } else if (jenis[2].checked ===true){
        var j = jenis[2].value
    }else{
        var jk = "Anda Belum Memilih Jenis Kelamin !"
        document.getElementById('pvjk').innerHTML = jk;
    }
    document.getElementById("pJK").innerHTML = j;
if(nama != "" ||email != ""||negara != ""||thn != ""||jenis !=""){
    $(document).ready(function(){
        $("#show").click(function(){
            $("#tabel").show();
        });
    })

}
}
;