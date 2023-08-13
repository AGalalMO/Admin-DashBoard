import { type } from "os";

export interface ComplaintInterface {
  id: string | number;
  ComplaintNumber: number;
  ComplaintDepartment: string;
  ComplaintStatus: string;
  ComplaintDate: string;
  ComplaintTimeFrame: string;
  TaxpayerName: string;
  city?: string;
  area?: string;
  RIN?: number;
  incentiveRegistered?: boolean;
  taxPaterType?: string;
  compliantType?: string;
  customerName?: string;
  customerMobileNumber?: number;
  customerNID?: number;
}

export interface sideBarInterFace {
  title: string;
  icon: string;
}


export interface AdvancedFilterInterface{
  ComplaintNumber?: number;
  ComplaintDepartment?: string;
  ComplaintStatus?: string;
  ComplaintDate?: string;
  ComplaintTimeFrame?: string;
  TaxpayerName?: string;
  city?: string;
  area?: string;
  RIN?: number;
  incentiveRegistered?: boolean;
  taxPaterType?: string;
  compliantType?: string;
  customerName?: string;
  customerMobileNumber?: number;
  customerNID?: number;
}
type KeyType = keyof typeof ComplaintInterface;
