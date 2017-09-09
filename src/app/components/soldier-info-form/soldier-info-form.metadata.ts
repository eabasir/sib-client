import {Category} from "../../names/Const";
export interface SoldierInfo {
  key: string;
  value: any;
  category: Category,
  docs: string[],
  mandatory: boolean
}
