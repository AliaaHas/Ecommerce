import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/CustomValidator/passwordvalidation';
import { forbiddenNameValidator } from 'src/app/CustomValidator/UserNameValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
userregisterformgroup:FormGroup;
  constructor(private fb: FormBuilder) {
    this.userregisterformgroup = fb.group({
     name: ['', [Validators.required, Validators.minLength(3),forbiddenNameValidator]],
      email: [''],
      mobileNo: fb.array([fb.control('')]),
      address: fb.group({
        street: [''],
        postalCode: [''],
      }),
      password: [''],
      confirmPassword: [''],
      reachedBy: [''],
      reachedByOther: [''],
    }, {Validators: passwordMatchValidator});

  }

  ngOnInit(): void {



  }

  get name() {
    return this.userregisterformgroup.controls['name'];
  }

  get mobileNoArr(): FormArray {
    return this.userregisterformgroup.controls['mobileNo'] as FormArray;
  }

  get reachedBy() {
    return this.userregisterformgroup.controls['reachedBy'];
  }

  get password() {
    return this.userregisterformgroup.controls['password'];
  }

  get confirmPassword() {
    return this.userregisterformgroup.controls['confirmPassword'];
  }


  addMobile(){
    this.mobileNoArr.push(this.fb.control(''));


  }

  register(){

  }

  updateReachedOtherValidaiton(){
    if (this.reachedBy.value == "Other")
    this.userregisterformgroup.controls['reachedByOther'].setValidators([Validators.required]);
  else
    this.userregisterformgroup.controls['reachedByOther'].clearValidators();

  this.userregisterformgroup.controls['reachedByOther'].updateValueAndValidity();

  }



}
