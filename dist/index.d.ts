import { Address, Config } from "./types";
declare class ThailandAddressCompact {
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
export default ThailandAddressCompact;
//# sourceMappingURL=index.d.ts.map