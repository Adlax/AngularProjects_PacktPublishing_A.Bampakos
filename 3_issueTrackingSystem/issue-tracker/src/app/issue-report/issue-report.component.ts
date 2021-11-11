import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  @Output() formClose = new EventEmitter();

  issueForm: FormGroup | undefined;

  suggestions: Issue[] = [];

  private titleSub: Subscription | undefined;

  constructor(private builder: FormBuilder, private issuesService: IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: ['',Validators.required],
      description: [''],
      priority: ['',Validators.required],
      type: ['',Validators.required]
    });
    this.titleSub = this.issueForm.controls.title.valueChanges.subscribe( (title: string)=>{this.suggestions = this.issuesService.getSuggestions(title);console.log(title.length);console.log(this.suggestions);} );
  }

  addIssue() {
    if(this.issueForm && this.issueForm.invalid){
      this.issueForm.markAllAsTouched();
      return;
    }
    this.issuesService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

  ngOnDestroy(): void {
    this.titleSub?.unsubscribe();
  }

}
