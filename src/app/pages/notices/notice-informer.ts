import { FormControl } from '@angular/forms';

export class NoticeInformer {
    public InformerID: string;
    public InformerType: number;
    public NoticeCode: string;
    public TitleCode: string;
    public TitleName: string;
    public FirstName: string;
    public LastName: string;
    public FullName: string;
    public IDCard: string;
    public Age: string;
    public GenderType: string;
    public Location: string;
    public Address: string;
    public Village: string;
    public Building: string;
    public Floor: string;
    public Room: string;
    public Alley: string;
    public Road: string;
    public SubDistrictCode: string;
    public SubDistrict: string;
    public DistrictCode: string;
    public District: string;
    public ProvinceCode: string;
    public Province: string;
    public ZipCode: string;
    public TelephoneNo: string;
    public InformerInfo: string;
    public IsActive: string;

    public Region: string;
}

export const NoticeInformerFormControl = {
    InformerID: new FormControl('22'),
    InformerType: new FormControl(0),
    NoticeCode: new FormControl(null),
    TitleCode: new FormControl('N/A'),
    TitleName: new FormControl('N/A'),
    FirstName: new FormControl('N/A'),
    LastName: new FormControl('N/A'),
    IDCard: new FormControl('N/A'),
    Age: new FormControl(null),
    GenderType: new FormControl('-'),
    Location: new FormControl('N/A'),
    Address: new FormControl(null),
    Village: new FormControl(null),
    Building: new FormControl(null),
    Floor: new FormControl(null),
    Room: new FormControl(null),
    Alley: new FormControl(null),
    Road: new FormControl(null),
    SubDistrictCode: new FormControl(null),
    SubDistrict: new FormControl(null),
    DistrictCode: new FormControl(null),
    District: new FormControl(null),
    ProvinceCode: new FormControl(null),
    Province: new FormControl(null),
    ZipCode: new FormControl('N/A'),
    TelephoneNo: new FormControl('N/A'),
    InformerInfo: new FormControl('N/A'),
    IsActive: new FormControl(1),
    FullName: new FormControl(null),
    Region: new FormControl(null)
}
