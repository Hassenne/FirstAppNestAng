import { Component, OnInit } from "@angular/core";
import { QuotesService } from "../quotes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-edit-quote",
  templateUrl: "./edit-quote.component.html",
  styleUrls: ["./edit-quote.component.scss"],
})
export class EditQuoteComponent implements OnInit {
  quote = {
    title: "",
    author: "",
  };

  id: string;

  constructor(
    private quotesService: QuotesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    if (this.id) {
      this.quotesService.getQuote(this.id).subscribe((data) => {
        this.quote = data;
      });
    }
  }

  onSave(form) {
    console.log(form);
    const data = form.value;
    if (this.id) {
      this.quotesService.updateQuote(this.id, data).subscribe((quotes) => {
        this.snackBar.open("Quote Updated");
        this.router.navigateByUrl("/quotes");
      });
    } else {
      this.quotesService.createQuote(data).subscribe((data) => {
        this.snackBar.open("Quote Created");
        this.router.navigateByUrl("/quotes");
      });
    }
  }
}
