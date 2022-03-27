import URLS from "../../../configs/api-end-points";
import apiServices from "../data/api_service";

const getDeviceList = async () => {
    const url = URLS.DEVICES_LIST;
    const result = await apiServices.post(url, {});
    return result;

};

export { getDeviceList }