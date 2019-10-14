function odliczanie()
	{
		var disiaj = new Date();
		var dzien = disiaj.getDate();
		var miesiac = disiaj.getMonth()+1;
		var rok = disiaj.getFullYear();
		var sekunda= disiaj.getSeconds();
		var minuta= disiaj.getMinutes();
		var godz= disiaj.getHours();
		if (sekunda<10) sekunda="0"+sekunda;
		if (minuta<10) minuta="0"+minuta;
		document.getElementById("zegar").innerHTML = "Dzisiaj mamy "+godz+":"+minuta+":"+sekunda+"/"+rok;
		
		setTimeout("odliczanie()",1000);
	}

	function enter(){
		var input = document.getElementById("pole").value;
		var keydl = input.length;
		var key=input.charCodeAt(keydl-1);
		alert (key);
		
		document.getElementById("wynik").innerHTML=key;
		if (key=="13") document.getElementById("wynik").innerHTML="enter";
		
	}
	function drukuj(){
 // sprawdź możliwości przeglądarki
   if (!window.print){
      alert("Twoja przeglądarka nie drukuje!")
   return 0;
   }
 window.print(); // jeśli wszystko ok &#8211; drukuj
}
	
	function sprawdz()
	{
		var kod=null;
		var kod	= document.getElementById("pole").value;
		
		var first = kod.substr(0,1);
		
		if (first=="#") kod=kod.substr(1);
		
		if (kod.length!=30) document.getElementById("uwaga").innerHTML="Niewłaściwy kod";
			else document.getElementById("uwaga").innerHTML="kod 30 znaków";
		var warzl=kod.substr(4,4);
		var wargr=kod.substr(8,2);
		var datar =kod.substr(10,3);
		var datam = kod.substr(13,2);
		var datad = kod.substr(15,2);
		var kod2= kod.fontcolor("red");
		var warzl=warzl.fontsize(6);
		var warzl=warzl.fontcolor("magenta");
		var wargr=wargr.fontsize(6);
		var wargr=wargr.fontcolor("magenta");
		document.getElementById("wynik").innerHTML="kod kuponu: "+kod2;
		document.getElementById("kodok").innerHTML="wartość: "+warzl+" zł "+wargr+" gr";
		document.getElementById("waznosc").innerHTML="ważność: 2"+datar+"-"+datam+"-"+datad;
		//var kod="";
		document.getElementById("pole").value="";		
		document.getElementById("tmp").innerHTML=kod2;		
		//alert(kod);
		$("#bcTarget").barcode({code: kod,crc:false}, "int25",{barWidth:2, barHeight:50,posX:300});
		//drukuj();
	}