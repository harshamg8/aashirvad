import { Dimensions } from "react-native"

const width = Dimensions.get('screen').width

export const ImageNames = {
    PLUSCIRCLE: 'PLUSCIRCLE',
    SHARE: 'SHARE',
    CLOSE: 'CLOSE',
    PLUS: 'PLUS',
    EDIT: 'EDIT',
    ACTIVITY: 'ACTIVITY',
    MATERIAL: 'MATERIAL',
    LABOR: 'LABOR',
    UPARROW: 'UPARROW',
    DOWNARROW: 'DOWNARROW',
    SAVED: 'SAVED',
    SENT: 'SENT',
    DRAFT: 'DRAFT'


}

export const widthToReturn = (toBeSubtracted: number,toBeMultiplied:number) => {
    return (width - toBeSubtracted) * toBeMultiplied
}

export const returnWidth = (view: string,kind:string) => {
    let width = 0
    switch (kind) {
        case Titles.Activities:
            switch (view) {
                case 'View1':
                    width = widthToReturn(2, 0.6)
                    break;
                case 'View2':
                    width = widthToReturn(2, 0.3)
                    break;

                default:
                    break;
            }
            break;
        case Titles.Labor:
            switch (view) {
                case 'View1':
                    width = widthToReturn(5, 0.4)
                    break;
                case 'View2':
                    width = widthToReturn(5, 0.12)
                    break;
                case 'View3':
                    width = widthToReturn(5, 0.2)
                    break;
                case 'View4':
                    width = widthToReturn(5, 0.2)
                    break;

                default:
                    break;
            }
            break;
        case Titles.Material:
            switch (view) {
                case 'View1':
                    width = widthToReturn(3, 0.4)
                    break;
                case 'View2':
                    width = widthToReturn(3, 0.2)
                    break;
                case 'View3':
                    width = widthToReturn(3, 0.3)
                    break;

                default:
                    break;
            }
            break;
        case 'Basic':
            switch (view) {
                case 'View1':
                    width = widthToReturn(5, 0.4)
                    break;
                case 'View2':
                    width = widthToReturn(5, 0.1)
                    break;
                case 'View3':
                    width = widthToReturn(5, 0.2)
                    break;
                case 'View4':
                    width = widthToReturn(5, 0.2)
                    break;

                default:
                    break;
            }
            break;

        default:
            break;
    }
    return width
}


export const ButtonTitles = {
    CreateQuotation: 'Create Quotation',
    ShareWithCustomer: 'SHARE WITH CUSTOMER',
    ViewPastQuotation: 'View Past Quotations',
    PreviewQuotation: 'Preview Quotation',
    SaveAsTemplate: 'Save As Template',
    AddRoom: 'Add Room',
    AddArea: 'Add Area',
    AddLabor: 'Add Labor'
}

export const NavigationNames = {
    Quotation: 'Quotation',
    QuotationDetails: 'QuotationDetails',
    PreviewQuotation: 'PreviewQuotation',
    PreviewQuotationAdvanced: 'PreviewQuotationAdvanced',
    AreaDetails: 'AreaDetails',
    Activities: 'Activities',
    Materials: 'Materials',
    Labor: 'Labor',
    BasicDetails: 'BasicDetails'
}

export const ScreenNames = {
    Quotation: 'Quotation',
    QuotationDetails: 'Quotation Details',
    PreviewQuotation: 'Preview Quotation',
    AreaDetails: 'Area Details',
    Activities: 'Activities',
    Materials: 'Materials',
    Labor: 'Labor',
    BasicDetails: 'Basic Details'

}

export const PlaceHolders = {
    TypeToAddActivities: 'Type to add activities',
    TypeToAddMaterials: 'Type to add materials',
    Labor: 'Labor'
}

export const Titles = {
    CustomerName: 'Customer Name',
    PhoneNo: 'Phone No.',
    Areas: 'Areas',
    Type: 'TYPE',
    Qty: 'QTY',
    Rate: 'RATE',
    Cost: 'COST',
    TotalActivityCost: 'Total activity cost',
    DiscountWithMinus: 'Discount(-)',
    Discount: 'Discount',
    TotalQuotationValue: 'Total quotation value',
    No: 'No.',
    Date: 'Date',
    From: 'From',
    To: 'To',
    Total: 'Total',
    ThankYou: 'Thank you!',
    Saved: 'Saved',
    Draft: 'Draft',
    Sent: 'Sent',
    QuotationLibrary: 'Quotation Library',
    BasicDetails: 'Basic Details',
    SubTotal: 'Sub-total',
    SaveAsTemplate: 'Save As Template',
    Cancel: 'Cancel',
    Save: 'Save',
    CustomerType: 'Customer Type',
    CustomerAddress: 'Customer Address',
    FromDate: 'From Date',
    ToDate: 'To Date',
    AddArea: 'Add Area',
    Preview: 'Preview',
    Copy: 'Copy',
    Delete: 'Delete',
    Size: 'Size',
    Activities: 'Activities',
    Labor: 'Labor',
    Material: 'Material',
    TypeToAddActivities: 'Type to add activities',
    AddedItems: 'Added items',
    RecommendedActivities: 'Recommended Activities',
    ForDays: 'FOR DAYS',
    Addlabor: 'Add Labor',
    AreaDetails: 'Area Details',
    Materials: 'Materials',
    TypeToAddMaterial: 'type to add material',
    ExploreMaterials: 'Explore Materials',
    TapEditToAdd: '- Tap edit to add items',
    EstimatedCost: 'Estimated Cost',




}