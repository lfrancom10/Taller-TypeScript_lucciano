

import { Series } from './series.js';

import { dataSeries } from './DataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const button_buscar: HTMLElement = document.getElementById("button_buscar")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalSeasonsElm: HTMLElement = document.getElementById("Avg-seasons")!;


button_buscar.onclick = () => applyFilterByName();



function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearSeriesInTable();
  let coursesFiltered: Series[] = searchSerieByName(text, dataSeries);
}

function searchSerieByName(nameKey: string, series: Series[]) {
  return nameKey === '' ? dataSeries : series.filter( c => 
    c.nombre.match(nameKey));
}


function getAvgSeasons(series: Series[]): number {
  let totalCredits: number = 0;
  series.forEach((serie) => totalCredits = totalCredits + serie.temporada);
  totalCredits=totalCredits/6;
  return totalCredits;
}

function clearSeriesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
      seriesTbody.removeChild(seriesTbody.firstChild);
     
    }
  }
}