//method to find the time difference between each stations
//  var timeDifference =    ["04.20", "04.23", "04.26", "04.29", "04.32", "04.35", "04.37", "04.39", "04.42", "04.45", "04.48", "04.51", "04.54", "04.56", "04.59", "05.02", "05.05", "05.15"]

// var m = _.map(timeDifference,function(a, b) {
// 		n = a.split(".");
// 		nextTime = timeDifference[b+1];
// 		if(nextTime !== undefined){
// 			var d = (nextTime.split(".")[1] - n[1])
// 			d=(d<0)?(60+d):d;
// 			return d;
// 		}
// 	});
// m.pop();
// m.unshift(0)

// console.log(m);



//console.log(all[8][0]);
//method to find the time difference between each stations and the starting station
// var sum = 0;
// bac = [];
// for (j = 0; j < all.length; j++) {
// 	var abc = all[j][1];
// 	var sum = 0;
// 	bac[j] = [];


// 	for (var i = 0; i < abc.length; i++) {
// 		prevTime = abc[i + 1] || 0;
// 		sum = sum + prevTime;
// 		bac[j][i] = sum;
// 	};
// 	bac[j].pop();
// 	bac[j].unshift(0);
// }
// alla = ["MASAJJFAST","MASAJJLOCAL","MASAVDLOCAL","MASENRLOCAL","MASGDRPASS","MASGPDLOCAL","MASKBTLOCAL","MASNLRMEMU","MASPONLOCAL","MASPRESLOCAL","MASSPELOCAL","MASTPTYMEMU","MASTRLLOCAL","MASTRTLOCAL","MSBMLMRMEMU","MSBTMLPFAST","MSBTMLPLOCAL","MSBCGLFAST","MSBCGLLOCAL","MSBCJLOCAL","MSBPVLOCAL","MSBTBMLOCAL","MSBVLCYLADIESSPL","MSBVLCYLOCAL","MSBCGLLOCALSUNDAY","MSBTBMLOCALSUNDAY","MSBVLCYLOCALSUNDAY"]



// for (i = 0; i < bac.length; i++) {
// 	document.write(",["+bac[i]+'],["'+alla[i]+'"]<br>');
// }


//method to convert shortcode to json
// y = [["AKAT","Akkampet"],["ABU","Ambattur"],["ANNR","Annanur"],["APB","Anuppambattu"],["AJJ","Arakkonam"],["AKM","Arambakam"],["AIPP","Attipattu Pudu Nagar H"],["AIP","Attippattu"],["AVD","Avadi"],["BBQ","Basin Bridge Jn"],["CGL","Chengalpattu Jn"],["MSB","Chennai Beach Jn"],["MAS","Chennai Central"],["MSC","Chennai Chetpat"],["MS","Chennai Egmore"],["MSF","Chennai Fort"],["MPK","Chennai Park"],["MPKT","Chennai Park Town"],["MCPK","Chepauk"],["MCPT","Chintadaripet"],["CMP","Chromepet"],["DVR","Doravarichattram"],["EGT","Egattur"],["EKM","Ekambarakuppam"],["ELR","Elavur"],["ENR","Ennore"],["GWYR","Greenways Road"],["GDR","Gudur Jn"],["GI","Guduvancheri"],["GDY","Guindy"],["GPD","Gummidipundi"],["HC","Hindu College"],["INDR","Indra Nagar"],["KBT","Kadambattur"],["CJ","Kanchipuram"],["CJE","Kanchipuram East"],["KGZ","Karunguzhi"],["KTBR","Kasturba Nagar"],["KAVM","Kathivakkam"],["CTM","Kattangulatur"],["KVP","Kavaraippettai"],["MKK","Kodambakkam"],["KOTR","Korattur"],["KOK","Korukkupet"],["KTPM","Kotturpuram"],["MLHS","Light House"],["MMK","Madurantakam"],["MBM","Mambalam"],["MAF","Manavur"],["MNDY","Mandaveli"],["MBL","Manubolu"],["MMNK","Maraimalai Nagar Kamarajar"],["MLMR","Melmaruvathur"],["MN","Minambakkam"],["MJR","Minjur"],["MSU","Mosur"],["NG","Nagari"],["NPKM","Nandiyampakkam"],["NTT","Nathapettai"],["NYP","Nayudupeta"],["NLR","Nellore"],["NLS","Nellore South H"],["NEC","Nemilicherry H"],["NBK","Nungambakkam"],["ODUR","Odur"],["OV","Ottivakkam"],["PZA","Palavantangal"],["PYV","Palayasivaram"],["PV","Pallavaram"],["PALR","Palur"],["PWU","Paranur"],["PAB","Pattabiram"],["PRES","Pattabiram E Depot"],["PVM","Pattaravakkam"],["PYA","Pedapariya"],["PER","Perambur"],["PCW","Perambur Carriage Works"],["PEW","Perambur Loco Works"],["PRGL","Perungalalattur"],["PRGD","Perungudi"],["PEL","Polireddipalem"],["PON","Ponneri"],["POI","Ponpadi"],["POTI","Potheri"],["PUDI","Pudi"],["PLMG","Puliyamangalam"],["PTLR","Putlur H"],["PUT","Puttur"],["RDY","Reddipalayam"],["RU","Renigunta Jn"],["SP","Saidapet"],["SPAM","Senji Panambakkam"],["SVR","Sevvapet Road"],["SKL","Singaperumalkoil"],["STM","St Thomas Mount"],["SPE","Sullurupeta"],["TADA","Tada"],["TDK","Taduku"],["TBM","Tambaram"],["TBMS","Tambaram Sanatorium"],["TRMN","Taramani"],["MTMY","Thirumayilai"],["TMLP","Tirumalpur"],["TMVL","Tirumullaivayil"],["TI","Tiruninravur"],["TPTY","Tirupati"],["TLM","Tirusulam"],["TRT","Tiruttani"],["TO","Tiruvalangadu"],["MTCN","Tiruvallikeni"],["TRL","Tiruvallur"],["TYMR","Tiruvanmiyur"],["TVT","Tiruvottiyur"],["TNP","Tondiarpet"],["UPM","Urappakkam"],["VDR","Vandalur"],["VDE","Vedayapalem"],["VLCY","Velachery"],["VKT","Venkatachalam"],["VKZ","Venkatanarasimharajuvaripeta"],["VGA","Vepagunta"],["VEU","Veppampattu"],["VLK","Villivakkam"],["VB","Villiyambakkam"],["VOC","Voc Nagar"],["VJM","Vyasarpadi Jeeva"],["WJ","Walajabad"],["WCN","Wimco Nagar"]];
// var y={};x.forEach(function(v,i){var z={};z.short=v[0];z.full=v[1];y[v[0]]=z;})
// g = JSON.stringify(y)






//console.log(data);















