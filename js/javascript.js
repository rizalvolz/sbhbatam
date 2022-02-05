alert("Welcome");

function Countdown() {
   
         setInterval(function () {
 
            var hari1    = document.getElementById("hari");
            var jam1     = document.getElementById("jam");
            var menit1   = document.getElementById("menit");
            var detik1   = document.getElementById("detik");
               
            var idfitri    = new Date("May 2, 2022 23:59:59");
            var waktu       = new Date();
            var distance    = idfitri - waktu;
               
            var ambil_hari  = Math.floor((distance / (1000*60*60*24)));
            var ambil_jam   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var ambil_menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var ambil_detik = Math.floor((distance % (1000 * 60)) / 1000);
               
            if (ambil_hari < 10)
            {
               ambil_hari = '0' + ambil_hari;
            }
            if (ambil_jam < 10)
            {
               ambil_jam = '0' + ambil_jam;
            }
            if (ambil_menit < 10)
            {
               ambil_menit = '0' + ambil_menit;
            }
            if (ambil_detik < 10)
            {
               ambil_detik = '0' + ambil_detik;
            }
 
            hari.innerHTML    = ambil_hari;
            jam.innerHTML     = ambil_jam;
            menit.innerHTML   = ambil_menit;
            detik.innerHTML   = ambil_detik;
 
         }, 1000);
     }
 
Countdown();
;