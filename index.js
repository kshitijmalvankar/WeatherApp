var c = 0;
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var $ = function (id) {
    return document.getElementById(id);
}

function getUrl() {
    if (c == 0) {
        var unit = "&#8451";
        var unit2 = " m/s"
        const location = $("location").value;
        const location2 = $("location2").value;
        const location3 = $("location3").value;
        const apikey = "4975d2ae51f4c67b63fbdf9fc2ed5e05";
        const urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apikey + "&mode=xml&units=metric";
        const urlCompare1 = "https://api.openweathermap.org/data/2.5/weather?q=" + location3 + "&appid=" + apikey + "&mode=xml&units=metric";
        const urlCompare2 = "https://api.openweathermap.org/data/2.5/weather?q=" + location2+ "&appid=" + apikey + "&mode=xml&units=metric";

       
        const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&mode=xml&appid=" + apikey + "&units=metric";
        getCurrent(urlCurrent, unit,unit2);
        getForecast(urlForecast, unit, unit2);
        compareCity1(urlCompare1, unit, unit2);
        compareCity2(urlCompare2,unit, unit2);

    } else if (c == 1) {
        var unit = "&#8457";
        var unit2 = " Km/s"

        const location = $("location").value;
        const location2 = $("location2").value;
        const location3 = $("location3").value;

        const apikey = "4975d2ae51f4c67b63fbdf9fc2ed5e05";
        const urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apikey + "&mode=xml&units=imperial";
        const urlCompare1 = "https://api.openweathermap.org/data/2.5/weather?q=" + location3 + "&appid=" + apikey + "&mode=xml&units=imperial";
        const urlCompare2 = "https://api.openweathermap.org/data/2.5/weather?q=" + location2 + "&appid=" + apikey + "&mode=xml&units=imperial";
        
        const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&mode=xml&appid=" + apikey + "&units=imperial";
        getCurrent(urlCurrent, unit, unit2);
        getForecast(urlForecast, unit, unit2);
        compareCity1(urlCompare1, unit, unit2);
        compareCity2(urlCompare2,unit, unit2);
    }
}

function changeMetrics() {

    if (c == 0) {
        c = 1;
        getUrl();
    } else if (c == 1) {
        c = 0;
        getUrl();
    }


}

function getCurrent(urlCurrent, unit, unit2) {

    var xhttp = new XMLHttpRequest();
    if (xhttp) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var url = "http://openweathermap.org/img/wn/";
                var data = this.responseXML;
                console.log(data);
                var city = data.getElementsByTagName("city")[0];
                var cityn = city.getAttribute("name");
                console.log(data);
                $("cityname").innerHTML = cityn;
                $("c1cityname").innerHTML = cityn;
                $("c2cityname").innerHTML = cityn;
                $("c3cityname").innerHTML = cityn;
                $("c4cityname").innerHTML = cityn;

                var tem = data.getElementsByTagName("temperature")[0];
                var temp = tem.getAttribute("value");
                $("temperature").innerHTML = temp + "<span>" + unit + "</span>";



                var humid = data.getElementsByTagName("humidity")[0];
                var humid2 = humid.getAttribute("value");
                var humid3 = humid.getAttribute("unit");
                var humid4 = "Humidity: " + humid2 + " " + humid3;
                $("humidity").innerHTML = humid4;


                var wind = data.getElementsByTagName("wind")[0];
                var windchild = wind.childNodes[0];
                var windspeed = windchild.getAttribute("value");
                var winddes = windchild.getAttribute("name");
                var winddir = wind.childNodes[2];
                var windir = winddir.getAttribute("name");

                $("wind").innerHTML = "Wind: " + windspeed + unit2;

                $("winddes").innerHTML = winddes;

                $("winddir").innerHTML = windir;



                var clouds = data.getElementsByTagName("clouds")[0];
                var clouddes = clouds.getAttribute("name");
                $("clouds").innerHTML = clouddes;




                var sym = data.getElementsByTagName("weather")[0];
                var symb = sym.getAttribute("icon");
                console.log($("symbol"));
                var imgUrl = url + symb + ".png";
                $("symbol").setAttribute("src", imgUrl);



            }
        }
        xhttp.open("GET", urlCurrent, true);
        xhttp.send();
    }
}

