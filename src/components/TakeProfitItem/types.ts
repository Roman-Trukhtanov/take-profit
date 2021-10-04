import {TakeProfitItemData} from "../../stores/takeProfitStore";

export interface ITakeProfitItem {
    data: TakeProfitItemData;
    onDelete: (itemData: TakeProfitItemData) => void;
}
