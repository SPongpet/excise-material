import { FormControl } from '@angular/forms';

export class ArrestProduct {
    public ProductID = '';
    public ProductType = '';
    public ArrestCode = '';
    public GroupCode = '';
    public IsDomestic = '';
    public ProductCode = '';
    public BrandCode = '';
    public BrandNameTH = '';
    public BrandNameEN = '';
    public SubBrandCode = '';
    public SubBrandNameTH = '';
    public SubBrandNameEN = '';
    public ModelCode = '';
    public ModelName = '';
    public FixNo1 = '';
    public DegreeCode = '';
    public Degree = '';
    public SizeCode = '';
    public Size = '';
    public SizeUnitCode = '';
    public SizeUnitName = '';
    public FixNo2 = '';
    public SequenceNo = '';
    public ProductDesc = '';
    public CarNo = '';
    public Qty = '';
    public QtyUnit = '';
    public NetVolume = '';
    public NetVolumeUnit = '';
    public IsActive = '';
    public IsNewItem: boolean;
    ProductFullName = '';
}

export class ArrestProductDetail {
    ProductID: number;
    IsProdcutCo: string;
    Qty: string;
    QtyUnit: string;
    Size: string;
    SizeUnit: string;
    Weight: string;
    WeightUnit: string;
    MistreatRate: string;
    Fine: string;
    IndictmentDetailID: string;
}

export const ArrestProductFormControl = {
    ProductID: new FormControl(null),
    ProductType: new FormControl(null),
    ArrestCode: new FormControl(null),
    GroupCode: new FormControl(null),
    IsDomestic: new FormControl(null),
    ProductCode: new FormControl(null),
    BrandCode: new FormControl(null),
    BrandNameTH: new FormControl(null),
    BrandNameEN: new FormControl(null),
    SubBrandCode: new FormControl(null),
    SubBrandNameTH: new FormControl(null),
    SubBrandNameEN: new FormControl(null),
    ModelCode: new FormControl(null),
    ModelName: new FormControl(null),
    FixNo1: new FormControl(null),
    DegreeCode: new FormControl(null),
    Degree: new FormControl(null),
    SizeCode: new FormControl(null),
    Size: new FormControl(null),
    SizeUnitCode: new FormControl(null),
    SizeUnitName: new FormControl(null),
    FixNo2: new FormControl(null),
    SequenceNo: new FormControl(null),
    ProductDesc: new FormControl(null),
    CarNo: new FormControl(null),
    Qty: new FormControl(null),
    QtyUnit: new FormControl(null),
    NetVolume: new FormControl(null),
    NetVolumeUnit: new FormControl(null),
    IsActive: new FormControl(false),
    ProductFullName: new FormControl(null)
}