function compareCity1(urlCompare, unit, unit2) {
    var xhttp = new XMLHttpRequest();
    if (xhttp) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var url = "http://openweathermap.org/img/wn/";
                var data = this.responseXML;
                console.log(data);
                var city = data.getElementsByTagName("city")[0];
                var cityn = city.getAttribute("name");

                $("cm2cityname").innerHTML = cityn;

                var tem = data.getElementsByTagName("temperature")[0];
                var temp = tem.getAttribute("value");
                $("cm2temperature").innerHTML = temp + "<span>" + unit + "</span>";



                var humid = data.getElementsByTagName("humidity")[0];
                var humid2 = humid.getAttribute("value");
                var humid3 = humid.getAttribute("unit");
                var humid4 = "Humidity: " + humid2 + " " + humid3;
                $("cm2humidity").innerHTML = humid4;


                var wind = data.getElementsByTagName("wind")[0];
                var windchild = wind.childNodes[0];
                var windspeed = windchild.getAttribute("value");
                var winddes = windchild.getAttribute("name");
                var winddir = wind.childNodes[2];
                var windir = winddir.getAttribute("name");

                $("cm2wind").innerHTML = "Wind: " + windspeed + unit2;

                $("cm2winddes").innerHTML = winddes;

                $("cm2winddir").innerHTML = windir;



                var clouds = data.getElementsByTagName("clouds")[0];
                var clouddes = clouds.getAttribute("name");
                $("cm2clouds").innerHTML = clouddes;




                var sym = data.getElementsByTagName("weather")[0];
                var symb = sym.getAttribute("icon");
                console.log($("symbol"));
                var imgUrl = url + symb + ".png";
                $("cm2symbol").setAttribute("src", imgUrl);



            }
        }
        xhttp.open("GET", urlCompare, true);
        xhttp.send();
    }


}


function compareCity2(urlCompare,unit,unit2){
    var xhttp = new XMLHttpRequest();
    if (xhttp) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var url = "http://openweathermap.org/img/wn/";
                var data = this.responseXML;
                console.log(data);
                var city = data.getElementsByTagName("city")[0];
                var cityn = city.getAttribute("name");

                $("cm1cityname").innerHTML = cityn;

                var tem = data.getElementsByTagName("temperature")[0];
                var temp = tem.getAttribute("value");
                $("cm1temperature").innerHTML = temp + "<span>" + unit + "</span>";



                var humid = data.getElementsByTagName("humidity")[0];
                var humid2 = humid.getAttribute("value");
                var humid3 = humid.getAttribute("unit");
                var humid4 = "Humidity: " + humid2 + " " + humid3;
                $("cm1humidity").innerHTML = humid4;


                var wind = data.getElementsByTagName("wind")[0];
                var windchild = wind.childNodes[0];
                var windspeed = windchild.getAttribute("value");
                var winddes = windchild.getAttribute("name");
                var winddir = wind.childNodes[2];
                var windir = winddir.getAttribute("name");

                $("cm1wind").innerHTML = "Wind: " + windspeed +unit2;

                $("cm1winddes").innerHTML = winddes;

                $("cm1winddir").innerHTML = windir;



                var clouds = data.getElementsByTagName("clouds")[0];
                var clouddes = clouds.getAttribute("name");
                $("cm1clouds").innerHTML = clouddes;




                var sym = data.getElementsByTagName("weather")[0];
                var symb = sym.getAttribute("icon");
                console.log($("symbol"));
                var imgUrl = url + symb + ".png";
                $("cm1symbol").setAttribute("src", imgUrl);



            }
        }
        xhttp.open("GET", urlCompare, true);
        xhttp.send();
    }

}

