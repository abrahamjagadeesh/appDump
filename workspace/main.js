//convert decimal time
function inMins(c) {
	var d = [];
	d = c.toString().split('.');
    return d;
}

//convert array of decimal time to array

function convertTimeToArray(arr){
	var newarr=[];
	for(var i = arr.length - 1; i >= 0; i--) {
		newarr[i] = inMins(arr[i]);
	};
	return newarr;
}

function startingTimeOfTrainsFromThisStation(val,timetaken) {
	mins = parseInt(val[1]);
	hours = parseInt(val[0]);
	newMins = mins + timetaken;

	//console.log(mins +"||"+ hours +"||"+ timetaken);

	if (newMins > 59) {
		//console.log("> 59");
		val[1] = newMins - 60;
		val[0] = hours + 1;
	} else {
		//console.log("less 59");
		val[1] = mins + timetaken;
		val[0] = hours;
	}
	return val;
}

function calcCurrentTime() {
	currentTime = [],
	wholeDate = new Date;
	currentTime[0] = wholeDate.getHours(); // current hour
	currentTime[1] = wholeDate.getMinutes(); // current mins
	currentTime[2] = wholeDate.getDay(); // current day
	return currentTime;
}

calcCurrentTime();
var day = function(){
	if(currentTime[2]==0){
		return 'Su';
	}
	else{
		return 'weekday';
	}
};





//all = [MASAJJFAST,MASAJJLOCAL,MASAVDLOCAL,MASENRLOCAL,MASGDRPASS,MASGPDLOCAL,MASKBTLOCAL,MASNLRMEMU,MASPONLOCAL,MASPRESLOCAL,MASSPELOCAL,MASTPTYMEMU,MASTRLLOCAL,MASTRTLOCAL,MSBMLMRMEMU,MSBTMLPFAST,MSBTMLPLOCAL,MSBCGLFAST,MSBCGLLOCAL,MSBCJLOCAL,MSBPVLOCAL,MSBTBMLOCAL,MSBVLCYLADIESSPL,MSBVLCYLOCAL,MSBCGLLOCALSUNDAY,MSBTBMLOCALSUNDAY,MSBVLCYLOCALSUNDAY];
// if(currentTime[2] == 0){//if sunday
// 	all.splice(17,7);//delete non sunday trains
// }
// else{
// 	all.splice(24,3);//delete sunday trains
// }

var all = data;

