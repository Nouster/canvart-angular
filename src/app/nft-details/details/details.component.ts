import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { INFT } from 'src/app/models/inft';
import { NftService } from 'src/app/service/Canvart/nft.service';
import { CrytpoCompareService } from 'src/app/service/CryptoCompare/crytpo-compare.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  nft: INFT | undefined;

  constructor(
    private route: ActivatedRoute,
    private nftDetails: NftService,
    private crypto: CrytpoCompareService
  ) {}

  ngOnInit(): void {
    this.getNftDetails();
    this.loadDataAndDrawChart();
  }

  getNftDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.nftDetails.getNft(id).subscribe((nft) => {
        this.nft = nft;
        console.log('category', nft);
      });
    }
  }

  loadDataAndDrawChart() {
    this.crypto.getEth().subscribe((data) => {
      const labels: any[] = [];
      const prices: any[] = [];
      data.Data.Data.forEach(function (item: any) {
        const date = new Date(item.time * 1000);
        const formattedDate = date.toLocaleString('fr-FR', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        });
        labels.push(formattedDate);
        prices.push(item.close);
      });

      const chartElement = document.getElementById(
        'myChart'
      ) as HTMLCanvasElement;
      if (chartElement) {
        const ctx = chartElement.getContext('2d');
        if (ctx) {
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  data: prices,
                  label: 'ETH',
                  borderColor: '#000000',
                  backgroundColor: '#eaeaea',
                  fill: false,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: false,
                  title: {
                    display: true,
                    text: 'EUR',
                  },
                },
                x: {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 20,
                  },
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: 'Updated every days at 11am',
                  font: {
                    size: 18,
                    family: 'Kodchasan',
                  },
                },
                legend: {
                  labels: {
                    font: {
                      family: 'Kodchasan',
                    },
                  },
                },
              },
            },
          });
        } else {
          console.error('Failed to get 2D context for canvas element.');
        }
      } else {
        console.error("Element with ID 'myChart' not found.");
      }
    });
  }
}
