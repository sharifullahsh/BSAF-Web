import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LookupService } from 'src/app/_services/lookup.service';
import { BeneficiaryService } from 'src/app/_services/beneficiary.service';
import { InitialLookups } from 'src/app/models/InitialLookups';

@Component({
  selector: 'app-individual-form-dialog',
  templateUrl: './individual-form-dialog.component.html',
  styleUrls: ['./individual-form-dialog.component.css']
})
export class IndividualFormDialogComponent implements OnInit {
  initialLooupsData: InitialLookups;

  // individualForm = this.fb.group({
  //   name:''
  // });
  constructor(private fb: FormBuilder, private lookupService: LookupService,
              public dialogRef: MatDialogRef<IndividualFormDialogComponent>,
              public beneficiaryService: BeneficiaryService,
              // @Inject(MAT_DIALOG_DATA) public data: DialogData
              ) { }

  // individualForm: FormGroup = this.beneficiaryService.individualForm;

  ngOnInit(): void {
    this.initialLooupsData =  this.beneficiaryService.initialLooupsData;
  }
  cancelClick(): void {
    this.beneficiaryService.individualForm.reset();
    this.dialogRef.close();
  }
  addIndividual(){
    if (this.beneficiaryService.individualForm.invalid){
      return;
    }
    this.dialogRef.close(1);
  }
}
