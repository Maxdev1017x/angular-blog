import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() //Deixa dinâmico
  photoCover: string = " "
  @Input()
  contentTitle:string = " "
  @Input()
  contentDescription:string = " "
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
    this.id = value.get("id")
      )
      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = data.filter(article => article.id === id)[0]


      this.contentTitle = result.title
      this.photoCover = result.photoCover
      this.contentDescription = result.description
  }
}
