import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/admin/common.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  // authService = Inject(CommonService);
  bannerForm !: FormGroup;

  constructor(private authService: CommonService) { }

  ngOnInit(): void {
    this.getBanner();
    this.bannerForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      img: new FormControl('',[Validators.required])
    })
  }

  getBanner() {
    this.authService.getBanner().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
      }
    })
  }

  url: any;
  uploadfile(event: any) {
    console.log(event);
    console.log(event?.target?.files);
    const file = (event.target as HTMLInputElement).files![0];
    if (file) {
      this.bannerForm.patchValue({
        img: file
      })
      // convert to base64 string
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result as string;
      };
    }
    this.bannerForm.get('img')?.updateValueAndValidity()
  }

  submitForm() {
    console.log(this.bannerForm.value);
    let formData=new FormData();
    formData.append('title',this.bannerForm.get('title')?.value);
    formData.append('img',this.bannerForm.get('img')?.value);

    this.authService.addBanner(formData).subscribe((res: any) => {
      console.log(res);

    })
  }
 
  get title(){
    return this.bannerForm.get('title');
  }
  get img(){
    return this.bannerForm.get('img');
  }
}
