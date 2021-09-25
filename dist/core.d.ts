import { Address, Config } from "./types";
export default class ThailandAddressSimple {
    config: Config;
    address: Address[];
    constructor(config?: Config);
    init: () => Promise<void>;
    search: (input: string) => Address[];
    searchByDistrict: (input: string) => Address[];
    searchByAmphoe: (input: string) => Address[];
    searchByProvince: (input: string) => Address[];
    searchByZipCode: (input: string) => Address[];
}
//# sourceMappingURL=core.d.ts.map