// returns the indexes of the trains that stops in the given station
function trainsStopInThisStation(source,destination) {

	//console.log(day)
	var startingTimeOfALLMatchedTrain = [];
	var nextTrains = [];
	
	var todayTrains = all.filter(function(train){
		if(day()=="Su"){
			return (train.runday[0]=="Su" || train.runday[0]=="Daily");
		}
		else{
			return (train.runday[0]=="M" || train.runday[0]=="Daily");
		}
	})
	
	//console.log(todayTrains)

	for(i = 0; i < todayTrains.length; i++) {
		var thisTrain = todayTrains[i],
			stationsThatTrainCross = thisTrain.stations, // all the stations that this train cross
			timeDifferencebtwStaionsAndSource = thisTrain.timeDifferenceFromSource;
			startingTimeFromSource = thisTrain.startingTime;
			thisTrainName = thisTrain.train;
			
			

			indexOfSourceStation = stationsThatTrainCross.indexOf(source);// index of the station that this train cross
			indexOfDestinationStaion = stationsThatTrainCross.indexOf(destination);

			if(indexOfSourceStation < indexOfDestinationStaion){
				if (indexOfSourceStation >= 0 && indexOfDestinationStaion >=0) {
				timeTakentoReachHere = timeDifferencebtwStaionsAndSource[indexOfSourceStation];//for each train -> find taken to reach this station from source.
				//var ctta = convertTimeToArray(startingTimeFromSource); // convert decimal time to array 3.25 = ['3','25']
				//ctta contains the time in array format; the time mentioned here is the starting time of this train from source
				//next for loop will find the starting time of each train in the current/given station.

				var ctta = startingTimeFromSource; // no need to convert to array, as it is already in converted format

				for(var ii=0;ii<ctta.length;ii++){
					var stta = startingTimeOfTrainsFromThisStation(ctta[ii],timeTakentoReachHere);
					startingTimeOfALLMatchedTrain.push(stta);
					//filter all trains to only next trains
					var tr = {};
					if((stta[0] == currentTime[0] && stta[1] > currentTime[1]) || stta[0] > currentTime[0]){
						var hours = stta[0]; var mins = stta[1];
						if(hours==0){
							hours = 24;
						}
						var totalMins = (hours*60)+mins;
						
						tr.newTrainName = thisTrainName;
						tr.newstarting = stta;
						tr.totalTime = totalMins;
						
						nextTrains.push(tr);
					}
				}

			//console.log(ctta);
			//matchedTrains.push(ctta);

		}
			}

	}
	//console.log(matchedTrains);
	//console.log(startingTimeOfALLMatchedTrain);
	//console.log((nextTrains.sort())[0]);
	
	nextTrains.sort(function(a,b){
		return a.totalTime-b.totalTime;
	})
	
	// nextTrains.sort(function(a, b){
			// //document.write(a+"||"+b+"||"+'true');	
				// h1 = a.newstarting[0];
				// h2 = b.newstarting[0];
				// m1 = a.newstarting[1];
				// m2 = b.newstarting[1];
				 // if((m1 > m2 && h1 > h2)||(m1 < m2 && h1 > h2)){
			// //console.log(h1+"||"+h2+"||"+'true');				
			// return 1;
				 // }
				 // else if(m1 < m2 && h1 < h2){
			// //console.log(m1+"||"+m2+"||"+'false');				
			// return 0;
				 // }
				 // else if(h1==h2 && m1<m2){
					// return 0;
				 // }
				 // else if(h1==h2&&m1>m2){
					// return 1;
				 // }
				 // else{
				// //	console.log(m1+"||"+m2+"||"+'else');	
					// return 0;
				 // }
// })
	
	
		// nextTrains.sort(function(a, b){
			// document.write(a+"||"+b+"||"+'true');	
				// h1 = a.newstarting[0];
				// h2 = b.newstarting[0];
				// m1 = a.newstarting[1];
				// m2 = b.newstarting[1];
				 // if((m1 > m2 && h1 > h2)||(m1 < m2 && h1 > h2)){
			// //console.log(h1+"||"+h2+"||"+'true');				
			// return 1;
				 // }
				 // else if(m1 < m2 && h1 < h2){
			// //console.log(m1+"||"+m2+"||"+'false');				
			// return 0;
				 // }
				 // else if(h1==h2 && m1<m2){
					// return 0;
				 // }
				 // else if(h1==h2&&m1>m2){
					// return 1;
				 // }
				 // else{
				// //	console.log(m1+"||"+m2+"||"+'else');	
					// return 0;
				 // }
// })
	
	//console.log(nextTrains);
	
	

	//return (nextTrains)[0];
	return {
		nextTrains : nextTrains,
		nextTrain : nextTrains[0]
	}
}

//trainsStopInThisStation('MSB','TBM');

