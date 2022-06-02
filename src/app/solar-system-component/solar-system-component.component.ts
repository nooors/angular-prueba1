import { Component, OnInit } from "@angular/core";

interface Item {
  title: string;
  description: string;
  descriptionVisible: boolean;
}

@Component({
  selector: "app-solar-system",
  template: `<h1>Planets joke</h1>
    <div class="upper-buttons">
      <button type="button" class="btn-show-all" (click)="handleShowAll()">
        ShowAll
      </button>
      <button type="button" class="btn-hide-all" (click)="handleHideAll()">
        HideAll
      </button>
      <div>
        <div class="list">
          <ul>
            <li *ngFor="let planet of data; index as i">
              <header class="title">{{ planet.title }}</header>
              <div class="button-toogle-group">
                <button
                  type="button"
                  class="btn-toogle-description"
                  (click)="handleToggleItemDescription(planet)"
                >
                  Toggle Description
                </button>
              </div>
              <article
                *ngIf="planet.descriptionVisible"
                [ngClass]="{ description: planet.descriptionVisible }"
              >
                {{ planet.description }}
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>`, // put content here
})
export class SolarSystemComponentComponent implements OnInit {
  data: Item[] = [
    {
      title: "Mercury",
      description: "The first planet in the Solar System",
      descriptionVisible: false,
    },
    {
      title: "Venus",
      description: "The second planet in the Solar System",
      descriptionVisible: false,
    },
    {
      title: "Earth",
      description: "The third planet in the Solar System",
      descriptionVisible: false,
    },
  ];

  show = false;

  constructor() {}

  ngOnInit() {}

  handleShowAll(): void {
    this.data.map((e) => (e.descriptionVisible = true));
  }

  handleHideAll(): void {
    this.data.map((e) => (e.descriptionVisible = false));
  }

  handleToggleItemDescription(item: Item): void {
    this.data.find(
      (e) => e.title === item.title,
    )!.descriptionVisible = !this.data.find((e) => e.title === item.title)
      ?.descriptionVisible;
  }
}
