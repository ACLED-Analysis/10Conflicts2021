function customMapPosition(location1, location2, breakpoint) {
    let screenWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth);

    if (breakpoint <= screenWidth) {
        /*console.log('first one')*/
        return location1;
    } else if (breakpoint > screenWidth) {
        return location2;
    } else {
        location1
    }

}

var config = {
//Header + Title
   
    style: 'mapbox://styles/acled/ckl70720f5u6w17ptcyun8r8h',
    accessToken: 'pk.eyJ1IjoiYWNsZWQiLCJhIjoiY2trZDBxZ3RkMDB6YTJvbXFoM2EwdjA5ciJ9.eJjT35uSI5eB3ffZW1VnaA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: '<h1 style="background-color: white; opacity: 0.9;font-size:200px; font-style:bold; margin-top:25px; margin-bottom:0px; color: black; line-height: 200px;">10 Conflicts</h1> <h1 style="font-size:80px; margin-left:200px; text-align:center; padding-right:20px; background-color: #C95200; font-style:italic; margin-top:5px; line-height:100px; margin-bottom:0px;">to Worry About in 2021</h1>',
    subtitle: '<center>As political violence continues to erupt worldwide, ACLED reports on 10 conflicts worth watching in 2021.<br><i>For best viewing conditions, please view the map fullscreen in at least 1024x768 resolution on a 13" display or greater</i></center>',
    byline: 'Produced by ACLED Research Analyst Josh Satre with assistance from Curtis Goos and Adam Miller. <i/>Based on ACLED report <a href="https://acleddata.com/2021/02/02/ten-conflicts-to-worry-about-in-2021/">10 Conflicts to Worry About in 2021</a></i>',
    footer: 'Source: © ACLED 2021 Data can be found here: <a href="www.acleddata.com">www.acleddata.com</a> This is based on the ACLED report located here:<a href="https://acleddata.com/2021/02/02/ten-conflicts-to-worry-about-in-2021/">https://acleddata.com/2021/02/02/ten-conflicts-to-worry-about-in-2021/</a>',

 // Sections begin

    chapters: [
    
 //world-intro
        {
            id: 'world-intro',
            alignment: 'left',
            hidden: false,
            title: '<span style="country-heading"><center>Introduction</center></span>',
            description: '<center>Conflict levels in 2020 slightly decreased from 2019 in all regions except Africa. Still, many conflicts continued unabated despite the global COVID-19 pandemic, and several took on new dimensions as actors responded to the health crisis. Because the pandemic is a unique development, we expect global conflict levels, locations, and agents to increase significantly in 2021 — ultimately to a higher point than both 2019 and 2020.</center>',
            location: {
                center: [14.22310, 21.33435],
                zoom: 1.46,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'acled-2020-allevents',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'acled-2020-allevents',
                    opacity: 0
                },            
            ],
        },
//world-data2polygons
        {
            id: 'world-data2polygons',
            alignment: 'left',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [14.22310, 21.33435],
                zoom: 1.46,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'acled-2020-allevents',
                    opacity: 0
                },
                {
                    layer: '10-conflicts-polygons',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'acled-2020-allevents',
                    opacity: 0
                },
                {
                    layer: '10-conflicts-polygons',
                    opacity: 1
                },
                {
                    layer: '10-conflicts-label',
                    opacity: 0
                },
            ],
        },
//world-text
        {
            id: 'world-text',
            alignment: 'left',
            hidden: false,
            title: '<span class="country-heading"><center>10 Conflicts to Worry About in 2021</center></span>',
            description: '<center>Each year, ACLED identifies 10 conflicts or crisis situations around the world that are likely to worsen or evolve in the coming months. Not just hotspots, these 10 cases represent areas where new directions and patterns of violence are becoming clear, where there have been major shifts in conflict dynamics, and where there is a significant risk of conflict diffusion. This year’s report reviews key trends in Ethiopia; India and Pakistan; Myanmar; Haiti; Belarus; Colombia; Armenia and Azerbaijan; Yemen; Mozambique; and the Sahel. Ethiopia, Yemen, and the Sahel were previously highlighted in our 2020 series, and their re-inclusion here underscores how these conflicts have changed substantially in the preceding year, and how new risks continue to emerge.</center>',
            location: {
                center: [14.22310, 21.33435],
                zoom: 1.46,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: '10-conflicts-polygons',
                    opacity:1
                },
                {
                    layer: '10-conflicts-label',
                    opacity: 0
                },
               
            ],
            onChapterExit: [
              
                {
                    layer: '10-conflicts-polygons',
                    opacity: 0
                },
                {
                    layer: '10-conflicts-label',
                    opacity: 0
                },
            ]
        },

