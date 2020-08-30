import { Component, OnInit } from "@angular/core";
import { QuotesService } from "../quotes.service";
import { Quote } from "../quotes/quote";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  quote: Observable<Quote>;
  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quote = this.quotesService.getQuote("5ef4f79518c7d51e8439fbc2");
  }
}