function getForecast(urlForecast, unit, unit2) {
    console.log("hhn");


    var xhttp = new XMLHttpRequest();
    if (xhttp) {
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                var forecast = this.responseXML;
                console.log(forecast);
                var longitude = $("longitude");

                var long = forecast.getElementsByTagName("weatherdata")[0].childNodes[0].childNodes[4].getAttribute("longitude");
                var lat = forecast.getElementsByTagName("weatherdata")[0].childNodes[0].childNodes[4].getAttribute("latitude");
                var latlong = "Longitude: " + long + " Latitude: " + lat;
                longitude.innerHTML = latlong;
                var Forecast = forecast.getElementsByTagName("weatherdata")[0].childNodes[4].childNodes;

                var ForecastArray = {};

                for (var i = 0; i < Forecast.length; i++) {
                    ForecastArray[i] = {};
                    ForecastArray[i]["from"] = new Date(Forecast[i].getAttribute("from"));
                    ForecastArray[i]["weather"] = Forecast[i].childNodes[0].getAttribute("name");
                    ForecastArray[i]["wind"] = Forecast[i].childNodes[3].getAttribute("mps");
                    ForecastArray[i]["max_temp"] = Forecast[i].childNodes[4].getAttribute("max");
                    ForecastArray[i]["min_temp"] = Forecast[i].childNodes[4].getAttribute("min");
                    ForecastArray[i]["pressure"] = Forecast[i].childNodes[5].getAttribute("value");
                }

                console.log(ForecastArray);
                var day = new Date();
                var day1 = new Date();
                day1.setDate(day.getDate() + 1);
                var day2 = new Date();
                day2.setDate(day1.getDate() + 1);
                var day3 = new Date();
                day3.setDate(day2.getDate() + 1);
                var day4 = new Date();
                day4.setDate(day3.getDate() + 1);
                var day5 = new Date();
                day5.setDate(day4.getDate() + 1);

                var month1 = "Tomorrow";
                var month2 = "Day After";
                var month3 = day3.getDate() + " " + months[day3.getMonth()];
                console.log(month3);

                var month4 = day4.getDate() + " " + months[day4.getMonth()];
                var month5 = day5.getDate() + " " + months[day5.getMonth()];


                var day1max = 0;
                var day1min = 0;
                var day1count = 0;
                var day1summary;
                var day1wind;
                var day2max = 0;
                var day2min = 0;
                var day2count = 0;
                var day2summary;
                var day2wind;
                var day3max = 0;
                var day3min = 0;
                var day3count = 0;
                var day3summary;
                var day3wind;
                var day4max = 0;
                var day4min = 0;
                var day4count = 0;
                var day4summary;
                var day4wind;
                var day5max = 0;
                var day5min = 0;
                var day5count = 0;
                var day5summary;
                var day5wind;


                //LOOP FOR DAY 1
                for (var i = 0; i < 39; i++) {

                    if (ForecastArray[i]["from"].getDate() == day1.getDate()) {
                        day1count++;
                        day1max = day1max + parseFloat(ForecastArray[i]["max_temp"]);
                        day1min = day1min + parseFloat(ForecastArray[i]["min_temp"])
                        day1summary = ForecastArray[i]["weather"];
                        day1wind = ForecastArray[i]["wind"];

                    }

                }
                day1max = day1max / day1count;
                day1min = day1min / day1count;

                //LOOP FOR DAY 2
                for (var i = 0; i < 39; i++) {

                    if (ForecastArray[i]["from"].getDate() == day2.getDate()) {
                        day2count++;
                        day2max = day2max + parseFloat(ForecastArray[i]["max_temp"]);
                        day2min = day2min + parseFloat(ForecastArray[i]["min_temp"])
                        day2summary = ForecastArray[i]["weather"];
                        day2wind = ForecastArray[i]["wind"];


                    }

                }
                day2max = day2max / day2count;
                day2min = day2min / day2count;
                //LOOP FOR DAY 3
                for (var i = 0; i < 39; i++) {

                    if (ForecastArray[i]["from"].getDate() == day3.getDate()) {
                        day3count++;
                        day3max = day3max + parseFloat(ForecastArray[i]["max_temp"]);
                        day3min = day3min + parseFloat(ForecastArray[i]["min_temp"])
                        day3summary = ForecastArray[i]["weather"];
                        day3wind = ForecastArray[i]["wind"];


                    }

                }
                day3max = day3max / day3count;
                console.log(day3max);
                day3min = day3min / day3count;

                //LOOP FOR DAY 4
                for (var i = 0; i < 39; i++) {

                    if (ForecastArray[i]["from"].getDate() == day4.getDate()) {
                        day4count++;
                        day4max = day4max + parseFloat(ForecastArray[i]["max_temp"]);
                        day4min = day4min + parseFloat(ForecastArray[i]["min_temp"])
                        day4summary = ForecastArray[i]["weather"];
                        day4wind = ForecastArray[i]["wind"];


                    }

                }
                day4max = day4max / day4count;
                day4min = day4min / day4count;


                //LOOP FOR DAY 5
                for (var i = 0; i < 39; i++) {

                    if (ForecastArray[i]["from"].getDate() == day5.getDate()) {
                        day5count++;
                        day5max = day5max + parseFloat(ForecastArray[i]["max_temp"]);
                        day5min = day5min + parseFloat(ForecastArray[i]["min_temp"])
                        day5summary = ForecastArray[i]["weather"];
                        day5wind = ForecastArray[i]["wind"];


                    }

                }
                day5max = day5max / day5count;
                day5min = day5min / day5count;

                temphigh = [day1max, day2max, day3max, day4max, day5max];
                templow = [day1min, day2min, day3min, day4min, day5min];
                summary = [day1summary, day2summary, day3summary, day4summary, day5summary];
                wind = [day1wind, day2wind, day3wind, day4wind, day5wind];
                monthArray = [month1, month2, month3, month4, month5];


                for (i = 1; i < 5; i++) {
                    $("c" + i + "high").innerHTML = Math.round(temphigh[i - 1] * 10) / 10 + "<span>" + unit + "</span>";
                    $("c" + i + "low").innerHTML = "Low :" + Math.round(templow[i - 1] * 10) / 10;
                    $("c" + i + "wind").innerHTML = "Wind :" + wind[i - 1] + unit2;
                    //         $("c"+i+"icon").innerHTML = icon[i];
                    $("c" + i + "summary").innerHTML = summary[i - 1];
                    $("c" + i + "longitude").innerHTML = latlong;
                    $("c" + i + "date").innerHTML = monthArray[i - 1]
                }


                google.charts.load('current', {
                    packages: ['corechart', 'bar']
                });
                google.charts.load('current', {
                    'packages': ['line']
                });
                google.charts.setOnLoadCallback(drawlChart);

                function drawlChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('datetime', 'Time');
                    data.addColumn('number', 'Temperature');
                    var lineChart = [];
                    for (let k = 0; k < 8; k++) {
                        var year = new Date(ForecastArray[k]["from"]).getFullYear();
                        var monthval = new Date(ForecastArray[k]["from"]).getMonth();
                        var dayval = new Date(ForecastArray[k]["from"]).getDate();
                        var hourval = new Date(ForecastArray[k]["from"]).getHours();
                        var x1 = new Date(year, monthval, dayval, hourval);
                        var x2 = parseFloat(ForecastArray[k]["max_temp"]);

                        lineChart.push([x1, x2]);
                    }
                    data.addRows(lineChart);
                    var options = {
                        hAxis: {
                            title: 'Time',
                            format: 'HH:mm'
                        },
                        title: 'Max Temperature vs Time',
                        vAxis: {
                            title: 'Max Temperature'
                        },
                        'width': 700,
                        'height': 450,
                        backgroundColor: {
                            fill: 'transparent'
                        },
                        legend: 'none'
                    };
                    var lChart = new google.visualization.AreaChart(document.getElementById('chart1'));
                    lChart.draw(data, options);

                }


                google.charts.setOnLoadCallback(drawbChart);

                function drawbChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('datetime', 'Time');
                    data.addColumn('number', 'Humidity');
                    var barChart = [];
                    for (let k = 0; k < 8; k++) {
                        var year = new Date(ForecastArray[k]["from"]).getFullYear();
                        var monthval = new Date(ForecastArray[k]["from"]).getMonth();
                        var dayval = new Date(ForecastArray[k]["from"]).getDate();
                        var hourval = new Date(ForecastArray[k]["from"]).getHours();
                        var minuteval = new Date(ForecastArray[k]["from"]).getMinutes();
                      
                        var y1 = new Date(year, monthval, dayval, hourval, minuteval);
                        var y2 = parseFloat(ForecastArray[k]["pressure"]);

                        barChart.push([y1, y2]);
                    }
                    data.addRows(barChart);
                    var options = {
                        title: "Pressure : 24 Hours (pHa)",
                        backgroundColor: {
                            fill: 'transparent'
                        },
                        'width': 700,
                        'height': 450,
                        hAxis: {
                            format: 'HH:mm',
                            title: 'Time'
                        },
                        vAxis: {
                            title: 'Pressure(pHa)'
                        },

                        bar: {
                            groupWidth: "55%"
                        },
                        legend: {
                            position: "none"
                        },
                    };
                    var bChart = new google.visualization.ColumnChart(document.getElementById("chart2"));
                    bChart.draw(data, options);
                }



            }
        }

    }
    xhttp.open("GET", urlForecast, true);
    xhttp.send();

}


window.onload = function () {
    this.getUrl();

}



function openPage(elmnt, evt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
        tablinks[i].classList.remove('selector');
    }
    document.getElementById(elmnt).style.display = 'block';
    evt.currentTarget.className += " active";
    evt.currentTarget.className += " selector";

    if( $("compare").style.display == "block")
    {
        $("search").style.display = "none";
    }
    else
    {
        $("search").style.display = "block";

    }
    
}