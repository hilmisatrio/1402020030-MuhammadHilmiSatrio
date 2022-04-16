// jquery
$(document).ready(function () {
    $("#no-hp").change(function () {
        if ($("#no-hp").val() > 1) {
            $("#nominal").prop("disabled", false);
            $("#nominal-paket-data").prop("disabled", false);
        }else{
            $("#nominal").prop("disabled", true);
            $("#nominal-paket-data").prop("disabled", true);
            $("#button-beli-paket").prop("disabled", true);
            $("#button-beli-pulsa").prop("disabled", true);
            $("#button-beli-pulsa").css({'backgroundColor':'#6C727C'});
            $("#button-beli-paket").css({'backgroundColor':'#6C727C'});
            $("#nominal").val("pilih");
            $("#nominal-paket-data").val("pilih");
        }
    });
    // untuk pulsa
    $("#nominal").change(function () {
        $("#button-beli-pulsa").css({'backgroundColor':'#fa591d','border':'#fa591d'});
        $("#button-beli-pulsa").prop("disabled", false);
    });
    // untuk paket
    $("#nominal-paket-data").change(function () {
        $("#button-beli-paket").css({'backgroundColor':'#fa591d','border':'#fa591d'});
        $("#button-beli-paket").prop("disabled", false);
    });
    // action tombol beli pulsa
    $("#button-beli-pulsa").click(function () {
        const selectedNominal = $("#nominal").val();
        let panjang = selectedNominal.length;
        let nominalPulsa = $("#nominal").val();
        let nominal_choice = "";
        let harga_PerNominal = "";
        for (let i = 0; i < panjang; i++) {
            let nominal_pulsa = nominalPulsa.substring(i, i + 1);
            if (nominal_pulsa === "-") {
                nominal_choice += selectedNominal.substring(0, i);
                harga_PerNominal += selectedNominal.substring(i + 1, nominalPulsa.length);
            }
        }
        let confirmAction = confirm("Pembelian pulsa sebesar " + nominal_choice + " ke nomor " + $("#no-hp").val());
        if (confirmAction) {
            alert("Total harga pulsa " + harga_PerNominal + ",- ke nomor " + $("#no-hp").val() + " sedang di proses. Terima kasih :]");
        } else {
            //jika cancel maka akan hilang
        }
    });
    // action tombol beli paket
    $("#button-beli-paket").click(function () {
        const selectedNominal = $("#nominal-paket-data").val();
        let panjang = selectedNominal.length;
        let nominalPulsa = $("#nominal-paket-data").val();
        let nominal_choice = "";
        let harga_PerNominal = "";
        for (let i = 0; i < panjang; i++) {
            let nominal_pulsa = nominalPulsa.substring(i, i + 1);
            if (nominal_pulsa === "-") {
                nominal_choice += selectedNominal.substring(0, i);
                harga_PerNominal += selectedNominal.substring(i + 1, nominalPulsa.length);
            }
        }
        let confirmAction = confirm("Pembelian paket data " + nominal_choice + " ke nomor " + $("#no-hp").val());
        if (confirmAction) {
            alert("Total harga paket data  " + harga_PerNominal + ",- ke nomor " + $("#no-hp").val() + " sedang di proses. Terima kasih :]");
        } else {
            //jika cancel maka akan hilang
        }
    });
    // jika klik pulsa maka element di paket data dihidden , lalu jika klik paket data element input lalau di hidden select koutanya
    // jika dimasukan selain angka maka tidak keinput
    $("#no-hp").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
    // tombol menu transaksi
    $("#menu-pulsa").click(function () {
        // border menu ppaket-listrik-pln menjadi putih sedangkan pulsa menjadi hijau
        $("#menu-pulsa").css({
            'border-color': '#03ac0e', 'color': '#03ac0e'
        });
        $("#menu-paket").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-listrik").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-PLN").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#nominal").show();
        $("#nominal-paket-data").hide();
        $("#button-beli-paket").hide();
        $("#button-beli-pulsa").show();
    });
    $("#menu-paket").click(function () {
        // border menu pulsa-listrik-pln menjadi putih sedangkan paket data menjadi hijau
        $("#menu-paket").css({
            'border-color': '#03ac0e', 'color': '#03ac0e'
        });
        $("#menu-pulsa").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-listrik").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-PLN").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#nominal").hide();
        $("#nominal-paket-data").prop("hidden", false);
        $("#nominal-paket-data").show();
        $("#button-beli-paket").prop("hidden", false);
        $("#button-beli-paket").show();
        $("#button-beli-pulsa").hide();
    });
    $("#menu-listrik").click(function () {
        // border menu pulsa-paket-pln menjadi putih sedangkan listrik menjadi hijau
        $("#menu-listrik").css({
            'border-color': '#03ac0e', 'color': '#03ac0e'
        });
        $("#menu-pulsa").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-paket").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-PLN").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
    });
    $("#menu-PLN").click(function () {
        // border menu pulsa-paket-listrik menjadi putih sedangkan plnmenjadi hijau
        $("#menu-PLN").css({
            'border-color': '#03ac0e', 'color': '#03ac0e'
        });
        $("#menu-pulsa").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-paket").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-listrik").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
    });
});