var URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

let USAYear = [];
let USAPopulation = [];
const USAPopulationFormat = [];

fetch(URL)
    .then(res => {
        return res.json();
    })
    .then(response => {
        let data = response.data

        let i = 0

        data.reverse().forEach(USA => {
            USAYear[i] = USA.Year
            USAPopulation[i] = USA.Population
            i++
        });

        for (let i = 0; i < USAPopulation.length; i++) {
            USAPopulationFormat.push(USAPopulation[i].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
        }
    })

console.log(USAYear)
console.log(USAPopulation)
console.log(USAPopulationFormat)

const colorPrimary = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary")
    .trim();

const colorLabel = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-label")
    .trim();

const fontFamily = getComputedStyle(document.documentElement)
    .getPropertyValue("--font-family")
    .trim();

const defaultOptions = {

    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        width: '100%',
        height: 600,
        offsetY: 18
    },

    dataLabels: {
        enabled: false
    }

}

let barOptions = {

    ...defaultOptions,

    chart: {
        ...defaultOptions.chart,
        type: "area"
    },

    tooltip: {
        enabled: true,
        style: {
            fontFamily: fontFamily
        },
        y: {
            formatter: value => `${value}`
        }
    },

    series: [
        {
            name: "Population",
            data: USAPopulation
            // Display a proper number format : USAPopulationFormat
        }
    ],

    colors: [colorPrimary],

    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 100],
            colorStops: [
                {
                    offset: 0,
                    opacity: .2,
                    color: "#ffffff"
                },
                {
                    offset: 100,
                    opacity: 0,
                    color: "#ffffff"
                }
            ]
        }
    },

    stroke: { colors: [colorPrimary], lineCap: "round" },

    grid: {
        borderColor: "rgba(0, 0, 0, 0)",
        padding: {
            top: -30,
            right: 0,
            bottom: -8,
            left: 12
        }
    },

    markers: {
        strokeColors: colorPrimary
    },

    yaxis: {
        show: false
    },

    xaxis: {

        labels: {
            show: true,
            floating: true,
            style: {
                colors: "#ffffff",
                fontFamily: fontFamily
            }
        },

        axisBorder: {
            show: false
        },

        crosshairs: {
            show: false
        },

        categories: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]
    }

};

let chart = new ApexCharts(
    document.querySelector(".area-chart"), barOptions
);

chart.render();