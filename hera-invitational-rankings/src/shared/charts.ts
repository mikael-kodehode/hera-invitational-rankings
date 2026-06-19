import Chart from 'chart.js/auto'
import type { IPlayerStatDBItem } from "../types";
import { normalizeMapName } from "./functions";

export const createPlayerCharts = (playerStats: IPlayerStatDBItem) => {
  const pie1 = Chart.getChart("pie-chart-civ-usage");
  const bar1 = Chart.getChart('bar-chart-civ-winrate')
  const pie2 = Chart.getChart('pie-chart-map-matches')
  const bar2 = Chart.getChart('bar-chart-map-winrate')
  // 2. If it exists, destroy it!
  if (pie1) pie1.destroy();
  if (bar1) bar1.destroy();
  if (pie2) pie2.destroy();
  if (bar2) bar2.destroy();

  const civList = playerStats.player_civ_stats
  const mapList = playerStats.player_map_stats
  const ctx = document.querySelector<HTMLCanvasElement>("#pie-chart-civ-usage")
  const barCivChart = document.querySelector<HTMLCanvasElement>("#bar-chart-civ-winrate")
  const mtx = document.querySelector<HTMLCanvasElement>("#pie-chart-map-matches")
  const barMapChart = document.querySelector<HTMLCanvasElement>("#bar-chart-map-winrate")
  
  const barOptions = {
    indexAxis: "y" as 'y',
    plugins: {
      legend: {
        labels: {
          color: "#ffffff"
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#fff"
        }
      },
      y: {
        ticks: {
          color: "#fff"
        }
      }
    }
  }
  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff"
        }
      }
    }
  }
  
  if(ctx && barCivChart) {
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: civList.map(civ => civ.civilizations.name),
        datasets: [
          {
            label: 'Games played',
            data: civList.map(civ => civ.games_played)
          }
        ]
      },
      options: pieOptions
    })
  
    new Chart(barCivChart, {
      type: 'bar',
      data: {
        labels: civList.map(civ => civ.civilizations.name),
        datasets: [
          {
            label: 'Winrate %',
            data: civList.map(civ => ((civ.wins / civ.games_played)*100).toFixed(1))
          }
        ]
      },
      options: barOptions
    })
    
  } else {
    console.warn("Canvas not rendered. Couldn't create civ charts")
  }

  if(mtx && barMapChart) {
    new Chart(mtx, {
      type: "pie",
      data: {
        labels: mapList.map(map => normalizeMapName(map.maps.name)),
        datasets: [
          {
            label: 'Games played',
            data: mapList.map(map => map.games_played)
          }
        ]
      },
      options: pieOptions
    })
  
    new Chart(barMapChart, {
      type: 'bar',
      data: {
        labels: mapList.map(map => normalizeMapName(map.maps.name)),
        datasets: [
          {
            label: 'Winrate %',
            data: mapList.map(map => ((map.wins / map.games_played)*100).toFixed(1))
          }
        ]
      },
      options: barOptions
    })
    
  } else {
    console.warn("Canvas not rendered. Couldn't create map charts")
  }
}

export const createOverallCharts = (playerStats: IPlayerStatDBItem[]) => {
  const ctx = document.querySelector<HTMLCanvasElement>('#overall-bar-games')
  if(!ctx) throw new Error('Did not find the canvas')
  const games = playerStats.flatMap(player => {
    return player.player_civ_stats.map(civ => {
      return {
        civilizationName: civ.civilizations.name,
        player: player.name,
        games: civ.games_played
      }
    })
  }, 1)
  console.log(playerStats)
  const players = [...new Set(games.map(g => g.player))]
  const civs = [...new Set(games.map(g => g.civilizationName))]

  const datasets = players.map((player, index) => ({
    label: player,
    data: civs.map(civ => {
      const entry = games.find(
        g => g.civilizationName === civ && g.player === player
      )
      return entry ? entry.games : 0
    }),
    backgroundColor: [
      '#4e79a7',
      '#244F26',
      '#f28e2b',
      '#3E000C',
      '#76b7b2',
      '#59a14f',
      '#fff',
      '#CBFF4D',
      '#4BC6B9',
      '#B57BA6',
      '#D10000',
      '#836a48',
      '#B2AA8E',
      '#7A306C',
      '#C0E0DE',
      '#5DA9E9',
      '#0B3142',
      '#DA667B',
      '#DB5A42',
      '#E8AE68'
    ][index]
  }))
  const sorted = civs.map((civ, index) => ({
    civ,
    total: datasets.reduce((sum, ds) => sum + ds.data[index], 0),
    index
  }))
  sorted.sort((a,b) => b.total - a.total)

  const sortedLabels = sorted.map(x => x.civ)
  const sortedDatasets = datasets.map(ds=> ({
    ...ds,
    data: sorted.map(x => ds.data[x.index])
  }))

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: sortedLabels,
      datasets: sortedDatasets
    },
    options: {
      maintainAspectRatio: false,
      indexAxis: 'y',
      responsive: true,
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
          // : 0.9,
          // barPercentage: 0.95
        }
      }
    }
  })
}