//colombia title
{
    id: 'colombia-title',
    alignment: 'right',
    hidden: false,
    title: '<span class="country-heading"><center>Colombia</center></span><span class="italics-heading"></br><center>High risk of rising violence targeting social leaders and vulnerable groups</center></span>',
    description: '',
    location: customMapPosition ({
        center: [-71.89518, 4.64478],
        zoom: 4.8,
        pitch: 0.00,
        bearing: 0.00

    },
    {
        center: [-72.89518, 4.64478],
        zoom: 4.5,
        pitch: 0.00,
        bearing: 0.00

    },
    1440),
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: 'showLegend',
    onChapterEnter: [
         {
             layer: 'south-america-poly',
             opacity: 1
         }
    ],
    onChapterExit: [
        {
            layer: 'south-america-poly',
            opacity: 0
        }
    ]
},
//colombia events
        {
            id: 'colombia',
            alignment: 'right',
            hidden: false,
            title: '<span class="italics-heading"><center>Violence against civilians concentrated in southern Colombia in 2020</center></span>',
            image: 'images/colombia-vac-legend.png',
            description: '<center>In 2016, the five decades-long conflict between the Colombian government and the Revolutionary Armed Forces of Colombia (FARC) ended with the signing of a comprehensive Peace Agreement. Although initially celebrated as a milestone, the government’s inability to implement the treaty’s guidelines has brought significant challenges. The power vacuum left by the dismantling of the FARC led to the expansion of other groups, such as the National Liberation Army (ELN) and the Gulf Clan, a former paramilitary group also known as the Gaitanistas. After facing decades of violence, Colombia’s civilians have been put at further risk due to the lack of government action.<br><br><b>The map to the right shows violence against civilians events in Colombia during 2020.</b></center>',
            location: customMapPosition({
                center: [-71.89518, 4.64478],
                zoom: 5.0,
                pitch: 0.00,
                bearing: 0.00

            },
             {
                center: [-72.89518, 3.64478],
                zoom:5.0,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend',
            onChapterEnter: [
                 {
                     layer: 'colombia-vac',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                {
                    layer: 'colombia-vac',
                    opacity: 0
                }
            ]
        },
//colombia fatalities
        {
            id: 'colombia-fatalities',
            alignment: 'right',
            hidden: false,
            title: '<span style="font-size:50px; line-height:60px; text-align:center; font-style:bold; color:black;"><center>Fatalities from Attacks Targeting Vulnerable Civilians Increased in 2020</center></span>',
            image: '',
            description: '<img style="width:auto; height:auto:=src="images/colombia-vac-legend-circle.png" width="25%" height="25%" alt=""><center>A record number of attacks against civilians were reported in Colombia in 2020, with over 600 fatalities recorded. Of those, over 450 were social leaders or members of vulnerable groups compared to 300 victims from these groups in 2019. Most attacks occured in southern Colombia, which has historically witnessed conflict in the Cauca, Valle del Cauca, and Nariño departments. Additionally, the pandemic has also put pressure on Colombian institutions, resulting in declining guarantees of protection for vulnerable groups. The lack of state presence in rural and remote areas generates opportunities for different armed groups. These factors will continue to impact civilians in 2021. </br></br><b>The map to the left shows the number of fatalities from violence against civilians events in Colombia during 2020. Dots are sized by the number of reported fatalities per event: the larger the dot, the higher the fatalities.</b></center>',
            location: customMapPosition({
                center: [-71.89518, 4.64478],
                zoom: 5.0,
                pitch: 0.00,
                bearing: 0.00

            },
             {
                center: [-72.89518, 3.64478],
                zoom:5.0,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                 {
                     layer: 'colombia-fatalities',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                {
                    layer: 'colombia-fatalities',
                    opacity: 0
                }
            ]
        },
//colombia-haiti
        {
            id: 'colombia-haiti',
            alignment: 'left',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [-74.03182, 18.99171],
                zoom: 7.00,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        
// haiti-title
        {
            id: 'haiti-title',
            alignment: 'left',
            hidden: false,
            title: '<span class="country-heading"><center>Haiti</center></span> <span class="italics-heading"></br> <center>High risk of increased gang violence amid rising authoritarianism</center></span>',
            description: '',
            location: {
                center: [-74.03182, 18.99171],
                zoom: 7.00,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend',
            onChapterEnter: [
                {
                    layer: 'central-america-poly',
                    opacity: 1
                },

            ],
            onChapterExit: [
                {
                    layer: 'central-america-poly',
                    opacity: 0
                },
            ]
        },
 // haiti-text
        {
            id: 'haiti-1',
            alignment: 'left',
            hidden: false,
            title: '<span style="font-size:50px; line-height:60px; text-align:center; font-style:bold; color:black;"><center>Gangs have committed over 75% of all violence against civilians events and are responsible for nearly 90% of all reported civilian fatalities.</center></span>',
            image: 'images/haiti-1-legend.png',
            description: '<center>Gang violence largely concentrated in impoverished neighborhoods in the capital, Port-au-Prince, is increasing as gangs continue to serve to secure local support for political elites in exchange for resources and impunity from the law. President Jovenel Moise has been suspected of supporting gangs while attempting to further consolidate political control. Recently he has allegedly supported the G-9 gang coalition implicated in over a quarter of gang-related violence against civilians events.Lawyers, journalists, and members of the political opposition have been subject to targeted killings by gangs allegedly affiliated with President Moise.<br><br><b>The map to the right shows violence against civilians events in Haiti during 2020.</b></center>',
            location: {
                center: [-74.03182, 18.99171],
                zoom: 7.00,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend',
            onChapterEnter: [
                {
                    layer: 'haiti-2',
                    opacity: 1
                },

            ],
            onChapterExit: [
                {
                    layer: 'haiti-2',
                    opacity: 0
                },
            ],
        },
//haiti-sahel
        {
            id: 'haiti-sahel',
            alignment: 'right',
            hidden: true,
            title: '',
            description: '',
            location: customMapPosition({
                center: [-4.29098, 15.79492],
                zoom:3.9,
                pitch: 0.00,
                bearing: 0.00

            },
            {
                center: [-4.29098, 15.79492],
                zoom:3.5,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },

// sahel-title
        {
            id: 'sahel-title',
            alignment: 'right',
            hidden: false,
            title: '<span class="country-heading"><center>The Sahel</center></span> <span class="italics-heading"></br><center>Insurgency and fragile politics at the center of an unabated crisis</center></span>',
            description: '',
            location: customMapPosition({
                center: [-4.29098, 15.79492],
                zoom:3.9,
                pitch: 0.00,
                bearing: 0.00

            },
            {
                center: [-4.29098, 15.79492],
                zoom:3.5,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'sahel-poly',
                    opacity: 1},
            ],
            onChapterExit: [{
                layer: 'sahel-poly',
                opacity: 0},]
        },
 // sahel text
        {
            id: 'sahel-text',
            alignment: 'right',
            hidden: false,
            title: '<span style="font-size:50px; line-height:60px; text-align:center; font-style:bold; color:black;"><center>Organized political violence increased by 35% acoss the Sahel since 2019</center></span>',
            image: 'images/sahel-legend.png',
            description: "<center>The jihadi militant insurgency led by Al Qaeda-affiliated Jama'at Nusrat al-Islam wal-Muslimin (JNIM) and Islamic State in the Greater Sahara (ISGS) continues to pose a major security threat in the region, particularly around the “the tri-state border” region of Burkina Faso, Mali, and Niger. Counter-insurgency operations by French and local state forces in Mali coupled by political instability and increasing jihadi-on-jihadi fighting are the primary drivers behind the region’s 35% increase in organized political violence compared to 2019.<br><br><b>The map to the right shows organized political violence events (Battles, Explosions/Remote violence, Violence against civilians) in the Sahel (Burkina Faso, Niger, Mali) during 2020.</b></center>",
            location: customMapPosition({
                center: [-4.29098, 15.79492],
                zoom:3.9,
                pitch: 0.00,
                bearing: 0.00

            },
            {
                center: [-3.29098, 15.79492],
                zoom:3.5,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend',
            onChapterEnter: [
                {
                    layer: 'sahel',
                    opacity: 1},
            ],
            onChapterExit: [{
                layer: 'sahel',
                opacity: 0},]
        },
// sahel-mozambique
        {
            id: 'sahel-mozambique',
            alignment: 'right',
            hidden: true,
            title: '',
            description: '',
            location: customMapPosition({
                center: [36.50129, -17.69012 ],
                zoom:4.5,
                pitch: 0.00,
                bearing: 0.00

            },
            {
                center: [38.55529, -17.17842 ],
                zoom:4.0,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
//mozambique-title
        {
            id: 'mozambique-title',
            alignment: 'right',
            hidden: false,
            title: '<span class="country-heading"><center>Mozambique</center></span><span class="italics-heading"></br><center>No end in sight for the Cabo Delgado insurgency</center></span>',
            description: '',
            location: customMapPosition({
                center: [36.50129, -17.69012 ],
                zoom:4.5,
                pitch: 0.00,
                bearing: 0.00

            },
            {
                center: [38.55529, -17.17842 ],
                zoom:4.0,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'moz-poly',
                    opacity: 1},
            ],
            onChapterExit: [{
                layer: 'moz-poly',
                opacity: 0},]
        },
//moz-text
{
    id: 'mozambique-text',
    alignment: 'right',
    hidden: false,
    title: '<span style="font-size:50px; line-height:60px; text-align:center; font-style:bold; color:black;"><center>2020 was the deadliest year of the conflict in Cabo Delgado</center></span>',
    image: 'images/moz-legend.png',
    description: '<span style="color:black;background-color:white;"><center>2020 was a year of worsening insecurity in Mozambique, with the Islamist insurgency in Cabo Delgado escalating to unprecedented levels. The increasingly sophisticated insurgency, growing numbers of IDPs, and outbreaks of cholera and coronavirus have exposed the Mozambican government’s capacity constraints. The government has increasingly relied on support from private security forces and local militias to counter the insurgency. With insurgent incursions into neighboring Tanzania, the Cabo Delgado conflict risks becoming internationalized in 2021.<br><br><b>The map to the left shows all political disorder events in Mozambique during 2020.</b></center></span>',
    location: customMapPosition({
        center: [36.50129, -17.69012 ],
        zoom:4.5,
        pitch: 0.00,
        bearing: 0.00

    },
    {
        center: [38.55769, -17.17842 ],
        zoom:4.0,
        pitch: 0.00,
        bearing: 0.00

    },
    1440),
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: 'showLegend',
    onChapterEnter: [
        {
            layer: 'mozambique',
            opacity: 1},
    ],
    onChapterExit: [{
        layer: 'mozambique',
        opacity: 0},]
},

 //cabo delgado
        {
            id: 'cabo-delgado',
            alignment: 'right',
            hidden: false,
            title: '<span style="font-size:50px; line-height:60px; text-align:center; font-style:bold; color:black;"><center>Civilians in Cabo Delgado were targeted more than 330 times, with over 780 reportedly killed</center></span>',
            image: 'images/moz-legend.png',
            description: '<center><b>The map to the right shows all violence targeting civilians events (Explosions/Remote violence, Riots, Violence against civilians) in Cabo Delgado, Mozambique during 2020.</b></center>',
            location: customMapPosition({
                center: [39.456320, -12.305060],
                zoom:7.0,
                pitch: 0.00,
                bearing: 0.00

            },
            {
                center: [38.55769, -12.17842 ],
                zoom:6.0,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend',
            onChapterEnter: [
                {
                    layer: 'moz-cd',
                    opacity: 1},
            ],
            onChapterExit: [{
                layer: 'moz-cd',
                opacity: 0},]
        },
//mozambique-ethiopia
        {
            id: 'mozambique-ethiopia',
            alignment: 'right',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [39.49373, 9.16690],
                zoom: 4.79,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
//ethiopia-title
{
    id: 'ethiopia-title',
    alignment: 'left',
    hidden: false,
    title: '<span class="country-heading"><center>Ethiopia</center></span><span class="italics-heading"></br><center>At risk of multiplying conflicts stretching the capacity of the state</center></span>',
    description: '',
    location: {
        center: [39.49373, 9.16690],
        zoom: 4.5,
        pitch: 0.00,
        bearing: 0.00

    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    onChapterEnter: [{
        layer: 'eth-poly',
        opacity: 1
    },
    ],
    onChapterExit: [{
        layer: 'eth-poly',
        opacity: 0
    },]
},
//ethiopia-1
        {
            id: 'ethiopia-1',
            alignment: 'left',
            hidden: false,
            title: '<span style="font-size:50px; line-height:60px; text-align:center; font-style:bold; color:black;"><center>Most organized political violence in Ethiopia has been concentrated in the northern Tigray region since the beginning of the Tigray conflict in November</center></span>',
            image: 'images/ethiopia-legend.png',
            description: '<center>Regional ethnic groups continue to challenge the authority of the federal government and engage in inter-ethnic violence. The federal government has engaged in increasingly violent measures to maintain political and territorial control. Ethiopia’s conflict between the federal government and the former administration of the northern Tigray region, the Tigray People’s Liberation Front (TPLF), began in early November. While the regional conflict has subsided after four weeks of intense fighting, widespread displacement of millions throughout the Amhara and Tigray region and simmering inter-ethnic conflicts continue to present serious security and humanitarian challenges for the Abiy administration. <br><br><b> The map to the right shows all political disorder events in Ethiopia during 2020. The Tigray administrative region is highlighted in light grey.</b></center>',
            location: {
                center: [39.49373, 9.16690],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend',
            onChapterEnter: [{
                layer: 'ethiopia',
                opacity: 1
            },
            {
                layer: 'tigray-admin',
                opacity: 0.5
            },
            ],
            onChapterExit: [{
                layer: 'ethiopia',
                opacity: 0
            }, {
                layer: 'tigray-admin',
                opacity: 0
            },]
        },


//ethiopia-yemen
        {
            id: 'ethiopia-yemen',
            alignment: 'right',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [45.49023, 15.77554],
                zoom: 6.00,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
//yemen-title
        {
            id: 'yemen-title',
            alignment: 'right',
            hidden: false,
            title: '<span class="country-heading"><center>Yemen</center></span><span class="italics-heading"></br><center>High risk of humanitarian fallout amidst the offensive on Marib</center></span>',
            description: '',
            location: {
                center: [45.49023, 15.77554],
                zoom: 6.00,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter:[
                {
                    layer: 'me-poly',
                    opacity: 1
                }
            ],
            onChapterExit: [{
                layer: 'me-poly',
                opacity: 0
            }]
        },
//yemen
        {
            id: 'yemen',
            alignment: 'right',
            hidden: false,
            title: '<span style="font-size:50px; line-height:60px;text-align:center; font-style:bold; color:black;"><center>Reported fatalities decreased in 2020, but the year was still the third deadliest</center></span>',
            image: 'images/yemen-legend.png',
            description: '<center>The civil war in Yemen continues to consist of multiple overlapping conflicts. In 2020, the conflict between the Houthis and pro-Hadi forces escalated, with the Houthis’ main objective being control of Marib city. Currently, frontlines are only several dozens of kilometers from the city. If Houthi forces reach the city, the humanitarian fallout might be devastating. Also, during 2020, negotiations to implement the Riyadh agreement between the STC and the Hadi government witnessed a breakthrough. In late December, the STC agreed to join a newly constituted Hadi government in exchange for allowing the government to move back into Aden.<br><br><b>The map to the right shows organized political violence events (Battles, Explosions/Remote violence, Violence against civilians) in Yemen during 2020.</b></center>',
            location: {
                center: [45.49023, 15.77554],
                zoom: 6.00,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend',
            onChapterEnter:[
                {
                    layer: 'yemen',
                    opacity: 1
                }
            ],
            onChapterExit: [{
                layer: 'yemen',
                opacity: 0
            }]
        },
//yemen-ma
        {
            id: 'yemen-ma',
            alignment: 'right',
            hidden: false,
            title: '<span style="font-size:50px; line-height:60px;text-align:center; font-style:bold; color:black;"><center>Organized political violence increased in in Al-Jawf (44%) and Marib (733%) in 2020</center></span>',
            image: 'images/yemen-ma20-legend.png',
            description: '<center><b>The map to the right shows organized political violence events (Battles, Explosions/Remote violence, Violence against civilians) in the Al-Jawf and Marib administrative regions of Yemen during 2020. The Al-Jawf and Marib administrative regions are highlighted in light grey.</b></center>',
            location: customMapPosition({
                center: [45.49023, 15.90000],
                zoom: 7.25,
                pitch: 0.00,
                bearing: 0.00

            },
            {
                center: [44.00000, 15.90000],
                zoom: 7.0,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend',
            onChapterEnter:[
                {
                    layer: 'yemen-ma-20',
                    opacity: 1
                },
                {
                    layer: 'yemen-admin',
                    opacity: 0.5
                },
            ],
            onChapterExit: [{
                layer: 'yemen-ma-20',
                opacity: 0
            },
            {
                layer: 'yemen-admin',
                opacity: 0
            },]
        },

//yemen-belarus
{
    id: 'yemen-belarus',
    alignment: 'right',
    hidden: true,
    title: '',
    description: '',
    location: customMapPosition ({
        center: [27.99373, 53.69264],
        zoom: 5,
        pitch: 0.00,
        bearing: 0.00

    },
    {
        center: [24.99373, 53.69264],
        zoom: 5,
        pitch: 0.00,
        bearing: 0.00

    },
    1440),
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    onChapterEnter: [],
    onChapterExit: []
},
//belarus-title
{
    id: 'belarus-title',
    alignment: 'right',
    hidden: false,
    title: '<span class="country-heading"><center>Belarus</center></span><span class="italics-heading"></br><center>High risk of destabilization as regime, demonstrator, and Russian interests clash</center></span>',
    description: '',
    location: customMapPosition({
        center: [27.79373, 53.69264],
        zoom: 5.45,
        pitch: 0.00,
        bearing: 0.00

    },
    {
        center: [24.99373, 53.69264],
        zoom: 5,
        pitch: 0.00,
        bearing: 0.00

    },
    1440),
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    onChapterEnter: [
        {
        layer: 'ee-poly',
        opacity: 1},
    ],
    onChapterExit: [  {
        layer: 'ee-poly',
        opacity: 0},]
},
//belarus
{
    id: 'belarus',
    alignment: 'right',
    hidden: false,
    title: '<span class="italics-heading"<center>Demonstrations have taken place in both major cities and smaller towns across Belarus</center></span>',
    image: 'images/belarus-legend.png',
    description: '<center>Major demonstrations across Belarus have continued since the August 2020 election. Demonstrators have expressed anger over the falsification of election results and have demanded the resignation of President Lukashenko. They have demanded new elections be held and the prosecution of members of the security services involved in violence against demonstrators. The Lukashenko regime has refused to give in to demands while brutally cracking down on demonstrators. It remains unclear whether Russia will continue to support Lukashenko in 2021, especially following months of political and economic turmoil.<br><br><b>The map to the right shows all protests and riots in Belarus during 2020.</b></center>',
    location: customMapPosition({
        center: [27.79373, 53.69264],
        zoom: 5.45,
        pitch: 0.00,
        bearing: 0.00

    },
    {
        center: [24.99373, 53.69264],
        zoom: 5,
        pitch: 0.00,
        bearing: 0.00

    },
    1440),
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: 'showLegend',
    onChapterEnter: [
        {
        layer: 'belarus',
        opacity: 1},
    ],
    onChapterExit: [  {
        layer: 'belarus',
        opacity: 0},]
},

//belarus-aa
        {
            id:'belarus-aa',
            alignment: 'right',
            hidden: true,
            title: '',
            description: '',
            location: customMapPosition({
                center: [44.99103, 40.17752],
                zoom: 5.70,
                pitch: 0.00,
                bearing: 0.00

            },
            {
                center: [46.81103, 40.17752],
                zoom: 5.0,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
//armenia-azerbaijan-title
        {
            id: 'armenia-azerbaijan-title',
            alignment: 'right',
            hidden: false,
            title: '<span class="country-heading"><center>Armenia and Azerbaijan</center></span><span class="italics-heading"></br><center>High risk of cross-border violence in Nagorno-Karabakh despite ceasefire</center></span>',
            description: '',
            location: customMapPosition({
                center: [44.99103, 40.17752],
                zoom: 5.70,
                pitch: 0.00,
                bearing: 0.00

            },
            {
                center: [46.81103, 40.17752],
                zoom: 5.0,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'cca-poly',
                    opacity: 1},
            ],
            onChapterExit: [  {
                layer: 'cca-poly',
                opacity: 0},
            ]
        },
//armenia-azerbaijan
        {
            id: 'armenia-azerbaijan',
            alignment: 'right',
            hidden: false,
            title: '<span style="font-size:50px; line-height:60px;text-align:center; font-style:bold; color:black;"><center>Violence occurred outside the usual Lines of Contact</center></span>',
            image: 'images/aa-legend.png',
            description: '<center>Ceasefire violations between Armenia and Azerbaijan were stable throughout the first half of 2020, before spiking in July. War broke out in September in the disputed Artsakh (Nagorno-Karabakh) region. Forty-four days of fighting resulted in over 5,000 military and 100 civilian fatalities, displacement of tens of thousands, and destruction of urban infrastructure. The trilateral statement signed in November between Armenia, Azerbaijan, and Russia ended the war, major issues remain unresolved.<br><br><b>The map to the right shows organized political violence events (Battles, Explosions/Remote violence, Violence against civilians) in Armenia and Azerbaijan during 2020.The red dotted line represents a Line of Contact (LoC) in the conflict, while the black dotted line represents the borders of Soviet Nagorno-Karabakh.</b></center>',
            location: customMapPosition({
                center: [44.99103, 40.17752],
                zoom: 6.55,
                pitch: 0.00,
                bearing: 0.00

            },
            {
                center: [46.31103, 40.17752],
                zoom: 5.0,
                pitch: 0.00,
                bearing: 0.00

            },
            1440),
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend',
            onChapterEnter: [
                {
                    layer: 'armenia-azerbaijan',
                    opacity: 1},
                    {
                    layer: 'combined-loc',
                    opacity: 1},
                    {
                        layer: 'soviet-nk-borders',
                        opacity: 1},
            ],
            onChapterExit: [  {
                layer: 'armenia-azerbaijan',
                opacity: 0},
                {
                    layer: 'combined-loc',
                    opacity: 0},
                    {
                        layer: 'soviet-nk-borders',
                        opacity: 0},
            ]
        },
//aa-india-pakistan
        {
            id: 'aa-india-pakistan',
            alignment: 'right',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [73.71242, 24.22636],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },

//india-pakistan-title
{
    id: 'india-pakistan-title',
    alignment: 'right',
    hidden: false,
    title: '<span class="country-heading"><center>India And Pakistan</center></span><span class="italics-heading"></br><center>At risk of increased cross-border violence in Kashmir</center></span>',
    description: '',
    location: {
        center: [73.71242, 24.22636],
        zoom: 4.00,
        pitch: 0.00,
        bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    onChapterEnter: [
        {
            layer: 's-asia-poly',
            opacity: 1},
    ],
    onChapterExit: [
        {
            layer: 's-asia-poly',
            opacity: 0},
    ]
},

//india-pakistan
        {
            id: 'india-pakistan',
            alignment: 'right',
            hidden: false,
            title: '<span class="italics-heading"><center>Despite the Pandemic, Demonstrations in India and Pakistan Continued</center></span>',
            image: 'images/india-pakistan-legend.png',
            description: "<center>In India, demonstrations in January and February over the Citizenship Amendment Act waned due to the onset of the pandemic. Farmer demonstrations increased during the second half of 2020. In Pakistan, demonstrations were primarily organized supporting media freedom and opposing India's policies in J&K.<br><br><b>The map to the right shows all political disorder events in India and Pakistan during 2020.</b></center>",
            location: {
                center: [73.71242, 24.22636],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend',
            onChapterEnter: [
                {
                    layer: 'india-pakistan',
                    opacity: 1},
            ],
            onChapterExit: [
                {
                    layer: 'india-pakistan',
                    opacity: 0},
            ]
        },
//india-jk//
		{
            id: 'india-jk',
            alignment: 'right',
            hidden: false,
            title: '<span style="font-size:50px; line-height:60px; text-align:center; font-style:bold; color:black;"><center>Activity Increased Along the Jammu & Kashmir Line of Control (LoC) in 2020</center></span>',
            image: 'images/india-pakistan-jk-legend.png',
			description: '<span style="color:black;background-color:white"><center>2020 was another tumultuous year for India and Pakistan, as relations plummeted amid increased clashes along the disputed Jammu and Kashmir (J&K) border. The spike in fighting made 2020 the most violent year for conflict between India and Pakistan since the beginning of ACLED coverage in 2016. India focused on deflecting opportunities for negotiation and tightening control of Kashmir, while promoting pro-Indian politics in the region. Pakistan responded by continuously casting doubt on the bilateral ceasefire agreement with India by highlighting Indian violations and human rights abuses in Kashmir at international diplomatic forums, as well as inciting violence near the Line of Control (LoC)<br><br><b>The map to the right shows organized political violence events (Battles, Explosions/Remote violence, Violence against civilians) involving Indian and Pakistani State Forces in the Azad Jammu and Kashmir administrative region in Pakistan and the Jammu and Kashmir administrative region in India during 2020.The red dotted line represents a disputed border. The Azad Jammu Kashmir and Jammu and Kashmir administrative regions are highlighted in light grey.</b></center></span>',
			location: {
				center: [74.43137, 33.88668],
				zoom: 5.93,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
            onChapterEnter: [
                {
                    layer: 'india-pakistan-jk',
                    opacity: 1},
                     {
                    layer: 'jk-border',
                    opacity: 1},
                    {
                        layer: 'jk-admin',
                        opacity: 0.5},
            ],
            onChapterExit: [
                {
                    layer: 'india-pakistan-jk',
                    opacity: 0},
                      {
                    layer: 'jk-border',
                    opacity: 0},
                    {
                        layer: 'jk-admin',
                        opacity: 0},
            ]
        },
//india-pakistan-myanmar
        {
            id: 'india-pakistan-myanmar',
            alignment: 'right',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [96.65675, 20.25948],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },

//myanmar-title
{
    id: 'myanmar-title',
    alignment: 'right',
    hidden: false,
    title: '<span class="country-heading"><center>Myanmar</center></span><span class="italics-heading"></br><center>At risk of dormant conflicts reigniting</center></span>',
    description: '',
    location: {
        center: [94.65675, 20.25948],
        zoom: 4.80,
        pitch: 0.00,
        bearing: 0.00

    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    onChapterEnter: [{
        layer: 'se-asia-poly',
        opacity: 1},],
    onChapterExit: [{
        layer: 'se-asia-poly',
        opacity: 0},]
},
//myanmar
        {
            id: 'myanmar',
            alignment: 'right',
            hidden: false,
            title: '<span style="font-size:50px; line-height:60px; text-align:center; font-style:bold; color:black;"><center>Increased fighting in Kayin State and Bago Region at the end of 2020</center></span>',
            image: 'images/myanmar-legend.png',
            description: '<center>Following the general elections on 8 November 2020 in Myanmar, fighting in Rakhine state and southern Chin state came to a sudden halt. Prior to the current cessation of fighting in Rakhine state and Chin state’s Paletwa township, conflict in the region between the United League of Arakan/Arakan Army (ULA/AA), an ethnic Rakhine group fighting for greater autonomy, and the military had been on the rise in 2020. As conflict in the west abated, clashes between the military and the Karen National Union/Karen National Liberation Army (KNU/KNLA) increased during December 2020 in the east in Kayin state. The clashes have continued into the new year in eastern Bago region. There is growing animosity between the two sides as the military continues with its road construction project in areas controlled by the KNU/KNLA. <br>On 1 February, the day the new parliament elected in November was scheduled to convene, the military — using the pretense of electoral fraud — carried out early morning raids detaining elected NLD officials, as well as a number of prominent political activists. A state of emergency was declared for one year and the military announced that it would reconstitute the Union Election Commission and eventually hold new elections. This has sparked mass demonstrations throughout the country.<br>As 2021 progresses, in addition to the likelihood of increased disorder resulting from the military coup, the threat that dormant armed conflicts could reignite remains. No political solution to the conflict in Rakhine state has been achieved. Many ethnic Rakhine and Chin villagers remain displaced, not to mention the many thousands of Rohingya refugees still languishing in camps in Bangladesh. There are troubling signs that conflict in Kayin state could intensify while fighting between Shan and Ta’ang rebel groups continues in Shan state. The military’s decision to seize power has thrown any discussions of peace into doubt.<br><br><b>The map to the right shows all political disorder events in Myanmar during 2020.</b></center>',
            location: {
                center: [94.65675, 20.25948],
                zoom: 4.80,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend',
            onChapterEnter: [{
                layer: 'myanmar',
                opacity: 1},],
            onChapterExit: [{
                layer: 'myanmar',
                opacity: 0},]
        },

//myanmar-world
        {
            id: 'myanmar-world',
            alignment: 'right',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [14.22310, 21.33435],
                zoom: 1.46,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },

//world-conclusion
        {
            id: 'world-conclusion',
            alignment: 'right',
            hidden: false,
            title: '<span style="font-size:100px; line-height:150px; color:0d657d; text-align:center; font-style:bold;"><center>Conclusion</center></span>',
            description: "<center>2020 was a sobering year, and one in which politics has failed the vast majority around the world. In 2021, we may be forced to reap what has been sown: the coming year is likely to be a dangerous and violent period leading to more uncertainty and less peace, especially for the countries embroiled in these 10 conflicts. In our mid-year update to this special report, we will revisit these conflicts to assess our analysis and determine if our expectations were accurate.</center>",
            location: {
                center: [14.22310, 21.33435],
                zoom: 1.46,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
           onChapterEnter: [
                {
                    layer: '10-conflicts-polygons',
                    opacity: 1

                },
                {
                    layer: 'acled-2020-allevents',
                    opacity: 0
                }
            ],
            onChapterExit: [  {
                layer: '10-conflicts-polygons',
                opacity: 0
            },
            {
                layer: 'acled-2020-allevents',
                opacity: 0
            }]
        },
    ]
};
