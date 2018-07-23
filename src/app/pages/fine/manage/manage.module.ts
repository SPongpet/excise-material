import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardActionsModule } from '../../component/card-actions/card-actions.module';
// import { LawbreakerModalModule } from '../../arrests/lawbreaker-modal/lawbreaker-modal.module';
import { FineService } from '../fine.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrintDocModalModule } from '../printdoc-modal/printdoc-modal.module';

const routes: Routes = [
  {
    path: '',
    data: {
      urls: [
        { title: 'หน้าหลัก', url: '/' },
        { title: 'ค้นหางานเปรียบแทียบและชำระค่าปรับ', url: '/fine/list' },
        { title: 'จัดการข้อมูลงานเปรียบแทียบและชำระค่าปรับ' }
      ],
      nextPage: { title: 'ส่งเงินรายได้', url: '/income/manage' }
    },
    component: ManageComponent
  }
];



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CardActionsModule,
    RouterModule.forChild(routes),
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
    CardActionsModule,
    PrintDocModalModule
  ],
  declarations: [ ManageComponent],
  providers: [FineService]
})
export class ManageModule { }