var shortcodes = [["AKAT","Akkampet"],["ABU","Ambattur"],["ANNR","Annanur"],["APB","Anuppambattu"],["AJJ","Arakkonam"],["AKM","Arambakam"],["AIPP","Attipattu Pudu Nagar H"],["AIP","Attippattu"],["AVD","Avadi"],["BBQ","Basin Bridge Jn"],["CGL","Chengalpattu Jn"],["MSB","Chennai Beach Jn"],["MAS","Chennai Central"],["MSC","Chennai Chetpat"],["MS","Chennai Egmore"],["MSF","Chennai Fort"],["MPK","Chennai Park"],["MPKT","Chennai Park Town"],["MCPK","Chepauk"],["MCPT","Chintadaripet"],["CMP","Chromepet"],["DVR","Doravarichattram"],["EGT","Egattur"],["EKM","Ekambarakuppam"],["ELR","Elavur"],["ENR","Ennore"],["GWYR","Greenways Road"],["GDR","Gudur Jn"],["GI","Guduvancheri"],["GDY","Guindy"],["GPD","Gummidipundi"],["HC","Hindu College"],["INDR","Indra Nagar"],["KBT","Kadambattur"],["CJ","Kanchipuram"],["CJE","Kanchipuram East"],["KGZ","Karunguzhi"],["KTBR","Kasturba Nagar"],["KAVM","Kathivakkam"],["CTM","Kattangulatur"],["KVP","Kavaraippettai"],["MKK","Kodambakkam"],["KOTR","Korattur"],["KOK","Korukkupet"],["KTPM","Kotturpuram"],["MLHS","Light House"],["MMK","Madurantakam"],["MBM","Mambalam"],["MAF","Manavur"],["MNDY","Mandaveli"],["MBL","Manubolu"],["MMNK","Maraimalai Nagar Kamarajar"],["MLMR","Melmaruvathur"],["MN","Minambakkam"],["MJR","Minjur"],["MSU","Mosur"],["NG","Nagari"],["NPKM","Nandiyampakkam"],["NTT","Nathapettai"],["NYP","Nayudupeta"],["NLR","Nellore"],["NLS","Nellore South H"],["NEC","Nemilicherry H"],["NBK","Nungambakkam"],["ODUR","Odur"],["OV","Ottivakkam"],["PZA","Palavantangal"],["PYV","Palayasivaram"],["PV","Pallavaram"],["PALR","Palur"],["PWU","Paranur"],["PAB","Pattabiram"],["PRES","Pattabiram E Depot"],["PVM","Pattaravakkam"],["PYA","Pedapariya"],["PER","Perambur"],["PCW","Perambur Carriage Works"],["PEW","Perambur Loco Works"],["PRGL","Perungalalattur"],["PRGD","Perungudi"],["PEL","Polireddipalem"],["PON","Ponneri"],["POI","Ponpadi"],["POTI","Potheri"],["PUDI","Pudi"],["PLMG","Puliyamangalam"],["PTLR","Putlur H"],["PUT","Puttur"],["RDY","Reddipalayam"],["RU","Renigunta Jn"],["SP","Saidapet"],["SPAM","Senji Panambakkam"],["SVR","Sevvapet Road"],["SKL","Singaperumalkoil"],["STM","St Thomas Mount"],["SPE","Sullurupeta"],["TADA","Tada"],["TDK","Taduku"],["TBM","Tambaram"],["TBMS","Tambaram Sanatorium"],["TRMN","Taramani"],["MTMY","Thirumayilai"],["TMLP","Tirumalpur"],["TMVL","Tirumullaivayil"],["TI","Tiruninravur"],["TPTY","Tirupati"],["TLM","Tirusulam"],["TRT","Tiruttani"],["TO","Tiruvalangadu"],["MTCN","Tiruvallikeni"],["TRL","Tiruvallur"],["TYMR","Tiruvanmiyur"],["TVT","Tiruvottiyur"],["TNP","Tondiarpet"],["UPM","Urappakkam"],["VDR","Vandalur"],["VDE","Vedayapalem"],["VLCY","Velachery"],["VKT","Venkatachalam"],["VKZ","Venkatanarasimharajuvaripeta"],["VGA","Vepagunta"],["VEU","Veppampattu"],["VLK","Villivakkam"],["VB","Villiyambakkam"],["VOC","Voc Nagar"],["VJM","Vyasarpadi Jeeva"],["WJ","Walajabad"],["WCN","Wimco Nagar"]];
// var code = ["MAS","BBQ","PER","VLK","ABU","TI","TRL","KBT","TO","AJJ","VJM","PCW","PEW","KOTR","PVM","TMVL","ANNR","AVD","HC","PAB","NEC","VEU","SVR","PTLR","EGT","SPAM","MAF","MSU","PLMG","PRES","TRT","POI","VKZ","NG","EKM","VGA","PUT","TDK","PUDI","RU","TPTY","KOK","TNP","VOC","TVT","WCN","KAVM","ENR","AIPP","AIP","NPKM","MJR","APB","PON","KVP","GPD","ELR","AKM","TADA","SPE","AKAT","PEL","DVR","NYP","PYA","ODUR","GDR","MBL","VKT","VDE","NLS","NLR","MSB","MSF","MPK","MS","MBM","GDY","CMP","TBM","PRGL","VDR","UPM","GI","POTI","CTM","MMNK","SKL","PWU","CGL","MSC","NBK","MKK","SP","STM","PZA","MN","TLM","PV","TBMS","CJ","OV","KGZ","MMK","MLMR","PALR","WJ","CJE","TMLP","RDY","VB","PYV","NTT","MPKT","MCPT","MCPK","MTCN","MLHS","MTMY","MNDY","GWYR","KTPM","KTBR","INDR","TYMR","TRMN","PRGD","VLCY"];
// var detail = ["Chennai Central","Basin Bridge Jn","Perambur","Villivakkam","Ambattur","Tiruninravur","Tiruvallur","Kadambattur","Tiruvalangadu","Arakkonam","Vyasarpadi Jeeva","Perambur Carriage Works","Perambur Loco Works","Korattur","Pattaravakkam","Tirumullaivayil","Annanur","Avadi","Hindu College","Pattabiram","Nemilicherry H","Veppampattu","Sevvapet Road","Putlur H","Egattur","Senji Panambakkam","Manavur","Mosur","Puliyamangalam","Pattabiram E Depot","Tiruttani","Ponpadi","Venkatanarasimharajuvaripeta","Nagari","Ekambarakuppam","Vepagunta","Puttur","Taduku","Pudi","Renigunta Jn","Tirupati","Korukkupet","Tondiarpet","Voc Nagar","Tiruvottiyur","Wimco Nagar","Kathivakkam","Ennore","Attipattu Pudu Nagar H","Attippattu","Nandiyampakkam","Minjur","Anuppambattu","Ponneri","Kavaraippettai","Gummidipundi","Elavur","Arambakam","Tada","Sullurupeta","Akkampet","Polireddipalem","Doravarichattram","Nayudupeta","Pedapariya","Odur","Gudur Jn","Manubolu","Venkatachalam","Vedayapalem","Nellore South H","Nellore","Chennai Beach Jn","Chennai Fort","Chennai Park","Chennai Egmore","Mambalam","Guindy","Chromepet","Tambaram","Perungalalattur","Vandalur","Urappakkam","Guduvancheri","Potheri","Kattangulatur","Maraimalai Nagar Kamarajar","Singaperumalkoil","Paranur","Chengalpattu Jn","Chennai Chetpat","Nungambakkam","Kodambakkam","Saidapet","St Thomas Mount","Palavantangal","Minambakkam","Tirusulam","Pallavaram","Tambaram Sanatorium","Kanchipuram","Ottivakkam","Karunguzhi","Madurantakam","Melmaruvathur","Palur","Walajabad","Kanchipuram East","Tirumalpur","Reddipalayam","Villiyambakkam","Palayasivaram","Nathapettai","Chennai Park Town","Chintadaripet","Chepauk","Tiruvallikeni","Light House","Thirumayilai","Mandaveli","Greenways Road","Kotturpuram","Kasturba Nagar","Indra Nagar","Tiruvanmiyur","Taramani","Perungudi","Velachery"];




// //calculate the next train in mins.
// var nextTrainInMins = function(a,b) {
// 	c = calcCurrentTime();

// 	var subMins = b - c[1];
// 	var subHours = a - c[0];
// 	var howManyMins = 0;

// 	if (subMins < 0) {
// 		howManyMins = ((subHours - 1) * 60) + (60 + b) - b;
// 	} else {
// 		howManyMins = subMins + (subHours * 60);
// 	}
// 	if(howManyMins > 59){
// 		howManyMins = parseInt((howManyMins/60),10) +" hours " + (howManyMins%60) + " minutes";
// 	}
// 	else if(howManyMins == 0){
// 		howManyMins = howManyMins;
// 	}
// 	else{
// 		howManyMins = howManyMins +" minutes"
// 	}
// 	console.log(howManyMins);

// };

// //nextTrainInMins(21,40);




