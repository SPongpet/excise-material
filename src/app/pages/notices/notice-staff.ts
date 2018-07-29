import { FormControl } from '@angular/forms';

export class NoticeStaff {
   public StaffID: string;
   public ProgramCode: string;
   public ProcessCode: string;
   public NoticeCode: string;
   public StaffCode: string;
   public TitleName: string;
   public FirstName: string;
   public LastName: string;
   public PositionCode: string;
   public PositionName: string;
   public PosLevel: string;
   public PosLevelName: string;
   public DepartmentCode: string;
   public DepartmentName: string;
   public DepartmentLevel: string;
   public OfficeCode: string;
   public OfficeName: string;
   public OfficeShortName: string;
   public ContributorCode: string;

   public StaffFullName: string;
}

export const NoticeStaffFormControl = {
    StaffID: new FormControl(null),
    ProgramCode: new FormControl('XCS60-02-02'),
    ProcessCode: new FormControl('0002'),
    NoticeCode: new FormControl(null),
    StaffCode: new FormControl(null),
    TitleName: new FormControl(null),
    FirstName: new FormControl(null),
    LastName: new FormControl(null),
    PositionCode: new FormControl(null),
    PositionName: new FormControl(null),
    PosLevel: new FormControl(null),
    PosLevelName: new FormControl(null),
    DepartmentCode: new FormControl(null),
    DepartmentName: new FormControl(null),
    DepartmentLevel: new FormControl(null),
    OfficeCode: new FormControl(null),
    OfficeName: new FormControl(null),
    OfficeShortName: new FormControl(null),
    ContributorCode: new FormControl(null),
    StaffFullName: new FormControl(null)
}
