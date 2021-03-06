import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { appConfig } from '../../app.config';
import { Arrest } from './arrest';
import { ArrestStaff } from './arrest-staff';
import { ArrestLawbreaker } from './arrest-lawbreaker';
import { ArrestProduct, ArrestProductDetail } from './arrest-product';
import { ArrestIndictment, ArrestIndicmentDetail } from './arrest-indictment';
// import { ProductModel } from '../../models/product.model';
import { Message } from '../../config/message';
import { ArrestLocale } from './arrest-locale';
// import { Observable } from 'rxjs/Observable';

// const options = { year: 'numeric', month: 'short', day: 'numeric' };

@Injectable()
export class ArrestsService {

    constructor(private http: HttpClient) { }

    // tslint:disable-next-line:member-ordering
    private httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json'
            })
    };

    private async responsePromisModify(params: string, url: string) {
        const res = await this.http.post<any>(url, params, this.httpOptions).toPromise();
        return res.IsSuccess ? true : false;
    }

    private async resposePromisGet(params: string, url: string) {
        const res = await this.http.post<any>(url, params, this.httpOptions).toPromise();
        if (res.IsSuccess === false) {
            return {};
        }
        if (!res.ResponseData) {
            return {}
        }
        return res.ResponseData
    }

    private async resposePromisGetList(params: string, url: string) {
        const res = await this.http.post<any>(url, params, this.httpOptions).toPromise();
        if (res.IsSuccess === false) {
            return [];
        }
        if (!res.ResponseData.length) {
            return []
        }
        return res.ResponseData
    }

    async getByKeywordOnInit(): Promise<any[]> {
        const params = { 'Textsearch': '' };
        const url = `${appConfig.api7788}/ArrestgetByKeyword`;
        const res = await this.http.post<any>(url, JSON.stringify(params), this.httpOptions).toPromise();
        if (res.IsSuccess) {
            return res.ResponseData
        }
    }

    getByKeyword(Textsearch: string): Promise<Arrest[]> {
        const params = Textsearch === '' ? { 'Textsearch': '' } : Textsearch;
        const url = `${appConfig.api7788}/ArrestgetByKeyword`;
        return this.resposePromisGetList(JSON.stringify(params), url)
    }

    getByConAdv(form: any): Promise<Arrest[]> {
        const params = form;
        const url = `${appConfig.api7788}/ArrestgetByConAdv`;
        return this.resposePromisGetList(JSON.stringify(params), url)
    }

    getByCon(ArrestCode: string): Promise<Arrest> {
        const params = { ArrestCode };
        const url = `${appConfig.api7788}/ArrestgetByCon`;
        return this.resposePromisGet(JSON.stringify(params), url)
    }

    updDelete(ArrestCode: string): Promise<any> {
        const params = { ArrestCode };
        const url = `${appConfig.api7788}/ArrestupdDelete`;
        return this.resposePromisGet(JSON.stringify(params), url)
    }

    staffupdDelete(StaffID: string): Promise<any> {
        const params = { StaffID };
        const url = `${appConfig.api7788}/ArrestStaffupdDelete`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    lawbreakerupdDelete(LawbreakerID: string): Promise<any> {
        const params = { LawbreakerID };
        const url = `${appConfig.api7788}/ArrestLawbreakerupdDelete`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    productupdDelete(ProductID: string): Promise<any> {
        const params = { ProductID };
        const url = `${appConfig.api7788}/ArrestProductupdDelete`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    indicmentupdDelete(IndicmentID: string): Promise<any> {
        const params = { IndicmentID };
        const url = `${appConfig.api7788}/ArrestIndicmentupdDelete`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    insAll(Arrest: Arrest): Promise<boolean> {
        const params = Arrest;
        const url = `${appConfig.api7788}/ArrestinsAll`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    staffinsAll(ArrestStaff: ArrestStaff): Promise<boolean> {
        const params = ArrestStaff;
        const url = `${appConfig.api7788}/ArrestStaffinsAll`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    localeinsAll(ArrestLocale: ArrestLocale): Promise<boolean> {
        const params = ArrestLocale;
        const url = `${appConfig.api7788}/ArrestLocaleinsAll`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    lawbreakerinsAll(lawbreaker: ArrestLawbreaker): Promise<boolean> {
        const params = lawbreaker;
        const url = `${appConfig.api7788}/ArrestLawbreakerinsAll`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    productinsAll(product: ArrestProduct): Promise<boolean> {
        const params = product;
        const url = `${appConfig.api7788}/ArrestProductinsAll`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    productDetailInsAll(productDetail: ArrestProductDetail): Promise<boolean> {
        const params = productDetail;
        const url = `${appConfig.api7788}/ArrestProductDetailinsAll`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    indicmentinsAll(indicment: ArrestIndictment): Promise<boolean> {
        const params = indicment;
        const url = `${appConfig.api7788}/ArrestIndicmentinsAll`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    indicmentgetByCon(IndicmentID: string): Promise<ArrestIndictment[]> {
        const params = {IndicmentID};
        const url = `${appConfig.api7788}/ArrestIndicmentgetByCon`;
        return this.resposePromisGetList(JSON.stringify(params), url)
    }

    indicmentDetailinsAll(indictment: ArrestIndicmentDetail): Promise<boolean> {
        const params = indictment;
        const url = `${appConfig.api7788}/ArrestIndicmentDetailinsAll`
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    indicmentDetailgetByCon(IndicmentDetailID: string): Promise<ArrestIndicmentDetail> {
        const params = { IndicmentDetailID };
        const url = `${appConfig.api7788}/ArrestIndicmentDetailgetByCon`
        return this.resposePromisGet(JSON.stringify(params), url)
    }

    updByCon(Arrest: Arrest): Promise<any> {
        const params = Arrest;
        const url = `${appConfig.api7788}/ArrestupdByCon`;
        return this.responsePromisModify(JSON.stringify(params), url);
    }

    localeupdByCon(Locale: ArrestLocale): Promise<any> {
        const params = Locale;
        const url = `${appConfig.api7788}/ArrestLocaleupdByCon`;
        return this.responsePromisModify(JSON.stringify(params), url)
    }

    //-- Arrest Notice --//
    noticegetByConAdv(form: any): Promise<any[]> {
        const url = `${appConfig.api7788}/ArrestNoticegetByConAdv`;
        return this.resposePromisGetList(JSON.stringify(form), url);
    }

    noticegetByKeyword(Textsearch: any): Promise<any[]> {
        const url = `${appConfig.api7788}/ArrestNoticegetByKeyword`;
        return this.resposePromisGetList(Textsearch, url);
    }
    //-- Arrest Notice --//

    //-- Mas --//
    masLawbreakergetByConAdv(Textsearch: any): Promise<any[]> {
        const url = `${appConfig.api7788}/ArrestMasLawbreakergetByKeyword`;
        return this.resposePromisGetList(Textsearch, url);
    }

    masLawbreakergetByKeyword(Textsearch: any): Promise<any[]> {
        const url = `${appConfig.api7788}/ArrestMasLawbreakergetByKeyword`;
        return this.resposePromisGetList(Textsearch, url);
    }

    masLawGroupSectiongetByKeyword(Textsearch: any): Promise<any[]> {
        const url = `${appConfig.api7788}/ArrestMasLawGroupSectiongetByKeyword`;
        return this.resposePromisGetList(Textsearch, url);
    }

    masOfficegetAll(): Promise<any[]> {
        const url = `${appConfig.api7788}/ArrestgetMasOfficegetAll`;
        return this.resposePromisGetList('{}', url);
    }

    masStaffgetAll(): Promise<any[]> {
        const url = `${appConfig.api7788}/ArrestgetMasStaffgetAll`;
        return this.resposePromisGetList('{}', url);
    }

    masSubdistrictgetAll(): Promise<any[]> {
        const url = `${appConfig.api7788}/ArrestgetMasSubdistricgetAll`;
        return this.resposePromisGetList('{}', url);
    }

    masDistrictgetAll(): Promise<any[]> {
        const url = `${appConfig.api7788}/ArrestgetMasDistricgetAll`;
        return this.resposePromisGetList('{}', url);
    }

    masProvincegetAll(): Promise<any[]> {
        const url = `${appConfig.api7788}/ArrestgetMasProvincegetAll`;
        return this.resposePromisGetList('{}', url);
    }

    masProductgetAll(): Promise<any[]> {
        const url = `${appConfig.api7788}/ArrestgetMasProductgetAll`;
        return this.resposePromisGetList('{}', url);
    }
    //-- Mas --//

}
