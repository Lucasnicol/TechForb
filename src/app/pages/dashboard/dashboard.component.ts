import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexXAxis, ApexFill, ApexTooltip, ApexStroke, ApexLegend } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartOptions: ChartOptions | undefined;
  monto: number | undefined;
  dataService: any;
  datamonto: any;
  cuotasSeleccionadas: any;
  montoPorCuota: number | undefined;

  datosTabla: any[] = [
    { monto: 1000, cuotas: 6, fechaEmision: '2023-07-01', mensual: 200, tasaInteres: 5 },
    { monto: 2000, cuotas: 12, fechaEmision:'2023-07-02', mensual: 150, tasaInteres: 4 },
    { monto: 3000, cuotas: 24, fechaEmision:'2023-07-03', mensual: 125, tasaInteres: 3 },
  ];

  opcionSeleccionada: number | null = null;

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: "Transacciones Compradas",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Transacciones perdidas",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Posibilidad de subida",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo",
          "Lun Prox",
          "Mar Prox",
        ]
      },
      yaxis: {
        title: {
          text: "$ pesos"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return "$ " + val + " pesos";
          }
        }
      },
      legend: { 
        show: true
      }
    };

     this.monto = 800000;
     this.montoPorCuota = 39000;
  }

  guardarMonto(nuevoMonto: number): void {
    this.monto = nuevoMonto;
  }

  pagar(): void {
    const montoActual = 800000;
    const montoDescontado = 50000;
    const cuotas = this.cuotasSeleccionadas;
    this.montoPorCuota = montoDescontado / cuotas;
    const nuevoMonto = montoActual - montoDescontado;
    
    return this.guardarMonto(nuevoMonto)
  }

  cancelar(): void {
    const montoOriginal = 800000;
    this.guardarMonto(montoOriginal);
  }

  seleccionarOpcion(index: number): void {
    this.opcionSeleccionada = index;
  }
}
