var request = require('request');
var cheerio = require('cheerio');

var fs = require('fs');
var stream = fs.createWriteStream("write1.json", {flags: 'w'});

var url = [];
	url[0]="http://dummy.in/suburban/chennai//trains-between-stations/MSB-Chennai_Beach_Jn-to-MSF-Chennai_Fort";
	url[1]="http://dummy.in/suburban/chennai//trains-between-stations/MSF-Chennai_Fort-to-MSB-Chennai_Beach_Jn";
	url[2]="http://dummy.in/suburban/chennai//trains-between-stations/MSB-Chennai_Beach_Jn-to-RPM-Royapuram";
	url[3]="http://dummy.in/suburban/chennai//trains-between-stations/RPM-Royapuram-to-MSB-Chennai_Beach_Jn";
	url[4]="http://dummy.in/suburban/chennai//trains-between-stations/MAS-Chennai_Central-to-BBQ-Basin_Bridge_Jn";
	url[5]="http://dummy.in/suburban/chennai//trains-between-stations/BBQ-Basin_Bridge_Jn-to-MAS-Chennai_Central";




function inMins(c){
	var d =[];
	return d= c.toString().split('.');
}
var fx = 0;
var ob = {};
var totalURL = url.length;

url.forEach(function(v,i){
	request(v,function(err, resp, body){
			if (err) {throw err}
			$ = cheerio.load(body);
			fx++;

			var row = $(".table").find("tr");
			row.each(function(i,v){
				if(i>0){
					//if(i==1){
					var trainName = $(this).find('td').eq(1).text().replace(/\s+/g,'');
					var weekName = 	$(this).find('td').eq(7).text().replace(/\s+/g,'');
						//weekName = (weekName === 'Su') ? 'sunday' : weekName;
					var fullName = trainName+weekName;
					var time = inMins($(this).find('td').eq(4).text());

					if(ob[fullName]==undefined){
						ob[fullName] = [];
						ob[fullName].push(time);
					}
					else{
						ob[fullName].push(time);
					}

				}
			})
			if(fx===totalURL){
				stream.write(JSON.stringify(ob));
			}


	})
})







