export interface IUser {
  id:number;
    FullName: string;
    Email: string;
    Mobile: string[];
    Address: {
      City:string;
      Street: string;
      PostalCode: string;
    };
    Password: string;
    DeliveryOptions:string;
    SpecificDays?:string;
}
